import React from "react";
import { BioTealShader } from "./bio-teal-shader";

export function StitchHero() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-12 pt-28 pb-16 min-h-screen min-h-[100dvh] overflow-hidden bg-surface-container-lowest flex items-center justify-center">
      {/* WebGL Interactive Kinetic Wave & Bio-Teal Noise Canvas */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <BioTealShader
          id="shader-canvas-HERO"
          className="w-full h-full block opacity-95"
          speedMultiplier={0.16}
        />
      </div>

      {/* Subtle Depth Vignette Overlays to blend shader smoothly with page structure */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-surface-container-lowest/30 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-0" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
        <div className="lg:col-span-12 max-w-5xl w-full space-y-6 text-left flex flex-col items-start">
          {/* Micro-badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container/90 backdrop-blur-md rounded-full border border-primary/30 text-primary font-code-sm text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>Ingeniería de Software &amp; Terreno // Chile</span>
          </div>

          {/* Responsive Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.08] font-bold text-on-surface tracking-tight text-left max-w-5xl drop-shadow-sm">
            Tu sitio web profesional y soporte de infraestructura,{" "}
            <span className="text-primary underline decoration-primary/40 underline-offset-8">
              sin dolores de cabeza.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body-md sm:font-body-lg text-base sm:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            Planes mensuales todo incluido: desarrollo web de alto rendimiento,
            dominio .cl, hosting ultrarrápido y soporte de ingeniería en terreno
            24/7 en Chile.
          </p>

          {/* Responsive Quick CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
            <a
              href="#planes-web"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-on-primary font-body-md font-bold rounded-xl shadow-[0_0_24px_rgba(0,229,163,0.3)] hover:bg-primary-fixed hover:scale-[1.02] transition-all text-center"
            >
              <span>Ver Planes Mensuales</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>

            <a
              href="#agendamiento"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-container/80 hover:bg-surface-bright text-on-surface font-body-md font-semibold rounded-xl border border-white/[0.08] transition-all text-center"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                calendar_month
              </span>
              <span>Agendar Reunión (Meet)</span>
            </a>
          </div>

          {/* Trust bullet badges */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs sm:text-sm text-on-surface-variant font-code-sm">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
              Sin contratos de amarre
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
              Dominio .cl propio incluido
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
              Trato directo por WhatsApp
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
