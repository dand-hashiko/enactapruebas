import React from "react";

/**
 * StitchFooter — Pie de página Enacta.cl
 *
 * ADR:
 * 1. Se ocultó temporalmente el bloque de 4 columnas (identidad, nodos,
 *    liderazgo y stack) a petición del usuario para reactivarlo más adelante.
 * 2. Se eliminó definitivamente el bloque de "SLA 99.9% Uptime Guarantee / Cobertura Nacional".
 */
export function StitchFooter() {
  return (
    <footer className="w-full bg-black text-on-surface-variant py-8 border-t border-white/[0.08] relative z-10">
      <div className="w-full px-4 sm:px-6 lg:px-12 mx-auto">
        {/* Bottom copyright limpio y centrado */}
        <div className="flex items-center justify-center text-center text-on-surface-variant typo-otros2 text-xs">
          <div className="flex items-center gap-space-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>
              © {new Date().getFullYear()} ENACTA INGENIERÍA SpA. enacta.cl — Todos los derechos reservados.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Bloque de 4 Columnas guardado para reactivar después (Cuadro Morado):
 *
 * export function FullFooterColumns() {
 *   return (
 *     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
 *       ...
 *     </div>
 *   );
 * }
 */
