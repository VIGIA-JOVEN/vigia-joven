# VIGIA JOVEN 2.0

> **Plataforma PWA Offline-First y Gamificada para la Protección de los Derechos Sexuales y Reproductivos (DSDR) de jóvenes en Bolivia.**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

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

Los módulos principales de la aplicación son:

| Módulo | Descripción |
|---|---|
| **Triage de 2 Niveles** | Screening rápido 2 min + test profundo OMS 10 min |
| **Derivación Segura** | SMS encriptado a SLIM, CAIs y Línea 156 |
| **Chatbot Offline IA** | Llama 3.1 8B en 3 idiomas |
| **Biblioteca Multimedia** | +120 recursos con audio en Aimara y Quechua |
| **Foro E2EE** | Comunidad entre pares cifrada extremo a extremo |
| **Micro-Aprendizaje** | 3 min/día sobre un tema con gamificación |

---

## Tech Stack

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
| **Animaciones** | Tailwind Animate + CSS transitions |
| **Notificaciones** | Sonner |
| **Analytics** | Vercel Analytics |
| **Package Manager** | npm |

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
pnpm install

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

## Roadmap

| Fase | Período | Hitos Clave |
|---|---|---|
| **1 — Preparación** | Semanas 1–3 | Diseño participativo con comunidades Aimara/Quechua, fine-tuning de IA con 200+ preguntas reales, capacitación de 50 Promotores Juveniles |
| **2 — Desarrollo y Piloto** | Semanas 4–12 | Lanzamiento del MVP multilingüe, 8 semanas de piloto en 5 centros de salud, meta: 500 usuarias activas |
| **3 — Evaluación de Impacto** | Semanas 13–16 | Estudio pre/post con grupo de control, evaluación de autoeficacia, encuesta de seguimiento a 30 días |
| **4 — Escalamiento** | Mes 6+ | Presentación a gobiernos municipales, licenciamiento y expansión, alianzas con UNFPA y OPS |

### Métricas de Éxito

| Métrica | Meta |
|---|---|
| Reducción embarazo adolescente prevenible | **33%** (proxy: intención de uso de anticoncepción) |
| Usuarias activas en 90 días | **500+** |
| Autoeficacia (negociación uso de condón) | **85%** (medido pre/post) |
| Privacidad y anonimato | **100%** (E2EE + auto-destrucción de datos) |

---

## Presupuesto

**Inversión Total: $55,000 USD**

| Rubro | Monto | % |
|---|---|---|
| Desarrollo Técnico (PWA multilingüe, IA local, accesibilidad) | $22,000 | 40% |
| Infraestructura (servidores, almacenamiento, CDN) | $7,000 | 13% |
| Capacitación (promotores juveniles, género e inclusión) | $10,000 | 18% |
| Coordinación (alianzas con SLIM, CAIs y servicios locales) | $8,000 | 15% |
| Evaluación (estudio pre/post con grupo control) | $8,000 | 14% |

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

## Contacto

📧 [quispevargasomar@gmail.com](mailto:quispevargasomar@gmail.com)  
📍 La Paz y El Alto, Bolivia  

---

> Hecho con ❤️ en Bolivia — © 2026 VIGIA JOVEN 2.0. Datos tratados con privacidad extrema.
