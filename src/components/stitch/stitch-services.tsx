import React from "react";
import { SpotlightCard } from "./spotlight-card";

export function StitchServices() {
  return (
    <section
      className="relative w-full px-4 sm:px-6 lg:px-12 py-20 sm:py-28 bg-black overflow-hidden border-b border-white/[0.08]"
      id="servicios"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="space-y-3 max-w-3xl">
          <div className="typo-otros1 inline-flex items-center gap-2 px-3 py-1 bg-[#101015] rounded-full text-primary text-xs border border-primary/20">
            <span>// ARQUITECTURA INTEGRAL EN TERRENO</span>
          </div>
          <h2 className="typo-titulos text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Diseñamos el software. Desplegamos el fierro. Cero caídas.
          </h2>
          <p className="typo-subtitulos text-sm sm:text-base text-on-surface-variant leading-relaxed">
            A diferencia de una agencia digital estándar, en Enacta montamos
            computadores, certificamos cableado estructurado, configuramos switches
            industriales y programamos sistemas que no se caen cuando se corta internet.
          </p>
        </div>

        {/* Services 3-Column Spotlight Bento Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Service 01 */}
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-black relative group border border-white/[0.06]">
                <div
                  className="bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/service-telecom-rack.jpg')",
                  }}
                />
                <span className="typo-otros1 absolute top-3 left-3 px-2.5 py-1 bg-black/90 text-xs text-primary rounded-lg backdrop-blur-md border border-primary/30">
                  01 // TERRENO &amp; REDES
                </span>
              </div>
              <h3 className="typo-titulos text-xl text-white">
                Logística &amp; Fierro en Terreno
              </h3>
              <p className="typo-otros2 text-sm text-on-surface-variant leading-relaxed">
                Montaje presencial de computadores de escritorio, cableado
                estructurado categoría 6 certificado, canalización limpia,
                switches Gigabit y routers MikroTik de alto tráfico en la Región
                Metropolitana y Macro-zona Sur.
              </p>
            </div>
            <div className="typo-otros2 p-3 bg-black/80 rounded-xl text-xs text-on-surface-variant flex items-center justify-between border border-white/[0.04]">
              <span>Infraestructura LAN &amp; Wi-Fi UniFi</span>
              <span className="typo-otros1 text-primary font-bold">Terreno 24/7</span>
            </div>
          </SpotlightCard>

          {/* Service 02 */}
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-black relative group border border-white/[0.06]">
                <div
                  className="bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/service-pos-terminal.jpg')",
                  }}
                />
                <span className="typo-otros1 absolute top-3 left-3 px-2.5 py-1 bg-black/90 text-xs text-primary rounded-lg backdrop-blur-md border border-primary/30">
                  02 // POS &amp; BODEGA
                </span>
              </div>
              <h3 className="typo-titulos text-xl text-white">
                Software POS &amp; Control de Stock
              </h3>
              <p className="typo-otros2 text-sm text-on-surface-variant leading-relaxed">
                Puntos de venta de cobro veloz diseñados para almacenes y
                distribuidoras. Integración nativa con lectores de códigos de
                barra, balanzas comerciales y boleta electrónica. Continúa
                operando 100% offline si falla el internet.
              </p>
            </div>
            <div className="typo-otros2 p-3 bg-black/80 rounded-xl text-xs text-on-surface-variant flex items-center justify-between border border-white/[0.04]">
              <span>Modo Offline Automático</span>
              <span className="typo-otros1 text-primary font-bold">Zero Caídas</span>
            </div>
          </SpotlightCard>

          {/* Service 03 */}
          <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-black relative group border border-white/[0.06]">
                <div
                  className="bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/service-dedicated-server.jpg')",
                  }}
                />
                <span className="typo-otros1 absolute top-3 left-3 px-2.5 py-1 bg-black/90 text-xs text-primary rounded-lg backdrop-blur-md border border-primary/30">
                  03 // DEDICATED CLOUD
                </span>
              </div>
              <h3 className="typo-titulos text-xl text-white">
                Servidores &amp; Bases de Datos Dedicadas
              </h3>
              <p className="typo-otros2 text-sm text-on-surface-variant leading-relaxed">
                Arquitecturas PostgreSQL diseñadas para misión crítica con
                replicación en caliente, copias de seguridad en espejo
                geodirigidas y entornos contenerizados con Docker sobre Linux
                Debian para máxima eficiencia de cómputo.
              </p>
            </div>
            <div className="typo-otros2 p-3 bg-black/80 rounded-xl text-xs text-on-surface-variant flex items-center justify-between border border-white/[0.04]">
              <span>Docker + Tailscale VPN</span>
              <span className="typo-otros1 text-primary font-bold">Seguridad Total</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
