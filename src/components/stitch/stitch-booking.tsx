"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";

export function StitchBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "software-web",
    date: "",
    time: "10:00",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#00e5a3", "#6effc3", "#3131c0", "#ffffff"],
      });
    } catch {}
  };

  return (
    <section
      className="relative w-full px-4 sm:px-6 lg:px-12 py-20 sm:py-28 bg-black overflow-hidden border-b border-white/[0.08]"
      id="agendamiento"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-[#08080c] border border-white/[0.08] rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10">
            {/* Column Left: Context & Direct Contact Links */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="typo-titulos text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                Agendemos un Google Meet de 45 minutos
              </h2>

              <p className="typo-subtitulos text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Analicemos los requerimientos de tu proyecto: ya sea crear un
                nuevo sitio web profesional, sincronizar tus ventas o instalar
                cableado y servidores en tu local u oficina.
              </p>

              <div className="p-4 bg-black rounded-xl space-y-2 border border-white/[0.06]">
                <div className="typo-otros2 text-xs font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Liderazgo técnico del llamado:</span>
                </div>
                <div className="typo-otros2 text-xs text-on-surface-variant pl-4">
                  <strong className="text-white">Daniel Díaz</strong> • Lead Software Architect &amp; Infrastructure
                </div>
                <div className="typo-otros2 text-xs text-on-surface-variant pl-4">
                  <strong className="text-white">Paola Huenuman</strong> • Client Operations Partner
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="typo-otros1 text-xs text-primary uppercase tracking-wider font-semibold">
                  ¿Prefieres conversar por WhatsApp ahora mismo?
                </div>
                <div className="flex flex-col gap-2.5">
                  <a
                    className="typo-botones flex items-center gap-3 p-3 bg-black hover:bg-[#14141c] rounded-xl text-white transition-colors border border-white/[0.06]"
                    href="https://wa.me/56995127788"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      chat
                    </span>
                    <span className="text-xs">
                      WhatsApp Línea 1: <strong className="text-primary">+569 9512 7788</strong>
                    </span>
                  </a>
                  <a
                    className="typo-botones flex items-center gap-3 p-3 bg-black hover:bg-[#14141c] rounded-xl text-white transition-colors border border-white/[0.06]"
                    href="https://wa.me/56953797437"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      chat
                    </span>
                    <span className="text-xs">
                      WhatsApp Línea 2: <strong className="text-primary">+569 5379 7437</strong>
                    </span>
                  </a>
                  <a
                    className="typo-botones flex items-center gap-3 p-3 bg-black hover:bg-[#14141c] rounded-xl text-white transition-colors border border-white/[0.06]"
                    href="mailto:contacto@enacta.cl"
                  >
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      mail
                    </span>
                    <span className="text-xs">
                      Correo: <strong className="text-white">contacto@enacta.cl</strong>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column Right: Fast Booking Form */}
            <div className="lg:col-span-7 bg-black p-6 sm:p-8 rounded-2xl border border-white/[0.08] shadow-xl flex flex-col justify-between">
              {!isSubmitted ? (
                <form
                  className="space-y-4"
                  id="booking-form"
                  onSubmit={handleSubmit}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                    <span className="text-lg font-bold text-white">Reserva tu horario</span>
                    <span className="font-code-sm text-xs px-2.5 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                      Sin compromiso
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        className="font-code-sm text-xs text-on-surface-variant block"
                        htmlFor="contact-name"
                      >
                        Tu Nombre y Apellido *
                      </label>
                      <input
                        className="w-full bg-[#0a0a0d] px-3.5 py-3 rounded-xl text-white placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary text-sm border border-white/[0.08]"
                        id="contact-name"
                        placeholder="Ej: Marcela González"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        className="font-code-sm text-xs text-on-surface-variant block"
                        htmlFor="contact-email"
                      >
                        Correo Electrónico *
                      </label>
                      <input
                        className="w-full bg-[#0a0a0d] px-3.5 py-3 rounded-xl text-white placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary text-sm border border-white/[0.08]"
                        id="contact-email"
                        placeholder="marcela@empresa.cl"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        className="font-code-sm text-xs text-on-surface-variant block"
                        htmlFor="contact-phone"
                      >
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        className="w-full bg-[#0a0a0d] px-3.5 py-3 rounded-xl text-white placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary text-sm border border-white/[0.08]"
                        id="contact-phone"
                        placeholder="+56 9 1234 5678"
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        className="font-code-sm text-xs text-on-surface-variant block"
                        htmlFor="contact-service"
                      >
                        Servicio Principal de Interés
                      </label>
                      <select
                        className="w-full bg-[#0a0a0d] px-3.5 py-3 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-primary text-sm border border-white/[0.08]"
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                      >
                        <option value="software-web">Solución 01 — Software &amp; Desarrollo Web</option>
                        <option value="seguridad-redes">Solución 02 — Seguridad, Cableado &amp; Redes en Terreno</option>
                        <option value="erp-pos">Solución 03 — Integración ERP &amp; POS Offline</option>
                        <option value="database-cloud">Solución 04 — Bases de Datos PostgreSQL &amp; Cloud Dedicada</option>
                        <option value="consultoria-general">Consultoría General de Ingeniería</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        className="font-code-sm text-xs text-on-surface-variant block"
                        htmlFor="contact-date"
                      >
                        Fecha Tentativa
                      </label>
                      <input
                        className="w-full bg-[#0a0a0d] px-3.5 py-3 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-primary text-sm border border-white/[0.08]"
                        id="contact-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        className="font-code-sm text-xs text-on-surface-variant block"
                        htmlFor="contact-time"
                      >
                        Horario Preferente
                      </label>
                      <select
                        className="w-full bg-[#0a0a0d] px-3.5 py-3 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-primary text-sm border border-white/[0.08]"
                        id="contact-time"
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                      >
                        <option value="10:00">10:00 hrs (Mañana)</option>
                        <option value="12:00">12:00 hrs (Mediodía)</option>
                        <option value="15:30">15:30 hrs (Tarde)</option>
                        <option value="17:00">17:00 hrs (Final de jornada)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className="font-code-sm text-xs text-on-surface-variant block"
                      htmlFor="contact-notes"
                    >
                      Cuéntanos brevemente sobre tu proyecto
                    </label>
                    <textarea
                      className="w-full bg-[#0a0a0d] px-3.5 py-2.5 rounded-xl text-white placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary text-sm border border-white/[0.08]"
                      id="contact-notes"
                      placeholder="Ej: Necesitamos renovar el sitio web de nuestra maestranza y conectar un catálogo de repuestos..."
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    />
                  </div>

                  <button
                    className="w-full py-3.5 px-4 bg-primary text-black font-bold rounded-xl shadow-[0_0_24px_rgba(0,229,163,0.3)] hover:bg-primary-fixed hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                    <span>
                      {isSubmitting ? "Enviando solicitud..." : "Confirmar Agendamiento de Reunión"}
                    </span>
                  </button>
                </form>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/40">
                    <span className="material-symbols-outlined text-[32px]">
                      check
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    ¡Solicitud de Reunión Recibida!
                  </h3>
                  <p className="text-sm text-on-surface-variant max-w-md">
                    Daniel Díaz o Paola Huenuman se pondrán en contacto contigo vía
                    WhatsApp o correo para confirmar la invitación de Google Meet.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="pt-2 text-primary font-code-sm text-xs underline cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
