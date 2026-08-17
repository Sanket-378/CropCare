"""
Run this ONCE on your local machine, inside your dl-model folder,
where plant_disease_model.h5 already exists.

    python convert_to_tflite.py

This creates plant_disease_model.tflite (much smaller + far less RAM at inference).

NOTE: We export to SavedModel format first, then convert from that.
Converting directly from a loaded .h5 Keras model can hit a known
Keras-3 / TFLite tracing bug ("LLVM ERROR: Failed to infer result type(s)").
Going through SavedModel avoids it.
"""

import tensorflow as tf
import shutil
import os

MODEL_PATH = "plant_disease_model.h5"
EXPORT_DIR = "saved_model_temp"
OUTPUT_PATH = "plant_disease_model.tflite"

# Clean any old export
if os.path.exists(EXPORT_DIR):
    shutil.rmtree(EXPORT_DIR)

print("Loading Keras model...")
model = tf.keras.models.load_model(MODEL_PATH, compile=False)

print("Exporting to SavedModel format...")
model.export(EXPORT_DIR)

print("Converting to TFLite...")
converter = tf.lite.TFLiteConverter.from_saved_model(EXPORT_DIR)

converter.optimizations = [tf.lite.Optimize.DEFAULT]

# Fallback: allow TF ops if some layers aren't pure TFLite builtins
converter.target_spec.supported_ops = [
    tf.lite.OpsSet.TFLITE_BUILTINS,
    tf.lite.OpsSet.SELECT_TF_OPS
]

tflite_model = converter.convert()

with open(OUTPUT_PATH, "wb") as f:
    f.write(tflite_model)

# Clean up temp export dir
shutil.rmtree(EXPORT_DIR)

print(f"Done. Saved {OUTPUT_PATH}")
print(f"Size: {os.path.getsize(OUTPUT_PATH) / (1024*1024):.2f} MB")