"use client";

import React from "react";
import { SpotlightCard } from "./spotlight-card";

export function StitchServices() {
  return (
    <section
      className="relative w-full px-4 sm:px-6 lg:px-12 py-20 sm:py-28 bg-black overflow-hidden border-b border-white/[0.08]"
      id="servicios"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="typo-titulos text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Diseñamos el software. Desplegamos el fierro. Cero caídas.
          </h2>
          <p className="typo-subtitulos text-sm sm:text-base text-on-surface-variant leading-relaxed">
            A diferencia de una agencia digital estándar, en Enacta montamos
            computadores, certificamos cableado estructurado, configuramos switches
            industriales y programamos sistemas que no se caen cuando se corta internet.
          </p>
        </div>

        {/* Asymmetric Bento Grid (Awwwards 2026 Standard) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* BENTO CARD 1 (Featured: ERP & POS) - Spans 7 columns on Desktop */}
          <SpotlightCard className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#0a0a0f] border border-white/[0.08] rounded-2xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="typo-otros1 text-xs text-primary font-bold tracking-wider">
                  01. GESTIÓN OPERATIVA
                </span>
                <span className="typo-otros1 text-[11px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Modo Offline Nativo
                </span>
              </div>

              <h3 className="typo-titulos text-xl sm:text-2xl text-white">
                Sistemas ERP &amp; Puntos de Venta (POS)
              </h3>
              <p className="typo-otros2 text-sm text-on-surface-variant leading-relaxed max-w-xl">
                Control de inventario en tiempo real, cobro rápido en mostrador y boleta
                electrónica DTE. Integración directa con balanzas comerciales, lectores de
                código de barra e impresoras térmicas. Si se corta la conexión a internet, el
                sistema sigue operando y se sincroniza automáticamente al volver la red.
              </p>

              {/* Real Technical UI Mockup: Interactive POS Terminal Status */}
              <div className="mt-4 p-4 rounded-xl bg-black/80 border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      point_of_sale
                    </span>
                    <span className="typo-otros1 text-white font-semibold">
                      TERMINAL POS CAJA 01
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="typo-otros1 text-primary text-[10px]">
                      EN LÍNEA (0.3ms)
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <div className="typo-otros2 text-[10px] text-on-surface-variant">
                      Inventario SKU
                    </div>
                    <div className="typo-otros1 text-white font-bold">14.820</div>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <div className="typo-otros2 text-[10px] text-on-surface-variant">
                      Sincronización
                    </div>
                    <div className="typo-otros1 text-primary font-bold">100% OK</div>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <div className="typo-otros2 text-[10px] text-on-surface-variant">
                      DTE Facturación
                    </div>
                    <div className="typo-otros1 text-white font-bold">SII Activo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="typo-otros2 text-xs text-on-surface-variant/80 flex items-center justify-between pt-2 border-t border-white/[0.04]">
              <span>Compatibilidad con balanzas y lectores USB/RS232</span>
              <span className="typo-otros1 text-primary font-semibold">Sin Caídas</span>
            </div>
          </SpotlightCard>

          {/* BENTO CARD 2 (Web & E-Commerce) - Spans 5 columns on Desktop */}
          <SpotlightCard className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#0a0a0f] border border-white/[0.08] rounded-2xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="typo-otros1 text-xs text-primary font-bold tracking-wider">
                  02. ALTA CONVERSIÓN
                </span>
                <span className="typo-otros1 text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/80 border border-white/[0.08]">
                  Edge CDN
                </span>
              </div>

              <h3 className="typo-titulos text-xl sm:text-2xl text-white">
                Desarrollo Web &amp; E-Commerce
              </h3>
              <p className="typo-otros2 text-sm text-on-surface-variant leading-relaxed">
                Arquitecturas modernas sobre Next.js optimizadas para cargar en menos de 0.8
                segundos en todo Chile. Pasarelas de pago Webpay Plus, Transbank y MercadoPago
                con cálculo automatizado de envíos.
              </p>

              {/* Technical Performance Metric Gauge */}
              <div className="mt-4 p-4 rounded-xl bg-black/80 border border-white/[0.06] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="typo-otros1 text-xs text-white">GOOGLE LIGHTHOUSE</span>
                  <span className="typo-otros1 text-primary text-xs font-bold">100 / 100</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
                  <div className="p-1.5 rounded bg-primary/10 border border-primary/20 text-primary font-bold">
                    Perf: 100
                  </div>
                  <div className="p-1.5 rounded bg-primary/10 border border-primary/20 text-primary font-bold">
                    SEO: 100
                  </div>
                  <div className="p-1.5 rounded bg-primary/10 border border-primary/20 text-primary font-bold">
                    Access: 100
                  </div>
                  <div className="p-1.5 rounded bg-primary/10 border border-primary/20 text-primary font-bold">
                    BP: 100
                  </div>
                </div>
              </div>
            </div>

            <div className="typo-otros2 text-xs text-on-surface-variant/80 flex items-center justify-between pt-2 border-t border-white/[0.04]">
              <span>Next.js + Tailwind CSS nativo</span>
              <span className="typo-otros1 text-primary font-semibold">&lt; 0.8s Carga</span>
            </div>
          </SpotlightCard>

          {/* BENTO CARD 3 (Hardware & Redes en Terreno) - Spans 5 columns on Desktop */}
          <SpotlightCard className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#0a0a0f] border border-white/[0.08] rounded-2xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="typo-otros1 text-xs text-primary font-bold tracking-wider">
                  03. TERRENO &amp; REDES
                </span>
                <span className="typo-otros1 text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/80 border border-white/[0.08]">
                  Cat 6 Certificado
                </span>
              </div>

              <h3 className="typo-titulos text-xl sm:text-2xl text-white">
                Fierro, Cableado &amp; Infraestructura
              </h3>
              <p className="typo-otros2 text-sm text-on-surface-variant leading-relaxed">
                Montaje presencial en terreno: racks de telecomunicaciones, cableado
                estructurado categoría 6, switches industriales Gigabit PoE, canalización limpia
                y routers MikroTik en la Región Metropolitana y Macro-zona Sur.
              </p>

              {/* Hardware Topology Visual Snippet */}
              <div className="mt-4 p-3.5 rounded-xl bg-black/80 border border-white/[0.06] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    router
                  </span>
                  <div className="flex flex-col">
                    <span className="typo-otros1 text-white font-medium text-[11px]">
                      MikroTik CCR + UniFi
                    </span>
                    <span className="typo-otros2 text-on-surface-variant text-[10px]">
                      Segmentación VLANs &amp; QoS
                    </span>
                  </div>
                </div>
                <span className="typo-otros1 text-primary font-bold text-[11px]">
                  Terreno 24/7
                </span>
              </div>
            </div>

            <div className="typo-otros2 text-xs text-on-surface-variant/80 flex items-center justify-between pt-2 border-t border-white/[0.04]">
              <span>Ingeniería física con presencia en tu local u oficina</span>
              <span className="typo-otros1 text-primary font-semibold">RM &amp; Sur</span>
            </div>
          </SpotlightCard>

          {/* BENTO CARD 4 (Dedicated Servers & PostgreSQL) - Spans 7 columns on Desktop */}
          <SpotlightCard className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#0a0a0f] border border-white/[0.08] rounded-2xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="typo-otros1 text-xs text-primary font-bold tracking-wider">
                  04. SERVIDORES &amp; CLOUD
                </span>
                <span className="typo-otros1 text-[11px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Docker + Tailscale
                </span>
              </div>

              <h3 className="typo-titulos text-xl sm:text-2xl text-white">
                Servidores Dedicados &amp; Bases de Datos
              </h3>
              <p className="typo-otros2 text-sm text-on-surface-variant leading-relaxed max-w-xl">
                Entornos contenerizados sobre Linux Debian con PostgreSQL de misión crítica.
                Replicación en caliente, respaldos en espejo geodirigidos y acceso seguro
                mediante túneles privados VPN sin exponer puertos vulnerables a internet.
              </p>

              {/* Server Telemetry Preview Bar */}
              <div className="mt-4 p-4 rounded-xl bg-black/80 border border-white/[0.06] space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      dns
                    </span>
                    <span className="typo-otros1 text-white font-semibold">
                      CORE DEBIAN PRODUCTION CLUSTER
                    </span>
                  </div>
                  <span className="typo-otros1 text-primary text-[10px]">
                    SLA 99.99% GARANTIZADO
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] typo-otros2 text-on-surface-variant">
                  <span>PostgreSQL 16 en Espejo</span>
                  <span className="text-white font-mono">0.0% Packet Loss</span>
                  <span>Respaldos Automáticos Diarios</span>
                </div>
              </div>
            </div>

            <div className="typo-otros2 text-xs text-on-surface-variant/80 flex items-center justify-between pt-2 border-t border-white/[0.04]">
              <span>Tus datos son 100% de tu propiedad, exportables en cualquier momento</span>
              <span className="typo-otros1 text-primary font-semibold">Zero Amarres</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
