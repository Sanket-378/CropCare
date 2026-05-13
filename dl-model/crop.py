from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load trained model
model = joblib.load("models/crop_model.pkl")

soil_encoder = joblib.load("models/soil_encoder.pkl")
season_encoder = joblib.load("models/season_encoder.pkl")
crop_encoder = joblib.load("models/crop_encoder.pkl")


@app.route('/predict_crop', methods=['POST'])
def predict_crop():

    data = request.json

    soil = data['soil']
    weather = data['weather']
    temperature = float(data['temp'])
    rainfall = float(data['rain'])

    # Convert frontend weather → season
    if weather == "Sunny":
        season = "Summer"

    elif weather == "Rainy":
        season = "Rainy"

    else:
        season = "Winter"

    # Encode values
    soil_encoded = soil_encoder.transform([soil])[0]
    season_encoded = season_encoder.transform([season])[0]

    # Prediction input
    features = np.array([
        [soil_encoded, season_encoded, temperature, rainfall]
    ])

    # Predict
    prediction = model.predict(features)

    # Decode output
    crop = crop_encoder.inverse_transform(prediction)[0]

    return jsonify({
        "crop": crop
    })


if __name__ == '__main__':
    app.run(port=5001, debug=True)