#!/bin/bash
# Entrar a la carpeta del proyecto
cd ~/repos/Transportes-Popoteja

# Iniciar el despliegue en Vercel
# --prod realiza el despliegue a producción de inmediato
# --yes acepta los valores por defecto (nombre de proyecto, directorio, etc.)
vercel --prod --yes

# Vincular el repositorio de GitHub con el proyecto de Vercel (CI/CD)
# Esto asegura que futuros cambios subidos con 'git push' se desplieguen solos
vercel link --yes

echo "------------------------------------------------"
echo "✅ Despliegue en Vercel solicitado."
echo "Puedes revisar el estado en: https://vercel.com/dashboard"
