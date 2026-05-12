# Nutrifit React — Academia Médica de Nutrición

Plataforma de landing dinámico para Academia Médica Nutrifit con perfiles personalizables: MamaRAP, Kids & Loncheras, Cuchos Fit.

## Características

- **Perfiles dinámicos**: 3 perfiles (rap, kids, fit) con contenido, colores y branding únicos
- **React + Next.js 14**: App Router, Server Components, optimizado para performance
- **Tailwind CSS + CVA**: Componentes reutilizables con variantes type-safe
- **Context API**: Gestión de estado de perfil global
- **Accesibilidad**: ARIA roles, semantic HTML, navegación accesible
- **Optimizaciones**: Animations optimizadas (no paint thrashing), lazy loading ready

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 14+ (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Componentes | CVA (class-variance-authority) |
| Type Safety | TypeScript |
| State | Context API + useContext |

## Estructura

```
nutrifit-react/
├── app/
│   ├── page.tsx          ← Home (orquesta secciones)
│   ├── layout.tsx        ← Root layout + ProfileProvider
│   └── globals.css       ← Estilos base, animaciones
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Stat.tsx
│   │   ├── Avatar.tsx
│   │   ├── Tag.tsx
│   │   └── index.ts
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProblemaSection.tsx
│   │   ├── ProgramaSection.tsx
│   │   ├── ResultadosSection.tsx
│   │   ├── PlanesSection.tsx
│   │   └── CTASection.tsx
│   ├── Nav.tsx
│   ├── Onboarding.tsx    ← Modal selector de perfil
│   ├── Footer.tsx
│   ├── ProfileContext.tsx ← Context global + hook
│   └── index.ts
├── lib/
│   ├── perfiles.ts       ← Datos estructurados de perfiles
│   └── cn.ts            ← Classnames utility
├── tailwind.config.ts    ← Extensiones Tailwind
└── package.json
```

## Instalación

```bash
# Clonar proyecto
git clone https://github.com/lapora/nutrifit-react.git
cd nutrifit-react

# Instalar dependencias
npm install

# Dev server
npm run dev
# → http://localhost:3000

# Build
npm run build

# Preview build
npm run start
```

## Flujo de usuario

1. **Onboarding**: Usuario elige perfil (Onboarding.tsx) → fija en Context
2. **Home**: Todas las secciones se renderean con contenido del perfil actual
3. **Cambio de perfil**: Seleccionar diferente en Onboarding → todo re-renderiza

## Personalización para otros clientes

### Para crear un nuevo landing similar:

**Opción 1: Fork + Customize (recomendado)**
```bash
# 1. Fork este repo
git clone <tu-fork>

# 2. Editar lib/perfiles.ts
# - Cambiar nombres de perfiles (rap → fotografia, kids → ecommerce, fit → coaching)
# - Reemplazar contenido de cada perfil
# - Ajustar colores

# 3. Actualizar components/Nav.tsx y Footer.tsx con tus datos

# 4. Deploy a Vercel
vercel deploy
```

**Opción 2: Template reutilizable desde cero**
```bash
# Este proyecto está diseñado para ser copiado/forkado
# Sin dependencias de base de datos, sin API backend
# Todo es cliente-side Context + hardcoded data
```

## Estructura de perfiles (lib/perfiles.ts)

Cada perfil contiene:
```typescript
{
  id: 'rap' | 'kids' | 'fit'
  label: string              // "MamaRAP"
  emoji: string             // "👩‍🤰"
  color: string            // "#be185d"
  colorRgb: string         // "190, 24, 93"
  medico: string           // Nombre médico
  
  // Secciones
  heroH1: string           // Título dinámico con <span> para color
  stats: Stat[]           // 3 estadísticas
  
  problemas: Problema[]   // 4 problemas
  programa: Programa[]    // 3 fases del programa
  
  resultados: Resultado[] // 3 resultados con stats
  testimonios: Testimonio[] // 3 testimonios
  
  resSub: string         // Subtítulo sección resultados
  
  ctaBadge: string      // Badge sección CTA
  ctaH2: string        // Título CTA con <span> para color
  ctaSub: string       // Subtítulo CTA
}
```

## Customización de estilos

### CSS Variables por perfil
El Context actualiza automáticamente:
- `--ac`: Color principal (ej: #be185d)
- `--ac-rgb`: RGB del color (ej: 190, 24, 93)

Usa en componentes:
```tsx
style={{ color: currentProfile?.color }}
style={{ background: `rgba(${currentProfile.colorRgb}, 0.1)` }}
```

### Tailwind
Extender en `tailwind.config.ts`:
```typescript
extend: {
  colors: { accent: 'var(--ac)' },
  // Agregar más si necesitas
}
```

## Optimizaciones de performance

✅ Componentes lazy-loadables (Server Components ready)
✅ CSS animations (no JS)
✅ Backdrop-filter optimizado
✅ Responsive images
✅ Code splitting automático Next.js

## Accesibilidad

✅ Semantic HTML (`<section>`, `<nav>`, `<button>`, `<a>`)
✅ ARIA labels en elementos interactivos
✅ Focus visible estados
✅ Colores con suficiente contraste
✅ Navegación por teclado

Para auditoria completa:
```bash
npm install -D axe-core
# o usar: https://www.deque.com/axe/devtools/
```

## Deploy a Vercel

### Opción 1: GitHub + Vercel auto-deploy
```bash
# 1. Push a GitHub
git push origin main

# 2. Ir a vercel.com
# 3. Conectar repo
# 4. Auto-deploys on git push
```

### Opción 2: Vercel CLI
```bash
npm install -g vercel
vercel          # Deploy
vercel --prod   # Production
```

## Variantes de componentes

Todos los componentes usan **CVA** (class-variance-authority) para variantes type-safe:

```typescript
// Button: variants={variant, size}
<Button variant="primary" size="lg">Click me</Button>
<Button variant="outline" size="sm">Secondary</Button>

// Badge: variants={variant}
<Badge variant="default">Badge</Badge>
<Badge variant="featured">⭐ Recomendado</Badge>

// Card: variants={variant}
<Card variant="featured">Content</Card>
```

## Environment variables

`.env.local` (opcional):
```
NEXT_PUBLIC_SITE_URL=https://nutrifit.vercel.app
```

## Troubleshooting

### Dev server no inicia
```bash
# Limpiar cache
rm -rf .next node_modules
npm install
npm run dev
```

### Errores de build
```bash
# Verificar TypeScript
npx tsc --noEmit

# Limpiar y rebuild
npm run build
```

### Estilos no aplican
```bash
# Asegurar Tailwind está detectando archivos
# Verificar: tailwind.config.ts content: [...]
npm run build -- --debug
```

## Próximos pasos

- [ ] Integrar CMS (Sanity, Strapi) para perfiles dinámicos
- [ ] Analytics (Google Analytics, Segment)
- [ ] E-mail signup → Mailchimp
- [ ] Formulario de contacto → Supabase/Firebase
- [ ] Integración WhatsApp API
- [ ] Versión mobile app (React Native)

## Créditos

Creado con **Claude Code** para **Lapora Marketing Digital** como template reutilizable para clientes.

---

**Última actualización:** May 2026
**Next.js:** 16.2.6
**Tailwind:** 4.x
**Node:** 20+
