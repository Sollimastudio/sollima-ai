#!/bin/bash

echo "🔍 Verificando ambiente virtual..."
if [ ! -d "venv" ]; then
  echo "📁 Ambiente virtual não encontrado. Criando com Python 3.11..."
  python3 -m venv venv
  source venv/bin/activate
  echo "📦 Instalando Flask e Flask-CORS..."
  pip install --upgrade pip
  pip install flask flask-cors
else
  echo "✅ Ambiente virtual já existe."
  source venv/bin/activate
fi

echo "🚀 Iniciando servidor Flask..."
python app.py

echo "🛑 Servidor Flask encerrado."
