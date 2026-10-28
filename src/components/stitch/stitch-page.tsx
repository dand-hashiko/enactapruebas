import React from "react";
import { StitchNavbar } from "./stitch-navbar";
import { StitchHero } from "./stitch-hero";
import { StitchPricing } from "./stitch-pricing";
import { AccentureScrollShowcase } from "./accenture-scroll-showcase";
import { StitchServices } from "./stitch-services";
import { StitchBooking } from "./stitch-booking";
import { StitchFooter } from "./stitch-footer";
import { StitchFloatingWidget } from "./stitch-floating-widget";

/**
 * StitchPage — Layout principal de la landing page Enacta.cl
 *
 * ADR: Se reestructuró de 7 secciones a 4 bloques claros por solicitud
 * del usuario. Se removieron StitchPillars y StitchCaseStudies para
 * simplificar la navegación. La información de pilares se puede integrar
 * en la sección de servicios si se necesita en el futuro.
 *
 * Estructura de 4 secciones:
 *   1. Hero — Propuesta de valor con shader WebGL
 *   2. Planes/Pricing — Tabla de precios mensuales
 *   3. Equipo — Foto del equipo con efecto sticky
 *   4. Servicios & Contacto — Servicios + Agendamiento
 */
export function StitchPage() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen relative overflow-x-hidden">
      {/* Top Fixed Header Navbar */}
      <StitchNavbar />

      {/* Main Content: 4 Clear Sections */}
      <main className="w-full bg-background flex flex-col">
        {/* Section 1: Hero with WebGL Bio-Teal Canvas Shader */}
        <StitchHero />

        {/* Section 2: Planes Web Mensuales & Pricing Matrix */}
        <StitchPricing />

        {/* Section 3: Equipo — Foto completa sticky + texto */}
        <AccentureScrollShowcase />

        {/* Section 4: Servicios Integrales + Agendamiento Online */}
        <StitchServices />
        <StitchBooking />
      </main>

      {/* Footer */}
      <StitchFooter />

      {/* Floating Tactile Quick Contact Widget (Nike Style) */}
      <StitchFloatingWidget />
    </div>
  );
}
