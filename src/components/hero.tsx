"use client";

import * as React from "react";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Activity, Terminal, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden gradient-mesh"
    >
      {/* Subtle background ambient glowing orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] md:w-[800px] md:h-[500px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-xs backdrop-blur-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold">Enacta 2026</span>
              <span className="text-indigo-400 dark:text-indigo-600">•</span>
              <span>Ingeniería de Software & Arquitectura Cloud</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Impulsamos la{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Transformación Digital
              </span>{" "}
              con Soluciones de Alto Impacto
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Diseñamos y desarrollamos plataformas web SPA ultrarrápidas, microservicios en la nube e inteligencia artificial para automatizar procesos y multiplicar las conversiones de tu negocio.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#contacto"
                id="hero-cta-primary"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <span>Solicitar Asesoría Gratuita</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#servicios"
                id="hero-cta-secondary"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
              >
                <span>Explorar Servicios</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              </a>
            </div>

            {/* Key Value Checks */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Despliegue directo en Vercel Edge</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Optimizado para SEO & Mobile</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>SLA de Soporte Garantizado</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tech & Cloud Metric Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glassmorphic Dashboard Card */}
              <div className="relative rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 shadow-2xl shadow-indigo-500/10">
                {/* Header bar of the card */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">enacta-core::production</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-900/50">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>Live 99.98%</span>
                  </div>
                </div>

                {/* Simulated Server Health & Performance Metrics */}
                <div className="space-y-4">
                  {/* Metric 1 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Core Web Vitals</div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-200">100 / 100 Performance</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md">
                      Sub-second LCP
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Arquitectura Cloud</div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-200">Edge Serverless CI/CD</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-md">
                      Automated
                    </span>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-pink-100 dark:bg-pink-950/80 text-pink-600 dark:text-pink-400 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Seguridad & Encriptación</div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-200">TLS 1.3 + DDoS Guard</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                      Verificado
                    </span>
                  </div>
                </div>

                {/* Tech Pills Footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs font-medium">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Next.js 16
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    React 19
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Tailwind CSS
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Decorative mini floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3.5 rounded-2xl shadow-xl shadow-indigo-500/25 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight">Enfoque ROI</div>
                  <div className="text-[11px] text-indigo-100">Resultados Medibles</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Numeric stats bar */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
              +120
            </div>
            <div className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
              Proyectos Implementados
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
              99.98%
            </div>
            <div className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
              Disponibilidad Cloud
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
              3.5x
            </div>
            <div className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
              Aceleración de Procesos
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50">
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
              98%
            </div>
            <div className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
              Clientes Recurrentes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
