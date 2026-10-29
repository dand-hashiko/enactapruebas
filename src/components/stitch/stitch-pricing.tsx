"use client";

import React, { useState } from "react";

interface AccentureCardData {
  id: string;
  category: string;
  question: string;
  answer: string;
  ctaText: string;
  serviceId: string;
  themeColor: string;
  visualType: "ribbon" | "pathway" | "vortex" | "schematic";
}

const ACCENTURE_CARDS: AccentureCardData[] = [
  {
    id: "software-marketing",
    category: "SOFTWARE & CRECIMIENTO",
    question: "¿Cómo transformar tu web en un canal de venta continua sin depender de comisiones?",
    answer:
      "Desarrollamos arquitecturas web ultrarrápidas sobre Next.js y Vercel Edge con pasarelas de pago integradas (Webpay Plus, Transbank), catálogo interactivo y tiempos de carga inferiores a 0.8s en todo Chile. Posicionamiento SEO técnico para capturar demanda real sin intermediarios.",
    ctaText: "Agendar Consultoría Web",
    serviceId: "plan-ecommerce",
    themeColor: "#00e5a3",
    visualType: "ribbon",
  },
  {
    id: "seguridad-redes",
    category: "SEGURIDAD & TERRENO",
    question: "¿Tu infraestructura física y cableado soportan el tráfico industrial sin cortes?",
    answer:
      "Ingeniería presencial en terreno: instalación y certificación de cableado Cat 6, canalización limpia, switches Gigabit PoE UniFi y routers MikroTik de alto rendimiento. Monitoreo proactivo y soporte 24/7 en la Región Metropolitana y Macro-zona Sur.",
    ctaText: "Agendar Inspección en Terreno",
    serviceId: "fierro-terreno",
    themeColor: "#38bdf8",
    visualType: "pathway",
  },
  {
    id: "integracion-erp",
    category: "INTEGRACIÓN ERP & POS",
    question: "¿Qué sucede con tus ventas e inventario si se corta la conexión a internet en tu local?",
    answer:
      "Implementamos sistemas de gestión ERP y terminales POS de cobro veloz con arquitectura offline-first. Tus cajas continúan operando sin interrupción y sincronizan inventario, balanzas e impresoras fiscales con el SII automáticamente al restablecerse la red.",
    ctaText: "Agendar Demo de ERP",
    serviceId: "software-pos",
    themeColor: "#a855f7",
    visualType: "vortex",
  },
  {
    id: "data-cloud",
    category: "DATA & CLOUD DEDICADA",
    question: "¿Están tus datos corporativos replicados y a salvo de pérdidas catastróficas?",
    answer:
      "Diseñamos clústeres dedicados PostgreSQL sobre Linux Debian contenerizado con Docker, respaldos en espejo geodirigidos y redes privadas Tailscale VPN con cero exposición a internet. Continuidad operativa con 99.99% SLA para operaciones críticas.",
    ctaText: "Agendar Diagnóstico Cloud",
    serviceId: "plan-pyme",
    themeColor: "#34d399",
    visualType: "schematic",
  },
];

