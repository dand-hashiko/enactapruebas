/**
 * Google Apps Script — Sincronización Automática Google Meet (Notas de Gemini) -> Trello
 * ====================================================================================
 * Corre 100% gratis en la nube de Google (24/7, sin depender de tu PC).
 *
 * INSTRUCCIONES DE INSTALACIÓN (2 minutos):
 * 1. Entra a https://script.google.com con tu cuenta danieldiazrupa@gmail.com
 * 2. Haz clic en "Nuevo proyecto".
 * 3. Pega todo este código en el editor y reemplaza TU_TRELLO_API_KEY y TU_TRELLO_TOKEN.
 * 4. Guarda el proyecto (Ctrl+S) y ejecuta una vez la función `sincronizarReunionesATrello`
 *    para otorgar permisos a Google Drive y peticiones externas.
 * 5. En el menú izquierdo ve a "Activadores" (ícono de reloj) -> "Agregar activador":
 *    - Función: sincronizarReunionesATrello
 *    - Fuente del evento: Según tiempo -> Temporizador por minutos -> Cada 15 minutos.
 */

const CONFIG = {
  TRELLO_API_KEY: "TU_TRELLO_API_KEY",
  TRELLO_TOKEN: "TU_TRELLO_TOKEN",
  TRELLO_LIST_ID: "6b047331066e6fb6ea320081", // Lista "📋 Por Hacer General" en Enacta Operaciones
  TRELLO_BOARD_ID: "6b04732c565d11c2f9a0abe3",
  SEARCH_QUERY: 'mimeType="application/vnd.google-apps.document" and (title contains "Notas de Gemini" or title contains "Reunión iniciada") and trashed=false',
};

function sincronizarReunionesATrello() {
  const props = PropertiesService.getScriptProperties();
  const processedIds = JSON.parse(props.getProperty("PROCESSED_DOC_IDS") || "[]");

  const files = DriveApp.searchFiles(CONFIG.SEARCH_QUERY);
  const existingCards = fetchExistingCardNames_();

  while (files.hasNext()) {
    const file = files.next();
    const fileId = file.getId();

    if (processedIds.includes(fileId)) {
      continue;
    }

    const doc = DocumentApp.openById(fileId);
    const bodyText = doc.getBody().getText();
    const docUrl = file.getUrl();
    const docTitle = file.getName();

    const tasks = extractTasksFromGeminiDoc_(bodyText, docTitle, docUrl);

    if (tasks.length > 0) {
      let createdCount = 0;
      tasks.forEach((task) => {
        if (!existingCards.has(task.name.toLowerCase())) {
          createTrelloCard_(task);
          existingCards.add(task.name.toLowerCase());
          createdCount++;
        }
      });
      Logger.log(`Reunión "${docTitle}": ${createdCount} tareas enviadas a Trello.`);
    }

    processedIds.push(fileId);
  }

  props.setProperty("PROCESSED_DOC_IDS", JSON.stringify(processedIds));
}

function extractTasksFromGeminiDoc_(text, docTitle, docUrl) {
  const tasks = [];
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);

  // Busca la sección "Próximos pasos" o líneas con formato [Responsable] Título: Descripción
  let inNextSteps = false;
  const taskRegex = /^[-•☐\[\]\s]*\[([^\]]+)\]\s*([^:]+):\s*(.+)$/;

  for (const line of lines) {
    if (/^próximos pasos$/i.test(line)) {
      inNextSteps = true;
      continue;
    }
    if (inNextSteps && /^detalles$/i.test(line)) {
      break;
    }

    const match = line.match(taskRegex);
    if (match) {
      const assignee = normalizeAssignee_(match[1].trim());
      const title = match[2].trim();
      const detail = match[3].trim();

      tasks.push({
        name: `[${assignee}] ${title}`,
        desc: `👤 Responsable: ${match[1].trim()}\n🗓️ Reunión: ${docTitle}\n\n📌 Detalle:\n${detail}\n\n🔗 Documento / Grabación:\n${docUrl}`,
      });
    }
  }
  return tasks;
}

function normalizeAssignee_(raw) {
  const map = {
    "Daniel Díaz": "Daniel",
    "Matías Nicolás Parra Bórquez": "Matías",
    "Paola Huenuman": "Paola",
    "El grupo": "Equipo",
  };
  return raw
    .split(",")
    .map((p) => map[p.trim()] || p.trim())
    .join(" / ");
}

function fetchExistingCardNames_() {
  const url = `https://api.trello.com/1/boards/${CONFIG.TRELLO_BOARD_ID}/cards?fields=name&key=${CONFIG.TRELLO_API_KEY}&token=${CONFIG.TRELLO_TOKEN}`;
  const resp = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  const cards = JSON.parse(resp.getContentText() || "[]");
  return new Set(cards.map((c) => c.name.trim().toLowerCase()));
}

function createTrelloCard_(task) {
  const url = `https://api.trello.com/1/cards?key=${CONFIG.TRELLO_API_KEY}&token=${CONFIG.TRELLO_TOKEN}`;
  UrlFetchApp.fetch(url, {
    method: "post",
    payload: {
      idList: CONFIG.TRELLO_LIST_ID,
      name: task.name,
      desc: task.desc,
    },
  });
}
