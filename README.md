# ENACTA.CL — Plataforma Corporativa & Ecosistema de Automatización

Sitio web oficial, vitrina tecnológica y suite de automatización operativa de **Enacta Ingeniería SpA** (*Ingeniería de Software, Hardware y Redes en Terreno — Santiago & Temuco*).

> **Entornos:**  
> - **Staging / Pruebas:** [https://enacta.vercel.app](https://enacta.vercel.app)  
> - **Producción:** [https://www.enacta.cl](https://www.enacta.cl) *(congelado hasta aprobación explícita de pase a producción)*

---

## 1. ¿Con qué tecnología está hecho? (Stack Tecnológico)

### Frontend & UI
- **Framework:** [Next.js 16.3.8](https://nextjs.org/) (App Router + Turbopack)
- **Librería UI:** React 19.2.8 + TypeScript 5
- **Estilos y Tokens:** Tailwind CSS 4 (`@tailwindcss/postcss`), `clsx`, `tailwind-merge`
- **Sistema Visual (*Bio-Teal*):** Fondo `#000000` / `#08080c` con acento `#00e5a3`, tipografías `BBH Bartle` (títulos), `Share Tech Mono` (subtítulos/código/botones) y `Caveat` (citas), más iconografía Material Symbols Outlined y `lucide-react`.
- **Gráficos 3D y Shaders:**
  - **Three.js 0.186.1** para renderizado de geometría 3D cinética en tiempo real.
  - **WebGL nativo (GLSL)** para el shader fluido del Hero.
- **Micro-interacciones:** `canvas-confetti` 1.9.4, `next-themes`.

### Backend & APIs (Next.js Route Handlers)
- **`POST /api/chat`** (`src/app/api/chat/route.ts`): Asistente técnico con **Google Gemini Flash** (`GEMINI_API_KEY`), motor de conocimiento local de Enacta como fallback resiliente (`src/lib/ai/enacta-knowledge.ts`) y detección automática de prospectos con contacto/intención de compra.
- **`POST /api/lead`** (`src/app/api/lead/route.ts`): Recepción de solicitudes de reunión desde el formulario y disparo de alerta inmediata a Telegram.
- **`POST /api/telegram/webhook`** (`src/app/api/telegram/webhook/route.ts`): Webhook bidireccional para consultar el estado del sistema (`/status`) o la base de conocimiento directamente desde Telegram.

### Infraestructura & Automatización Interna (`scripts/` & `.github/workflows/`)
- **Hosting:** Vercel (separación estricta entre Staging y Producción).
- **Integración Google Drive (`gdrive` CLI) & Meet → Trello:** Scripts en Python 3 (librería estándar, cero dependencias externas) y Google Apps Script.
- **Integración GitHub → Trello:** Workflow en GitHub Actions.

---

## 2. ¿Qué componentes tiene para mostrar? (Vitrina para Reuniones y Ventas)

La arquitectura principal (`src/components/stitch/stitch-page.tsx`) se estructura en bloques de alto impacto visual pensados para demostrar capacidad técnica real frente a clientes:

1. **Navbar Fijo & Responsive (`stitch-navbar.tsx`):** Navegación superior translúcida (`backdrop-blur`) con acceso directo a soluciones, equipo y agendamiento.
2. **Hero Inmersivo WebGL + Mockup 3D (`stitch-hero.tsx`, `bio-teal-shader.tsx`, `hero-text-view.tsx`, `phone-mockup.tsx`):**
   - Fondo animado GLSL en WebGL corriendo en tiempo real (`BioTealShader`).
   - Smartphone 3D flotante con inclinación reactiva al movimiento del mouse (*parallax*).
   - Grilla de métricas de impacto (SLA 99.9%, carga `< 0.8s`, presencia física RM & Sur).
3. **Tarjetas Interactivas Flippables / Carrusel (`stitch-pricing.tsx`):**
   - 4 tarjetas de dolores críticos (*Software & Crecimiento, Seguridad & Terreno, Integración ERP & POS, Data & Cloud Dedicada*).
   - Volteo suave entre pregunta con arte vectorial SVG y respuesta técnica completa con botón único de cierre ergonómico y carrusel horizontal con *snap* en móviles.
4. **Sección Equipo con Scroll Sticky (`accenture-scroll-showcase.tsx`):**
   - Formato 50/50 en escritorio donde la fotografía del equipo permanece fija (*sticky*) mientras se lee la propuesta de ingeniería en terreno, con contención estricta de texto (`text-balance break-words`).
5. **Bento Grid Técnico con Cursor Spotlight (`stitch-services.tsx`, `spotlight-card.tsx`):**
   - Tarjetas que iluminan el borde y fondo siguiendo el puntero del mouse (`SpotlightCard`).
   - Incluyen mini-interfaces técnicas integradas: estado en vivo de **Terminal POS Caja 01** (DTE SII / Offline), puntajes **Google Lighthouse**, topología **MikroTik CCR + UniFi** y clúster **PostgreSQL 16 + Docker + Tailscale VPN**.
6. **Agendamiento Google Meet + Escultura 3D (`stitch-booking.tsx`, `kinetic-sculpture.tsx`, `ouroboros-head.ts`):**
   - Escultura 3D interactiva en Three.js con HUD de rendimiento en FPS.
   - Formulario conectado a `/api/lead`, confeti de confirmación y canales directos de WhatsApp para Daniel Díaz y Paola Huenuman.
7. **Asistente IA Flotante & Panel Rápido (`ai-chat-widget.tsx`, `stitch-floating-widget.tsx`):**
   - Terminal de chat Bio-Teal con chips de preguntas rápidas y escalamiento directo a WhatsApp/Meet.
   - Pestaña lateral de contacto rápido exclusiva para escritorio (`hidden lg:flex`) para no invadir la vista móvil.
8. **Suite de Automatización Backoffice (Operación Enacta):**
   - **Alertas Telegram (`src/lib/telegram/telegram-service.ts`):** Notificaciones instantáneas al celular ante nuevos leads o consultas de alto interés.
   - **Meet / Transcripciones → Trello (`scripts/sync_meeting_to_trello.py`, `scripts/google_apps_script_meet_to_trello.js`):** Extrae tareas de *Notas de Gemini* desde Drive o local, infiere fechas/etiquetas, evita duplicados y reasigna pendientes de clientes externos a Paola o Matías.
   - **GitHub → Trello (`.github/workflows/trello-sync.yml`):** Comenta commits/PRs y mueve tarjetas relacionadas a `⚙️ En Proceso`.
   - **Estandarización Drive y Tablero (`scripts/setup_trello.py`, `scripts/deploy_gdrive_structure.py`, `docs/drive_templates/`):** Plantillas de propuesta, contrato, acta de recepción y manual ERP desplegadas en Drive.

---

## 3. Mejoras Futuras (Roadmap Recomendado)

### Corto Plazo (Activación y Cierre Comercial)
- [ ] **Completar variables de entorno en Vercel:** Cargar `GEMINI_API_KEY` (Google AI Studio) y `TELEGRAM_CHAT_ID` para activar respuestas generativas puras y alertas push reales en Telegram.
- [ ] **Activar Secrets en GitHub Actions y Apps Script:** Cargar `TRELLO_API_KEY`, `TRELLO_TOKEN` y `TRELLO_BOARD_ID` en GitHub Secrets y programar el trigger cada 15 min en `script.google.com`.
- [ ] **Integrar casos reales y demo F&M (`stitch-case-studies.tsx`):** Publicar la vitrina interactiva o video demo del sistema ERP/POS Offline F&M y métricas reales de clientes (ej. Mecánica Móvil).

### Mediano Plazo (Automatización de Ingresos y Agenda)
- [ ] **Google Calendar + Google Meet automático:** Conectar `/api/lead` con Google Calendar API para generar automáticamente el evento y link de videollamada al enviar el formulario.
- [ ] **Cobros recurrentes automatizados (Suscripciones):** Integrar MercadoPago Suscripciones / Transbank Oneclick / Stripe para automatizar mensualidades de arriendo y mantención (eliminando cobranza manual).
- [ ] **Webhook directo de Reuniones en Next.js (`/api/meetings/sync`):** Procesar transcripciones completas con Gemini Flash directamente en la nube para detectar acuerdos comerciales, riesgos y tareas implícitas (rol PM).

### Largo Plazo (Escalabilidad)
- [ ] **Persistencia en Base de Datos (PostgreSQL / Supabase):** Guardar historial de leads, conversaciones del chat y métricas de conversión en un mini-CRM propio sincronizado con Trello.
- [ ] **Optimización gráfica adaptativa y Testing E2E:** Agregar pruebas automatizadas con Playwright para el formulario/chat y degradado estático inteligente en WebGL/Three.js cuando `prefers-reduced-motion` esté activo o en móviles de gama baja.

---

## Scripts Rápidos de Desarrollo

```bash
npm install
npm run dev      # Entorno local en http://localhost:3000
npm run build    # Build de producción (Turbopack)
npm run lint     # Verificación ESLint
```
