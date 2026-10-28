import React from "react";
import Image from "next/image";

export function StitchFooter() {
  return (
    <footer className="w-full bg-black text-on-surface-variant pt-16 pb-12 border-t border-white/[0.08] relative z-10">
      <div className="w-full px-4 sm:px-6 lg:px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="relative h-6 w-6">
                <Image
                  alt="Enacta Logo"
                  className="h-6 w-auto object-contain"
                  src="/images/enacta-logo.png"
                  width={24}
                  height={24}
                />
              </div>
              <span className="typo-titulos text-base font-semibold text-white">
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
              // Nodos Operativos
            </div>
            <div className="space-y-2 typo-otros2 text-xs">
              <div className="p-3 bg-[#0a0a0e] rounded-xl border border-white/[0.04]">
                <div className="text-white font-semibold">
                  Nodo Central: Santiago de Chile
                </div>
                <div className="text-on-surface-variant typo-otros1 text-[11px] mt-0.5">
                  Providencia / Las Condes // Región Metropolitana
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
              // Contacto Directo &amp; Liderazgo
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
              // Stack &amp; Core Tecnológico
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

        {/* Bottom copyright */}
        <div className="pt-space-md border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface-variant typo-otros2 text-xs">
          <div className="flex items-center gap-space-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>
              © {new Date().getFullYear()} ENACTA INGENIERÍA SpA. enacta.cl // Todos los derechos
              reservados.
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <span className="text-on-surface-variant">
              SLA 99.9% Uptime Guarantee
            </span>
            <span className="text-on-surface-variant">
              Santiago • Temuco • Cobertura Nacional
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
