"use client";

import React, { useRef, useState, useEffect } from "react";
import { BioTealShader } from "./bio-teal-shader";
import Image from "next/image";

export function PhoneMockup() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 4, y: -8 });

  // 3D Parallax tilt effect responding smoothly to mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Smooth subtle tilt
      setRotate({
        x: Math.max(-12, Math.min(12, -deltaY * 14)),
        y: Math.max(-16, Math.min(16, deltaX * 16)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center py-4 select-none z-30 animate-float-device"
      style={{ perspective: 1400 }}
    >
      {/* Intense Ambient Neon Bio-Teal Halo behind the floating device */}
      <div className="absolute w-80 h-[500px] bg-primary/25 rounded-full blur-[90px] pointer-events-none -z-10 animate-pulse" />

      {/* 3D Smartphone Device Mockup ("Como por encima" with deep 3D drop-shadows) */}
      <div
        className="relative w-[295px] sm:w-[330px] md:w-[350px] aspect-[9/18.8] rounded-[52px] p-3.5 transition-transform duration-300 ease-out shadow-[0_35px_80px_-15px_rgba(0,0,0,0.98),0_0_70px_rgba(0,229,163,0.35)]"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
          background:
            "linear-gradient(145deg, #3a3f4e 0%, #1e212b 25%, #0f1117 65%, #050608 100%)",
          border: "2.5px solid rgba(255, 255, 255, 0.22)",
        }}
      >
        {/* Exterior Metallic Edge Bezel Highlight & Volume Buttons */}
        <div className="absolute inset-0 rounded-[50px] border border-white/15 pointer-events-none" />

        {/* Left Side Buttons (Volume & Action button) */}
        <div className="absolute -left-[5px] top-24 w-[3.5px] h-8 bg-[#444a59] rounded-l-sm shadow-sm" />
        <div className="absolute -left-[5px] top-36 w-[3.5px] h-12 bg-[#444a59] rounded-l-sm shadow-sm" />
        <div className="absolute -left-[5px] top-52 w-[3.5px] h-12 bg-[#444a59] rounded-l-sm shadow-sm" />

        {/* Right Side Power Button */}
        <div className="absolute -right-[5px] top-32 w-[3.5px] h-16 bg-[#444a59] rounded-r-sm shadow-sm" />

        {/* Phone Screen Display */}
        <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-black flex flex-col justify-between border border-black shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
          {/* Glass Gloss Reflection across the screen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none z-40" />

          {/* Dynamic Bio-Teal Shader Running Live Inside the Phone */}
          <div className="absolute inset-0 w-full h-full z-0">
            <BioTealShader
              id="shader-canvas-PHONE"
              className="w-full h-full block opacity-95"
              speedMultiplier={0.26}
            />
          </div>

          {/* Screen Vignette for perfect text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/85 pointer-events-none z-10" />

          {/* TOP AREA: Dynamic Island & Mobile OS Status Bar */}
          <div className="relative z-20 w-full pt-3 px-6 flex flex-col items-center">
            {/* Dynamic Island Pill with Camera Cutout */}
            <div className="w-28 h-6 bg-black rounded-full flex items-center justify-between px-3 shadow-md border border-white/[0.1]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#12131a] flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#1a2030]" />
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[8px] font-code-sm text-primary font-bold">5G</span>
              </div>
            </div>

            {/* Mobile Browser URL Pill showing "enacta.cl" */}
            <div className="w-full mt-2.5 py-1 px-3 bg-black/85 backdrop-blur-md rounded-full border border-white/[0.15] flex items-center justify-center gap-1.5 shadow-md">
              <span className="material-symbols-outlined text-[12px] text-primary">
                lock
              </span>
              <span className="font-code-sm text-[11px] font-bold text-white tracking-wider">
                enacta.cl
              </span>
            </div>
          </div>

          {/* CENTER SCREEN: ENACTA.CL Live Brand Experience */}
          <div className="relative z-20 px-5 py-3 space-y-3.5 flex flex-col items-center text-center my-auto">
            {/* Logo Icon & Status Badge */}
            <div className="flex items-center gap-2">
              <div className="relative h-6 w-6">
                <Image
                  alt="Enacta"
                  className="h-6 w-auto object-contain"
                  src="/images/enacta-logo.png"
                  width={24}
                  height={24}
                />
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-black/80 backdrop-blur-md rounded-full border border-primary/40 text-[9px] text-primary font-code-sm uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>Chile // Terreno 24/7</span>
              </div>
            </div>

            {/* Hero Brand Title inside Phone */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-black text-white font-jetbrains-mono tracking-tight drop-shadow-md">
                ENACTA<span className="text-primary">.CL</span>
              </h2>
              <p className="text-[11px] text-white/90 leading-tight font-medium max-w-[220px]">
                Tu sitio web profesional y soporte sin dolores de cabeza.
              </p>
            </div>

            {/* Metric Preview Card */}
            <div className="w-full bg-black/80 backdrop-blur-md p-2.5 rounded-xl border border-white/[0.12] text-left space-y-1 shadow-lg">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-on-surface-variant font-code-sm">
                  // DISPONIBILIDAD
                </span>
                <span className="text-primary font-bold font-jetbrains-mono">
                  99.9% SLA
                </span>
              </div>
              <div className="text-[10px] text-white font-semibold">
                Sistemas en Terreno &amp; Cloud Dedicado
              </div>
            </div>

            {/* Interactive Quick Buttons */}
            <div className="w-full space-y-1.5 pt-1">
              <a
                href="#planes-web"
                className="w-full block py-2 px-3 bg-primary text-black font-bold text-xs rounded-xl shadow-[0_0_20px_rgba(0,229,163,0.4)] hover:bg-primary-fixed transition-all"
              >
                Ver Planes Mensuales
              </a>
              <a
                href="https://wa.me/56995127788"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-1.5 px-3 bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold rounded-xl backdrop-blur-md border border-white/15 transition-all"
              >
                WhatsApp Directo
              </a>
            </div>
          </div>

          {/* BOTTOM HOME INDICATOR BAR */}
          <div className="relative z-20 pb-2 w-full flex justify-center">
            <div className="w-28 h-1 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
