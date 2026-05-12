from flask import Flask, request, jsonify
from flask_cors import CORS

import tensorflow as tf
import numpy as np
from PIL import Image
import json

# =========================
# FLASK APP
# =========================

app = Flask(__name__)

CORS(app)

# =========================
# LOAD MODEL
# =========================

model = tf.keras.models.load_model(
    "plant_disease_model.h5",
    compile=False
)
# =========================
# LOAD CLASS LABELS
# =========================

with open("class_labels.json", "r") as f:
    class_indices = json.load(f)

# Convert dictionary to list
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

@app.route("/predict", methods=["POST"])
def predict():

    try:

        # Get image file
        file = request.files["image"]

        # Open image
        image = Image.open(file).convert("RGB")

        # Resize image
        image = image.resize((128, 128))

        # Convert to array
        image = np.array(image)

        # Normalize
        image = image / 255.0

        # Expand dimensions
        image = np.expand_dims(image, axis=0)

        # Predict
        prediction = model.predict(image)

        predicted_index = np.argmax(prediction)

        predicted_class = class_names[predicted_index]

        confidence = float(np.max(prediction)) * 100

        # Get solution
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

        return jsonify({

            "error": str(e)

        })

# =========================
# RUN APP
# =========================

if __name__ == "__main__":

    app.run(debug=True, port=5000)