export function StitchPricing() {
  const [activeCard, setActiveCard] = useState<string | null>("software-marketing");

  return (
    <section
      className="relative w-full px-4 sm:px-6 lg:px-12 py-20 sm:py-28 bg-black overflow-hidden border-b border-white/[0.08]"
      id="soluciones"
    >
      {/* Anchor alias to support existing #planes-web links */}
      <div id="planes-web" className="absolute -top-24 left-0" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header (Estilo Consultora Global / Accenture) */}
        <div className="space-y-4 max-w-3xl">
          <div className="typo-otros1 text-xs text-primary font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>SOLUCIONES DE INGENIERÍA EN PRODUCCIÓN</span>
          </div>
          <h2 className="typo-titulos text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Respuestas de ingeniería para desafíos críticos de negocio
          </h2>
          <p className="typo-subtitulos text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Pasa el cursor o presiona cada tarjeta para descubrir nuestra arquitectura técnica
            y agendar una sesión directa con nuestros ingenieros.
          </p>
        </div>

        {/* 4 Accenture Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACCENTURE_CARDS.map((card) => {
            const isHoveredOrActive = activeCard === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() =>
                  setActiveCard(activeCard === card.id ? null : card.id)
                }
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col justify-between p-6 sm:p-7 min-h-[500px] sm:min-h-[540px] cursor-pointer select-none ${
                  isHoveredOrActive
                    ? "bg-[#0b0c12] border-primary/50 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,229,163,0.15)] -translate-y-1.5"
                    : "bg-[#08080c] border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                {/* Subtle Gradient Backlight */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${card.themeColor}15, transparent 75%)`,
                  }}
                />

                {/* Top Section: Category & Question */}
                <div className="space-y-4 relative z-10">
                  <div className="typo-otros1 text-[11px] font-bold tracking-widest text-white/60 uppercase">
                    {card.category}
                  </div>

                  <h3 className="typo-titulos text-xl sm:text-[22px] text-white leading-tight tracking-tight">
                    {card.question}
                  </h3>

                  {/* Answer Revelation (Smoothly fades in & pushes visual down) */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isHoveredOrActive
                        ? "opacity-100 max-h-96 translate-y-0 pt-2"
                        : "opacity-0 max-h-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <p className="typo-otros2 text-sm text-white/80 leading-relaxed border-l-2 border-primary/60 pl-3.5">
                      {card.answer}
                    </p>
                  </div>
                </div>

                {/* Bottom Graphic Area (Abstract Artwork in default state, fades in active state) */}
                <div className="relative w-full h-44 mt-auto z-0 flex items-center justify-center overflow-hidden">
                  <div
                    className={`transition-all duration-500 w-full h-full flex items-center justify-center ${
                      isHoveredOrActive ? "opacity-15 scale-95" : "opacity-90 scale-100"
                    }`}
                  >
                    {card.visualType === "ribbon" && <AbstractRibbonVisual color={card.themeColor} />}
                    {card.visualType === "pathway" && <AbstractPathwayVisual color={card.themeColor} />}
                    {card.visualType === "vortex" && <AbstractVortexVisual color={card.themeColor} />}
                    {card.visualType === "schematic" && <AbstractSchematicVisual color={card.themeColor} />}
                  </div>
                </div>

                {/* Bottom Action Footer (Always present, highlights on hover) */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between relative z-10">
                  <a
                    href="#agendamiento"
                    className="typo-botones inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-primary transition-colors"
                  >
                    <span>{card.ctaText}</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                  <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal & Transparent Notice */}
        <div className="text-center text-xs sm:text-sm text-on-surface-variant/80 flex flex-col md:flex-row items-center justify-center gap-2 pt-2">
          <span className="material-symbols-outlined text-primary text-[18px]">
            verified_user
          </span>
          <span className="typo-otros2">
            Desarrollo a la medida sin letras chicas. El código fuente y los datos siempre son 100% de tu propiedad.
          </span>
        </div>
      </div>
    </section>
  );
}

/**
 * 4 Bespoke SVG Artworks matching the Accenture abstract style
 */
function AbstractRibbonVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M20 120 C 60 40, 140 140, 180 60 C 160 20, 80 80, 20 120 Z"
        fill="url(#ribbonGrad)"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity="0.7"
      />
      <path
        d="M30 130 C 70 55, 130 130, 170 70"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="3 3"
        strokeOpacity="0.6"
      />
      <circle cx="100" cy="80" r="3" fill={color} />
      <circle cx="140" cy="65" r="2" fill="#ffffff" />
      <circle cx="60" cy="95" r="2" fill={color} />
    </svg>
  );
}

function AbstractPathwayVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pathGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d="M10 140 Q 70 110, 100 80 T 190 30"
        stroke="url(#pathGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M30 150 Q 80 125, 110 95 T 195 50"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 4"
        strokeOpacity="0.7"
      />
      <ellipse cx="100" cy="80" rx="40" ry="15" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
      <ellipse cx="150" cy="50" rx="25" ry="10" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="100" cy="80" r="3" fill="#ffffff" />
      <circle cx="150" cy="50" r="2.5" fill={color} />
    </svg>
  );
}

function AbstractVortexVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#312e81" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="80" r="55" stroke="url(#vortexGrad)" strokeWidth="1.5" strokeDasharray="12 4" />
      <circle cx="100" cy="80" r="42" stroke={color} strokeWidth="1.2" strokeDasharray="8 6" strokeOpacity="0.6" />
      <circle cx="100" cy="80" r="28" stroke="#ec4899" strokeWidth="1.2" strokeOpacity="0.7" />
      <circle cx="100" cy="80" r="14" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.9" />
      <circle cx="100" cy="80" r="4" fill={color} />
    </svg>
  );
}

function AbstractSchematicVisual({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={color} strokeWidth="1" strokeOpacity="0.6">
        <polygon points="100,25 160,55 160,115 100,145 40,115 40,55" fill="none" strokeWidth="1.5" />
        <line x1="100" y1="25" x2="100" y2="145" strokeDasharray="3 3" />
        <line x1="40" y1="55" x2="160" y2="115" strokeDasharray="3 3" />
        <line x1="40" y1="115" x2="160" y2="55" strokeDasharray="3 3" />
      </g>
      <circle cx="100" cy="85" r="4" fill="#ffffff" />
      <circle cx="100" cy="25" r="3" fill={color} />
      <circle cx="160" cy="55" r="3" fill={color} />
      <circle cx="160" cy="115" r="3" fill={color} />
      <circle cx="100" cy="145" r="3" fill={color} />
      <circle cx="40" cy="115" r="3" fill={color} />
      <circle cx="40" cy="55" r="3" fill={color} />
    </svg>
  );
}
