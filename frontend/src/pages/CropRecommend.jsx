import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaStore } from "react-icons/fa";

export default function CropRecommend() {
  const [soil, setSoil] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [rain, setRain] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(""); // ✅ added

  const handleSubmit = async () => {
    if (!soil || !weather) {
      setError("Please select both soil type and weather condition");
      return;
    }

    setError("");

    try {
      const res = await fetch(
        `http://localhost:8080/api/crop/recommend?soil=${soil}&weather=${weather}&temp=${temp}&rain=${rain}`
      );

      const data = await res.text();
      setResult(data); // ✅ store result
    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <div className="bg-green-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold flex items-center gap-2">
          🌱 Farmer's Helper
        </h1>

        <div className="flex gap-6 items-center">
          <Link to="/" className="flex items-center gap-1 hover:text-green-200">
            <FaHome /> Home
          </Link>
          <a href="#about" className="flex items-center gap-1 hover:text-green-200">
            <FaInfoCircle /> About
          </a>
          <a href="#market" className="flex items-center gap-1 hover:text-green-200">
            <FaStore /> Market
          </a>
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="flex justify-center mt-10 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border">

          <h2 className="text-2xl font-bold text-green-700 text-center mb-2">
            🌱 Crop Recommendation
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Select soil type and weather conditions to get the best crop recommendations
          </p>

          {/* SOIL */}
          <label className="text-green-700 font-medium">▲ Soil Type</label>
          <select
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-green-300 rounded-lg"
          >
            <option value="">Select Soil Type</option>
            <option>Sandy</option>
            <option>Loamy</option>
            <option>Clay</option>
            <option>Peaty</option>
          </select>

          {/* WEATHER */}
          <label className="text-green-700 font-medium">☁ Weather Condition</label>
          <select
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-green-300 rounded-lg"
          >
            <option value="">Select Weather</option>
            <option>Sunny</option>
            <option>Rainy</option>
            <option>Cloudy</option>
            <option>Humid</option>
          </select>

          {/* TEMP */}
          <label className="text-green-700 font-medium">🌡 Temperature (°C)</label>
          <input
            type="number"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Enter temperature"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
          />

          {/* RAIN */}
          <label className="text-green-700 font-medium">🌧 Rainfall (mm)</label>
          <input
            type="number"
            value={rain}
            onChange={(e) => setRain(e.target.value)}
            placeholder="Enter rainfall"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
          />

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
          >
            Get Recommendations →
          </button>

          {/* ERROR */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
              💡 {error}
            </div>
          )}

          {/* RESULT */}
          {result && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
              🌾 Recommended Crop: <b>{result}</b>
            </div>
          )}

        </div>
      </div>

      {/* SOIL INFO SECTION */}
      <div className="mt-12 px-6">
        <h2 className="text-center text-2xl font-bold text-green-700 mb-6">
          Understanding Soil Types
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            🌾
            <h3 className="font-bold text-green-700 mt-2">Sandy Soil</h3>
            <p className="text-sm text-gray-600">
              Light, warm, dry, and low in nutrients. Perfect for root vegetables.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            🌊
            <h3 className="font-bold text-green-700 mt-2">Loamy Soil</h3>
            <p className="text-sm text-gray-600">
              Perfect balance of sand, silt, and clay. Ideal for most crops.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            🌲
            <h3 className="font-bold text-green-700 mt-2">Peaty Soil</h3>
            <p className="text-sm text-gray-600">
              High in organic matter, retains moisture. Good for acid plants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            ⛰
            <h3 className="font-bold text-green-700 mt-2">Clay Soil</h3>
            <p className="text-sm text-gray-600">
              Heavy, cold, wet in winter. Good for summer crops.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}