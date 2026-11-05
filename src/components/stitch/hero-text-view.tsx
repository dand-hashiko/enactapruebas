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
      <h1 className="typo-titulos text-[28px] min-[360px]:text-[32px] min-[400px]:text-[36px] sm:text-[46px] md:text-[54px] lg:text-[58px] xl:text-[62px] leading-[1.08] text-white tracking-tight text-left drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
        <span className="block">Diseño, código y hardware,</span>
        <span className="block text-primary underline decoration-primary/50 underline-offset-8">
          creciendo en perfecta sincronía.
        </span>
      </h1>
    </div>
  );
}
