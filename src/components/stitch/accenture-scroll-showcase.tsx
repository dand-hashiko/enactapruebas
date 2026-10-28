"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

function useInViewFade(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return { ref, isVisible };
}

export function AccentureScrollShowcase() {
  const textFade = useInViewFade(0.15);

  return (
    <section
      className="relative w-full bg-black border-b border-white/[0.08]"
      id="equipo"
    >
      <div className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-12">
        {/* Mobile Layout: stacked */}
        <div className="lg:hidden py-12 space-y-6">
          {/* Image — 16:9 exact natural aspect ratio matching enacta4.jpg (4128x2322) */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl bg-black">
            <Image
              alt="Equipo Enacta: Daniel Díaz, Paola Huenuman y equipo técnico"
              className="object-cover object-center w-full h-full"
              src="/images/enacta4.jpg"
              fill
              priority
              sizes="100vw"
            />
          </div>

          {/* Cursive quote */}
          <p className="font-cursive text-primary text-2xl sm:text-3xl tracking-wide select-none">
            &ldquo;Ingeniería en terreno para sistemas que no se pueden detener&rdquo;
          </p>

          {/* Text content */}
          <div className="space-y-4">
            <TeamTextContent />
          </div>
        </div>

        {/* Desktop Layout: two-column sticky */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 lg:gap-14 py-20 items-start">
          {/* Left Column: Sticky image — stays pinned while scrolling */}
          <div className="lg:col-span-7 relative">
            <div className="sticky top-28 space-y-4">
              {/* Image container — exact 16:9 ratio, displays full image */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-[0_0_50px_rgba(0,229,163,0.12)] bg-black">
                <Image
                  alt="Equipo Enacta: Daniel Díaz, Paola Huenuman y equipo técnico"
                  className="object-cover object-center w-full h-full"
                  src="/images/enacta4.jpg"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>

              {/* Cursive quote below image */}
              <p className="pt-2 font-cursive text-primary text-2xl sm:text-3xl lg:text-4xl tracking-wide select-none">
                &ldquo;Ingeniería en terreno para sistemas que no se pueden detener&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Scrollable text that triggers reveal */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            <div
              ref={textFade.ref}
              className="space-y-5 transition-all duration-700 ease-out"
              style={{
                opacity: textFade.isVisible ? 1 : 0,
                transform: textFade.isVisible
                  ? "translate3d(0, 0, 0)"
                  : "translate3d(0, 30px, 0)",
              }}
            >
              <TeamTextContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamTextContent() {
  return (
    <>
      {/* Micro-label (Categoría: otros1) */}
      <div className="typo-otros1 inline-flex items-center gap-2 px-3 py-1 bg-[#101015] rounded-full border border-primary/30 text-primary text-xs uppercase tracking-wider w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span>// LIDERAZGO &amp; EQUIPO HUMANO</span>
      </div>

      {/* Main Headline (Categoría: titulos) */}
      <h2 className="typo-titulos text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] text-white leading-[1.12] tracking-tight">
        Arquitectura de sistemas en el{" "}
        <span className="text-primary underline decoration-primary/40 underline-offset-8">
          corazón de tu negocio
        </span>
      </h2>

      {/* Body (Categoría: subtitulos) */}
      <p className="typo-subtitulos text-sm sm:text-base text-on-surface-variant leading-relaxed">
        No somos una agencia distante que delega requerimientos a terceros. Daniel
        Díaz, Paola Huenuman y nuestro equipo de ingenieros diseñan, cablean y
        programan infraestructura de software y hardware con presencia física y
        soporte 24/7 en Chile.
      </p>

      {/* Team Badges (Categoría: otros2 y otros1) */}
      <div className="space-y-2.5 pt-1">
        <div className="p-3 bg-[#0a0a0e] rounded-xl border border-white/[0.06] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="typo-titulos text-white font-bold text-sm">Daniel Díaz</span>
            <span className="typo-otros2 text-on-surface-variant text-xs">Santiago &amp; Temuco</span>
          </div>
          <span className="typo-otros1 text-primary text-xs px-2.5 py-1 bg-primary/10 rounded border border-primary/20">
            Lead Software Architect &amp; Infra
          </span>
        </div>

        <div className="p-3 bg-[#0a0a0e] rounded-xl border border-white/[0.06] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="typo-titulos text-white font-bold text-sm">Paola Huenuman</span>
            <span className="typo-otros2 text-on-surface-variant text-xs">Gestión y Despliegue</span>
          </div>
          <span className="typo-otros1 text-primary text-xs px-2.5 py-1 bg-primary/10 rounded border border-primary/20">
            Client Operations Partner
          </span>
        </div>
      </div>

      {/* Action CTA (Categoría: botones) */}
      <div className="pt-2 flex items-center gap-3">
        <a
          className="typo-botones inline-flex items-center gap-2 group font-semibold text-white hover:text-primary transition-colors"
          href="#agendamiento"
        >
          <span className="underline decoration-primary/40 group-hover:decoration-primary underline-offset-4 text-sm sm:text-base">
            Agendar reunión directa con ingeniería
          </span>
          <div className="w-8 h-8 rounded-lg bg-primary text-black flex items-center justify-center group-hover:scale-105 group-hover:bg-primary-fixed transition-all shadow-[0_0_14px_rgba(0,229,163,0.3)]">
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
