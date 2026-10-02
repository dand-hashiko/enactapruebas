"use client";

import * as React from "react";
import {
  Globe,
  Cloud,
  Cpu,
  Layout,
  Gauge,
  Lock,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  gradient: string;
  iconBg: string;
}

const services: ServiceItem[] = [
  {
    icon: Globe,
    title: "Desarrollo Web SPA & Apps Modernas",
    badge: "Next.js & React 19",
    description:
      "Construimos interfaces de usuario reactivas, fluidas y ultrarrápidas utilizando arquitecturas de vanguardia (App Router, Server Components y renderizado híbrido).",
    highlights: [
      "Arquitecturas escalables SPA & PWA",
      "Experiencias móviles responsivas impecables",
      "Integración de pasarelas de pago y APIs",
    ],
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconBg: "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Cloud,
    title: "Arquitectura Cloud & DevOps Serverless",
    badge: "Vercel & AWS Edge",
    description:
      "Despliegues automatizados y tuberías CI/CD que garantizan disponibilidad del 99.98%, escalabilidad automática bajo picos de tráfico y costos optimizados.",
    highlights: [
      "Despliegues con cero tiempo de inactividad",
      "Infraestructura como código (IaC)",
      "Monitoreo proactivo y telemetría 24/7",
    ],
    gradient: "from-purple-500/10 to-indigo-500/10",
    iconBg: "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400",
  },
  {
    icon: Cpu,
    title: "Inteligencia Artificial Aplicada",
    badge: "LLMs & Agentes",
    description:
      "Automatizamos flujos de trabajo repetitivos e integramos agentes inteligentes capaces de procesar consultas, analizar datos y optimizar la toma de decisiones.",
    highlights: [
      "Asistentes conversacionales inteligentes",
      "Extracción y análisis automatizado de documentos",
      "RAG empresarial y bases vectoriales seguras",
    ],
    gradient: "from-pink-500/10 to-rose-500/10",
    iconBg: "bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400",
  },
  {
    icon: Layout,
    title: "Diseño UI/UX & Sistemas de Diseño",
    badge: "Figma & Tailwind",
    description:
      "Creamos experiencias digitales estéticas, coherentes y orientadas a la conversión. Diseñamos con atención al detalle y enfoque centrado en la usabilidad humana.",
    highlights: [
      "Sistemas de diseño basados en componentes",
      "Prototipos interactivos de alta fidelidad",
      "Accesibilidad WCAG y micro-interacciones suaves",
    ],
    gradient: "from-amber-500/10 to-orange-500/10",
    iconBg: "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400",
  },
  {
    icon: Gauge,
    title: "Optimización Core Web Vitals & SEO",
    badge: "Score 100/100",
    description:
      "Auditamos y aceleramos tus plataformas web para lograr puntuaciones perfectas en Google Lighthouse, posicionamiento orgánico dominante y menores tasas de rebote.",
    highlights: [
      "Optimización de bundle, imágenes y fuentes",
      "Estructuración de datos Schema.org y SEO técnico",
      "Tiempos de carga iniciales sub-segundo",
    ],
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Lock,
    title: "Seguridad, Auditoría & Microservicios",
    badge: "Enterprise Grade",
    description:
      "Protegemos tus activos digitales mediante arquitecturas seguras por diseño, autenticación robusta (OAuth/JWT) y rigurosas auditorías de código.",
    highlights: [
      "Cifrado de datos en reposo y en tránsito",
      "Auditorías de vulnerabilidades y hardening",
      "Políticas de respaldo y continuidad de negocio",
    ],
    gradient: "from-cyan-500/10 to-blue-500/10",
    iconBg: "bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestras Especialidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Soluciones de Ingeniería Digital de Alto Nivel
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Combinamos diseño intuitivo, código de calidad y tecnología en la nube para entregar productos digitales sólidos, seguros y escalables.
          </p>
        </div>

        {/* Minimalist Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-200 dark:hover:border-indigo-800/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBg} transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-6 space-y-2.5">
                    {service.highlights.map((item, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all"
                  >
                    <span>Cotizar este servicio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
