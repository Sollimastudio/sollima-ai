#!/bin/bash

echo "🔁 Iniciando ambiente Sollima-AI..."

# Ativa backend
cd backend
echo "📡 Iniciando BACKEND Flask..."
source venv/bin/activate
export FLASK_APP=app.py
flask run --port=5000 &
BACK_PID=$!
cd ..

# Inicia frontend
cd frontend
echo "🌐 Iniciando FRONTEND React..."
npm install
npm run start &
FRONT_PID=$!

# Espera usuário pressionar CTRL+C
trap "kill $BACK_PID $FRONT_PID" EXIT
wait
