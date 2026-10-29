import React from "react";
import { BioTealShader } from "./bio-teal-shader";
import { PhoneMockup } from "./phone-mockup";
import { HeroTextView } from "./hero-text-view";

export function StitchHero() {
  return (
    <section className="relative w-full px-5 sm:px-6 lg:px-12 pt-28 pb-16 min-h-screen flex flex-col justify-center bg-black overflow-hidden border-b border-white/[0.08]">
      {/* Dynamic Ambient Bio-Teal WebGL Shader in the Hero Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <BioTealShader
          id="shader-canvas-HERO"
          className="w-full h-full block opacity-95"
          speedMultiplier={0.22}
        />
      </div>

      {/* Subtle depth overlays preserving full background vibrancy */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-0" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Main Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12 pt-4">
        {/* Split Grid: Clean Editorial Headline & CTAs on Left, 3D Phone Mockup on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Focused Copy & Direct Actions (No clutter, Awwwards standard) */}
          <div className="lg:col-span-7 space-y-6 text-left flex flex-col items-start w-full">
            <div className="w-full max-w-[560px] space-y-6">
              {/* Dedicated TextView Component */}
              <HeroTextView />

              {/* Subtitle following the exact same line width boundary (Categoría: subtitulos) */}
              <p className="typo-subtitulos text-sm sm:text-base text-white/90 max-w-[540px] leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Unificamos desarrollo web de alto tráfico, software de gestión ERP y
                despliegue de fierro en terreno. Presencia física con ingenieros en Chile y
                soporte 24/7 sin intermediarios.
              </p>

              {/* Direct Call to Actions (Categoría: botones) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
                <a
                  href="#planes-web"
                  className="typo-botones inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-black font-bold rounded-xl shadow-[0_0_30px_rgba(0,229,163,0.4)] hover:bg-primary-fixed hover:scale-[1.02] transition-all text-center cursor-pointer text-sm"
                >
                  <span>Ver Planes Mensuales</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>

                <a
                  href="#agendamiento"
                  className="typo-botones inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black/80 hover:bg-black text-white font-semibold rounded-xl border border-white/[0.15] backdrop-blur-md shadow-lg transition-all text-center cursor-pointer text-sm"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    calendar_month
                  </span>
                  <span>Agendar Reunión (Meet 45 min)</span>
                </a>
              </div>

              {/* Minimalist Trust & Coverage Strip */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs typo-otros2 text-white/70">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span>Santiago &amp; Temuco (Cobertura Nacional)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[15px] text-primary">
                    verified
                  </span>
                  <span>SLA 99.9% en Producción</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Smartphone Device Overlapping in Foreground (lg:col-span-5) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end w-full relative z-30">
            <PhoneMockup />
          </div>
        </div>

        {/* Ticker de Métricas de Impacto con tarjetas traslúcidas de alta precisión */}
        <div className="pt-8 border-t border-white/[0.12] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Métrica 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#08080c]/80 backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 transition-all space-y-1.5 relative overflow-hidden group shadow-lg">
            <div className="flex items-center justify-between">
              <span className="typo-otros1 text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">
                DISPONIBILIDAD
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>
            <div className="typo-otros1 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight drop-shadow-sm">
              99.9%
            </div>
            <div className="typo-otros2 text-xs sm:text-sm text-white font-semibold">
              Uptime SLA en Producción
            </div>
            <div className="typo-otros2 text-[11px] sm:text-xs text-white/70">
              Monitoreo activo 24/7 sin caídas
            </div>
          </div>

          {/* Métrica 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#08080c]/80 backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 transition-all space-y-1.5 relative overflow-hidden group shadow-lg">
            <div className="flex items-center justify-between">
              <span className="typo-otros1 text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">
                LATENCIA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
            <div className="typo-otros1 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight drop-shadow-sm">
              &lt; 0.8s
            </div>
            <div className="typo-otros2 text-xs sm:text-sm text-white font-semibold">
              Velocidad de Carga en Chile
            </div>
            <div className="typo-otros2 text-[11px] sm:text-xs text-white/70">
              Next.js + Vercel Edge CDN
            </div>
          </div>

          {/* Métrica 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#08080c]/80 backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 transition-all space-y-1.5 relative overflow-hidden group shadow-lg">
            <div className="flex items-center justify-between">
              <span className="typo-otros1 text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">
                OPERACIÓN
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
            <div className="typo-otros1 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight drop-shadow-sm">
              100%
            </div>
            <div className="typo-otros2 text-xs sm:text-sm text-white font-semibold">
              Presencia Física RM &amp; Sur
            </div>
            <div className="typo-otros2 text-[11px] sm:text-xs text-white/70">
              Cableado, racks y servidores
            </div>
          </div>

          {/* Métrica 4 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#08080c]/80 backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 transition-all space-y-1.5 relative overflow-hidden group shadow-lg">
            <div className="flex items-center justify-between">
              <span className="typo-otros1 text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">
                CONTINUIDAD
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>
            <div className="typo-otros1 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight drop-shadow-sm">
              0 Caídas
            </div>
            <div className="typo-otros2 text-xs sm:text-sm text-white font-semibold">
              Modo Offline Automático
            </div>
            <div className="typo-otros2 text-[11px] sm:text-xs text-white/70">
              Sistemas que no paran sin internet
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
