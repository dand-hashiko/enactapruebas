import React from "react";

export function StitchServices() {
  return (
    <section
      className="relative w-full px-space-md lg:px-margin-desktop py-space-xl bg-gradient-to-b from-surface via-surface-container-lowest to-surface overflow-hidden border-t border-b border-outline-variant/30"
      id="servicios"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 left-10 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto space-y-space-lg relative z-10">
        <div className="space-y-space-xs">
          <span className="font-code-sm text-code-sm text-primary font-bold uppercase tracking-wider">
            {"// ARQUITECTURA COMPLETA EN TERRENO"}
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">
            Más que software: Conectamos tu negocio físico al digital
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            A diferencia de una agencia de diseño común, en Enacta tiramos
            cables, configuramos switches industriales y programamos sistemas que
            no se caen cuando se corta internet.
          </p>
        </div>

        {/* Services 3-Column Bento Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {/* Service 01 */}
          <div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between space-y-space-md border border-white/[0.04] hover:border-primary/20 transition-all">
            <div className="space-y-space-sm">
              <div className="h-44 w-full rounded-lg overflow-hidden bg-surface-container-high relative group">
                <div
                  className="bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/service-telecom-rack.jpg')",
                  }}
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-surface-container-lowest/90 font-code-sm text-code-sm text-primary rounded backdrop-blur-xs border border-primary/20">
                  01 // TERRENO &amp; REDES
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                Logística &amp; Fierro en Terreno
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Montaje presencial de computadores de escritorio, cableado
                estructurado categoría 6 certificado, canalización limpia,
                switches Gigabit y routers MikroTik de alto tráfico en la Región
                Metropolitana y Macro-zona Sur.
              </p>
            </div>
            <div className="p-space-xs bg-surface-container-lowest rounded font-code-sm text-code-sm text-on-surface-variant flex items-center justify-between border border-white/[0.02]">
              <span>Infraestructura LAN &amp; Wi-Fi UniFi</span>
              <span className="text-primary font-bold">Terreno 24/7</span>
            </div>
          </div>

          {/* Service 02 */}
          <div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between space-y-space-md border border-white/[0.04] hover:border-primary/20 transition-all">
            <div className="space-y-space-sm">
              <div className="h-44 w-full rounded-lg overflow-hidden bg-surface-container-high relative group">
                <div
                  className="bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/service-pos-terminal.jpg')",
                  }}
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-surface-container-lowest/90 font-code-sm text-code-sm text-primary rounded backdrop-blur-xs border border-primary/20">
                  02 // POS &amp; BODEGA
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                Software POS &amp; Control de Stock
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Puntos de venta de cobro veloz diseñados para almacenes y
                distribuidoras. Integración nativa con lectores de códigos de
                barra, balanzas comerciales y boleta electrónica. Continúa
                operando 100% offline si falla el internet.
              </p>
            </div>
            <div className="p-space-xs bg-surface-container-lowest rounded font-code-sm text-code-sm text-on-surface-variant flex items-center justify-between border border-white/[0.02]">
              <span>Modo Offline Automático</span>
              <span className="text-primary font-bold">Zero Caídas</span>
            </div>
          </div>

          {/* Service 03 */}
          <div className="bg-surface-container rounded-xl p-space-lg flex flex-col justify-between space-y-space-md border border-white/[0.04] hover:border-primary/20 transition-all">
            <div className="space-y-space-sm">
              <div className="h-44 w-full rounded-lg overflow-hidden bg-surface-container-high relative group">
                <div
                  className="bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('/images/service-dedicated-server.jpg')",
                  }}
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-surface-container-lowest/90 font-code-sm text-code-sm text-primary rounded backdrop-blur-xs border border-primary/20">
                  03 // DEDICATED CLOUD
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                Servidores &amp; Bases de Datos Dedicadas
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Arquitecturas PostgreSQL diseñadas para misión crítica con
                replicación en caliente, copias de seguridad en espejo
                geodirigidas y entornos contenerizados con Docker sobre Linux
                Debian para máxima eficiencia de cómputo.
              </p>
            </div>
            <div className="p-space-xs bg-surface-container-lowest rounded font-code-sm text-code-sm text-on-surface-variant flex items-center justify-between border border-white/[0.02]">
              <span>Docker + Tailscale VPN</span>
              <span className="text-primary font-bold">Seguridad Total</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
