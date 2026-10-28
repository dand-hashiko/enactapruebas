import React from "react";
import { BioTealShader } from "./bio-teal-shader";

export function StitchHero() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-12 pt-28 pb-16 min-h-screen flex flex-col justify-center bg-black overflow-hidden border-b border-white/[0.08]">
      {/* Subtle Ambient Shader with smooth opacity for pure black contrast */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
        <BioTealShader
          id="shader-canvas-HERO"
          className="w-full h-full block"
          speedMultiplier={0.12}
        />
      </div>

      {/* Pure Black Vignette Overlays for crisp readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-0" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Main Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-8 pt-4">
        <div className="max-w-5xl space-y-6 text-left flex flex-col items-start">
          {/* Micro-badge de código / terminal */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0d0d12] rounded-full border border-primary/30 text-primary font-code-sm text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>// ARQUITECTURA DE SOFTWARE &amp; HARDWARE EN TERRENO</span>
          </div>

          {/* Responsive Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] leading-[1.08] font-bold text-white tracking-tight text-left max-w-5xl">
            Tu sitio web profesional y soporte de infraestructura,{" "}
            <span className="text-primary underline decoration-primary/40 underline-offset-8">
              sin dolores de cabeza.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body-md sm:font-body-lg text-base sm:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            Suscripción mensual transparente con desarrollo web de alta velocidad,
            dominio .cl, hosting administrado y soporte de ingeniería en terreno
            24/7 para empresas en Chile.
          </p>

          {/* Direct Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
            <a
              href="#planes-web"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-black font-body-md font-bold rounded-xl shadow-[0_0_24px_rgba(0,229,163,0.3)] hover:bg-primary-fixed hover:scale-[1.02] transition-all text-center"
            >
              <span>Ver Planes Mensuales</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </a>

            <a
              href="#agendamiento"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#111116] hover:bg-[#1a1a22] text-white font-body-md font-semibold rounded-xl border border-white/[0.1] transition-all text-center"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                calendar_month
              </span>
              <span>Agendar Reunión (Meet 45 min)</span>
            </a>
          </div>
        </div>

        {/* Ticker de Métricas de Impacto (Estilo Accenture) */}
        <div className="pt-10 mt-6 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Métrica 1 */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-jetbrains-mono tracking-tight">
              99.9%
            </div>
            <div className="text-xs sm:text-sm text-white font-semibold">
              Uptime SLA en Producción
            </div>
            <div className="text-[11px] sm:text-xs text-on-surface-variant font-code-sm">
              Monitoreo activo 24/7 sin caídas
            </div>
          </div>

          {/* Métrica 2 */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-jetbrains-mono tracking-tight">
              &lt; 0.8s
            </div>
            <div className="text-xs sm:text-sm text-white font-semibold">
              Velocidad de Carga en Chile
            </div>
            <div className="text-[11px] sm:text-xs text-on-surface-variant font-code-sm">
              Next.js + Vercel Edge CDN
            </div>
          </div>

          {/* Métrica 3 */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-jetbrains-mono tracking-tight">
              Terreno
            </div>
            <div className="text-xs sm:text-sm text-white font-semibold">
              Presencia Física RM &amp; Sur
            </div>
            <div className="text-[11px] sm:text-xs text-on-surface-variant font-code-sm">
              Cableado, racks y switches industriales
            </div>
          </div>

          {/* Métrica 4 */}
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-jetbrains-mono tracking-tight">
              0 Amarres
            </div>
            <div className="text-xs sm:text-sm text-white font-semibold">
              Propiedad 100% de tu Empresa
            </div>
            <div className="text-[11px] sm:text-xs text-on-surface-variant font-code-sm">
              Dominio .cl y código siempre tuyos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
