"use client";

import React, { useState } from "react";

interface NodeData {
  id: string;
  category: string;
  name: string;
  icon: string;
  specs: string;
  metric: string;
  status: string;
}

const NODES: NodeData[] = [
  {
    id: "hardware",
    category: "01 // HARDWARE & REDES",
    name: "Terminal POS & Fierro",
    icon: "point_of_sale",
    specs: "Switches UniFi • Balanza • MikroTik",
    metric: "0.4ms LAN",
    status: "ENLACE ACTIVO",
  },
  {
    id: "erp",
    category: "02 // MOTOR OPERACIONAL",
    name: "Core ERP & PostgreSQL",
    icon: "database",
    specs: "Debian Docker • Replicación en Espejo",
    metric: "99.99% SLA",
    status: "CONCURRENTE",
  },
  {
    id: "web",
    category: "03 // FRONTEND & CLIENTES",
    name: "Dashboard Web & Pagos",
    icon: "dashboard",
    specs: "Next.js Edge • Webpay • Sync Offline",
    metric: "100/100 Vitals",
    status: "DESPLEGADO",
  },
];

export function EcosystemFlow() {
  const [activeNode, setActiveNode] = useState<string>("erp");

  return (
    <div className="w-full bg-[#08080c]/90 rounded-2xl border border-white/[0.08] p-4 sm:p-5 backdrop-blur-xl relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
      {/* Background technical grid accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Top Header Label */}
      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="typo-otros1 text-white font-semibold tracking-wider text-[11px] sm:text-xs">
            ARQUITECTURA DE INTEGRACIÓN CONTINUA
          </span>
        </div>
        <span className="typo-otros1 text-primary text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
          EXTREMO A EXTREMO
        </span>
      </div>

      {/* 3 Pipeline Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative z-10 items-stretch">
        {NODES.map((node, index) => {
          const isSelected = activeNode === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                isSelected
                  ? "bg-[#10121a] border-primary/40 shadow-[0_0_20px_rgba(0,229,163,0.12)] -translate-y-0.5"
                  : "bg-[#0b0b10] border-white/[0.05] hover:border-white/[0.15] hover:bg-[#0e0e14]"
              }`}
            >
              {/* Node Top Row */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected ? "bg-primary text-black" : "bg-white/[0.06] text-primary"
                  }`}>
                    <span className="material-symbols-outlined text-[17px]">
                      {node.icon}
                    </span>
                  </div>
                  <span className="typo-otros1 text-[10px] text-primary font-bold">
                    {node.metric}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="typo-otros1 text-[9px] text-white/70 tracking-wider">
                    {node.status}
                  </span>
                </div>
              </div>

              {/* Node Title & Specs */}
              <div className="space-y-1">
                <div className="typo-titulos text-white text-xs sm:text-sm font-semibold tracking-tight">
                  {node.name}
                </div>
                <div className="typo-otros2 text-[11px] text-on-surface-variant leading-snug">
                  {node.specs}
                </div>
              </div>

              {/* Connector indicator for desktop */}
              {index < NODES.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-3 h-3 items-center justify-center pointer-events-none text-primary">
                  <span className="text-[10px] font-bold">→</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Technical Status Bar */}
      <div className="mt-3.5 pt-2.5 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] typo-otros2 text-on-surface-variant">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[14px]">
            sync_alt
          </span>
          <span>Flujo de datos automatizado: Hardware ➔ Motor ERP ➔ Portal Clientes</span>
        </div>
        <div className="typo-otros1 text-primary text-[10px] sm:text-[11px] font-semibold">
          Latencia Extremo a Extremo: &lt; 1ms
        </div>
      </div>
    </div>
  );
}
