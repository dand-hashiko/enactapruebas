import React from "react";

export function StitchPillars() {
  return (
    <section
      className="w-full px-space-md lg:px-margin-desktop py-space-xl bg-surface-container-lowest"
      id="porque-enacta"
    >
      <div className="max-w-7xl mx-auto space-y-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div className="space-y-space-xs max-w-2xl">
            <span className="font-code-sm text-code-sm text-primary uppercase font-bold tracking-wider">
              {"// PROPUESTA DE VALOR INDUSTRIAL"}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              ¿Por qué elegir el modelo mensual de Enacta?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Unificamos la ingeniería de sistemas con el servicio ágil. Sin
              agencias que subcontratan ni plantillas lentas de WordPress con 40
              plugins desactualizados.
            </p>
          </div>
          <div className="font-code-sm text-code-sm text-on-surface-variant text-right hidden md:block">
            ENACTA.CL // SLA DE CONFIANZA 99.9%
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/* Pillar 1 */}
          <div className="p-space-md bg-surface-container rounded-xl space-y-space-sm relative overflow-hidden group border border-white/[0.04] hover:border-primary/20 transition-all">
            <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">dns</span>
            </div>
            <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
              Dominio .cl, Hosting y Respaldos
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Todo 100% administrado por ingenieros. Renovación de tu dominio,
              certificados de seguridad bancarios SSL y copias de seguridad
              automáticas en la nube cada semana.
            </p>
            <div className="font-code-sm text-code-sm text-primary pt-space-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">shield</span>
              <span>Zero Mantenimiento para ti</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-space-md bg-surface-container rounded-xl space-y-space-sm relative overflow-hidden group border border-white/[0.04] hover:border-primary/20 transition-all">
            <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">speed</span>
            </div>
            <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
              Rendimiento 99/100 Real
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Desarrollamos con React y Tailwind CSS puro. Tu página web cargará
              en un parpadeo tanto en celulares con 4G como en redes
              corporativas, posicionándote mejor en Google.
            </p>
            <div className="font-code-sm text-code-sm text-primary pt-space-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">bolt</span>
              <span>Sub-segundo en Chile</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-space-md bg-surface-container rounded-xl space-y-space-sm relative overflow-hidden group border border-white/[0.04] hover:border-primary/20 transition-all">
            <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">forum</span>
            </div>
            <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
              Trato Directo por WhatsApp
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Hablas directamente con Daniel Díaz y el equipo de ingeniería de
              Enacta. Nada de contestadores automáticos, ejecutivos de cuenta
              rotativos ni tickets interminables.
            </p>
            <div className="font-code-sm text-code-sm text-primary pt-space-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                support_agent
              </span>
              <span>Respuesta inmediata en horario laboral</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-space-md bg-surface-container rounded-xl space-y-space-sm relative overflow-hidden group border border-white/[0.04] hover:border-primary/20 transition-all">
            <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">
                lock_open
              </span>
            </div>
            <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
              Cero Amarres Forzados
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Creemos en las relaciones de confianza por valor y no por contrato
              cautivo. Si decides migrar en el futuro, te entregamos tu código y tu
              dominio de inmediato y sin costo.
            </p>
            <div className="font-code-sm text-code-sm text-primary pt-space-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">key</span>
              <span>Tus datos son 100% tuyos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
