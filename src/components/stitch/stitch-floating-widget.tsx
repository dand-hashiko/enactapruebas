"use client";

import React, { useState } from "react";

export function StitchFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`relative transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Compact Tactile Tab Handle (Nike style, discrete small pill attached to the side) */}
        <button
          type="button"
          aria-label="Abrir panel de contacto rápido"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-12 bg-black/95 backdrop-blur-xl border border-r-0 border-white/[0.1] rounded-l-xl flex flex-col items-center justify-center gap-1.5 shadow-[0_0_16px_rgba(0,229,163,0.2)] cursor-pointer select-none hover:bg-[#14141c] transition-colors"
        >
          {/* Green dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {/* Green arrow */}
          <span
            className={`material-symbols-outlined text-primary text-[16px] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            chevron_left
          </span>
        </button>

        {/* 3 Compact Action Tiles (Nike style stacked squares) */}
        <div className="bg-black/95 backdrop-blur-2xl border border-r-0 border-white/[0.1] p-2 rounded-l-2xl shadow-2xl flex flex-col gap-2">
          {/* Tile 1: WhatsApp Directo */}
          <a
            className="w-[84px] h-[84px] rounded-xl bg-[#0a0a0e] border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_18px_rgba(0,229,163,0.3)] flex flex-col items-center justify-center p-1.5 text-center transition-all duration-200 group/card cursor-pointer"
            href="https://wa.me/56995127788?text=Hola%20Enacta,%20quisiera%20consultar%20por%20sus%20servicios"
            rel="noopener noreferrer"
            target="_blank"
            title="WhatsApp Directo (+569 9512 7788)"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-primary group-hover/card:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </div>
            <span className="font-code-sm text-[11px] font-bold text-white leading-tight mt-1">
              WhatsApp
            </span>
            <span className="text-[9px] text-primary/90 font-code-sm">
              +569 9512
            </span>
          </a>

          {/* Tile 2: Gmail / Correo */}
          <a
            className="w-[84px] h-[84px] rounded-xl bg-[#0a0a0e] border border-white/[0.08] hover:border-primary/40 hover:bg-[#14141c] flex flex-col items-center justify-center p-1.5 text-center transition-all duration-200 group/card cursor-pointer"
            href="mailto:contacto@enacta.cl?subject=Consulta%20Proyecto%20Enacta"
            title="Enviar Correo (contacto@enacta.cl)"
          >
            <div className="w-8 h-8 rounded-lg bg-[#14141c] flex items-center justify-center text-primary group-hover/card:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </div>
            <span className="font-code-sm text-[11px] font-bold text-white leading-tight mt-1">
              Correo
            </span>
            <span className="text-[9px] text-on-surface-variant font-code-sm">
              contacto
            </span>
          </a>

          {/* Tile 3: Google Meet */}
          <a
            className="w-[84px] h-[84px] rounded-xl bg-[#0a0a0e] border border-white/[0.08] hover:border-primary/40 hover:bg-[#14141c] flex flex-col items-center justify-center p-1.5 text-center transition-all duration-200 group/card cursor-pointer"
            href="#agendamiento"
            title="Agendar Google Meet (45 min)"
          >
            <div className="w-8 h-8 rounded-lg bg-[#14141c] flex items-center justify-center text-primary group-hover/card:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">
                calendar_month
              </span>
            </div>
            <span className="font-code-sm text-[11px] font-bold text-white leading-tight mt-1">
              Meet
            </span>
            <span className="text-[9px] text-primary font-semibold font-code-sm">
              45 min
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}
