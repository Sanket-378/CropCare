from flask import Flask, request, jsonify
from flask_cors import CORS

import tensorflow as tf
import numpy as np
from PIL import Image

app = Flask(__name__)

CORS(app)

# LOAD TRAINED MODEL
model = tf.keras.models.load_model("plant_disease_model.h5")

# CLASS NAMES
class_names = [
    "Potato Early Blight",
    "Potato Late Blight",
    "Tomato Healthy",
    "Tomato Leaf Mold"
]

# DISEASE SOLUTIONS
solutions = {

    "Potato Early Blight":
        "Use fungicide and remove infected leaves.",

    "Potato Late Blight":
        "Avoid excess moisture and spray proper fungicide.",

    "Tomato Healthy":
        "Plant is healthy. Maintain proper watering.",

    "Tomato Leaf Mold":
        "Improve air circulation and use copper fungicide."
}


@app.route("/predict", methods=["POST"])
def predict():

    try:

        file = request.files["image"]

        image = Image.open(file).convert("RGB")

        image = image.resize((128, 128))

        image = np.array(image)

        image = image / 255.0

        image = np.expand_dims(image, axis=0)

        prediction = model.predict(image)

        predicted_class = class_names[np.argmax(prediction)]

        confidence = float(np.max(prediction)) * 100

        return jsonify({
            "disease": predicted_class,
            "confidence": round(confidence, 2),
            "solution": solutions[predicted_class]
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        })


if __name__ == "__main__":

    app.run(debug=True, port=5000)