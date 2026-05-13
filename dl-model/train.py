import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load dataset
data = pd.read_csv("dataset/crop_recommendation.csv")

# Encoders
soil_encoder = LabelEncoder()
season_encoder = LabelEncoder()
crop_encoder = LabelEncoder()

# Convert text to numbers
data['Soil_Type'] = soil_encoder.fit_transform(data['Soil_Type'])
data['Season'] = season_encoder.fit_transform(data['Season'])
data['Crop'] = crop_encoder.fit_transform(data['Crop'])

# Features
X = data[[
    'Soil_Type',
    'Season',
    'Temperature',
    'Rainfall'
]]

# Target
y = data['Crop']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

# Train model
model.fit(X_train, y_train)

# Test prediction
y_pred = model.predict(X_test)

# Accuracy
accuracy = accuracy_score(y_test, y_pred)

print("Accuracy:", accuracy)

# Save model
joblib.dump(model, "models/crop_model.pkl")

# Save encoders
joblib.dump(soil_encoder, "models/soil_encoder.pkl")
joblib.dump(season_encoder, "models/season_encoder.pkl")
joblib.dump(crop_encoder, "models/crop_encoder.pkl")

print("Model Trained & Saved Successfully")