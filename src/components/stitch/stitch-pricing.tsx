"use client";

import React, { useRef, useState } from "react";

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
  // Estado para la tarjeta activa / cambiada (Face 2 con respuesta)
  const [activeCard, setActiveCard] = useState<string | null>("software-marketing");
  
  // Carrusel móvil estilo Accenture
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(1, Math.max(0, scrollLeft / maxScroll)));
    }
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.clientWidth * 0.85;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative w-full px-4 sm:px-6 lg:px-12 py-20 sm:py-28 bg-black overflow-hidden border-b border-white/[0.08]"
      id="soluciones"
    >
      {/* Anchor alias to support existing #planes-web links */}
      <div id="planes-web" className="absolute -top-24 left-0" />

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        {/* Section Header (Estilo Consultora Global / Accenture) */}
        <div className="space-y-4 max-w-3xl">
          <div className="typo-otros1 text-xs text-primary font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>SOLUCIONES DE INGENIERÍA EN PRODUCCIÓN</span>
          </div>
          <h2 className="typo-titulos text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white tracking-tight text-balance break-words max-w-full">
            Respuestas de ingeniería para desafíos críticos de negocio
          </h2>
          <p className="typo-subtitulos text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Toca o haz clic en cualquier tarjeta para alternar entre la pregunta y la respuesta técnica sin que cambie de tamaño.
          </p>
        </div>

        {/* Responsive Container: Carrusel horizontal con snap en móvil / Grid 4 columnas en Desktop */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="max-lg:flex max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:gap-4 max-lg:pt-3 max-lg:pb-4 max-lg:scrollbar-none max-lg:px-2 lg:grid lg:grid-cols-4 lg:gap-5"
        >
          {ACCENTURE_CARDS.map((card, index) => {
            const isFlipped = activeCard === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setActiveCard(isFlipped ? null : card.id)}
                style={{
                  borderColor: isFlipped ? card.themeColor : undefined,
                  boxShadow: isFlipped
                    ? `0 16px 40px rgba(0,0,0,0.9), 0 0 20px ${card.themeColor}33`
                    : undefined,
                }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer select-none h-[500px] sm:h-[530px] flex-shrink-0 max-lg:w-[84vw] max-lg:max-w-[340px] max-lg:snap-center ${
                  isFlipped
                    ? "bg-[#0b0c14] border-2 shadow-2xl lg:-translate-y-1"
                    : "bg-[#08080c] border border-white/[0.08] hover:border-white/[0.22] hover:lg:-translate-y-1"
                }`}
              >
                {/* Subtle Radial Ambient Backlight */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${card.themeColor}18, transparent 75%)`,
                  }}
                />

                {/* ============================================================ */}
                {/* CARA 1: FRONTAL (Pregunta & Visual de Arte Abstracto)        */}
                {/* ============================================================ */}
                <div
                  className={`absolute inset-0 p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 ${
                    isFlipped
                      ? "opacity-0 pointer-events-none -translate-y-4 scale-95"
                      : "opacity-100 translate-y-0 scale-100"
                  }`}
                >
                  {/* Top: Category & Question (Tipografía editorial moderna en caja mixta) */}
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="typo-otros1 text-[11px] font-bold tracking-widest text-white/60 uppercase">
                        {card.category}
                      </span>
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: card.themeColor }}
                      />
                    </div>

                    <div className="font-modern-sans text-[16px] sm:text-[17px] font-bold text-white leading-snug tracking-normal">
                      {card.question}
                    </div>
                  </div>

                  {/* Center Graphic: Abstract Artwork Visual */}
                  <div className="relative w-full h-44 my-auto flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center opacity-90 group-hover:scale-105 transition-transform duration-700">
                      {card.visualType === "ribbon" && <AbstractRibbonVisual color={card.themeColor} />}
                      {card.visualType === "pathway" && <AbstractPathwayVisual color={card.themeColor} />}
                      {card.visualType === "vortex" && <AbstractVortexVisual color={card.themeColor} />}
                      {card.visualType === "schematic" && <AbstractSchematicVisual color={card.themeColor} />}
                    </div>
                  </div>

                  {/* Bottom Action Footer: Click Indicator to Flip Card */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="typo-botones text-xs text-white/80 group-hover:text-white transition-colors">
                      Ver respuesta técnica
                    </span>
                    <div
                      className="w-8 h-8 rounded-full border border-white/20 bg-white/[0.04] flex items-center justify-center text-white/80 group-hover:border-white/50 group-hover:text-white transition-all shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        add
                      </span>
                    </div>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* CARA 2: REVERSO CAMBIABLE (Respuesta Completa, Botón X y CTA)*/}
                {/* ============================================================ */}
                <div
                  className={`absolute inset-0 p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 ${
                    isFlipped
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 pointer-events-none translate-y-4 scale-95"
                  }`}
                >
                  {/* Top Bar: Category on Left, Dot on Right (Consistente con Cara 1) */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span
                      className="typo-otros1 text-[11px] font-bold tracking-widest uppercase font-mono"
                      style={{ color: card.themeColor }}
                    >
                      {card.category}
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: card.themeColor }}
                    />
                  </div>

                  {/* Middle Content: Question Headline & Complete Answer Description */}
                  <div className="space-y-3.5 my-auto overflow-y-auto pr-1 scrollbar-none">
                    <div className="font-modern-sans text-[15px] sm:text-[16px] font-bold text-white leading-snug">
                      {card.question}
                    </div>

                    <p className="typo-otros2 text-xs sm:text-sm text-white/85 leading-relaxed pl-3.5 border-l-2"
                      style={{ borderColor: card.themeColor }}
                    >
                      {card.answer}
                    </p>
                  </div>

                  {/* Bottom Action Footer: Direct CTA Button & Identical Bottom-Right Close Toggle */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <a
                      href="#agendamiento"
                      onClick={(e) => e.stopPropagation()}
                      className="typo-botones inline-flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors py-1.5"
                    >
                      <span>{card.ctaText}</span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </a>

                    {/* Botón de cierre en la misma posición inferior derecha para que el ícono no desaparezca bajo el dedo */}
                    <button
                      type="button"
                      aria-label="Cerrar respuesta"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCard(null);
                      }}
                      className="w-8 h-8 rounded-full bg-white/[0.12] hover:bg-white/[0.22] flex items-center justify-center text-white transition-all cursor-pointer border border-white/20 shadow-sm hover:scale-105"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        close
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carrusel Progress Bar (Estilo exacto Accenture.com) */}
        <div className="lg:hidden flex flex-col items-center justify-center gap-3 pt-2">
          {/* Track Bar with Sliding Indicator */}
          <div className="w-40 sm:w-52 h-1 bg-white/10 rounded-full relative overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-transform duration-200"
              style={{
                width: "25%",
                transform: `translateX(${scrollProgress * 300}%)`,
              }}
            />
          </div>

          {/* Step Pill Selectors for fast tapping */}
          <div className="flex items-center gap-2">
            {ACCENTURE_CARDS.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Ver solución ${i + 1}`}
                className="w-2.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    Math.round(scrollProgress * 3) === i
                      ? c.themeColor
                      : "rgba(255,255,255,0.2)",
                  width: Math.round(scrollProgress * 3) === i ? "20px" : "10px",
                }}
              />
            ))}
          </div>
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
