# 🔍 AUDIT_REPORT.md — Diagnóstico UI/UX de Enacta.cl

> Generado: 2026-10-28 | Auditor: Antigravity Principal UI/UX Engineer
> Archivos inspeccionados: 22 componentes, 1 CSS global, 1 layout, 1 lib typography

---

## 1. Stack Detectado

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Next.js (App Router, Turbopack) | 16.3.8 |
| UI Library | React | 19.2.8 |
| Styling | Tailwind CSS v4 + `@tailwindcss/postcss` | ^4 |
| Typography | BBH Bartle (títulos), Share Tech Mono (body/mono), Caveat (decorativa), Material Symbols Outlined (iconos) | Google Fonts |
| Animations | WebGL shader custom (`bio-teal-shader.tsx`), CSS keyframes, IntersectionObserver fade-in | Vanilla |
| Effects | canvas-confetti (formulario submit) | 1.9.4 |
| Utilities | clsx, tailwind-merge, lucide-react (no utilizado activamente en stitch) | — |
| Deployment | Vercel (preview alias `enacta.vercel.app`) | CLI 65.3.1 |

> [!NOTE]
> **No hay Framer Motion, GSAP ni librería de animación instalada.** Todas las transiciones son CSS nativo o WebGL manual. Esto es positivo para rendimiento pero limita micro-interacciones complejas.

---

## 2. Diagnóstico del Hero ("Above the Fold")

**Qué transmite hoy en 3 segundos:**
- Shader WebGL orgánico verde-teal impactante (único, no es plantilla)
- Phone Mockup 3D flotante con parallax (visualmente pulido)
- Título: *"TU SITIO WEB PROFESIONAL Y SOPORTE DE INFRAESTRUCTURA, SIN DOLORES DE CABEZA"*

**Qué le falta:**
1. **El copy es genérico para una agencia web.** No comunica los 3 pilares diferenciadores (ERP + Hardware + Web). Un visitante no sabe en 3 segundos que Enacta instala servidores físicos y programa POS.
2. **El Phone Mockup ocupa el 42% del viewport** (5/12 cols) pero solo muestra una preview de la misma web — recursión visual sin valor informacional.
3. **Las métricas (99.9%, <0.8s, Terreno, 0 Preocupaciones)** están bien posicionadas pero visualmente planas — fondo `bg-black/70` con borde `white/[0.08]` se pierde contra el shader.
4. **No hay componente técnico visual** que comunique el ecosistema POS→ERP→Dashboard que es el verdadero diferenciador de Enacta vs. una agencia web estándar.

---

## 3. Análisis de Servicios

**Estado actual:** 3 SpotlightCards simétricas (1x3 grid) con fotos de stock.

**Problemas:**
- Las fotos (`service-telecom-rack.jpg`, `service-pos-terminal.jpg`, `service-dedicated-server.jpg`) son **genéricas** y no transmiten expertise técnico propio.
- Grid simétrico = lectura plana, sin jerarquía visual entre servicios.
- Los badges inferiores ("Infraestructura LAN & Wi-Fi UniFi" / "Terreno 24/7") son buen detalle pero están aplastados al fondo de cada tarjeta.

**Propuesta:** Bento Grid asimétrica con micro-componentes técnicos visuales reemplazando las fotos de stock (aprobado por usuario).

---

## 4. Diagnóstico de `#planes-web`

**Estado actual:** 3 SpotlightCards con 6 features cada una + toggle Mensual/Anual.

**Positivo:**
- Toggle Mensual/Anual bien implementado con estado React.
- Card 2 destacada con `border-2 border-primary/50` y badge "MÁS ELEGIDO".
- Precios en tipografía monoespaciada grande.

**Problemas:**
- 6 features × 3 tarjetas = 18 líneas de texto compitiendo por atención = fatiga visual.
- Los íconos `check_circle` y `verified` en las 3 columnas crean monotonía — todas lucen iguales.

**Propuesta:** Reducir a 4-5 features clave, mejorar la escaneabilidad (aprobado por usuario).

---

## 5. Top 5 Quick Wins (Mayor Retorno Visual Inmediato)

| # | Quick Win | Archivo(s) | Impacto |
|---|---|---|---|
| 1 | **Nuevo copy Hero técnico** que comunique los 3 pilares en 1 frase | `hero-text-view.tsx` | 🔴 Crítico |
| 2 | **Componente de flujo técnico interactivo** (POS→ERP→Dashboard) debajo del título | `stitch-hero.tsx` + nuevo componente | 🔴 Crítico |
| 3 | **Métricas Hero rediseñadas** con mono grande, mejor contraste, pulso CSS | `stitch-hero.tsx` | 🟡 Alto |
| 4 | **Servicios Bento Grid asimétrica** con micro-detalles técnicos | `stitch-services.tsx` | 🟡 Alto |
| 5 | **Pricing ultra-escaneable** (4-5 features, tipografía mono) | `stitch-pricing.tsx` | 🟡 Alto |

---

## Decisiones del Usuario (Grill-me)

- ✅ Nuevo copy técnico premium para el Hero
- ✅ Componente de flujo técnico interactivo (POS→ERP→Dashboard)
- ✅ Flujo debajo del título, Phone Mockup más pequeño
- ✅ Servicios en Bento Grid asimétrica
- ✅ Pricing: reducir a 4-5 features, mantener toggle
- ✅ Métricas Hero: rediseñar con mono + pulso CSS
- ✅ Equipo: mantener foto sticky, pulir estilo visual
- ✅ Ejecutar en 2 fases: (1A) Hero + Métricas, (1B) Servicios + Pricing
