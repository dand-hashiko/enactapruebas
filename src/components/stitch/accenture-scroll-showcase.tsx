"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

/**
 * AccentureScrollShowcase — Sección "Equipo"
 *
 * Rediseñada para mostrar la imagen completa (sin recorte ni espacio negro)
 * con efecto sticky: la imagen permanece fija mientras el texto del lado
 * derecho se revela al hacer scroll.
 *
 * ADR: Se removió la lógica de "shrink width" tipo Accenture porque causaba
 * un espacio negro debajo y la imagen se veía recortada. Ahora se usa un
 * sticky simple donde la imagen ocupa la columna izquierda completa con
 * aspect-ratio natural, y el contenido derecho aparece con fade-in
 * controlado por IntersectionObserver (más eficiente que scroll listeners).
 */

function useInViewFade(threshold = 0.25) {
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
  const textFade = useInViewFade(0.2);

  return (
    <section
      className="relative w-full bg-surface-container-lowest border-t border-b border-primary/15"
      id="equipo"
    >
      {/* Subtle Ambient Background Vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-12">
        {/* Mobile Layout: stacked */}
        <div className="lg:hidden py-10 space-y-6">
          {/* Image — 16:9 exact natural aspect ratio matching enacta4.jpg (4128x2322) */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-[0_0_50px_rgba(0,229,163,0.18)] bg-surface-container-high">
            <Image
              alt="Equipo Enacta: Daniel Díaz, Paola Huenuman y equipo técnico"
              className="object-cover object-center w-full h-full"
              src="/images/enacta4.jpg"
              fill
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Cursive quote */}
          <p className="font-cursive text-primary text-2xl sm:text-3xl tracking-wide select-none">
            &ldquo;Ingeniería en terreno para sistemas que no se pueden
            detener&rdquo;
          </p>

          {/* Text content */}
          <div className="space-y-4">
            <TeamTextContent />
          </div>
        </div>

        {/* Desktop Layout: two-column sticky */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 py-16 items-start">
          {/* Left Column: Sticky image — stays pinned while scrolling */}
          <div className="lg:col-span-7 relative">
            <div className="sticky top-28">
              {/* Image container — exact 16:9 ratio, displays full image */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-[0_0_50px_rgba(0,229,163,0.18)] bg-surface-container-high">
                <Image
                  alt="Equipo Enacta: Daniel Díaz, Paola Huenuman y equipo técnico"
                  className="object-cover object-center w-full h-full"
                  src="/images/enacta4.jpg"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Cursive quote below image */}
              <p className="pt-4 font-cursive text-primary text-2xl sm:text-3xl lg:text-4xl tracking-wide select-none">
                &ldquo;Ingeniería en terreno para sistemas que no se pueden
                detener&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Scrollable text that triggers reveal */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            <div
              ref={textFade.ref}
              className="space-y-4 transition-all duration-700 ease-out"
              style={{
                opacity: textFade.isVisible ? 1 : 0,
                transform: textFade.isVisible
                  ? "translate3d(0, 0, 0)"
                  : "translate3d(0, 40px, 0)",
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

/**
 * TeamTextContent — Contenido de texto reutilizado en mobile y desktop.
 * Extraído como componente separado (regla de componentización recursiva)
 * para evitar duplicación.
 */
function TeamTextContent() {
  return (
    <>
      {/* Micro-label */}
      <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded border border-primary/30 text-primary font-code-sm text-code-sm uppercase tracking-wider w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span>{"// LIDERAZGO & EQUIPO HUMANO"}</span>
      </div>

      {/* Main Headline */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold text-on-surface leading-[1.14] tracking-tight">
        Arquitectura de sistemas en el{" "}
        <span className="text-primary underline decoration-primary/40 underline-offset-8">
          corazón de tu negocio
        </span>
      </h2>

      {/* Body */}
      <p className="font-body-sm sm:font-body-md text-on-surface-variant leading-relaxed">
        No somos una agencia distante ni tercerizamos tus requerimientos. Daniel
        Díaz, Paola Huenuman y nuestro equipo de ingenieros diseñan, cablean y
        programan infraestructura de software y hardware con presencia física y
        soporte 24/7 en Chile.
      </p>

      {/* Team Badges */}
      <div className="space-y-2 pt-1 font-body-sm text-body-sm">
        <div className="p-space-xs bg-surface-container/90 rounded border border-white/[0.04] flex items-center justify-between">
          <span className="text-on-surface font-semibold text-xs sm:text-sm">
            Daniel Díaz
          </span>
          <span className="text-on-surface-variant font-code-sm text-[11px]">
            Lead Software Architect &amp; Infra
          </span>
        </div>
        <div className="p-space-xs bg-surface-container/90 rounded border border-white/[0.04] flex items-center justify-between">
          <span className="text-on-surface font-semibold text-xs sm:text-sm">
            Paola Huenuman
          </span>
          <span className="text-on-surface-variant font-code-sm text-[11px]">
            Client Operations Partner
          </span>
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-2 flex items-center gap-space-sm">
        <a
          className="inline-flex items-center gap-2 group font-body-md font-semibold text-on-surface hover:text-primary transition-colors"
          href="#agendamiento"
        >
          <span className="underline decoration-primary/40 group-hover:decoration-primary underline-offset-4 text-sm sm:text-base">
            Agendar reunión con ingeniería
          </span>
          <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center group-hover:scale-105 group-hover:bg-primary-fixed transition-all shadow-[0_0_14px_rgba(0,229,163,0.3)]">
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
