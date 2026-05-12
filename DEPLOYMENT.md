# Deployment Guide — Nutrifit React

Guía completa para desplegar Nutrifit a producción en Vercel.

## Pre-requisitos

- Proyecto clonado localmente: `D:\CLAUDE\LAPORA\nutrifit-react`
- Dependencias instaladas: `npm install` ✓
- Git configurado: `git config user.name` y `git config user.email`
- Cuenta Vercel activa (gratis): https://vercel.com

## Paso 1: Preparar para GitHub

```bash
# Ir al proyecto
cd D:\CLAUDE\LAPORA\nutrifit-react

# Verificar git status
git status

# Agregar todos los cambios
git add .

# Commit
git commit -m "chore: Nutrifit React refactored from vanilla HTML

- Migrado a Next.js 14 + React + Tailwind + CVA
- Sistemas de perfiles dinámicos (rap, kids, fit)
- Componentes atómicos reutilizables
- Context API para estado global
- Accesibilidad y optimizaciones de performance"

# Verificar remoto (si existe)
git remote -v
```

### Si no tienes remoto aún:

```bash
# Crear repo en GitHub manualmente:
# 1. Ir a github.com/new
# 2. Crear "nutrifit-react"
# 3. NO inicializar con README

# Luego:
git remote add origin https://github.com/tuusuario/nutrifit-react.git
git branch -M main
git push -u origin main
```

## Paso 2: Deploy a Vercel

### Opción A: Vercel CLI (más rápido)

```bash
# Instalar Vercel CLI global
npm install -g vercel

# Login
vercel login
# → Abre navegador, autoriza tu cuenta GitHub

# Deploy
cd D:\CLAUDE\LAPORA\nutrifit-react
vercel
# → Preguntas:
#   "Set up and deploy?" → Yes
#   "Which scope?" → Tu account
#   "Link to existing project?" → No
#   "Project name?" → nutrifit (o nutrifit-demo)
#   "Which directory?" → . (current)
#   "Auto-detect build?" → Yes

# Preview URL: nutrifit.vercel.app (o nutrifit-demo.vercel.app)

# Deploy a producción
vercel --prod
```

### Opción B: Vercel Dashboard (visual)

```bash
# 1. Ir a https://vercel.com/dashboard
# 2. Click "New Project"
# 3. Importar repo: "nutrifit-react"
# 4. Seleccionar "Next.js" framework
# 5. Variables de entorno (opcional):
#    - NEXT_PUBLIC_SITE_URL = https://nutrifit.vercel.app
# 6. Click "Deploy"
```

## Paso 3: Verificar deployment

```bash
# Ver todos los deploys
vercel list

# Ver logs
vercel logs nutrifit

# Ver la URL viva
# Preview: https://nutrifit.vercel.app
# Dashboard: https://vercel.com/dashboard/nutrifit
```

## Variables de entorno (si necesitas)

Crear `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://nutrifit.vercel.app
NEXT_PUBLIC_API_URL=https://api.nutrifit.app
```

En Vercel Dashboard:
1. Project settings → Environment Variables
2. Agregar cada variable
3. Seleccionar "Production", "Preview", "Development"

## Domain personalizado

### Agregar dominio

1. Vercel Dashboard → Project → Domains
2. Agregar: `nutrifit.com` o `app.nutrifit.com`
3. Seguir instrucciones de DNS (cambiar nameservers o agregar CNAME records)
4. Esperar 24-48 horas propagación

### DNS simplificado (si Vercel gestiona el dominio)

```
Type: CNAME
Host: app
Value: cname.vercel-dns.com
```

O en Vercel:
- Click "Add"
- Seleccionar "Update nameservers" 
- Vercel te da los 4 nameservers a poner en tu registrador (Godaddy, Namecheap, etc)

## SSL/TLS Automático

✅ Vercel maneja SSL gratis automáticamente
- Certificados Let's Encrypt
- Auto-renovación
- HTTPS obligatorio

## Monitoreo post-deploy

### Performance
1. Vercel Dashboard → Analytics
2. Ver:
   - Page views
   - Viabilidad de funciones
   - Tiempos de respuesta

### SEO
```bash
# Verificar metadatos
curl https://nutrifit.vercel.app | grep "<meta\|<title"
```

### Errores
Vercel Dashboard → Deployments → Logs (ver si hay errores)

## Rollback (si algo falla)

```bash
# Ver versiones anteriores
vercel list

# Redeploy una versión anterior
vercel rollback
# → Elige la versión que quieres
```

O en Dashboard:
1. Deployments → Elegir versión anterior
2. Click ... → "Promote to Production"

## Actualizaciones futuras

Cada vez que hagas push a main:
```bash
git commit -m "feat: nuevo feature"
git push origin main
# → Vercel auto-deploya
```

O manual:
```bash
vercel --prod
```

## Troubleshooting

### Build falla en Vercel pero funciona local

```bash
# Verificar Node version
node --version  # debe ser 20+

# Limpiar node_modules
rm -rf node_modules package-lock.json
npm install

# Verificar build
npm run build

# Commit y push
git push origin main
```

### Site lento

1. Vercel Analytics → identificar rutas lentas
2. Next.js Image Optimization automático
3. Ver: Serializability issues en logs

### Errores de API/conectividad

```bash
# Verificar logs
vercel logs nutrifit --follow  # tail logs en real-time

# Ver source maps si hay errores JS
Vercel Dashboard → Settings → Build & Development → Source Maps
```

## GitHub Actions (CI/CD automático)

Vercel integra automáticamente con GitHub:

```yaml
# Vercel auto-crea .github/workflows/vercel.yml
# No necesitas hacer nada
# Cada PR = preview deployment
# Merge a main = production deployment
```

Ver en GitHub:
- Actions → Vercel deployment status
- Cada commit tiene estado: ✓ deploying, ✓ deployed, ✗ failed

## Checklist pre-producción

- [ ] Todos los cambios pusheados a `main`
- [ ] No hay warnings en build (`npm run build`)
- [ ] Verificar links internos funcionen
- [ ] Testear Onboarding (cambiar perfil)
- [ ] Verificar imágenes cargan (si agregaste)
- [ ] Open Graph meta tags correctos (verificar en redes)
- [ ] Analytics configurado (Google Analytics, Posthog, etc)
- [ ] Email de contacto/WhatsApp funcional
- [ ] SEO basics (sitemap, robots.txt si necesita)

## Monitoreo permanente

Recomendado agregar:
- **Sentry.io**: Error tracking
- **LogRocket**: Session recording & analytics
- **Google Analytics**: Tráfico y comportamiento
- **Uptime monitoring**: StatusPage.io, Pingdom

```bash
# Instalar Sentry
npm install @sentry/nextjs

# Configurar en app/layout.tsx
import * as Sentry from "@sentry/nextjs"
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
})
```

## Referencias útiles

- **Docs Next.js**: https://nextjs.org/docs
- **Docs Vercel**: https://vercel.com/docs
- **Vercel CLI**: `vercel --help`
- **Issues comunes**: https://vercel.com/support

---

**Listo para producción:** May 12, 2026
**Última actualización:** May 2026
