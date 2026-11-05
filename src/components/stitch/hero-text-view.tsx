import React from "react";

/**
 * HeroTextView
 *
 * Componente de tipografía principal categorizado como "titulos".
 * Calibrado con escala tipográfica fluida para máxima legibilidad
 * y presencia visual de nivel Awwwards sin desbordes.
 */
export function HeroTextView() {
  return (
    <div className="w-full max-w-[720px] select-none">
      <h1 className="typo-titulos text-[22px] min-[360px]:text-[25px] min-[400px]:text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] xl:text-[60px] leading-[1.04] text-white tracking-tight text-left drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] uppercase break-normal">
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
