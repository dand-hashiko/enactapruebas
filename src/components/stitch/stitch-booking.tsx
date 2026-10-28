"use client";

import React, { useState } from "react";
import { BioTealShader } from "./bio-teal-shader";
import confetti from "canvas-confetti";

export function StitchBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "plan-pyme",
    date: "",
    time: "10:00",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate short network latency
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
      className="relative w-full px-space-md lg:px-margin-desktop py-space-xl overflow-hidden bg-surface"
      id="agendamiento"
    >
      {/* Bio-Teal Kinetic Shader Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <BioTealShader
          id="shader-canvas-AGENDAMIENTO"
          className="w-full h-full block opacity-95"
          speedMultiplier={0.14}
        />
      </div>

      {/* Obsidian / Surface Depth Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/60 via-transparent to-surface-container-lowest/70 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-surface/20 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-surface-container/70 backdrop-blur-xl border border-primary/30 rounded-2xl p-space-lg lg:p-space-xl relative overflow-hidden shadow-2xl shadow-[0_0_50px_rgba(0,229,163,0.15)]">
          {/* Accent decorative glow inside container */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl relative z-10">
            {/* Column Left: Context & Direct Contact Links */}
            <div className="lg:col-span-5 space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded text-primary font-code-sm text-code-sm">
                <span className="material-symbols-outlined text-[16px]">
                  video_call
                </span>
                <span>CALENDARIO DIRECTO DE INGENIERÍA</span>
              </div>

              <h2 className="font-headline-xl text-headline-xl text-on-surface">
                Agendemos un Google Meet de 45 minutos
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Analicemos los requerimientos de tu proyecto: ya sea crear un
                nuevo sitio web profesional, sincronizar tus ventas o instalar
                cableado y servidores en tu local u oficina.
              </p>

              <div className="p-space-sm bg-surface-container-high rounded-xl space-y-space-xs border border-white/[0.04]">
                <div className="font-body-sm text-body-sm font-semibold text-on-surface flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Liderazgo técnico del llamado:</span>
                </div>
                <div className="font-body-sm text-body-sm text-on-surface pl-3">
                  <strong>Daniel Díaz</strong> • Lead Software Architect &amp;
                  Infrastructure
                </div>
                <div className="font-body-sm text-body-sm text-on-surface pl-3">
                  <strong>Paola Huenuman</strong> • Client Operations Partner
                </div>
              </div>

              <div className="space-y-space-xs pt-space-xs">
                <div className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  ¿Prefieres conversar por WhatsApp ahora mismo?
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    className="flex items-center gap-space-sm p-space-xs bg-surface-container-lowest hover:bg-surface-bright rounded text-on-surface transition-colors border border-white/[0.02]"
                    href="https://wa.me/56995127788"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      chat
                    </span>
                    <span className="font-code-sm text-code-sm">
                      WhatsApp Línea 1: <strong>+569 9512 7788</strong>
                    </span>
                  </a>
                  <a
                    className="flex items-center gap-space-sm p-space-xs bg-surface-container-lowest hover:bg-surface-bright rounded text-on-surface transition-colors border border-white/[0.02]"
                    href="https://wa.me/56953797437"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      chat
                    </span>
                    <span className="font-code-sm text-code-sm">
                      WhatsApp Línea 2: <strong>+569 5379 7437</strong>
                    </span>
                  </a>
                  <a
                    className="flex items-center gap-space-sm p-space-xs bg-surface-container-lowest hover:bg-surface-bright rounded text-on-surface transition-colors border border-white/[0.02]"
                    href="mailto:contacto@enacta.cl"
                  >
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      mail
                    </span>
                    <span className="font-code-sm text-code-sm">
                      Correo: <strong>contacto@enacta.cl</strong>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column Right: Fast Booking Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest/80 backdrop-blur-md p-space-lg rounded-xl shadow-xl flex flex-col justify-between border border-primary/20">
              {!isSubmitted ? (
                <form
                  className="space-y-space-sm"
                  id="booking-form"
                  onSubmit={handleSubmit}
                >
                  <div className="font-headline-md text-headline-md text-on-surface font-semibold flex items-center justify-between">
                    <span>Reserva tu horario</span>
                    <span className="font-code-sm text-code-sm px-2 py-0.5 bg-primary/10 text-primary rounded">
                      Sin compromiso
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    <div className="space-y-1">
                      <label
                        className="font-code-sm text-code-sm text-on-surface-variant block"
                        htmlFor="contact-name"
                      >
                        Tu Nombre y Apellido *
                      </label>
                      <input
                        className="w-full bg-surface-container px-space-sm py-2.5 rounded text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary font-body-sm text-body-sm border border-white/[0.04]"
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
                    <div className="space-y-1">
                      <label
                        className="font-code-sm text-code-sm text-on-surface-variant block"
                        htmlFor="contact-email"
                      >
                        Correo Electrónico *
                      </label>
                      <input
                        className="w-full bg-surface-container px-space-sm py-2.5 rounded text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary font-body-sm text-body-sm border border-white/[0.04]"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    <div className="space-y-1">
                      <label
                        className="font-code-sm text-code-sm text-on-surface-variant block"
                        htmlFor="contact-phone"
                      >
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        className="w-full bg-surface-container px-space-sm py-2.5 rounded text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary font-body-sm text-body-sm border border-white/[0.04]"
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
                    <div className="space-y-1">
                      <label
                        className="font-code-sm text-code-sm text-on-surface-variant block"
                        htmlFor="contact-service"
                      >
                        Servicio de Interés Principal
                      </label>
                      <select
                        className="w-full bg-surface-container px-space-sm py-2.5 rounded text-on-surface focus:outline-none focus:ring-1 focus:ring-primary font-body-sm text-body-sm border border-white/[0.04]"
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                      >
                        <option value="plan-landing">
                          Plan Web Inicial / Landing ($19.990/m)
                        </option>
                        <option value="plan-pyme">
                          Plan Web Pyme Corporativa ($29.990/m)
                        </option>
                        <option value="plan-ecommerce">
                          Plan Web E-Commerce ($49.990/m)
                        </option>
                        <option value="software-pos">
                          Software POS e Inventario
                        </option>
                        <option value="redes-fierro">
                          Redes &amp; Servidores en Terreno
                        </option>
                        <option value="consultoria-mixta">
                          Solución Integral Mixta
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    <div className="space-y-1">
                      <label
                        className="font-code-sm text-code-sm text-on-surface-variant block"
                        htmlFor="preferred-date"
                      >
                        Fecha Preferida
                      </label>
                      <input
                        className="w-full bg-surface-container px-space-sm py-2.5 rounded text-on-surface focus:outline-none focus:ring-1 focus:ring-primary font-body-sm text-body-sm border border-white/[0.04]"
                        id="preferred-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        className="font-code-sm text-code-sm text-on-surface-variant block"
                        htmlFor="preferred-time"
                      >
                        Horario Preferido
                      </label>
                      <select
                        className="w-full bg-surface-container px-space-sm py-2.5 rounded text-on-surface focus:outline-none focus:ring-1 focus:ring-primary font-body-sm text-body-sm border border-white/[0.04]"
                        id="preferred-time"
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                      >
                        <option value="10:00">10:00 hrs (Mañana)</option>
                        <option value="11:30">11:30 hrs (Mañana)</option>
                        <option value="15:00">15:00 hrs (Tarde)</option>
                        <option value="16:30">16:30 hrs (Tarde)</option>
                        <option value="18:00">18:00 hrs (Cierre)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      className="font-code-sm text-code-sm text-on-surface-variant block"
                      htmlFor="project-notes"
                    >
                      Detalles del proyecto o requerimiento (opcional)
                    </label>
                    <textarea
                      className="w-full bg-surface-container px-space-sm py-2 rounded text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary font-body-sm text-body-sm border border-white/[0.04]"
                      id="project-notes"
                      placeholder="Cuéntanos brevemente si tienes sitio actual, cuántos locales o computadores posees..."
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    />
                  </div>

                  <div className="pt-space-xs">
                    <button
                      className="w-full inline-flex items-center justify-center gap-space-xs py-3.5 px-space-md bg-primary text-on-primary font-body-md font-bold rounded shadow-[0_0_20px_rgba(0,229,163,0.3)] hover:bg-primary-fixed transition-all hover:scale-[1.01] cursor-pointer disabled:opacity-50"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        calendar_month
                      </span>
                      <span>
                        {isSubmitting
                          ? "Procesando solicitud..."
                          : "Confirmar Solicitud de Meet (45 min)"}
                      </span>
                    </button>
                  </div>
                </form>
              ) : (
                <div
                  className="p-space-lg bg-primary/10 rounded-lg text-center space-y-space-sm my-auto border border-primary/30"
                  id="booking-confirmation"
                >
                  <span className="material-symbols-outlined text-primary text-[42px]">
                    check_circle
                  </span>
                  <div className="font-headline-md text-headline-md font-bold text-on-surface">
                    ¡Solicitud de reunión recibida con éxito!
                  </div>
                  <p className="font-body-md text-on-surface-variant max-w-md mx-auto">
                    Te contactaremos a <strong>{formData.email}</strong> y por
                    WhatsApp al <strong>{formData.phone}</strong> para coordinar el
                    enlace de Google Meet.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-surface-container hover:bg-surface-bright text-primary font-code-sm text-code-sm rounded border border-primary/20 transition-all cursor-pointer"
                  >
                    Enviar otra solicitud
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
