/**
 * Telegram Notifier Service — Enacta
 *
 * Arquitectura: Servicio desacoplado (SoC) para notificación instantánea
 * a los ingenieros de Enacta (Daniel Díaz & Paola Huenuman) vía Telegram Bot API.
 * Costo: $0 CLP (100% gratuito e ilimitado).
 *
 * Manejo de errores: Si no hay credenciales configuradas en las variables de
 * entorno (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID), el servicio degrada
 * limpiamente sin arrojar excepciones ni romper la experiencia de usuario.
 */

export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
  notes?: string;
  source?: "booking-form" | "ai-chat" | "direct-contact";
}

export interface ChatInquiryPayload {
  userMessage: string;
  aiResponse: string;
  contactHint?: string;
  sourceUrl?: string;
}

/**
 * Envía un mensaje formateado en HTML al chat de Telegram configurado
 */
export async function sendTelegramNotification(htmlText: string): Promise<{
  success: boolean;
  error?: string;
}> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    // Early return pattern: No credenciales configuradas
    console.warn(
      "[Telegram Service] TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID no configurados. Saltando notificación."
    );
    return { success: false, error: "CREDENTIALS_MISSING" };
  }

  const endpoint = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlText,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Telegram Service] Error respuesta Telegram API:", errorText);
      return { success: false, error: `Telegram API error: ${response.status}` };
    }

    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[Telegram Service] Error de red al contactar Telegram:", message);
    return { success: false, error: message };
  }
}

/**
 * Notifica una nueva reserva o agendamiento técnico
 */
export async function notifyNewLead(lead: LeadPayload): Promise<{
  success: boolean;
  error?: string;
}> {
  const fechaChile = new Date().toLocaleString("es-CL", {
    timeZone: "America/Santiago",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const origenLabel =
    lead.source === "ai-chat"
      ? "🤖 Asistente IA (Web)"
      : "📅 Formulario de Agendamiento";

  const html = `
🚀 <b>¡NUEVO LEAD EN ENACTA.CL!</b>
━━━━━━━━━━━━━━━━━━━━━
👤 <b>Cliente:</b> ${escapeHtml(lead.name || "Sin nombre especificado")}
📧 <b>Email:</b> ${escapeHtml(lead.email || "No provisto")}
📱 <b>Teléfono:</b> ${escapeHtml(lead.phone || "No provisto")}
🛠️ <b>Servicio:</b> ${escapeHtml(lead.service || "Consultoría General")}
🗓️ <b>Fecha deseada:</b> ${escapeHtml(lead.date || "Por coordinar")} ${escapeHtml(lead.time || "")}
📍 <b>Canal:</b> ${origenLabel}
⏰ <b>Registrado el:</b> ${fechaChile}

${
  lead.notes
    ? `💬 <b>Requerimiento:</b>\n<i>${escapeHtml(lead.notes)}</i>\n━━━━━━━━━━━━━━━━━━━━━`
    : "━━━━━━━━━━━━━━━━━━━━━"
}
⚡ <i>Enacta Core Automation Suite</i>
  `.trim();

  return sendTelegramNotification(html);
}

/**
 * Notifica una consulta de alto interés capturada en el Asistente IA
 */
export async function notifyAiChatInquiry(
  inquiry: ChatInquiryPayload
): Promise<{ success: boolean; error?: string }> {
  const fechaChile = new Date().toLocaleString("es-CL", {
    timeZone: "America/Santiago",
    timeStyle: "short",
  });

  const html = `
🤖 <b>CONSULTA WEB VÍA ASISTENTE IA</b>
━━━━━━━━━━━━━━━━━━━━━
💬 <b>Pregunta del usuario:</b>
<i>${escapeHtml(inquiry.userMessage)}</i>

${
  inquiry.contactHint
    ? `📌 <b>Datos de contacto detectados:</b>\n<code>${escapeHtml(
        inquiry.contactHint
      )}</code>\n`
    : ""
}
⚡ <b>Respuesta IA generada:</b>
<i>${escapeHtml(truncate(inquiry.aiResponse, 300))}</i>

⏰ <i>${fechaChile} (Santiago, Chile)</i>
  `.trim();

  return sendTelegramNotification(html);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}
