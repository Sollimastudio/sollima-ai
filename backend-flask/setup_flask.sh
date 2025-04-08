#!/bin/bash

echo "📦 Instalando Python 3.11.9 com pyenv..."

# Instala pyenv caso não tenha
if ! command -v pyenv &> /dev/null; then
    echo "🔧 Instalando pyenv via Homebrew..."
    brew install pyenv
    echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zprofile
    echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zprofile
    echo 'eval "$(pyenv init --path)"' >> ~/.zprofile
    source ~/.zprofile
else
    echo "✅ pyenv já instalado"
fi

# Instalar Python 3.11.9
if ! pyenv versions | grep -q 3.11.9; then
    pyenv install 3.11.9
else
    echo "✅ Python 3.11.9 já instalado"
fi

echo "🐍 Ativando Python 3.11.9 localmente..."
pyenv local 3.11.9

# Apagar venv anterior se existir
echo "🧼 Limpando venv anterior (se existir)..."
rm -rf venv

# Criar nova venv com 3.11
echo "📁 Criando novo ambiente virtual..."
python -m venv venv

# Ativar venv
source venv/bin/activate

echo "📦 Instalando Flask e Flask-CORS..."
pip install --upgrade pip
pip install flask flask-cors

echo "✅ Tudo pronto. Agora execute: python app.py"
