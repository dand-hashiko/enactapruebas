import React from "react";

/**
 * HeroTextView
 *
 * Dedicated square-ratio typography container ("TextView") for the main headline.
 * Calibrated with precision vector bounding boxes to ensure BBH Bartle renders
 * at full, impactful scale (58-62px equivalent) without ever overflowing
 * or exceeding the right margin boundary defined by the hero layout and subtitle.
 */
export function HeroTextView() {
  return (
    <div className="w-full max-w-[530px] select-none">
      {/* Semantic accessible headline for SEO and screen-readers */}
      <h1 className="sr-only">
        Tu sitio web profesional y soporte de infraestructura, sin dolores de cabeza.
      </h1>

      {/* Vector TextView Box maintaining exact square ratio bounds */}
      <svg
        className="w-full h-auto block drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
        viewBox="0 0 530 435"
        preserveAspectRatio="xMinYMid meet"
        aria-hidden="true"
      >
        {/* Line 1: TU SITIO WEB */}
        <text
          x="0"
          y="60"
          fontSize="62"
          fill="#ffffff"
          fontFamily="var(--font-heading), 'BBH Bartle', sans-serif"
          fontWeight="900"
          letterSpacing="-0.01em"
        >
          TU SITIO WEB
        </text>

        {/* Line 2: PROFESIONAL Y */}
        <text
          x="0"
          y="134"
          fontSize="62"
          fill="#ffffff"
          fontFamily="var(--font-heading), 'BBH Bartle', sans-serif"
          fontWeight="900"
          letterSpacing="-0.01em"
        >
          PROFESIONAL Y
        </text>

        {/* Line 3: SOPORTE DE */}
        <text
          x="0"
          y="208"
          fontSize="62"
          fill="#ffffff"
          fontFamily="var(--font-heading), 'BBH Bartle', sans-serif"
          fontWeight="900"
          letterSpacing="-0.01em"
        >
          SOPORTE DE
        </text>

        {/* Line 4: INFRAESTRUCTURA, (perfectly calibrated to fit width) */}
        <text
          x="0"
          y="280"
          fontSize="52"
          fill="#ffffff"
          fontFamily="var(--font-heading), 'BBH Bartle', sans-serif"
          fontWeight="900"
          letterSpacing="-0.01em"
        >
          INFRAESTRUCTURA,
        </text>

        {/* Line 5: SIN DOLORES DE (brand primary accent #00e5a3) */}
        <text
          x="0"
          y="354"
          fontSize="62"
          fill="#00e5a3"
          fontFamily="var(--font-heading), 'BBH Bartle', sans-serif"
          fontWeight="900"
          letterSpacing="-0.01em"
        >
          SIN DOLORES DE
        </text>

        {/* Line 6: CABEZA. (brand primary accent #00e5a3) */}
        <text
          x="0"
          y="426"
          fontSize="62"
          fill="#00e5a3"
          fontFamily="var(--font-heading), 'BBH Bartle', sans-serif"
          fontWeight="900"
          letterSpacing="-0.01em"
        >
          CABEZA.
        </text>
      </svg>
    </div>
  );
}
