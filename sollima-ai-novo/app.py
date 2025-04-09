from flask import Flask, request, jsonify
import openai
import os
from dotenv import load_dotenv

# Carrega variáveis do .env
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

app = Flask(__name__)

@app.route("/pergunta", methods=["POST"])
def perguntar_ao_gpt():
    data = request.get_json()
    pergunta = data.get("pergunta")

    if not pergunta:
        return jsonify({"erro": "Campo 'pergunta' é obrigatório"}), 400

    try:
        resposta = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": pergunta}]
        )
        texto_resposta = resposta['choices'][0]['message']['content']
        return jsonify({"resposta": texto_resposta})
    except Exception as e:
        return jsonify({"erro": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
