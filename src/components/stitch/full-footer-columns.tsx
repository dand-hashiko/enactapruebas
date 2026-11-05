import React from "react";
import Image from "next/image";

/**
 * FullFooterColumns — Guardado para reactivación posterior (Cuadro Morado)
 *
 * Contiene:
 * - Col 1: Enacta Logo, Propuesta de Misión Crítica & Operación 24/7
 * - Col 2: Nodos Operativos (Santiago & Temuco)
 * - Col 3: Contacto Directo & Liderazgo (Daniel Díaz, Paola Huenuman, Matias Parra)
 * - Col 4: Stack & Core Tecnológico (PostgreSQL, Docker, Debian, etc.)
 */
export function FullFooterColumns() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {/* Col 1 */}
      <div className="space-y-3">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="relative h-7 w-7 shrink-0">
            <Image
              alt="Enacta Logo"
              className="h-7 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,229,163,0.3)]"
              src="/images/enacta-logo.png"
              width={28}
              height={28}
            />
          </div>
          <span className="font-brand text-lg font-bold text-white tracking-wider">
            ENACTA INGENIERÍA
          </span>
        </div>
        <p className="typo-otros2 text-sm text-on-surface-variant max-w-sm leading-relaxed">
          Arquitectura de software de misión crítica, infraestructura en
          terreno y planes de mantención proactiva para pymes y corporaciones
          en Chile y Latinoamérica.
        </p>
        <div className="flex items-center gap-2 typo-otros1 text-xs text-primary pt-1">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span>Operación continua en terreno 24/7</span>
        </div>
      </div>

      {/* Col 2 */}
      <div className="space-y-3">
        <div className="typo-otros1 text-xs text-white uppercase tracking-wider font-semibold">
          Nodos Operativos
        </div>
        <div className="space-y-2 typo-otros2 text-xs">
          <div className="p-3 bg-[#0a0a0e] rounded-xl border border-white/[0.04]">
            <div className="text-white font-semibold">
              Nodo Central: Santiago de Chile
            </div>
            <div className="text-on-surface-variant typo-otros1 text-[11px] mt-0.5">
              Providencia / Las Condes — Región Metropolitana
            </div>
          </div>
          <div className="p-3 bg-[#0a0a0e] rounded-xl border border-white/[0.04]">
            <div className="text-white font-semibold">
              Nodo Sur: Temuco
            </div>
            <div className="text-on-surface-variant typo-otros1 text-[11px] mt-0.5">
              Cobertura Araucanía, Los Ríos &amp; Biobío
            </div>
          </div>
        </div>
      </div>

      {/* Col 3 */}
      <div className="space-y-3">
        <div className="typo-otros1 text-xs text-white uppercase tracking-wider font-semibold">
          Contacto Directo &amp; Liderazgo
        </div>
        <div className="space-y-2 typo-otros2 text-xs">
          <div className="flex flex-col">
            <span className="text-white font-medium">Daniel Díaz</span>
            <span className="text-on-surface-variant typo-otros1 text-[11px]">
              Lead Software Architect &amp; Infrastructure
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium">Paola Huenuman</span>
            <span className="text-on-surface-variant typo-otros1 text-[11px]">
              Operations &amp; Client Engineering Partner
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium">Matias Parra</span>
            <span className="text-on-surface-variant typo-otros1 text-[11px]">
              Ingeniero Comercial • Crecimiento &amp; Sistemas de Datos
            </span>
          </div>
          <div className="pt-2 space-y-1.5">
            <a
              className="flex items-center gap-2 text-white hover:text-primary transition-colors typo-botones text-xs"
              href="mailto:contacto@enacta.cl"
            >
              <span className="material-symbols-outlined text-[14px] text-primary">
                alternate_email
              </span>
              contacto@enacta.cl
            </a>
            <a
              className="flex items-center gap-2 text-white hover:text-primary transition-colors typo-botones text-xs"
              href="https://wa.me/56995127788"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[14px] text-primary">
                chat
              </span>
              WhatsApp (+569 9512 7788)
            </a>
          </div>
        </div>
      </div>

      {/* Col 4 */}
      <div className="space-y-3">
        <div className="typo-otros1 text-xs text-white uppercase tracking-wider font-semibold">
          Stack &amp; Core Tecnológico
        </div>
        <div className="flex flex-wrap gap-1.5 typo-otros1 text-[11px]">
          <span className="px-2.5 py-1 bg-[#101015] border border-white/[0.06] rounded text-white">
            PostgreSQL
          </span>
          <span className="px-2.5 py-1 bg-[#101015] border border-white/[0.06] rounded text-white">
            Docker
          </span>
          <span className="px-2.5 py-1 bg-[#101015] border border-white/[0.06] rounded text-white">
            Linux Debian
          </span>
          <span className="px-2.5 py-1 bg-[#101015] border border-white/[0.06] rounded text-white">
            React / Next.js
          </span>
          <span className="px-2.5 py-1 bg-[#101015] border border-white/[0.06] rounded text-white">
            Node.js
          </span>
          <span className="px-2.5 py-1 bg-[#101015] border border-white/[0.06] rounded text-white">
            MikroTik
          </span>
          <span className="px-2.5 py-1 bg-[#101015] border border-white/[0.06] rounded text-white">
            Ubiquiti UniFi
          </span>
          <span className="px-2.5 py-1 bg-[#101015] border border-white/[0.06] rounded text-white">
            Tailscale VPN
          </span>
        </div>
        <div className="pt-2">
          <a
            className="inline-flex items-center gap-1.5 typo-botones text-xs text-primary hover:text-primary-fixed"
            href="#agendamiento"
          >
            <span className="material-symbols-outlined text-[14px]">
              calendar_month
            </span>
            <span>Agendar reunión técnica 45 min →</span>
          </a>
        </div>
      </div>
    </div>
  );
}
