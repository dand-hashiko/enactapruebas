#!/usr/bin/env python3
"""
Trello Board Setup Script — Enacta Operaciones
==============================================
Crea automáticamente el tablero Kanban de Enacta con sus listas,
tarjetas, etiquetas, descripciones y responsables usando la API REST de Trello.

Requisitos:
- Python 3.8+ (Utiliza únicamente la librería estándar: cero dependencias externas)
- Variables de entorno o ingreso interactivo:
    TRELLO_API_KEY
    TRELLO_TOKEN
    TRELLO_BOARD_ID (Opcional: Si se omite, crea un tablero nuevo 'Enacta Operaciones')
"""

import os
import sys
import json
import urllib.request
import urllib.parse
import urllib.error
from datetime import datetime, timedelta

BASE_URL = "https://api.trello.com/1"


def api_request(endpoint: str, method: str = "GET", params: dict = None, data: dict = None) -> dict:
    """Envía peticiones a la API de Trello usando urllib nativo de Python."""
    params = params or {}
    query_string = urllib.parse.urlencode(params)
    url = f"{BASE_URL}/{endpoint}"
    if query_string:
        url += f"?{query_string}"

    req_data = None
    headers = {"Accept": "application/json"}

    if data is not None:
        req_data = urllib.parse.urlencode(data).encode("utf-8")
        headers["Content-Type"] = "application/x-www-form-urlencoded"

    req = urllib.request.Request(url, data=req_data, headers=headers, method=method)

    try:
        with urllib.request.urlopen(req) as response:
            res_body = response.read().decode("utf-8")
            return json.loads(res_body)
    except urllib.error.HTTPError as e:
        error_msg = e.read().decode("utf-8")
        print(f"\n❌ Error HTTP {e.code} en {method} {url}: {error_msg}")
        raise
    except Exception as e:
        print(f"\n❌ Error de red inesperado: {e}")
        raise


def get_next_monday_iso() -> str:
    """Calcula la fecha del próximo lunes a las 18:00 UTC."""
    today = datetime.now()
    days_ahead = (0 - today.weekday()) % 7  # 0 es lunes
    if days_ahead == 0:
        days_ahead = 7
    next_monday = today + timedelta(days=days_ahead)
    return next_monday.strftime("%Y-%m-%dT18:00:00.000Z")


def get_next_sunday_iso() -> str:
    """Calcula la fecha del próximo domingo a las 23:59 UTC."""
    today = datetime.now()
    days_ahead = (6 - today.weekday()) % 7
    if days_ahead == 0:
        days_ahead = 7
    next_sunday = today + timedelta(days=days_ahead)
    return next_sunday.strftime("%Y-%m-%dT23:59:00.000Z")


