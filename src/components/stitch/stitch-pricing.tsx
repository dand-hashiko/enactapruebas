"use client";

import React, { useState } from "react";

export function StitchPricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const prices = {
    plan1: isAnnual ? "$16.650" : "$19.990",
    plan2: isAnnual ? "$24.990" : "$29.990",
    plan3: isAnnual ? "$41.650" : "$49.990",
  };

  return (
    <section
      className="relative w-full px-space-md lg:px-margin-desktop py-space-xl bg-gradient-to-b from-surface via-surface-container-low to-surface overflow-hidden border-t border-b border-primary/10"
      id="planes-web"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto space-y-space-lg relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-space-xs">
          <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded text-primary font-code-sm text-code-sm">
            <span className="material-symbols-outlined text-[14px]">tune</span>
            <span>PLANES WEB CON MANTENCIÓN PROACTIVA</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">
            Tu presencia digital sin pagar fortunas por adelantado
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Paga una suscripción mensual fija sin letras chicas. Incluye desarrollo,
            dominio .cl, hosting ultra veloz y horas mensuales de cambios y
            soporte con nosotros.
          </p>

          {/* Toggle Switch Mensual / Anual */}
          <div className="pt-space-sm flex items-center justify-center gap-space-sm">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`font-code-md text-code-md transition-colors ${
                !isAnnual
                  ? "font-semibold text-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Mensual
            </button>
            <button
              aria-label="Cambiar periodo de facturación"
              className="w-14 h-8 bg-surface-container-high rounded-full p-1 transition-colors relative cursor-pointer"
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
              className={`font-code-md text-code-md flex items-center gap-1.5 transition-colors ${
                isAnnual
                  ? "font-semibold text-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span>Anual</span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-[10px] font-bold">
                2 meses gratis
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Matrix (3 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg pt-space-sm">
          {/* CARD 1: Landing Inicial */}
          <div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-lg relative transition-all hover:-translate-y-1 border border-white/[0.04] hover:border-primary/20">
            <div className="space-y-space-sm">
              <div className="flex justify-between items-center">
                <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">
                  Plan 01 // Solistas &amp; Pymes
                </span>
                <span className="font-code-sm text-code-sm px-2 py-0.5 bg-surface-container-high rounded text-on-surface">
                  5 días hábiles
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                Landing Inicial / Emprendedor
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Ideal para profesionales independientes, consultores y emprendedores
                que necesitan capturar clientes por WhatsApp hoy.
              </p>

              {/* Price Container */}
              <div className="p-space-sm bg-surface-container-lowest rounded space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-primary font-headline-xl font-bold">
                    {prices.plan1}
                  </span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    CLP / mes
                  </span>
                </div>
                <div className="font-code-sm text-code-sm text-on-surface-variant">
                  {isAnnual ? "Facturado anualmente ($166.500/año)" : "o desde $29.990 inicial llave en mano"}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface pt-space-xs">
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    Landing page de <strong>hasta 6 secciones</strong> responsivas
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    <strong>Dominio .cl propio incluido</strong> y configurado
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    Hosting ultrarrápido con <strong>Certificado SSL</strong>
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>Botón directo de WhatsApp flotante + Formulario</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>SEO técnico base para indexación en Google</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    <strong>45 minutos/mes</strong> de soporte y cambios menores
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-space-md">
              <a
                className="w-full inline-flex items-center justify-center gap-space-xs py-3 px-space-md bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-md font-semibold rounded transition-all"
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
          </div>

          {/* CARD 2: Pyme Corporativa (DESTACADA) */}
          <div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-2xl relative transition-all hover:-translate-y-1 bg-gradient-to-b from-surface-container via-surface-container to-surface-container-high shadow-[0_0_30px_rgba(0,229,163,0.15)] border border-primary/30">
            {/* Top badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-space-sm py-0.5 bg-primary text-on-primary font-code-sm text-code-sm font-bold rounded-full shadow-md uppercase tracking-wider">
              MÁS ELEGIDO POR EMPRESAS
            </div>
            <div className="space-y-space-sm pt-space-xs">
              <div className="flex justify-between items-center">
                <span className="font-code-sm text-code-sm text-primary uppercase tracking-wider font-semibold">
                  Plan 02 // Empresas en Crecimiento
                </span>
                <span className="font-code-sm text-code-sm px-2 py-0.5 bg-surface-container-lowest rounded text-primary">
                  10 días hábiles
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                Pyme Corporativa &amp; Catálogo
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Pensado para empresas de servicios, constructoras, maestranzas o
                consultoras que requieren credibilidad absoluta y catálogo.
              </p>

              {/* Price Container */}
              <div className="p-space-sm bg-surface-container-lowest rounded space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-primary font-headline-xl font-bold">
                    {prices.plan2}
                  </span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    CLP / mes
                  </span>
                </div>
                <div className="font-code-sm text-code-sm text-primary">
                  {isAnnual ? "Facturado anualmente ($249.900/año)" : "Todo lo de la Landing Inicial y mucho más"}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface pt-space-xs">
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    verified
                  </span>
                  <span>
                    <strong>Hasta 5 páginas completas</strong> (Inicio, Nosotros,
                    Servicios, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    verified
                  </span>
                  <span>
                    <strong>Catálogo interactivo</strong> de productos
                    sincronizable
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    verified
                  </span>
                  <span>
                    <strong>3 correos corporativos</strong> dedicados
                    (@tuempresa.cl)
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    verified
                  </span>
                  <span>
                    Optimización de ficha <strong>Google Business Profile</strong>
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    verified
                  </span>
                  <span>Reporte mensual de rendimiento y visitantes reales</span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    verified
                  </span>
                  <span>
                    <strong>2 horas al mes</strong> de mantención y
                    modificaciones
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-space-md">
              <a
                className="w-full inline-flex items-center justify-center gap-space-xs py-3.5 px-space-md bg-primary text-on-primary font-body-md font-bold rounded shadow-[0_0_18px_rgba(0,229,163,0.3)] hover:bg-primary-fixed transition-all hover:scale-[1.01]"
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
          </div>

          {/* CARD 3: E-Commerce & Plataforma */}
          <div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between shadow-lg relative transition-all hover:-translate-y-1 border border-white/[0.04] hover:border-primary/20">
            <div className="space-y-space-sm">
              <div className="flex justify-between items-center">
                <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">
                  Plan 03 // Venta Digital &amp; Stock
                </span>
                <span className="font-code-sm text-code-sm px-2 py-0.5 bg-surface-container-high rounded text-on-surface">
                  15 días hábiles
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                E-Commerce &amp; Plataforma
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Comercio online de alta velocidad integrado a pasarelas de pago
                chilenas y listo para conectar con tu bodega.
              </p>

              {/* Price Container */}
              <div className="p-space-sm bg-surface-container-lowest rounded space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-primary font-headline-xl font-bold">
                    {prices.plan3}
                  </span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant">
                    CLP / mes
                  </span>
                </div>
                <div className="font-code-sm text-code-sm text-on-surface-variant">
                  {isAnnual ? "Facturado anualmente ($416.500/año)" : "Tienda con pasarela Webpay y stock sincronizado"}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface pt-space-xs">
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    Tienda online configurada con <strong>hasta 100 productos</strong>
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    Pasarelas <strong>Webpay Plus, Transbank &amp; MercadoPago</strong>
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    Cálculo de envíos por Starken, Chilexpress o Blue Express
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    Sincronización con <strong>software de stock y boletas</strong>
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    <strong>5 correos corporativos</strong> dedicados
                  </span>
                </li>
                <li className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>
                    <strong>4 horas al mes</strong> de soporte técnico y cambios
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-space-md">
              <a
                className="w-full inline-flex items-center justify-center gap-space-xs py-3 px-space-md bg-surface-container-high hover:bg-surface-bright text-on-surface font-body-md font-semibold rounded transition-all"
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
          </div>
        </div>

        {/* Legal & Transparent Notice */}
        <div className="p-space-sm bg-surface-container-low rounded-lg text-center font-code-sm text-code-sm text-on-surface-variant flex flex-col md:flex-row items-center justify-center gap-space-xs border border-white/[0.04]">
          <span className="material-symbols-outlined text-primary text-[16px]">
            verified_user
          </span>
          <span>
            Valores netos + IVA en caso de requerir factura. Sin cláusulas de amarre:
            el dominio y el código siempre son tuyos.
          </span>
        </div>
      </div>
    </section>
  );
}
