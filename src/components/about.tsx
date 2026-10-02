"use client";

import * as React from "react";
import {
  ShieldCheck,
  Zap,
  Target,
  Code2,
  Cpu,
  TrendingUp,
  CheckCircle2,
  Clock,
  HeartHandshake,
} from "lucide-react";

export function About() {
  const steps = [
    {
      num: "01",
      title: "Diagnóstico & Arquitectura",
      desc: "Analizamos los requerimientos técnicos y comerciales de tu negocio para elegir la mejor arquitectura (Next.js, Edge, Serverless).",
      icon: Target,
    },
    {
      num: "02",
      title: "Diseño & Prototipado UX",
      desc: "Modelamos la experiencia de usuario con wireframes interactivos y componentes reutilizables antes de escribir una sola línea de código.",
      icon: Cpu,
    },
    {
      num: "03",
      title: "Desarrollo Ágil & QA",
      desc: "Programación modular en TypeScript, pruebas automatizadas y estándares rigurosos de código limpio.",
      icon: Code2,
    },
    {
      num: "04",
      title: "Despliegue & Monitoreo Edge",
      desc: "Publicación directa en la infraestructura global de Vercel con SSL automático, CDN mundial y soporte continuo.",
      icon: TrendingUp,
    },
  ];

  const pillars = [
    {
      icon: Zap,
      title: "Velocidad Extrema",
      desc: "Plataformas optimizadas para cargar en menos de 0.8 segundos, reduciendo el abandono de usuarios y maximizando conversiones.",
    },
    {
      icon: ShieldCheck,
      title: "Seguridad y Confiabilidad",
      desc: "Arquitecturas seguras por diseño, protección DDoS, cifrado SSL y cumplimiento de estándares modernos de privacidad.",
    },
    {
      icon: Clock,
      title: "Tiempos de Entrega Ágiles",
      desc: "Metodologías iterativas que te permiten ver avances reales cada semana y salir al mercado en tiempo récord.",
    },
    {
      icon: HeartHandshake,
      title: "Comunicación Transparente",
      desc: "Trabajas directamente con ingenieros de software senior dedicados a tu proyecto, sin burocracia ni intermediarios.",
    },
  ];

  return (
    <section id="acerca" className="py-24 bg-slate-50/70 dark:bg-slate-950/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-900 uppercase tracking-wider">
            Propuesta de Valor
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ¿Por qué construir tu próximo proyecto con Enacta?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            No solo escribimos código; creamos activos tecnológicos robustos que impulsan el crecimiento medible y la competitividad de tu empresa.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 4 Steps Methodology */}
        <div id="metricas" className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Nuestro Proceso de Trabajo
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Un flujo de trabajo estructurado y transparente para garantizar resultados sin sorpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-indigo-600/30 dark:text-indigo-400/30 font-mono">
                        {step.num}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center">
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
