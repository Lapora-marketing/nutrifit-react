#!/bin/bash
# Script para pushear Nutrifit React a GitHub

cd /d/CLAUDE/LAPORA/nutrifit-react

echo "📦 Estado actual de git:"
git status

echo ""
echo "🔗 Agregando remoto de GitHub..."
# Reemplaza TU_USUARIO con tu username de GitHub
git remote add origin https://github.com/TU_USUARIO/nutrifit-react.git

echo ""
echo "📤 Pusheando código a main..."
git branch -M main
git push -u origin main

echo ""
echo "✅ ¡Listo! Tu código está en GitHub."
echo "📍 URL: https://github.com/TU_USUARIO/nutrifit-react"
