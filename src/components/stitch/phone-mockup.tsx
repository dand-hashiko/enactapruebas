"use client";

import React, { useRef, useState, useEffect } from "react";
import { BioTealShader } from "./bio-teal-shader";

export function PhoneMockup() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 4, y: -6 });

  // Mouse parallax tilt effect for luxury 3D interactive feel (Gian Media Group style)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Smooth subtle tilt (-12 to +12 degrees)
      setRotate({
        x: Math.max(-10, Math.min(10, -deltaY * 12)),
        y: Math.max(-14, Math.min(14, deltaX * 14)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center py-6 select-none"
      style={{ perspective: 1200 }}
    >
      {/* Ambient Neon Bio-Teal Halo behind the phone */}
      <div className="absolute w-72 h-96 bg-primary/20 rounded-full blur-[80px] pointer-events-none -z-10 animate-pulse" />

      {/* 3D Phone Chassis */}
      <div
        className="relative w-[285px] sm:w-[315px] md:w-[335px] aspect-[9/18.5] rounded-[50px] p-3 transition-transform duration-300 ease-out shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_60px_rgba(0,229,163,0.28)]"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
          background:
            "linear-gradient(145deg, #2b2f3a 0%, #171920 40%, #0d0e12 100%)",
          border: "2px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        {/* Exterior Metallic Edge Bezel Highlight */}
        <div className="absolute inset-0 rounded-[48px] border border-white/10 pointer-events-none" />

        {/* Side physical buttons (simulated titanium buttons) */}
        <div className="absolute -left-[5px] top-24 w-[3px] h-9 bg-neutral-600 rounded-l" />
        <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-neutral-600 rounded-l" />
        <div className="absolute -left-[5px] top-52 w-[3px] h-12 bg-neutral-600 rounded-l" />
        <div className="absolute -right-[5px] top-32 w-[3px] h-16 bg-neutral-600 rounded-r" />

        {/* Phone Inner Screen Display */}
        <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-black flex flex-col justify-between border border-black shadow-inner">
          {/* Glass Gloss Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent pointer-events-none z-30" />

          {/* Dynamic Bio-Teal Shader Running Live Inside the Phone */}
          <div className="absolute inset-0 w-full h-full z-0">
            <BioTealShader
              id="shader-canvas-PHONE"
              className="w-full h-full block opacity-95"
              speedMultiplier={0.28}
            />
          </div>

          {/* Screen Vignette for UI Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 pointer-events-none z-10" />

          {/* Top Status Bar & Dynamic Island */}
          <div className="relative z-20 w-full pt-3 px-6 flex flex-col items-center">
            {/* Dynamic Island Pill */}
            <div className="w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5 shadow-md border border-white/[0.08]">
              <div className="w-2 h-2 rounded-full bg-[#181822]" />
              <div className="w-2 h-2 rounded-full bg-primary/80 animate-pulse" />
            </div>

            {/* Mobile OS Status Info */}
            <div className="w-full flex justify-between items-center text-[10px] text-white/80 font-code-sm pt-1">
              <span>14:30</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px]">5G</span>
                <span className="w-3.5 h-2 rounded-xs border border-white/70 relative flex items-center p-0.5">
                  <span className="w-full h-full bg-primary" />
                </span>
              </div>
            </div>
          </div>

          {/* Screen Content: ENACTA.CL Live Experience */}
          <div className="relative z-20 px-5 py-4 space-y-4 flex flex-col items-center text-center my-auto">
            {/* Brand Logo & Node Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-primary/40 text-[10px] text-primary font-code-sm uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Chile // Online</span>
            </div>

            {/* Big Brand Typography */}
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-jetbrains-mono tracking-tight drop-shadow-md">
                ENACTA<span className="text-primary">.CL</span>
              </div>
              <p className="text-[11px] text-white/90 leading-tight font-medium">
                Arquitectura de Software &amp; Terreno
              </p>
            </div>

            {/* Mini Metric Card inside screen */}
            <div className="w-full bg-black/75 backdrop-blur-md p-3 rounded-xl border border-white/[0.12] text-left space-y-1 shadow-lg">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-on-surface-variant font-code-sm">
                  // UPTIME SLA
                </span>
                <span className="text-primary text-xs font-bold font-jetbrains-mono">
                  99.9%
                </span>
              </div>
              <div className="text-[10px] text-white font-semibold">
                Sistemas sin detención en Chile
              </div>
            </div>

            {/* Interactive CTA buttons in Phone */}
            <div className="w-full space-y-1.5 pt-1">
              <a
                href="#planes-web"
                className="w-full block py-2.5 px-3 bg-primary text-black font-bold text-xs rounded-xl shadow-[0_0_20px_rgba(0,229,163,0.4)] hover:bg-primary-fixed transition-all"
              >
                Ver Planes Mensuales
              </a>
              <a
                href="https://wa.me/56995127788"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-2 px-3 bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold rounded-xl backdrop-blur-md border border-white/15 transition-all"
              >
                WhatsApp Directo
              </a>
            </div>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="relative z-20 pb-2 w-full flex justify-center">
            <div className="w-28 h-1 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
