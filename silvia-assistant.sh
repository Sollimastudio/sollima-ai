#!/bin/bash

echo "🚀 Iniciando Silvia Assistant AI..."

cd frontend || exit

echo "🧹 Limpando node_modules e package-lock.json..."
rm -rf node_modules package-lock.json

echo "📦 Instalando dependências..."
npm install

echo "⚙️ Rodando build e desenvolvimento!"
npm run dev


