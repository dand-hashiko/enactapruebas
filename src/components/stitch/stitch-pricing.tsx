"use client";

import React, { useState } from "react";
import { SpotlightCard } from "./spotlight-card";

export function StitchPricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const prices = {
    plan1: isAnnual ? "$16.650" : "$19.990",
    plan2: isAnnual ? "$24.990" : "$29.990",
    plan3: isAnnual ? "$41.650" : "$49.990",
  };

  return (
    <section
      className="relative w-full px-4 sm:px-6 lg:px-12 py-20 sm:py-28 bg-black overflow-hidden border-b border-white/[0.08]"
      id="planes-web"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="typo-otros1 inline-flex items-center gap-2 px-3 py-1 bg-[#101015] rounded-full text-primary text-xs border border-primary/20">
            <span className="material-symbols-outlined text-[14px]">tune</span>
            <span>// PLANES MENSUALES CON MANTENCIÓN PROACTIVA</span>
          </div>
          <h2 className="typo-titulos text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Tu presencia digital sin pagar fortunas por adelantado
          </h2>
          <p className="typo-subtitulos text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto">
            Suscripción mensual fija sin letras chicas. Incluye desarrollo web de alto impacto,
            dominio .cl, hosting ultra veloz y horas mensuales de cambios con ingenieros en Chile.
          </p>

          {/* Toggle Switch Mensual / Anual (Categoría: botones) */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`typo-botones text-xs sm:text-sm transition-colors cursor-pointer ${
                !isAnnual
                  ? "font-bold text-primary"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              Facturación Mensual
            </button>
            <button
              aria-label="Cambiar periodo de facturación"
              className="w-14 h-8 bg-[#181820] rounded-full p-1 transition-colors relative cursor-pointer border border-white/[0.1]"
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div
                className={`w-6 h-6 bg-primary rounded-full transition-transform transform ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`typo-botones text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer ${
                isAnnual
                  ? "font-bold text-primary"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              <span>Pago Anual</span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/30 rounded-full text-[10px] font-bold">
                2 meses gratis
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Matrix with Spotlight Cards (Gian Media Group style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
          {/* CARD 1: Landing Inicial */}
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="typo-otros1 text-xs text-primary uppercase tracking-wider font-semibold">
                  // PLAN 01
                </span>
                <span className="typo-otros1 text-xs px-2.5 py-0.5 bg-[#14141c] rounded text-on-surface-variant border border-white/[0.04]">
                  5 días hábiles
                </span>
              </div>
              <h3 className="typo-titulos text-xl sm:text-2xl text-white">
                Landing Inicial / Emprendedor
              </h3>
              <p className="typo-subtitulos text-sm text-on-surface-variant leading-relaxed">
                Ideal para profesionales independientes, consultores y pymes
                que necesitan capturar clientes por WhatsApp hoy.
              </p>

              {/* Price Container */}
              <div className="p-4 bg-black/90 rounded-xl border border-white/[0.06] space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="typo-otros1 text-primary text-3xl sm:text-4xl font-bold">
                    {prices.plan1}
                  </span>
                  <span className="typo-otros2 text-xs text-on-surface-variant">
                    CLP / mes
                  </span>
                </div>
                <div className="typo-otros2 text-[11px] text-on-surface-variant">
                  {isAnnual ? "Facturado anualmente ($166.500/año)" : "o desde $29.990 inicial llave en mano"}
                </div>
              </div>

              {/* Features List (Categoría: otros2) */}
              <ul className="typo-otros2 space-y-2.5 text-sm text-white pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>Landing page de <strong>hasta 6 secciones</strong> responsivas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span><strong>Dominio .cl propio incluido</strong> y configurado</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>Hosting ultrarrápido con <strong>Certificado SSL</strong> bancario</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>Botón directo de WhatsApp flotante + Formulario</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>SEO técnico base para indexación en Google</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span><strong>45 minutos/mes</strong> de soporte y cambios menores</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                className="typo-botones w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#14141c] hover:bg-[#1e1e28] text-white font-semibold rounded-xl border border-white/[0.08] transition-all"
                href="https://wa.me/56995127788?text=Hola%20Enacta,%20me%20interesa%20contratar%20el%20Plan%20Inicial%20Landing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Contratar Plan Inicial</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </SpotlightCard>

          {/* CARD 2: Pyme Corporativa (DESTACADA) */}
          <SpotlightCard
            spotlightColor="rgba(0, 229, 163, 0.25)"
            className="p-6 sm:p-8 flex flex-col justify-between border-2 border-primary/50 shadow-2xl shadow-[0_0_40px_rgba(0,229,163,0.14)] relative"
          >
            {/* Top badge */}
            <div className="typo-otros1 absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-black text-xs font-bold rounded-full shadow-lg uppercase tracking-wider z-20">
              MÁS ELEGIDO POR EMPRESAS
            </div>

            <div className="space-y-4 pt-1">
              <div className="flex justify-between items-center">
                <span className="typo-otros1 text-xs text-primary uppercase tracking-wider font-semibold">
                  // PLAN 02
                </span>
                <span className="typo-otros1 text-xs px-2.5 py-0.5 bg-primary/10 text-primary rounded border border-primary/20">
                  10 días hábiles
                </span>
              </div>
              <h3 className="typo-titulos text-xl sm:text-2xl text-white">
                Pyme Corporativa &amp; Catálogo
              </h3>
              <p className="typo-subtitulos text-sm text-on-surface-variant leading-relaxed">
                Diseñado para empresas de servicios, constructoras, maestranzas o
                consultoras que requieren credibilidad absoluta y catálogo interactivo.
              </p>

              {/* Price Container */}
              <div className="p-4 bg-black/90 rounded-xl border border-primary/25 space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="typo-otros1 text-primary text-3xl sm:text-4xl font-bold">
                    {prices.plan2}
                  </span>
                  <span className="typo-otros2 text-xs text-on-surface-variant">
                    CLP / mes
                  </span>
                </div>
                <div className="typo-otros2 text-[11px] text-primary">
                  {isAnnual ? "Facturado anualmente ($249.900/año)" : "Todo lo del Plan Inicial y soporte ampliado"}
                </div>
              </div>

              {/* Features List (Categoría: otros2) */}
              <ul className="typo-otros2 space-y-2.5 text-sm text-white pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    verified
                  </span>
                  <span><strong>Hasta 5 páginas completas</strong> (Inicio, Nosotros, Servicios, etc.)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    verified
                  </span>
                  <span><strong>Catálogo interactivo</strong> de productos o servicios</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    verified
                  </span>
                  <span><strong>3 correos corporativos</strong> (@tuempresa.cl) dedicados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    verified
                  </span>
                  <span>Optimización de ficha en <strong>Google Business Profile</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    verified
                  </span>
                  <span>Reporte mensual de rendimiento y visitantes reales</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    verified
                  </span>
                  <span><strong>2 horas al mes</strong> de soporte técnico y cambios</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                className="typo-botones w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-primary text-black font-bold rounded-xl shadow-[0_0_20px_rgba(0,229,163,0.3)] hover:bg-primary-fixed hover:scale-[1.01] transition-all"
                href="https://wa.me/56995127788?text=Hola%20Enacta,%20quiero%20el%20Plan%20Pyme%20Corporativa%20de%20$29.990"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Elegir Plan Pyme</span>
                <span className="material-symbols-outlined text-[18px]">
                  rocket_launch
                </span>
              </a>
            </div>
          </SpotlightCard>

          {/* CARD 3: E-Commerce & Plataforma */}
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="typo-otros1 text-xs text-primary uppercase tracking-wider font-semibold">
                  // PLAN 03
                </span>
                <span className="typo-otros1 text-xs px-2.5 py-0.5 bg-[#14141c] rounded text-on-surface-variant border border-white/[0.04]">
                  15 días hábiles
                </span>
              </div>
              <h3 className="typo-titulos text-xl sm:text-2xl text-white">
                E-Commerce &amp; Plataforma
              </h3>
              <p className="typo-subtitulos text-sm text-on-surface-variant leading-relaxed">
                Comercio online de alta velocidad integrado a pasarelas de pago
                chilenas (Webpay / Transbank) y listo para sincronizar bodega.
              </p>

              {/* Price Container */}
              <div className="p-4 bg-black/90 rounded-xl border border-white/[0.06] space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="typo-otros1 text-primary text-3xl sm:text-4xl font-bold">
                    {prices.plan3}
                  </span>
                  <span className="typo-otros2 text-xs text-on-surface-variant">
                    CLP / mes
                  </span>
                </div>
                <div className="typo-otros2 text-[11px] text-on-surface-variant">
                  {isAnnual ? "Facturado anualmente ($416.500/año)" : "Tienda con Webpay y stock sincronizado"}
                </div>
              </div>

              {/* Features List (Categoría: otros2) */}
              <ul className="typo-otros2 space-y-2.5 text-sm text-white pt-2">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>Tienda online configurada con <strong>hasta 100 productos</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>Pasarelas <strong>Webpay Plus, Transbank &amp; MercadoPago</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>Cálculo de envíos por Starken, Chilexpress o Blue Express</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>Sincronización con <strong>software de stock y boletas</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span><strong>5 correos corporativos</strong> dedicados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span><strong>4 horas al mes</strong> de soporte técnico y cambios</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                className="typo-botones w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#14141c] hover:bg-[#1e1e28] text-white font-semibold rounded-xl border border-white/[0.08] transition-all"
                href="https://wa.me/56995127788?text=Hola%20Enacta,%20quiero%20el%20Plan%20E-Commerce%20y%20Plataforma%20de%20$49.990"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Elegir Plan E-Commerce</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </SpotlightCard>
        </div>

        {/* Legal & Transparent Notice */}
        <div className="p-4 bg-[#0a0a0d] rounded-xl text-center text-xs sm:text-sm text-on-surface-variant flex flex-col md:flex-row items-center justify-center gap-2 border border-white/[0.06]">
          <span className="material-symbols-outlined text-primary text-[18px]">
            verified_user
          </span>
          <span>
            Valores netos + IVA en caso de requerir factura. Sin cláusulas de amarre:
            el dominio y el código siempre son 100% de tu propiedad.
          </span>
        </div>
      </div>
    </section>
  );
}
