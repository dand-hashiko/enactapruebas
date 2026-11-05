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
            <div className="w-full max-w-[720px] space-y-6 sm:space-y-7">
              {/* Dedicated TextView Component */}
              <HeroTextView />

              {/* Subtitle following the exact same line width boundary (Categoría: subtitulos) */}
              <p className="typo-subtitulos text-base sm:text-lg lg:text-[18px] xl:text-[19px] text-white/90 max-w-[650px] leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Unificamos desarrollo web de alto rendimiento, sistemas de gestión ERP a medida y despliegue de infraestructura física en terreno. Sin intermediarios.
              </p>
            </div>
          </div>

          {/* Right Column: 3D Smartphone Device Overlapping in Foreground (Calibrated position: red box) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-center w-full relative z-30 lg:-translate-x-3 xl:-translate-x-5">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
