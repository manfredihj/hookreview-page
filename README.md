
# gofidely — Landings en Next.js 15 + Tailwind (+ shadcn-like)

Proyecto base listo para múltiples landings dinámicas por segmento (`/[slug]`).

## ✅ Incluye
- Next.js 15 (App Router)
- TailwindCSS
- Componentes UI simples tipo shadcn (`Button`, `Card`) sin dependencias externas
- Colores de marca en `tailwind.config.ts`
- 3 landings: `/ecommerce`, `/inmobiliarias`, `/agencias` (ver `lib/content.ts`)

## 🚀 Cómo correr
```bash
npm install
npm run dev
# abrir http://localhost:3000
```

## 🧩 Estructura de contenido
- Editá / agregá landings en `lib/content.ts`.
- Cada entrada del objeto `LANDINGS` define `title`, `description`, `cta`, `features` y un bloque CTA final.

## 🧪 A/B & personalización
Podés duplicar landings (ej. `/ecommerce-b`), o leer contenido de un CMS/headless.
Para integrar un Headless CMS (Sanity/Strapi), reemplazá `getLandingContent` por una llamada a API.

## 🎨 Colores de marca
Definidos en `tailwind.config.ts`:
- Primario `#400099`
- Verde `#A0F717`
- Celeste `#4fb3de`
- Magenta `#e71fb2`

¡Listo para deploy en Vercel!