def main():
    print("=" * 65)
    print("🚀 ENACTA — CONFIGURADOR AUTOMÁTICO DE TABLERO TRELLO")
    print("=" * 65)

    # 1. Obtener credenciales
    api_key = os.environ.get("TRELLO_API_KEY", "").strip()
    token = os.environ.get("TRELLO_TOKEN", "").strip()
    board_id = os.environ.get("TRELLO_BOARD_ID", "").strip()

    if not api_key:
        api_key = input("🔑 Ingresa tu Trello API Key: ").strip()
    if not token:
        token = input("🔒 Ingresa tu Trello Token: ").strip()

    if not api_key or not token:
        print("\n❌ Error: Debes ingresar tanto la API Key como el Token.")
        sys.exit(1)

    auth_params = {"key": api_key, "token": token}

    # 2. Verificar credenciales con /members/me
    print("\n🔍 Verificando credenciales...")
    try:
        me = api_request("members/me", params=auth_params)
        print(f"✅ Conectado exitosamente como: {me.get('fullName', 'Usuario')} (@{me.get('username')})")
    except Exception:
        print("\n❌ Credenciales inválidas. Verifica tu API Key y Token.")
        sys.exit(1)

    # 3. Obtener o crear el tablero
    board_url = ""
    if board_id:
        print(f"\n📂 Usando tablero existente con ID: {board_id}...")
        board = api_request(f"boards/{board_id}", params=auth_params)
        board_name = board.get("name")
        board_url = board.get("shortUrl")
    else:
        board_name = "Enacta Operaciones"
        print(f"\n📦 Creando tablero nuevo: '{board_name}'...")
        board = api_request(
            "boards/",
            method="POST",
            params={
                **auth_params,
                "name": board_name,
                "defaultLists": "false",  # No crear listas por defecto (To Do, Doing, Done)
                "prefs_permissionLevel": "private",
                "prefs_background": "blue",
            },
        )
        board_id = board["id"]
        board_url = board["shortUrl"]
        print(f"✅ Tablero creado con ID: {board_id}")

    # 4. Configurar Etiquetas (Labels) por área
    print("\n🏷️  Configurando etiquetas temáticas...")
    label_definitions = [
        {"name": "💰 Finanzas & Cobranza", "color": "green"},
        {"name": "💻 Desarrollo & Software", "color": "blue"},
        {"name": "🤝 Comercial & Clientes", "color": "orange"},
        {"name": "🥽 Innovación VR", "color": "purple"},
        {"name": "⚙️ Operaciones & Terreno", "color": "black"},
    ]

    # Obtener etiquetas existentes
    existing_labels = api_request(f"boards/{board_id}/labels", params=auth_params)
    labels_map = {}

    for l_def in label_definitions:
        found = next((l for l in existing_labels if l.get("name") == l_def["name"]), None)
        if found:
            labels_map[l_def["name"]] = found["id"]
        else:
            new_label = api_request(
                f"boards/{board_id}/labels",
                method="POST",
                params={
                    **auth_params,
                    "name": l_def["name"],
                    "color": l_def["color"],
                },
            )
            labels_map[l_def["name"]] = new_label["id"]
    print("✅ Etiquetas listas.")

    # 5. Definir la estructura de Listas y Tarjetas recomendada por NotebookLM
    next_monday = get_next_monday_iso()
    next_sunday = get_next_sunday_iso()

    columns_data = [
        {
            "name": "💡 Brainstorming Ideas VR (Cierre: Lunes)",
            "cards": [
                {
                    "name": "[Investigación VR] Enfoque Financiero y Nichos",
                    "desc": "👤 **Asignado:** Matías\n\n📌 **Objetivo:**\nInvestigar al menos 3 ideas de VR con foco en rentabilidad, videojuegos/terror chileno, fondos universitarios y modelo de negocio.\n\n📅 **Cierre:** Próximo Lunes.",
                    "labels": [labels_map["🥽 Innovación VR"], labels_map["🤝 Comercial & Clientes"]],
                    "due": next_monday,
                },
                {
                    "name": "[Investigación VR] Factibilidad Técnica y Modelos 3D",
                    "desc": "👤 **Asignado:** Daniel\n\n📌 **Objetivo:**\nValidar disponibilidad de APIs, assets 3D, arquitectura de software y esfuerzo técnico de las propuestas planteadas.\n\n📅 **Cierre:** Próximo Lunes.",
                    "labels": [labels_map["🥽 Innovación VR"], labels_map["💻 Desarrollo & Software"]],
                    "due": next_monday,
                },
                {
                    "name": "[Investigación VR] Contenidos y Casos de Uso Educativos",
                    "desc": "👤 **Asignada:** Paola\n\n📌 **Objetivo:**\nProponer ideas viables aplicables a educación básica (6°-8° básico), anatomía o historia con viabilidad práctica en colegios e instituciones.\n\n📅 **Cierre:** Próximo Lunes.",
                    "labels": [labels_map["🥽 Innovación VR"], labels_map["🤝 Comercial & Clientes"]],
                    "due": next_monday,
                },
            ],
        },
        {
            "name": "📋 Por Hacer General",
            "cards": [
                {
                    "name": "Coordinar reunión con Eduardo",
                    "desc": "👤 **Asignado:** Matías\n\n📌 **Prioridad:** Alta\nHablar con Eduardo para confirmar día y hora de la reunión de presentación de ideas y propuestas.",
                    "labels": [labels_map["🤝 Comercial & Clientes"]],
                },
                {
                    "name": "Armar Google Drive compartido con estructura por proyecto",
                    "desc": "👤 **Asignado:** Daniel\n\n📌 **Objetivo:**\nGenerar Drive con carpetas individuales por proyecto (FM, Mecánica Móvil) donde se integren contratos y desarrollo técnico, más carpeta interna Enacta.",
                    "labels": [labels_map["⚙️ Operaciones & Terreno"], labels_map["💻 Desarrollo & Software"]],
                },
                {
                    "name": "Redactar y enviar manual documentado de F&M",
                    "desc": "👤 **Asignado:** Daniel\n\n📌 **Objetivo:**\nRedactar manual con capturas de pantalla del software ERP/sistema y subirlo a recursos de Trello.\n\n📅 **Fecha límite:** Domingo.",
                    "labels": [labels_map["💻 Desarrollo & Software"]],
                    "due": next_sunday,
                },
                {
                    "name": "Estudio de manual F&M para prospección comercial",
                    "desc": "👤 **Asignado:** Matías\n\n📌 **Objetivo:**\nEstudiar el manual preparado por Daniel para dominar las funciones del ERP/sistema hacia el jueves para ventas.",
                    "labels": [labels_map["🤝 Comercial & Clientes"]],
                },
                {
                    "name": "Maquetación previa de sitio web para clienta de marzo",
                    "desc": "👤 **Asignada:** Paola\n\n📌 **Objetivo:**\nDejar lista la estructura tipo Mecánica Móvil para agilizar entrega cuando la clienta regrese de viaje.",
                    "labels": [labels_map["💻 Desarrollo & Software"]],
                },
                {
                    "name": "Preparación de tarjetas y guion de prospección en 2 pasos",
                    "desc": "👤 **Asignados:** Paola / Daniel\n\n📌 **Objetivo:**\nDiseñar dinámica de 2 pasos: primero preguntar si tienen catálogo/web y luego presentarse con tarjeta Enacta (foco repuestos/Feria Pinto).",
                    "labels": [labels_map["🤝 Comercial & Clientes"]],
                },
            ],
        },
        {
            "name": "💰 Por Cobrar & Clientes",
            "cards": [
                {
                    "name": "Cobro Banco de Datos Clientes - $38.000",
                    "desc": "💰 **Monto:** $38.000 CLP\n📌 **Acción:** Emisión de boleta y seguimiento de pago.",
                    "labels": [labels_map["💰 Finanzas & Cobranza"]],
                },
                {
                    "name": "Cobro Marcha Blanca - $250.000",
                    "desc": "💰 **Monto:** $250.000 CLP\n📌 **Acción:** Seguimiento de cobro de hito de marcha blanca completado.",
                    "labels": [labels_map["💰 Finanzas & Cobranza"]],
                },
                {
                    "name": "Formalización de Contrato y Cobro Mecánica Móvil ($82k-$83k SEO + $30k mensual)",
                    "desc": "👤 **Asignados:** Matías / Paola\n\n💰 **Montos:**\n- Regularización deuda: $82.000 - $83.000 CLP (por SEO)\n- Cuota mensual: $30.000 CLP\n\n📌 **Acción:** Redactar contrato formal para respaldo legal y seguimiento de pago.",
                    "labels": [labels_map["💰 Finanzas & Cobranza"], labels_map["🤝 Comercial & Clientes"]],
                },
            ],
        },
        {
            "name": "⚙️ En Proceso",
            "cards": [],
        },
        {
            "name": "✅ Hecho",
            "cards": [],
        },
    ]

    # 6. Crear listas y tarjetas
    print("\n📋 Creando columnas y tarjetas en Trello...")
    for list_pos, col in enumerate(columns_data, start=1):
        list_name = col["name"]
        print(f"\n📂 Lista [{list_pos}/5]: '{list_name}'")

        # Crear lista
        created_list = api_request(
            f"boards/{board_id}/lists",
            method="POST",
            params={
                **auth_params,
                "name": list_name,
                "pos": list_pos * 1000,
            },
        )
        list_id = created_list["id"]

        # Crear tarjetas de esta lista
        for card_data in col["cards"]:
            card_params = {
                **auth_params,
                "idList": list_id,
                "name": card_data["name"],
                "desc": card_data["desc"],
            }
            if "due" in card_data and card_data["due"]:
                card_params["due"] = card_data["due"]
            if "labels" in card_data and card_data["labels"]:
                card_params["idLabels"] = ",".join(card_data["labels"])

            created_card = api_request("cards", method="POST", params=card_params)
            print(f"  └─ 🗂️  Tarjeta: {created_card['name']}")

    print("\n" + "=" * 65)
    print("🎉 ¡TABLERO CONFIGURADO CON ÉXITO EN TRELLO!")
    print(f"🔗 Puedes abrir tu tablero aquí: {board_url}")
    print("=" * 65)


if __name__ == "__main__":
    main()
