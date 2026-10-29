import React from "react";

/**
 * HeroTextView
 *
 * Componente dedicado para el titular principal categorizado como "titulos".
 * Calibrado con escala tipográfica responsiva para garantizar que en dispositivos
 * móviles (desde 320px) y pantallas de escritorio la letra sea
 * perfectamente visible, no se corte y respete los márgenes del contenedor.
 */
export function HeroTextView() {
  return (
    <div className="w-full max-w-[530px] select-none">
      <h1 className="typo-titulos text-[13px] min-[360px]:text-[14px] min-[400px]:text-[16px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[32px] leading-[1.12] text-white tracking-tight text-left drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] uppercase break-normal">
        <span className="block">INGENIERÍA DE SOFTWARE,</span>
        <span className="block">SISTEMAS ERP E</span>
        <span className="block">INFRAESTRUCTURA FÍSICA</span>
        <span className="block text-primary underline decoration-primary/50 underline-offset-8">
          SIN FRICCIÓN.
        </span>
      </h1>
    </div>
  );
}
