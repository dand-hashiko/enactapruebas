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
    <div className="w-full max-w-[560px] select-none">
      <h1 className="typo-titulos text-[15px] min-[360px]:text-[17px] min-[400px]:text-[19px] sm:text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.12] text-white tracking-tight text-left drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] uppercase break-normal">
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
