from flask import Flask, request, jsonify
from PIL import Image, ImageDraw, ImageFont
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/generate-image", methods=["POST"])
def generate_image():
    data = request.get_json()
    text = data.get("text", "Criativo de Alta Conversão")

    # Criar uma imagem simples com texto
    img = Image.new("RGB", (800, 400), color="white")
    draw = ImageDraw.Draw(img)
    font = ImageFont.load_default()
    draw.text((50, 180), text, fill="black", font=font)

    image_path = f"static/{text.replace(' ', '_')}.png"
    os.makedirs("static", exist_ok=True)
    img.save(image_path)

    return jsonify({"image_url": f"http://localhost:3000/" + image_path})

if __name__ == "__main__":
    os.makedirs("uploads", exist_ok=True)
  app.run(host="0.0.0.0", port=3000, debug=True)


