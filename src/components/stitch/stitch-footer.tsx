import React from "react";
import Image from "next/image";

export function StitchFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant pt-space-xl pb-space-lg shadow-[0_-1px_8px_rgba(0,0,0,0.04)] relative z-10 border-t border-white/[0.04]">
      <div className="w-full px-space-md lg:px-margin-desktop mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
          {/* Col 1 */}
          <div className="space-y-space-sm">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <div className="relative h-6 w-6">
                <Image
                  alt="Enacta Logo"
                  className="h-6 w-auto object-contain"
                  src="/images/enacta-logo.png"
                  width={24}
                  height={24}
                />
              </div>
              <span className="font-code-lg text-code-lg font-semibold text-on-surface">
                ENACTA INGENIERÍA
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Arquitectura de software de misión crítica, infraestructura en
              terreno y planes de mantención proactiva para pymes y corporaciones
              en Chile y Latinoamérica.
            </p>
            <div className="flex items-center gap-space-xs font-code-sm text-code-sm text-primary pt-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Operación continua en terreno 24/7</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-space-sm">
            <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
              Nodos Operativos
            </div>
            <div className="space-y-space-xs font-body-sm text-body-sm">
              <div className="p-space-xs bg-surface-container rounded border border-white/[0.02]">
                <div className="text-on-surface font-semibold">
                  Nodo Central: Santiago de Chile
                </div>
                <div className="text-on-surface-variant font-code-sm text-code-sm">
                  Providencia / Las Condes // Región Metropolitana
                </div>
              </div>
              <div className="p-space-xs bg-surface-container rounded border border-white/[0.02]">
                <div className="text-on-surface font-semibold">
                  Nodo Sur: Temuco
                </div>
                <div className="text-on-surface-variant font-code-sm text-code-sm">
                  Cobertura Araucanía, Los Ríos &amp; Biobío
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-space-sm">
            <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
              Contacto Directo &amp; Liderazgo
            </div>
            <div className="space-y-space-xs font-body-sm text-body-sm">
              <div className="flex flex-col">
                <span className="text-on-surface font-medium">Daniel Díaz</span>
                <span className="text-on-surface-variant font-code-sm text-code-sm">
                  Lead Software Architect &amp; Infrastructure
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-on-surface font-medium">Paola Huenuman</span>
                <span className="text-on-surface-variant font-code-sm text-code-sm">
                  Operations &amp; Client Engineering Partner
                </span>
              </div>
              <div className="pt-space-xs space-y-1">
                <a
                  className="flex items-center gap-space-xs text-on-surface hover:text-primary transition-colors font-code-sm text-code-sm"
                  href="mailto:contacto@enacta.cl"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    alternate_email
                  </span>
                  contacto@enacta.cl
                </a>
                <a
                  className="flex items-center gap-space-xs text-on-surface hover:text-primary transition-colors font-code-sm text-code-sm"
                  href="https://wa.me/56995127788"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    chat
                  </span>
                  WhatsApp Corporativo (+569 9512 7788)
                </a>
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-space-sm">
            <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
              Stack &amp; Core Tecnológico
            </div>
            <div className="flex flex-wrap gap-space-xs font-code-sm text-code-sm">
              <span className="px-space-xs py-0.5 bg-surface-container-high rounded text-on-surface">
                PostgreSQL
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container-high rounded text-on-surface">
                Docker
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container-high rounded text-on-surface">
                Linux Debian
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container-high rounded text-on-surface">
                React / Next.js
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container-high rounded text-on-surface">
                Node.js
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container-high rounded text-on-surface">
                MikroTik
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container-high rounded text-on-surface">
                Ubiquiti UniFi
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container-high rounded text-on-surface">
                Tailscale VPN
              </span>
              <span className="px-space-xs py-0.5 bg-surface-container-high rounded text-on-surface">
                Nginx Reverse Proxy
              </span>
            </div>
            <div className="pt-space-xs">
              <a
                className="inline-flex items-center gap-space-xs font-code-sm text-code-sm text-primary hover:text-primary-fixed"
                href="#agendamiento"
              >
                <span className="material-symbols-outlined text-[14px]">
                  calculate
                </span>
                <span>Lanzar cotizador online inmediato →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-space-md border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-code-sm text-code-sm">
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
