# 🧠 ENACTA - Directrices de Auditoría y Refactorización UI/UX (Estándar Awwwards 2026)

## 1. Rol y Contexto del Agente
Actúa como un **Principal UI/UX Engineer & Creative Developer** (nivel jurado de Awwwards / The FWA en octubre de 2026). 
Estás auditando y refactorizando el código fuente local de **Enacta** (`enacta.cl` / `enacta.vercel.app`), una consultora tecnológica chilena especializada en tres pilares de ingeniería:
1. **Sistemas ERP y Gestión a Medida** (inventarios de alto rendimiento, POS, facturación, concurrencia).
2. **Desarrollo Web & E-commerce de Alta Conversión** (arquitecturas modernas, pagos integrados, ultra-velocidad).
3. **Integración de Hardware, IoT e Infraestructura** (estaciones de trabajo, impresoras térmicas/POS, sensores, redes y servidores).

---

## 2. Filosofía Visual y Estética (Design System)
El diseño debe alejarse por completo de las plantillas corporativas genéricas y adoptar una estética **Dev-First / High-Tech Minimalist** inspirada en referentes como *Linear, Vercel, Raycast y Zeaburu*:

* **Modo Oscuro Absoluto y Profundo:** 
  * Fondo principal: `#050505` o `#08080A` (evitar grises planos o azules corporativos antiguos).
  * Superficies de tarjetas (Bento Cards): `#0D0D11` con `backdrop-filter: blur(12px)` y fondos translúcidos sutiles (`rgba(255, 255, 255, 0.02)`).
  * Bordes técnicos de precisión: `1px solid rgba(255, 255, 255, 0.08)` que se iluminan sutilmente en hover (`rgba(255, 255, 255, 0.2)` o acento de marca).
* **Tipografía de Ingeniería:**
  * Títulos y UI principal: Sans-serif limpia, geométrica y moderna (ej. *Inter*, *Geist Sans* o *Segoe UI* con tracking ajustado `-0.03em` en titulares grandes).
  * Datos técnicos, precios, métricas de rendimiento, tags de código y estados de servidor: Fuente monoespaciada (*JetBrains Mono*, *Geist Mono* o *Fira Code*).
* **Cero Ruido Visual:** 
  * No usar fotos de stock genéricas de "personas en oficinas sonriendo". 
  * Todo elemento visual debe ser un componente de interfaz real, un diagrama de arquitectura interactivo (Hardware ➔ API ➔ ERP), una consola estilizada o métricas en vivo.

---

## 3. Instrucciones de Auditoría (FASE 1 - Ejecutar primero)
Antes de modificar archivos, **inspecciona todo el árbol de directorios del proyecto** (`package.json`, componentes, rutas, estilos y especialmente la sección `#planes-web`) y genera un reporte estructurado en `AUDIT_REPORT.md` (o en el chat) respondiendo:

1. **Stack Detectado:** Qué framework, librerías de estilos y animaciones están instaladas actualmente.
2. **Diagnóstico del "Above the Fold" (Hero):** Qué transmite hoy el Hero en los primeros 3 segundos y qué le falta para proyectar autoridad en Software + Hardware + ERP.
3. **Análisis de Servicios y Arquitectura de Información:** Cómo se muestran hoy los servicios y dónde se pierde fuerza visual o claridad técnica.
4. **Diagnóstico de `#planes-web`:** Cómo están estructuradas las tarjetas de precios/planes actuales, si sufren de sobrecarga de texto y cómo mejorar la conversión.
5. **Cuellos de Botella UI/UX:** Lista concreta de los 5 cambios de código con mayor retorno visual inmediato (Quick Wins).

---

## 4. Plan de Refactorización UI/UX (FASE 2 - Propuesta de Implementación)
Una vez completada la Fase 1, prepárate para implementar las siguientes mejoras en orden de prioridad:

### Prioridad 1: El Hero Interactivo (High-Impact Hook)
* **Copywriting Técnico y Directo:** Cambiar títulos genéricos por una propuesta de valor que una código y fierros (ej. *"Ingeniería de Software, Sistemas ERP e Infraestructura Física sin fricción"*).
* **Componente Visual Vivo:** Crear un componente interactivo en código (React/CSS) al costado o debajo del título que simule en tiempo real el ecosistema Enacta: por ejemplo, un panel oscuro que muestre el flujo `[Terminal POS / Hardware] ──(0.4ms)──> [Core ERP / Base de Datos] ──> [Dashboard Web]`, con indicadores de estado pulsando sutilmente.

### Prioridad 2: Servicios en Formato "Bento Grid" Asimétrica
* Reemplazar las listas o tarjetas simétricas tradicionales por una **Bento Grid** de 3 a 4 cajas asimétricas.
* Cada tarjeta debe tener un micro-detalle técnico visual:
  * **Card 1 (ERP & POS):** Mini-vista previa estilizada de control de stock / ventas en tiempo real.
  * **Card 2 (Web & E-commerce):** Indicador de performance `100/100 Core Web Vitals` + integración de pagos.
  * **Card 3 (Hardware & Redes):** Esquemático limpio de conectividad de estaciones, servidores o IoT.

### Prioridad 3: Evolución de `#planes-web` (De Tabla Estática a Selector Inteligente)
* Evitar muros de texto en los planes.
* Implementar un **Toggle o Pestañas Superiores** limpias si hay distintas líneas de negocio (ej. `[ Desarrollo Web & E-commerce ]` vs `[ Sistemas ERP & Gestión ]`).
* Destacar el plan recomendado al centro con un borde superior luminoso sutil (gradiente lineal de `1px`), tipografía monoespaciada para los valores y una lista de características ultra-escaneable (máximo 5-6 puntos clave de alto valor por tarjeta, agrupando lo técnico de forma elegante).

### Prioridad 4: Micro-interacciones y Pulido Final
* Transiciones suaves (`cubic-bezier(0.16, 1, 0.3, 1)`).
* Efecto de *spotlight* sutil siguiendo el cursor en los bordes de las tarjetas (opcional si no afecta el rendimiento móvil).
* Garantizar que en pantallas móviles la jerarquía sea impecable, sin desbordes horizontales ni animaciones pesadas que bloqueen el scroll.

---

## 5. Formato de Respuesta Esperado en Antigravity
1. Entrega primero el **Diagnóstico Real del Código Actual** (Fase 1) citando los nombres de los archivos que revisaste.
2. Propón los cambios exactos para el **Paso 1 (Hero + Bento Grid o `#planes-web`)** para que el desarrollador los apruebe o los traiga de vuelta para revisión.
