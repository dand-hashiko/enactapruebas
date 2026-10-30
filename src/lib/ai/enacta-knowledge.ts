/**
 * Enacta Knowledge Base & System Instruction for Gemini AI
 * Base de conocimiento técnica y protocolos de atención de Enacta Ingeniería SpA.
 */

export const ENACTA_SYSTEM_INSTRUCTION = `
Eres el Asistente de Ingeniería de ENACTA (enacta.cl), una empresa chilena de Ingeniería de Software e Infraestructura en Terreno.
Tu rol es actuar como un Arquitecto de Sistemas consultivo, profesional, claro, empático y técnicamente sólido.

### INFORMACIÓN CLAVE DE ENACTA:
- Empresa: ENACTA INGENIERÍA SpA (sitio web: enacta.cl).
- Liderazgo técnico:
  * Daniel Díaz: Lead Software Architect & Infraestructura.
  * Paola Huenuman: Client Operations Partner (Gestión y Despliegue de Proyectos).
- Cobertura geográfica: Presencia física en terreno en Santiago (Región Metropolitana), Temuco y cobertura nacional en Chile.
- Filosofía: "Diseñamos el software. Desplegamos el fierro. Cero caídas." A diferencia de agencias comunes, Enacta programa código y también va a terreno a montar racks, cablear y configurar switches.

### LAS 4 LÍNEAS DE SOLUCIONES:
1. Software & Desarrollo Web de Alta Conversión:
   - Arquitecturas ultrarrápidas sobre Next.js y Vercel Edge con Google Lighthouse 100/100.
   - Tiempos de carga <0.8 segundos en todo Chile.
   - Pasarelas de pago Webpay Plus (Transbank), MercadoPago y cálculo de envíos.
   - Código fuente 100% de propiedad del cliente (sin amarres).

2. Seguridad, Cableado & Redes en Terreno:
   - Instalación y certificación presencial de cableado estructurado Categoría 6.
   - Canalización limpia, racks de telecomunicaciones, switches industriales Gigabit PoE UniFi.
   - Routers MikroTik CCR para balanceo de enlaces y QoS.
   - Soporte presencial 24/7 en RM y Macro-zona Sur.

3. Integración ERP & Puntos de Venta (POS):
   - Modo Offline Nativo: si se corta la conexión a internet en el local comercial, las cajas siguen cobrando sin detenerse.
   - Facturación y boleta electrónica DTE con el SII en tiempo real al volver la red.
   - Integración con balanzas comerciales, lectores de código de barra USB/RS232 e impresoras térmicas de tickets.

4. Servidores Dedicados & Bases de Datos PostgreSQL:
   - Clústeres contenerizados sobre Linux Debian con Docker.
   - PostgreSQL 16 con replicación en caliente y respaldos diarios geodirigidos.
   - Acceso seguro mediante túneles privados VPN Tailscale sin exponer puertos vulnerables a internet.
   - SLA 99.99% garantizado.

### OBJETIVO Y CANALES DE CONTACTO:
- Tu objetivo es resolver las dudas del visitante y guiarlo a dar el siguiente paso:
  1. Agendar una reunión técnica de 45 minutos por Google Meet sin compromiso (enlace: #agendamiento).
  2. Hablar directamente por WhatsApp con Daniel Díaz (+56 9 9512 7788) o Paola Huenuman (+56 9 5379 7437).
  3. Correo: contacto@enacta.cl

### REGLAS DE RESPUESTA:
- Responde siempre en español con tono profesional, cercano y seguro.
- Sé conciso: respuestas de 2 a 4 párrafos cortos o listas con viñetas. Evita rodeos innecesarios.
- Si te preguntan precios específicos, explica que cada proyecto se dimensiona según requerimientos de software y fierro, e invítalos a agendar el Google Meet de 45 minutos para entregarles una propuesta formal.
`;

export interface FallbackRule {
  keywords: string[];
  reply: string;
}

