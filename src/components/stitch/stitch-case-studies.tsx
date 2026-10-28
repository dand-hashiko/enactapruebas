import React from "react";

export function StitchCaseStudies() {
  return (
    <section
      className="w-full px-space-md lg:px-margin-desktop py-space-xl bg-surface-container-lowest"
      id="proyectos"
    >
      <div className="max-w-7xl mx-auto space-y-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div>
            <span className="font-code-sm text-code-sm text-primary font-bold uppercase tracking-wider">
              {"// RESULTADOS COMPROBADOS EN CHILE"}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              Casos de Éxito en Producción
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            Conoce cómo empresas de Santiago y regiones operan con total
            continuidad gracias a las soluciones de Enacta.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Project 1 */}
          <div className="bg-surface-container rounded-xl overflow-hidden shadow-lg flex flex-col justify-between border border-white/[0.04] hover:border-primary/20 transition-all">
            <div className="p-space-md space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-surface-container-high text-primary font-code-sm text-code-sm rounded">
                  POS / MULTICAJA
                </span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">
                  Santiago, RM
                </span>
              </div>
              <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
                Empresa Mayorista &amp; Distribución
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Despliegue de sistema POS e inventario sincronizado multicaja
                para local con más de 4.000 SKUs y soporte de cobro offline ante
                microcortes de fibra óptica.
              </p>
              <div className="space-y-1 pt-space-xs font-code-sm text-code-sm text-on-surface">
                <div className="flex justify-between py-1 border-b-0">
                  <span className="text-on-surface-variant">Tiempo de cobro:</span>
                  <span className="text-primary font-bold">-40% por cliente</span>
                </div>
                <div className="flex justify-between py-1 border-b-0">
                  <span className="text-on-surface-variant">Disponibilidad:</span>
                  <span className="text-primary font-bold">
                    100% ininterrumpido
                  </span>
                </div>
              </div>
            </div>
            <div className="p-space-sm bg-surface-container-high font-code-sm text-code-sm text-on-surface-variant flex items-center gap-1 border-t border-white/[0.02]">
              <span className="material-symbols-outlined text-primary text-[14px]">
                check_circle
              </span>
              <span>En producción activa</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-surface-container rounded-xl overflow-hidden shadow-lg flex flex-col justify-between border border-white/[0.04] hover:border-primary/20 transition-all">
            <div className="p-space-md space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-surface-container-high text-primary font-code-sm text-code-sm rounded">
                  REDES &amp; HARDWARE
                </span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">
                  Quilicura, RM
                </span>
              </div>
              <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
                Centro de Distribución Logístico
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Montaje completo de red LAN cableada CAT6 certificada para 4
                estaciones de cobro, enlaces redundantes Wi-Fi y servidor NAS con
                discos en RAID 1.
              </p>
              <div className="space-y-1 pt-space-xs font-code-sm text-code-sm text-on-surface">
                <div className="flex justify-between py-1 border-b-0">
                  <span className="text-on-surface-variant">Tendido físico:</span>
                  <span className="text-primary font-bold">
                    600m cable CAT6
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b-0">
                  <span className="text-on-surface-variant">Respaldo:</span>
                  <span className="text-primary font-bold">Mirroring diario</span>
                </div>
              </div>
            </div>
            <div className="p-space-sm bg-surface-container-high font-code-sm text-code-sm text-on-surface-variant flex items-center gap-1 border-t border-white/[0.02]">
              <span className="material-symbols-outlined text-primary text-[14px]">
                check_circle
              </span>
              <span>Instalación llave en mano</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-surface-container rounded-xl overflow-hidden shadow-lg flex flex-col justify-between border border-white/[0.04] hover:border-primary/20 transition-all">
            <div className="p-space-md space-y-space-sm">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-surface-container-high text-primary font-code-sm text-code-sm rounded">
                  DESARROLLO WEB
                </span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">
                  Chile / Latam
                </span>
              </div>
              <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
                Plataformas Web &amp; Clientes Pyme
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Portales web corporativos optimizados con cotizador de
                presupuestos online en tiempo real, agenda sincronizada a Google
                Calendar y velocidad de apertura instantánea.
              </p>
              <div className="space-y-1 pt-space-xs font-code-sm text-code-sm text-on-surface">
                <div className="flex justify-between py-1 border-b-0">
                  <span className="text-on-surface-variant">
                    Google Lighthouse:
                  </span>
                  <span className="text-primary font-bold">100/100 Desktop</span>
                </div>
                <div className="flex justify-between py-1 border-b-0">
                  <span className="text-on-surface-variant">
                    Conversión a WhatsApp:
                  </span>
                  <span className="text-primary font-bold">+185% incremento</span>
                </div>
              </div>
            </div>
            <div className="p-space-sm bg-surface-container-high font-code-sm text-code-sm text-on-surface-variant flex items-center gap-1 border-t border-white/[0.02]">
              <span className="material-symbols-outlined text-primary text-[14px]">
                check_circle
              </span>
              <span>Mantención continua activa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
