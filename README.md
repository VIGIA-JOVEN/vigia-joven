# VIGIA JOVEN 2.0

> **Plataforma PWA Offline-First y Gamificada para la Protección de los Derechos Sexuales y Reproductivos (DSDR) de jóvenes en Bolivia.**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)
[![Demo](https://img.shields.io/badge/Demo-vigia--joven.vercel.app-7C3AED?logo=vercel)](https://vigia-joven.vercel.app/)

---

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [El Problema](#el-problema)
- [La Solución — Seis Pilares](#la-solución--seis-pilares)
- [Funcionalidades Principales](#funcionalidades-principales)
- [Tech Stack](#tech-stack)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Uso Local](#instalación-y-uso-local)
- [Internacionalización (i18n)](#internacionalización-i18n)
- [Roadmap](#roadmap)
- [Presupuesto](#presupuesto)
- [Alianzas Estratégicas](#alianzas-estratégicas)
- [Equipo](#equipo)
- [Contacto](#contacto)

---

## Descripción del Proyecto

**VIGIA JOVEN 2.0** es una propuesta para el IPAS Hackathon 2026. Es una plataforma digital que combina tecnología móvil, inteligencia artificial local y gamificación para proteger y promover los Derechos Sexuales y Reproductivos (DSDR) de jóvenes bolivianas, especialmente en contextos de escasa conectividad y diversidad lingüística.

El proyecto está inspirado en casos de éxito internacionales con evidencia científica comprobada:

| Referencia | País | Aprendizaje Clave |
|---|---|---|
| **CyberRwanda** | Ruanda | Retención >12 meses = impacto real |
| **Nthabi** | Sudáfrica | Inclusión multilingüe = mayor alcance |
| **Go Nisha Go** | India | Gamificación = retención y cambio de comportamiento |

---

## El Problema

Bolivia registra una de las tasas más altas de embarazo adolescente en América Latina. Las intervenciones tradicionales no llegan a quienes más las necesitan por cuatro barreras críticas:

| Barrera | Dato |
|---|---|
| **Sin Internet** – Acceso a datos móviles limitado en zonas periurbanas y rurales | 67% sin acceso a datos móviles |
| **Barrera Idiomática** – Herramientas de salud solo en español | 40% habla lengua originaria (Aimara/Quechua) |
| **Peligro en Casa** – Buscar información puede desencadenar violencia | 75% VBG en el hogar |
| **Sin Servicios Cercanos** – Centros de salud sin métodos anticonceptivos o personal capacitado | 52% sin servicios accesibles |

---

## La Solución — Seis Pilares

### 1. 📴 Offline-First
PWA completa con Service Workers e IndexedDB. Una vez descargada en un punto WiFi, **el 100% de la aplicación funciona sin internet**, incluyendo el Chatbot con IA, evaluaciones y biblioteca de recursos.

### 2. 🛡️ Safe Tech — Privacidad Extrema
- **Botón de pánico** que camufla la app en una calculadora en 1 segundo
- **Anonimato total** sin datos personales
- **Auto-destrucción de datos** tras 30 días de inactividad
- **Cifrado E2EE** en todas las comunicaciones

### 3. 🤖 IA Local Multilingüe
Modelo **Llama 3.1 8B** fine-tuneado con 200+ preguntas reales del Teléfono Rosa de Bolivia. Chatbot empático 24/7 disponible en **Español, Aimara y Quechua** con lenguaje coloquial.

### 4. 🎮 Gamificación
Basada en Go Nisha Go:
- Avatar personalizable
- Micro-aprendizaje diario de **3 minutos**
- Desafíos comunitarios
- Historia interactiva **"El Viaje de Carla"**

### 5. ♿ Accesibilidad Universal
- **Texto a voz** para baja alfabetización
- **Pictogramas ARASAAC** para accesibilidad cognitiva
- **Versión de lectura fácil**

### 6. 🏥 Integración Local
Derivación automática a **SLIM, CAIs y Línea 156**. SMS encriptado al servicio más cercano con código de caso **sin datos personales**.

---

## Funcionalidades Principales

La plataforma cuenta con cinco módulos principales según el documento oficial de propuesta:

| # | Módulo | Descripción Técnica |
|---|---|---|
| 1 | **Motor de Triage (2 Niveles)** | Screening rápido 2 min (Nivel 1). Si hay indicadores de riesgo se activa test profundo OMS 10 min (Nivel 2). |
| 2 | **Derivación API Zero-Knowledge** | SMS encriptado a SLIM y CAIs con **Código de Caso único**, sin exponer nombre ni datos personales de la usuaria. |
| 3 | **Chatbot IA Offline** | Llama 3.1 8B + arquitectura **RAG** restringida a Ley 1152 boliviana. Disponible en Español, Aimara y Quechua, 100% offline. |
| 4 | **Biblioteca Educativa Resiliente** | Infografías, audios y guías prácticas 100% offline. Contenido en 3 idiomas con pictogramas ARASAAC y texto a voz. |
| 5 | **Foro Comunitario E2EE** | Apoyo entre pares con cifrado E2EE y moderación automatizada. Incluye **Temas Guiados** fijados (hilos predefinidos para que las usuarias compartan su postura) y conversaciones libres. |

---

## Tech Stack

### Frontend (Landing Page / Demo)

| Categoría | Tecnología |
|---|---|
| **Framework** | Next.js 16.1.6 (App Router) |
| **UI Library** | React 19.2.4 |
| **Lenguaje** | TypeScript 5.x |
| **Estilos** | Tailwind CSS + CSS Variables |
| **Componentes** | Radix UI (shadcn/ui) |
| **Formularios** | React Hook Form + Zod |
| **Gráficas** | Recharts |
| **Iconos** | Lucide React |
| **Fuentes** | Inter + Space Grotesk (Google Fonts) |
| **Notificaciones** | Sonner |
| **Analytics** | Vercel Analytics |
| **Package Manager** | npm |

### Frontend PWA (Arquitectura Objetivo)

| Categoría | Tecnología |
|---|---|
| **Framework** | React 19 + Vite |
| **Offline** | Service Workers (Workbox) + IndexedDB |
| **IA en dispositivo** | Llama 3.1 8B vía WebAssembly (WASM) |
| **Almacenamiento** | ~150 MB (imágenes WebP + audio Opus) |

### Backend y Base de Datos (Sincronización Asíncrona)

| Categoría | Tecnología |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Fastify + tRPC |
| **Base de Datos** | PostgreSQL + Drizzle ORM |
| **SMS / Derivaciones** | API Twilio (Zero-Knowledge — solo hash de caso + nivel de triaje) |
| **Sincronización** | Solo en red WiFi segura; datos analíticos agregados, no rastreables |

### Seguridad

| Mecanismo | Detalle |
|---|---|
| **E2EE** | Criptografía de curva elíptica en foro y consultas de alto riesgo |
| **Botón de pánico** | Camufla app como calculadora en < 1 segundo |
| **Auto-borrado** | Caché y datos locales eliminados tras 30 días de inactividad |
| **Zero-Knowledge** | Derivaciones solo envían código de hash + nivel Verde/Amarillo/Rojo |

---

## Estructura del Proyecto

```
VIGIA-JOVEN/
├── app/
│   ├── layout.tsx           # Layout raíz (metadata, fuentes, analytics)
│   ├── page.tsx             # Landing page principal
│   ├── globals.css          # Variables CSS y estilos globales
│   └── simulacion/
│       └── page.tsx         # Demo interactiva de la app (marco de teléfono)
├── components/
│   ├── landing/             # Secciones de la landing page
│   │   ├── navbar.tsx
│   │   ├── hero-section.tsx
│   │   ├── problem-section.tsx
│   │   ├── solution-section.tsx
│   │   ├── evidence-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── impact-section.tsx
│   │   ├── budget-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── cta-section.tsx
│   │   └── footer.tsx
│   ├── simulation/          # Simulación interactiva de la app
│   │   ├── phone-frame.tsx  # Marco de teléfono animado
│   │   └── app-screens.tsx  # Pantallas de la aplicación
│   ├── ui/                  # Componentes de UI (shadcn/ui)
│   ├── language-selector.tsx
│   └── theme-provider.tsx
├── hooks/
│   ├── use-mobile.ts
│   ├── use-scroll-animation.ts
│   └── use-toast.ts
├── lib/
│   ├── i18n.tsx             # Sistema de internacionalización (ES/AY/QU)
│   └── utils.ts
├── public/
│   └── images/
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Instalación y Uso Local

### Prerrequisitos

- Node.js >= 18.x
- npm >= 10.x

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/vigia-joven.git
cd vigia-joven

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### Comandos Disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint |

---

## Internacionalización (i18n)

La plataforma soporta **3 idiomas** de forma nativa:

| Código | Idioma | Nombre Nativo |
|---|---|---|
| `es` | Español | Español |
| `ay` | Aimara | Aymara |
| `qu` | Quechua | Runasimi |

El sistema de i18n está implementado en [`lib/i18n.tsx`](lib/i18n.tsx) usando React Context. Incluye traducciones completas para todas las secciones de la landing y la simulación de la app.

```tsx
// Uso en cualquier componente cliente
const { t, lang, setLang } = useI18n()
t("hero.title1") // → "VIGIA" (ES) / traducción Aimara / traducción Quechua
```

---

## Roadmap — Piloto 90 Días

| Fase | Período | Hitos Clave |
|---|---|---|
| **1 — Preparación** | Semanas 1–3 | Talleres de co-creación con jóvenes y expertos lingüísticos en La Paz y El Alto; fine-tuning final de Llama 3.1 8B con datos locales; capacitación de 50 Promotores Juveniles |
| **2 — Desarrollo e Implementación del MVP** | Semanas 4–8 | Despliegue de PWA en 2–3 centros de salud y SLIMs; captación de usuarias a través de promotores; activación del triage y chatbot offline |
| **3 — Ejecución y Ajuste** | Semanas 9–12 | Monitoreo del uso offline y efectividad del triage; seguimiento de derivaciones completadas; ajustes iterativos por retroalimentación |
| **4 — Evaluación de Impacto** | Mes 4 | Estudio pre/post para medir conocimiento DSDR y autoeficacia; reporte final para UNFPA, OPS y gobiernos municipales |

### Indicadores de Impacto (M&E)

| Indicador | Descripción |
|---|---|
| **Autoeficacia** | % de usuarias que reportan mayor capacidad para negociar prácticas seguras (encuestas pre/post) |
| **Acceso Efectivo** | Tasa de jóvenes derivadas que asisten efectivamente a una cita presencial |
| **Privacidad Garantizada** | 100% de operaciones de triaje sin brechas de identidad ni filtración de datos |

---

## Presupuesto

**Inversión Total: $20,000 USD** _(Bs. 139,200 — tipo de cambio referencial: 1 USD = 6.96 Bs.)_

> Presupuesto ajustado para el **MVP + Piloto de 90 días**.

| Rubro | Monto USD | Monto Bs. | % |
|---|---|---|---|
| Desarrollo Técnico (PWA, motor de triaje, chatbot inicial, interfaz segura) | $8,000 | Bs. 55,680 | 40% |
| Infraestructura e IA (servidores, alojamiento, APIs de SMS) | $2,500 | Bs. 17,400 | 12% |
| Capacitación e Inclusión (materiales + 50 promotores juveniles) | $3,500 | Bs. 24,360 | 18% |
| Coordinación Institucional (convenios SEDES, SLIMs, centros piloto) | $3,000 | Bs. 20,880 | 15% |
| Evaluación de Impacto (estudio clínico pre/post) | $3,000 | Bs. 20,880 | 15% |

---

## Modelo de Sostenibilidad (Año 2+)

La viabilidad financiera a largo plazo trasciende la dependencia de fondos de cooperación:

- **Licenciamiento municipal**: escalamiento a otros departamentos con datos de impacto demostrado
- **Fondos UNFPA / OPS**: ventana estratégica 2026 para soluciones digitales en la región andina
- **Alineación con Ley 1152**: la normativa boliviana exige herramientas didácticas de educación sexual — VIGÍA JOVEN se posiciona como el brazo digital municipal ideal

---

## Alianzas Estratégicas

- **IPAS Bolivia**
- **UNFPA** — Fondo de Población de las Naciones Unidas
- **OPS / OMS** — Organización Panamericana / Mundial de la Salud
- **SEDES** — Servicio Departamental de Salud
- **SLIM** — Servicio Legal Integral Municipal
- **CAIs** — Centros de Atención Integral
- **Línea 156** — Línea de Atención a la Violencia (Bolivia)

---

## Equipo

| Integrante | Rol |
|---|---|
| **Omar Quispe Vargas** | Líder de proyecto / Desarrollo |
| **Alejandro Cosulich Arcienega** | Desarrollo / Arquitectura |
| **Jhamil Calixto Mamani Quea** | Diseño / Comunidades |

---

## Contacto

🌐 **Demo:** [vigia-joven.vercel.app](https://vigia-joven.vercel.app/)  
📧 [contacto@vigiajoven.org](mailto:contacto@vigiajoven.org)  
📍 La Paz y El Alto, Bolivia  

---

> Hecho con ❤️ en Bolivia — © 2026 VIGIA JOVEN 2.0. Datos tratados con privacidad extrema.