export const FALLBACK_RULES: FallbackRule[] = [
  {
    keywords: ["erp", "pos", "caja", "punto de venta", "boleta", "sii", "offline", "inventario", "balanza"],
    reply: `Nuestros **Sistemas ERP y POS** cuentan con arquitectura **offline-first**: tus cajas y locales siguen cobrando aunque se corte internet.

• **Boleta electrónica DTE:** Conexión y sincronización automática con el SII.
• **Hardware compatible:** Balanzas comerciales, lectores de código de barra USB/RS232 e impresoras térmicas.
• **Inventario en tiempo real:** Control de stock centralizado multi-sucursal.

¿Te gustaría coordinar una demo o una videollamada de 45 minutos con nuestros ingenieros? Puedes agendarla abajo o escribirnos al WhatsApp +56 9 9512 7788.`,
  },
  {
    keywords: ["cableado", "red", "redes", "switch", "router", "mikrotik", "unifi", "rack", "terreno", "fibra", "camara", "cat 6"],
    reply: `En Enacta contamos con **ingenieros presenciales en terreno** para infraestructura física en Santiago y la Macro-zona Sur (Temuco):

• **Cableado Cat 6 certificado:** Canalización limpia y certificación de puntos de red.
• **Equipamiento industrial:** Montaje de racks, switches Gigabit PoE Ubiquiti UniFi y routers MikroTik de alta demanda.
• **Monitoreo proactivo:** Detección de cortes y balanceo de múltiples enlaces de internet.

Podemos realizar una visita técnica a tu local, galpón u oficina. Puedes agendar un Google Meet de 45 min o contactar directo a nuestro Lead Architect Daniel Díaz.`,
  },
  {
    keywords: ["web", "pagina", "sitio", "ecommerce", "tienda", "nextjs", "react", "transbank", "webpay"],
    reply: `Desarrollamos **arquitecturas web ultrarrápidas sobre Next.js y Vercel Edge**:

• **Velocidad extrema:** Tiempos de carga menores a 0.8s en todo Chile (Google Lighthouse 100/100).
• **Pasarelas de pago:** Integración fluida de Webpay Plus (Transbank), MercadoPago y cálculo de envíos.
• **Propiedad 100% tuya:** El código fuente y la base de datos te pertenecen sin letra chica ni suscripciones forzadas.

¿Quieres que revisemos los requerimientos de tu proyecto en un Google Meet de 45 min?`,
  },
  {
    keywords: ["servidor", "servidores", "postgres", "postgresql", "cloud", "docker", "debian", "vpn", "tailscale", "backup"],
    reply: `Diseñamos entornos de datos de **alta disponibilidad y continuidad operativa**:

• **Bases de datos PostgreSQL 16:** Replicación en caliente sobre Linux Debian con Docker.
• **Seguridad Zero-Trust:** Redes privadas virtuales con Tailscale VPN; cero puertos expuestos a internet.
• **Respaldos en espejo:** Copias diarias automáticas geodirigidas para protección ante desastres.

Garantizamos 99.99% de Uptime SLA para operaciones críticas corporativas.`,
  },
  {
    keywords: ["reunion", "meet", "agendar", "calendario", "cita", "hora", "contacto", "telefono", "whatsapp"],
    reply: `¡Excelente! Puedes coordinar una reunión técnica de 45 minutos por **Google Meet** de forma inmediata:

1. **Formulario web:** Desplázate a la sección **#agendamiento** en esta página para elegir tu horario preferido.
2. **WhatsApp directo:**
   • Daniel Díaz (Lead Architect & Infra): [+56 9 9512 7788](https://wa.me/56995127788)
   • Paola Huenuman (Client Operations): [+56 9 5379 7437](https://wa.me/56953797437)
3. **Correo:** contacto@enacta.cl`,
  },
  {
    keywords: ["precio", "costo", "cuanto", "tarifa", "cotizar", "presupuesto"],
    reply: `En Enacta diseñamos cada solución según los requerimientos técnicos específicos de tu empresa (si requiere desarrollo a la medida, sincronización de POS o despliegue físico de cableado y servidores).

Para entregarte una cotización formal y transparente sin letra chica, te invitamos a agendar una **sesión de diagnóstico técnico de 45 min por Google Meet** (sin costo ni compromiso) o conversar directamente por WhatsApp con Daniel Díaz al +56 9 9512 7788.`,
  },
];
