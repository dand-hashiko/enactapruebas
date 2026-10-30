import { NextResponse } from "next/server";
import { notifyNewLead, LeadPayload } from "@/lib/telegram/telegram-service";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<LeadPayload>;

    // Early return: Validar al menos nombre o email o teléfono
    if (!body.name && !body.email && !body.phone) {
      return NextResponse.json(
        { ok: false, error: "Datos de contacto insuficientes" },
        { status: 400 }
      );
    }

    const lead: LeadPayload = {
      name: body.name?.trim() || "Contacto Web",
      email: body.email?.trim() || "No especificado",
      phone: body.phone?.trim() || "No especificado",
      service: body.service?.trim() || "Consultoría Integral",
      date: body.date?.trim(),
      time: body.time?.trim(),
      notes: body.notes?.trim(),
      source: body.source || "booking-form",
    };

    // Intentar despachar notificación de Telegram en segundo plano
    // No bloquea la respuesta al usuario si falla o si no hay credenciales
    notifyNewLead(lead).catch((err) => {
      console.error("[API Lead] Error despachando a Telegram:", err);
    });

    return NextResponse.json({
      ok: true,
      message: "Lead registrado exitosamente. Un ingeniero de Enacta se pondrá en contacto.",
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Error interno procesando lead";
    console.error("[API Lead] Error en handler:", msg);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
