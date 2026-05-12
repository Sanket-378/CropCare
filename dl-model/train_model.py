import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import json

# =========================
# SETTINGS
# =========================

IMG_SIZE = 128
BATCH_SIZE = 32
EPOCHS = 10

# =========================
# DATA GENERATOR
# =========================

train_datagen = ImageDataGenerator(
    rescale=1./255,
    validation_split=0.2,
    rotation_range=20,
    zoom_range=0.2,
    horizontal_flip=True
)

# =========================
# TRAINING DATA
# =========================

train_data = train_datagen.flow_from_directory(
    "dataset",
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode="categorical",
    subset="training",
    shuffle=True
)

# =========================
# VALIDATION DATA
# =========================

val_data = train_datagen.flow_from_directory(
    "dataset",
    target_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode="categorical",
    subset="validation",
    shuffle=False
)

# =========================
# SAVE CLASS LABELS
# =========================

class_indices = train_data.class_indices

with open("class_labels.json", "w") as f:
    json.dump(class_indices, f)

print("Class Labels Saved")

# =========================
# CNN MODEL
# =========================

model = models.Sequential([

    # Layer 1
    layers.Conv2D(
        32,
        (3,3),
        activation='relu',
        input_shape=(IMG_SIZE, IMG_SIZE, 3)
    ),

    layers.MaxPooling2D(2,2),

    # Layer 2
    layers.Conv2D(
        64,
        (3,3),
        activation='relu'
    ),

    layers.MaxPooling2D(2,2),

    # Layer 3
    layers.Conv2D(
        128,
        (3,3),
        activation='relu'
    ),

    layers.MaxPooling2D(2,2),

    # Layer 4
    layers.Conv2D(
        256,
        (3,3),
        activation='relu'
    ),

    layers.MaxPooling2D(2,2),

    # Flatten
    layers.Flatten(),

    # Dense Layer
    layers.Dense(
        256,
        activation='relu'
    ),

    layers.Dropout(0.5),

    # Output Layer
    layers.Dense(
        train_data.num_classes,
        activation='softmax'
    )
])

# =========================
# COMPILE MODEL
# =========================

model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# =========================
# MODEL SUMMARY
# =========================

model.summary()

# =========================
# TRAIN MODEL
# =========================

history = model.fit(
    train_data,
    validation_data=val_data,
    epochs=EPOCHS
)

# =========================
# SAVE MODEL
# =========================

model.save("plant_disease_model.h5")

print("Model Trained Successfully")