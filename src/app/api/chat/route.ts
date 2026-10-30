import { NextRequest, NextResponse } from "next/server";
import { ENACTA_SYSTEM_INSTRUCTION, FALLBACK_RULES } from "@/lib/ai/enacta-knowledge";
import { notifyAiChatInquiry } from "@/lib/telegram/telegram-service";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages }: { messages?: ChatMessage[] } = body || {};

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "El historial de mensajes es requerido." },
        { status: 400 }
      );
    }

    const lastUserMessage =
      [...messages].reverse().find((m) => m.role === "user")?.content || "";
    const apiKey = process.env.GEMINI_API_KEY;

    let finalReply = "";
    let isAi = false;

    // 1. Si existe GEMINI_API_KEY, invocar Gemini Flash de Google
    if (apiKey) {
      try {
        const geminiContents = messages.map((m) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }],
        }));

        // Gemini 1.5 Flash / 2.0 Flash endpoint oficial
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              system_instruction: {
                parts: [{ text: ENACTA_SYSTEM_INSTRUCTION }],
              },
              contents: geminiContents,
              generationConfig: {
                temperature: 0.6,
                maxOutputTokens: 600,
                topP: 0.9,
              },
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const candidateText =
            data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

          if (candidateText) {
            finalReply = candidateText;
            isAi = true;
          }
        }
      } catch (geminiError) {
        console.error(
          "Gemini API call failed, falling back to knowledge engine:",
          geminiError
        );
      }
    }

    // 2. Fallback resiliente: Motor de conocimiento local
    if (!finalReply) {
      const normalizedQuery = lastUserMessage.toLowerCase();
      const matchedRule = FALLBACK_RULES.find((rule) =>
        rule.keywords.some((kw) => normalizedQuery.includes(kw))
      );

      if (matchedRule) {
        finalReply = matchedRule.reply;
      } else {
        finalReply = `¡Hola! Soy el asistente de ingeniería de **ENACTA**.

Podemos ayudarte en cualquiera de nuestras 4 áreas principales:
• **Software & Web:** Sitios ultrarrápidos sobre Next.js con carga <0.8s y pagos Transbank.
• **Redes & Terreno:** Cableado Cat 6 certificado, racks y switches industriales en Santiago y Temuco.
• **ERP & POS Offline:** Cajas registradoras que siguen cobrando sin internet y facturan con el SII.
• **Servidores & Cloud:** Clústeres dedicados PostgreSQL sobre Linux Debian con Docker.

¿Sobre cuál de estas soluciones te gustaría recibir detalles, o prefieres agendar una reunión de 45 minutos por Google Meet?`;
      }
    }

    // 3. Detección proactiva de datos de contacto o alta intención para alerta a Telegram
    const emailMatch = lastUserMessage.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    const phoneMatch = lastUserMessage.match(/(?:\+?56\s?9\d{8}|9\d{8}|\b\d{8,9}\b)/);
    const isHighIntent =
      Boolean(emailMatch || phoneMatch) ||
      /cotiz|reuni|presupuesto|agendar|contrat|demo|precio/i.test(lastUserMessage);

    if (isHighIntent) {
      const contactInfo = [
        emailMatch ? `Email: ${emailMatch[0]}` : null,
        phoneMatch ? `Teléfono: ${phoneMatch[0]}` : null,
      ]
        .filter(Boolean)
        .join(" | ");

      // Despachar alerta a Telegram en background sin demorar respuesta HTTP
      notifyAiChatInquiry({
        userMessage: lastUserMessage,
        aiResponse: finalReply,
        contactHint: contactInfo || undefined,
      }).catch((err) => {
        console.error("[Chat Route] Error despachando alerta Telegram:", err);
      });
    }

    return NextResponse.json({
      reply: finalReply,
      isAiPowered: isAi,
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Chat endpoint error:", error);
    return NextResponse.json(
      { error: "Error interno procesando la solicitud." },
      { status: 500 }
    );
  }
}
