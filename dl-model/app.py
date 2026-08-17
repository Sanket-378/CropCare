from flask import Flask, request, jsonify
from flask_cors import CORS

import os
import tensorflow as tf
import numpy as np
from PIL import Image
import json

# =========================
# FLASK APP
# =========================

app = Flask(__name__)

CORS(
    app,
    resources={
        r"/predict": {
            "origins": [
                "https://sanket-378.github.io"
            ]
        }
    },
    methods=["POST", "OPTIONS"],
    allow_headers=["Content-Type"]
)

# =========================
# LOAD MODEL
# =========================

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH = os.path.join(
    BASE_DIR,
    "plant_disease_model.h5"
)
#model
model = tf.keras.models.load_model(
    MODEL_PATH,
    compile=False
)

# =========================
# LOAD CLASS LABELS
# =========================

LABEL_PATH = os.path.join(
    BASE_DIR,
    "class_labels.json"
)

with open(LABEL_PATH, "r") as f:
    class_indices = json.load(f)

class_names = list(class_indices.keys())

# =========================
# DISEASE SOLUTIONS
# =========================

solutions = {

    "Pepper__bell___Bacterial_spot":
        "Remove infected leaves and use copper-based fungicide.",

    "Pepper__bell___healthy":
        "Plant is healthy. Maintain proper watering and sunlight.",

    "Potato___Early_blight":
        "Use fungicide and remove infected leaves.",

    "Potato___Late_blight":
        "Avoid excess moisture and spray proper fungicide.",

    "Potato___healthy":
        "Plant is healthy. Maintain good soil nutrition.",

    "Tomato_Bacterial_spot":
        "Use certified seeds and copper sprays.",

    "Tomato_Early_blight":
        "Remove affected leaves and apply fungicide.",

    "Tomato_Late_blight":
        "Avoid overwatering and apply fungicide immediately.",

    "Tomato_Leaf_Mold":
        "Improve air circulation and reduce humidity.",

    "Tomato_Septoria_leaf_spot":
        "Remove infected leaves and avoid overhead watering.",

    "Tomato_Spider_mites_Two_spotted_spider_mite":
        "Use neem oil or insecticidal soap.",

    "Tomato__Target_Spot":
        "Apply appropriate fungicide and maintain spacing.",

    "Tomato__Tomato_YellowLeaf__Curl_Virus":
        "Control whiteflies and remove infected plants.",

    "Tomato__Tomato_mosaic_virus":
        "Remove infected plants and sanitize tools.",

    "Tomato_healthy":
        "Plant is healthy. Continue proper care."
}

# =========================
# PREDICTION API
# =========================

@app.route("/predict", methods=["POST", "OPTIONS"])
def predict():

    # Handle browser CORS preflight
    if request.method == "OPTIONS":
        return "", 204

    try:

        # Check image
        if "image" not in request.files:
            return jsonify({
                "error": "No image file received"
            }), 400

        file = request.files["image"]

        # Open image
        image = Image.open(file).convert("RGB")

        # Resize
        image = image.resize((128, 128))

        # Convert to NumPy
        image = np.array(image)

        # Normalize
        image = image.astype(np.float32) / 255.0

        # Add batch dimension
        image = np.expand_dims(image, axis=0)

        # Prediction
        prediction = model.predict(image, verbose=0)

        predicted_index = int(np.argmax(prediction))

        predicted_class = class_names[predicted_index]

        confidence = float(np.max(prediction)) * 100

        solution = solutions.get(
            predicted_class,
            "No solution available."
        )

        return jsonify({
            "disease": predicted_class,
            "confidence": round(confidence, 2),
            "solution": solution
        })

    except Exception as e:

        print("Prediction error:", str(e))

        return jsonify({
            "error": str(e)
        }), 500


# =========================
# HEALTH CHECK
# =========================

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "status": "Disease detection API is running",
        "endpoint": "/predict"
    })


# =========================
# RUN APP
# =========================

if __name__ == "__main__":

    port = int(os.environ.get("PORT", 5000))

    app.run(
        host="0.0.0.0",
        port=port,
        debug=False
    )