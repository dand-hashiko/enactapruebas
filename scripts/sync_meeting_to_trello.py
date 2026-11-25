#!/usr/bin/env python3
"""
Sync Meeting Notes (Gemini / Google Meet) to Trello — Enacta Operaciones
=======================================================================
Convierte automáticamente las minutas "Notas de Gemini" (archivos .md locales
o exportados desde Google Drive) en tarjetas organizadas en Trello.

Características:
- Idempotente: Verifica tarjetas existentes en el tablero para evitar duplicados.
- Detección automática de responsables, etiquetas por área y fechas límite.
- Soporta modo local (--file) y modo automático desde Google Drive (--from-gdrive).
"""

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta

BASE_URL = "https://api.trello.com/1"
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ENV_LOCAL_PATH = os.path.join(PROJECT_ROOT, ".env.local")


def load_env_local() -> dict[str, str]:
    """Carga variables desde .env.local si existen."""
    env_vars = dict(os.environ)
    if os.path.exists(ENV_LOCAL_PATH):
        with open(ENV_LOCAL_PATH, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    env_vars.setdefault(k.strip(), v.strip())
    return env_vars


def trello_request(
    endpoint: str,
    auth: dict[str, str],
    method: str = "GET",
    params: dict[str, str] | None = None,
) -> dict | list:
    """Ejecuta una petición HTTP a la API REST de Trello."""
    all_params = {**auth, **(params or {})}
    query = urllib.parse.urlencode(all_params)
    url = f"{BASE_URL}/{endpoint}?{query}"

    req = urllib.request.Request(
        url,
        data=b"" if method in ("POST", "PUT") else None,
        headers={"Accept": "application/json"},
        method=method,
    )
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        err_body = e.read().decode("utf-8")
        raise RuntimeError(f"Trello HTTP {e.code} en {endpoint}: {err_body}") from e


def infer_due_date(text: str, base_date: datetime) -> str | None:
    """Infiere fecha límite ISO a partir de expresiones en español."""
    lower = text.lower()
    if "hoy" in lower:
        target = base_date
    elif "mañana" in lower:
        target = base_date + timedelta(days=1)
    elif "lunes" in lower:
        days = (0 - base_date.weekday()) % 7 or 7
        target = base_date + timedelta(days=days)
    elif "viernes" in lower or "finalizar la semana" in lower:
        days = (4 - base_date.weekday()) % 7
        if days == 0 and "próximo" in lower:
            days = 7
        target = base_date + timedelta(days=days)
    elif "domingo" in lower:
        days = (6 - base_date.weekday()) % 7 or 7
        target = base_date + timedelta(days=days)
    else:
        return None
    return target.strftime("%Y-%m-%dT21:00:00.000Z")


def infer_label_names(text: str) -> list[str]:
    """Asigna etiquetas temáticas de Enacta según palabras clave."""
    lower = text.lower()
    labels: list[str] = []

    if any(k in lower for k in ["pago", "cobro", "transferencia", "tarjeta", "contrato", "acta", "financ"]):
        labels.append("💰 Finanzas & Cobranza")
    if any(k in lower for k in ["venta", "cliente", "red", "social", "marketing", "contactar", "reunión", "misión"]):
        labels.append("🤝 Comercial & Clientes")
    if any(k in lower for k in ["página", "web", "maquetación", "software", "erp", "trello", "sistema", "viajes"]):
        labels.append("💻 Desarrollo & Software")
    if any(k in lower for k in ["vr", "3d"]):
        labels.append("🥽 Innovación VR")

    if not labels:
        labels.append("⚙️ Operaciones & Terreno")
    return labels


def normalize_assignee(raw: str) -> str:
    """Normaliza nombres largos a nombres cortos del equipo."""
    mapping = {
        "Daniel Díaz": "Daniel",
        "Matías Nicolás Parra Bórquez": "Matías",
        "Paola Huenuman": "Paola",
        "El grupo": "Equipo",
    }
    parts = [p.strip() for p in raw.split(",")]
    short_parts = [mapping.get(p, p) for p in parts]
    return " / ".join(short_parts)


def parse_gemini_notes(md_content: str) -> dict:
    """Extrae metadatos, resumen, decisiones y tareas de un archivo Notas de Gemini."""
    # Fecha de reunión
    meeting_title = "Reunión Enacta"
    title_match = re.search(r"##\s+\*\*(.+?)\*\*", md_content)
    if title_match:
        meeting_title = title_match.group(1).strip()

    # Fecha base para due dates
    base_date = datetime.now()
    date_match = re.search(r"(\d{1,2})\s+([a-z]{3})\s+(\d{4})", meeting_title.lower())
    months_es = {
        "ene": 1, "feb": 2, "mar": 3, "abr": 4, "may": 5, "jun": 6,
        "jul": 7, "ago": 8, "sep": 9, "oct": 10, "nov": 11, "dic": 12,
    }
    if date_match:
        day, mon_str, year = int(date_match.group(1)), date_match.group(2), int(date_match.group(3))
        if mon_str in months_es:
            base_date = datetime(year, months_es[mon_str], day)

    # Link a transcripción / grabación
    transcript_url = ""
    link_match = re.search(r"\[Transcripción\]\((https?://[^\)]+)\)", md_content)
    if link_match:
        transcript_url = link_match.group(1).strip()

    # Resumen
    resumen = ""
    res_match = re.search(r"###\s+\*\*Resumen\*\*\s+(.*?)(?=\n###|\Z)", md_content, re.S)
    if res_match:
        resumen = res_match.group(1).strip()

    # Tareas en Próximos pasos: - [ ] \[Responsable\] Título: Descripción
    tasks: list[dict] = []
    # Soporta tanto \[...\] como [...] sin escapar
    task_pattern = re.compile(
        r"^- \[[ xX]\]\s+\\?\[([^\]]+?)\\?\]\s+([^:]+):\s*(.+)$",
        re.MULTILINE,
    )
    for match in task_pattern.finditer(md_content):
        raw_assignee = match.group(1).strip()
        short_title = match.group(2).strip()
        detail = match.group(3).strip()

        assignee = normalize_assignee(raw_assignee)
        card_name = f"[{assignee}] {short_title}"
        due_iso = infer_due_date(detail, base_date)
        label_names = infer_label_names(f"{short_title} {detail}")

        desc_lines = [
            f"👤 **Responsable:** {raw_assignee}",
            f"🗓️ **Origen:** {meeting_title}",
            "",
            "📌 **Detalle acordado:**",
            detail,
        ]
        if transcript_url:
            desc_lines.extend(["", f"🔗 **Transcripción / Grabación:** {transcript_url}"])

        tasks.append(
            {
                "name": card_name,
                "desc": "\n".join(desc_lines),
                "due": due_iso,
                "label_names": label_names,
            }
        )

    return {
        "meeting_title": meeting_title,
        "transcript_url": transcript_url,
        "resumen": resumen,
        "tasks": tasks,
    }


def sync_to_trello(parsed: dict, auth: dict[str, str], board_id: str, dry_run: bool = False) -> dict:
    """Crea tarjetas en Trello evitando duplicados."""
    lists = trello_request(f"boards/{board_id}/lists", auth)
    labels = trello_request(f"boards/{board_id}/labels", auth)
    existing_cards = trello_request(f"boards/{board_id}/cards", auth)

    # Buscar lista '📋 Por Hacer General' (fallback a primera lista)
    target_list = next(
        (l for l in lists if "Por Hacer" in l["name"]),
        lists[0] if lists else None,
    )
    if not target_list:
        raise RuntimeError("No se encontraron listas en el tablero de Trello.")

    label_map = {l["name"]: l["id"] for l in labels if l.get("name")}
    existing_names = {c["name"].strip().lower() for c in existing_cards}

    created = []
    skipped = []

    for task in parsed["tasks"]:
        if task["name"].strip().lower() in existing_names:
            skipped.append(task["name"])
            continue

        label_ids = [label_map[n] for n in task["label_names"] if n in label_map]
        if dry_run:
            print(f"  [DRY-RUN] Crearía: {task['name']} (Labels: {task['label_names']}, Due: {task['due']})")
            created.append(task["name"])
            continue

        params = {
            "idList": target_list["id"],
            "name": task["name"],
            "desc": task["desc"],
        }
        if task["due"]:
            params["due"] = task["due"]
        if label_ids:
            params["idLabels"] = ",".join(label_ids)

        new_card = trello_request("cards", auth, method="POST", params=params)
        existing_names.add(task["name"].strip().lower())
        created.append(new_card["name"])
        print(f"  ✅ Creada: {new_card['name']}")

    return {"created": created, "skipped": skipped, "list_name": target_list["name"]}


def fetch_latest_notes_from_gdrive() -> list[str]:
    """Busca y exporta las últimas 'Notas de Gemini' desde Google Drive usando gdrive CLI."""
    gdrive_bin = shutil.which("gdrive")
    if not gdrive_bin:
        raise RuntimeError("CLI 'gdrive' no encontrado en PATH.")

    res = subprocess.run(
        [gdrive_bin, "readonly", "search", "--name-contains", "Notas de Gemini", "--json"],
        capture_output=True,
        text=True,
        encoding="utf-8",
        shell=True,
    )
    if res.returncode != 0:
        raise RuntimeError(f"Error buscando en Google Drive: {res.stderr}")

    items = json.loads(res.stdout or "[]")
    exported_files: list[str] = []
    tmp_dir = tempfile.mkdtemp(prefix="enacta_meet_")

    for item in items[:5]:  # Últimas 5 minutas
        if item.get("mimeType") != "application/vnd.google-apps.document":
            continue
        file_id = item["id"]
        safe_name = re.sub(r"[^\w\s-]", "_", item["name"]) + ".md"
        out_path = os.path.join(tmp_dir, safe_name)
        exp = subprocess.run(
            [gdrive_bin, "readonly", "export", file_id, "--format", "markdown", "--out", out_path],
            capture_output=True,
            text=True,
            encoding="utf-8",
            shell=True,
        )
        if exp.returncode == 0 and os.path.exists(out_path):
            exported_files.append(out_path)

    return exported_files


def main():
    parser = argparse.ArgumentParser(description="Sincroniza Notas de Gemini / Meet hacia Trello.")
    parser.add_argument("--file", help="Ruta al archivo .md de Notas de Gemini.")
    parser.add_argument("--from-gdrive", action="store_true", help="Buscar automáticamente en Google Drive.")
    parser.add_argument("--dry-run", action="store_true", help="Simular sin crear tarjetas.")
    args = parser.parse_args()

    env = load_env_local()
    api_key = env.get("TRELLO_API_KEY", "").strip()
    token = env.get("TRELLO_TOKEN", "").strip()
    board_id = env.get("TRELLO_BOARD_ID", "").strip()

    if not api_key or not token or not board_id:
        print("❌ Faltan TRELLO_API_KEY, TRELLO_TOKEN o TRELLO_BOARD_ID en .env.local")
        sys.exit(1)

    auth = {"key": api_key, "token": token}
    files_to_process: list[str] = []

    if args.file:
        files_to_process.append(args.file)
    elif args.from_gdrive:
        print("🔍 Buscando minutas recientes ('Notas de Gemini') en Google Drive...")
        files_to_process = fetch_latest_notes_from_gdrive()
    else:
        print("❌ Debes indicar --file <ruta.md> o --from-gdrive")
        sys.exit(1)

    if not files_to_process:
        print("ℹ️ No se encontraron archivos de minutas para procesar.")
        return

    for fpath in files_to_process:
        print(f"\n📄 Procesando: {os.path.basename(fpath)}")
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        parsed = parse_gemini_notes(content)
        print(f"   🗓️  {parsed['meeting_title']} — {len(parsed['tasks'])} tareas detectadas")
        result = sync_to_trello(parsed, auth, board_id, dry_run=args.dry_run)
        print(
            f"   📊 Resultado en '{result['list_name']}': "
            f"{len(result['created'])} creadas, {len(result['skipped'])} ya existían."
        )


if __name__ == "__main__":
    main()
