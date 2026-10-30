import { NextResponse } from "next/server";
import { ENACTA_SYSTEM_INSTRUCTION, FALLBACK_RULES } from "@/lib/ai/enacta-knowledge";

interface TelegramUpdate {
  update_id: number;
  message?: {
    message_id: number;
    from: {
      id: number;
      first_name: string;
      username?: string;
    };
    chat: {
      id: number;
      type: string;
    };
    text?: string;
  };
}

export async function POST(req: Request) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
    if (!token) {
      return NextResponse.json({ ok: false, error: "Bot token not configured" }, { status: 500 });
    }

    const update = (await req.json()) as TelegramUpdate;
    const message = update.message;

    if (!message || !message.text) {
      return NextResponse.json({ ok: true, note: "No text to handle" });
    }

    const chatId = message.chat.id;
    const text = message.text.trim();

    let replyText = "";

    if (text.startsWith("/start")) {
      replyText = `🚀 <b>¡Hola, Daniel! Bienvenido al Sistema de Automatización de Enacta.</b>\n\n` +
        `Este bot está conectado en tiempo real con <b>enacta.cl</b>.\n\n` +
        `<b>Funciones activas:</b>\n` +
        `• 🔔 <b>Alertas en vivo:</b> Te notificaré aquí cada vez que un cliente pida una cotización, agende un Google Meet o interactúe con el Asistente IA de la web.\n` +
        `• 🧠 <b>Consulta de Conocimiento:</b> Puedes hacerme cualquier pregunta técnica sobre servicios de Enacta, ERP offline, infraestructura o tarifas y te responderé con la base de conocimiento oficial.\n\n` +
        `<i>Tu Chat ID es:</i> <code>${chatId}</code> (configúralo como TELEGRAM_CHAT_ID en Vercel para recibir las alertas).`;
    } else if (text.startsWith("/status")) {
      const hasGemini = Boolean(process.env.GEMINI_API_KEY);
      replyText = `📊 <b>Estado del Ecosistema Enacta</b>\n\n` +
        `• <b>Sitio web:</b> https://enacta.cl (Producción Activa)\n` +
        `• <b>Motor IA Gemini:</b> ${hasGemini ? "✅ Conectado" : "⚠️ Modo Local (sin API Key)"}\n` +
        `• <b>Telegram Webhook:</b> ✅ Operativo\n` +
        `• <b>Lead Capture:</b> ✅ Activo en formulario y chat`;
    } else {
      // Intentar responder con Gemini o con el motor de conocimiento local
      const apiKey = process.env.GEMINI_API_KEY;

      if (apiKey) {
        try {
          const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                system_instruction: { parts: [{ text: ENACTA_SYSTEM_INSTRUCTION }] },
                contents: [{ role: "user", parts: [{ text }] }],
                generationConfig: { temperature: 0.6, maxOutputTokens: 500 },
              }),
            }
          );
          if (res.ok) {
            const data = await res.json();
            replyText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
          }
        } catch (err) {
          console.error("[Telegram Webhook] Error llamando a Gemini:", err);
        }
      }

      if (!replyText) {
        const query = text.toLowerCase();
        const matched = FALLBACK_RULES.find((r) => r.keywords.some((kw) => query.includes(kw)));
        replyText = matched
          ? matched.reply
          : `Recibido: "${text}". Puedes hacerme preguntas sobre los servicios de Enacta o escribir /status para ver el estado del sistema.`;
      }
    }

    // Enviar respuesta a Telegram
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: replyText,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[Telegram Webhook] Error:", errorMsg);
    return NextResponse.json({ ok: false, error: errorMsg }, { status: 500 });
  }
}
