# 🚀 Deploy Nutrifit a Vercel - 3 pasos

**Proyecto listo en:** `D:\CLAUDE\LAPORA\nutrifit-react`
**Git status:** ✓ Inicializado y committeado

## Opción A: Vercel CLI (recomendado si funciona)

```bash
cd D:\CLAUDE\LAPORA\nutrifit-react

# Login a Vercel (abre navegador)
vercel login

# Deploy a producción
vercel --prod
```

Si hay errores de "cross-device link" (Windows), pasa a **Opción B**.

---

## Opción B: Vercel Dashboard + GitHub (MEJOR para este proyecto)

### Paso 1: Crear repo en GitHub (1 min)

1. Ir a https://github.com/new
2. Repository name: `nutrifit-react`
3. Description: "Nutrifit Academia Médica - Refactored React"
4. Public (así otros pueden ver el template)
5. Click "Create repository"

### Paso 2: Pushear código (30 segundos)

```bash
cd D:\CLAUDE\LAPORA\nutrifit-react

# Agregar remote (copiar URL de tu repo)
git remote add origin https://github.com/TU_USUARIO/nutrifit-react.git
git branch -M main
git push -u origin main
```

### Paso 3: Deploy en Vercel Dashboard (2 min)

1. Ir a https://vercel.com/dashboard
2. Click "New Project"
3. Seleccionar "Import Git Repository"
4. Buscar "nutrifit-react" (del repo que acabas de crear)
5. Framework: **Next.js** (autodetectado ✓)
6. Root Directory: `.` (default)
7. Environment Variables: (opcional, dejar vacío por ahora)
8. Click "Deploy"

**¡Listo!** Vercel creará la URL automáticamente:
- Preview: `https://nutrifit-react.vercel.app`
- Production: `https://nutrifit-react-staging.vercel.app` → Vercel te da la custom

---

## Opción C: Manual (sin GitHub)

Si no quieres GitHub, puedes:

1. Ir a https://vercel.com/import
2. Subir archivos manually (más lento)
3. O usar `vercel --prod` directo

---

## Después del deploy

✅ **Verificar** que funciona:
- Ir a la URL que da Vercel
- Probar cambio de perfil (Onboarding)
- Responsive en mobile

✅ **Agregar dominio** (si tienes):
- Vercel Dashboard → Project → Domains
- Agregar `nutrifit.app` o dominio personalizado
- Seguir instrucciones DNS

✅ **Activar GitHub Integration** (recomendado):
- Cada push a main = auto-deploy
- Cada PR = preview automático

---

## Si algo falla

### "Build failed"
```bash
# Verificar local primero
npm run build

# Si funciona local, es error de Vercel
# → Vercel Dashboard → Deployments → Logs
# → Ver error específico
```

### "Function timed out"
Es normal en primer build. Espera 5 min y reintentar.

### "Module not found"
```bash
cd D:\CLAUDE\LAPORA\nutrifit-react
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "fix: reinstall dependencies"
git push origin main
```

---

## URLs de referencia

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Tu proyecto:** https://vercel.com/dashboard/nutrifit-react
- **GitHub:** https://github.com (crear repo ahí)

---

**Recomendación:** Usa **Opción B** (GitHub + Vercel Dashboard).
Es lo más rápido y da mejor experiencia.
