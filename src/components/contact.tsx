"use client";

import * as React from "react";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Sparkles,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { LinkedInIcon, GithubIcon, TwitterXIcon, InstagramIcon } from "@/components/icons";

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "Desarrollo Web SPA & Apps",
    message: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Por favor ingresa tu nombre completo.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Por favor ingresa tu correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Por favor indícanos detalles sobre tu proyecto.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate API submission network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#a855f7", "#ec4899", "#10b981"],
      });
    } catch {
      // Fallback if canvas is unavailable
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Desarrollo Web SPA & Apps",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: LinkedInIcon,
      label: "LinkedIn de Enacta",
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: GithubIcon,
      label: "GitHub de Enacta",
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com",
      icon: TwitterXIcon,
      label: "X (Twitter) de Enacta",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: InstagramIcon,
      label: "Instagram de Enacta",
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-white dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inicia Tu Proyecto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Conversemos sobre tu Próximo Desafío Tecnológico
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Cuéntanos sobre tu empresa y objetivos. Te responderemos en menos de 2 horas hábiles con una propuesta o estimación preliminar sin costo.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Información de Contacto
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Estamos disponibles para reuniones virtuales o presenciales en Santiago de Chile.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:contacto@enacta.cl"
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Correo Electrónico</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      contacto@enacta.cl
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/56987654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">WhatsApp / Teléfono</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      +56 9 8765 4321
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Ubicación Central</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      Santiago, Chile (Providencia / Las Condes Hub)
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Horario de Atención</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      Lunes a Viernes: 09:00 - 18:30 CLT
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Síguenos en Redes Sociales
                </div>
                <div className="flex items-center gap-2.5">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative">
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    ¡Mensaje Enviado con Éxito!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Gracias por ponerte en contacto con nosotros, <strong>{formData.name}</strong>. Nuestro equipo de ingenieros revisará tus requerimientos y te escribirá a <strong>{formData.email}</strong> en breve.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Enviar otro mensaje</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Nombre Completo *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Ej. Francisca Pérez"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-200 dark:border-slate-800 focus:ring-indigo-500"
                        } bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Correo Corporativo *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="francisca@empresa.cl"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-200 dark:border-slate-800 focus:ring-indigo-500"
                        } bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Teléfono / WhatsApp (Opcional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+56 9 ..."
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Servicio de Interés
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer"
                      >
                        <option value="Desarrollo Web SPA & Apps">
                          Desarrollo Web SPA & Apps
                        </option>
                        <option value="Arquitectura Cloud & DevOps">
                          Arquitectura Cloud & DevOps
                        </option>
                        <option value="Inteligencia Artificial Aplicada">
                          Inteligencia Artificial Aplicada
                        </option>
                        <option value="Diseño UI/UX & Sistemas de Diseño">
                          Diseño UI/UX & Sistemas de Diseño
                        </option>
                        <option value="Optimización Core Web Vitals & SEO">
                          Optimización Core Web Vitals & SEO
                        </option>
                        <option value="Seguridad & Microservicios">
                          Seguridad & Microservicios
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Detalles del Proyecto o Consulta *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Cuéntanos brevemente qué necesitas construir, plazos estimados o desafíos actuales..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 dark:border-slate-800 focus:ring-indigo-500"
                      } bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Enviando requerimiento...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar Requerimiento a Enacta</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-center text-[11px] text-slate-400 dark:text-slate-500">
                    Tus datos están protegidos bajo estricto acuerdo de confidencialidad y privacidad.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
