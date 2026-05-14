import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaStore } from "react-icons/fa";

export default function CropRecommend() {

  const [soil, setSoil] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [rain, setRain] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState("");

  // API CALL
  const handleSubmit = async () => {

    // Validation
    if (!soil || !weather || !temp || !rain) {

      setError("Please fill all fields");
      return;
    }

    setError("");

    setLoading(true);

    setResult("");

    try {

      // Spring Boot API
      const response = await fetch(

        `http://localhost:8080/api/crop/recommend?soil=${soil}&weather=${weather}&temp=${temp}&rain=${rain}`

      );

      // Result from backend
      const data = await response.text();

      setResult(data);

    } catch (err) {

      setError("Server Error. Please try again.");

    } finally {

      setLoading(false);
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

          <Link
            to="/"
            className="flex items-center gap-1 hover:text-green-200 transition"
          >
            <FaHome /> Home
          </Link>

          <a
            href="#about"
            className="flex items-center gap-1 hover:text-green-200 transition"
          >
            <FaInfoCircle /> About
          </a>

          <Link
            to="/market"
            className="flex items-center gap-1 hover:text-green-200 transition"
          >
            <FaStore /> Market
          </Link>

        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="flex justify-center mt-10 px-4">

        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border">

          {/* TITLE */}
          <h2 className="text-3xl font-bold text-green-700 text-center mb-2">
            🌾 AI Crop Recommendation
          </h2>

          <p className="text-center text-gray-600 mb-6">
            Smart crop suggestions to help farmers improve productivity and reduce farming risks.
          </p>

          {/* SOIL TYPE */}
          <label className="text-green-700 font-semibold">
            🌱 Soil Type
          </label>

          <select
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
            className="w-full mb-4 px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select Soil Type</option>

            <option>Sandy</option>
            <option>Loamy</option>
            <option>Clay</option>
            <option>Peaty</option>

          </select>

          {/* WEATHER */}
          <label className="text-green-700 font-semibold">
            ☁ Weather Condition
          </label>

          <select
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            className="w-full mb-4 px-4 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select Weather</option>

            <option>Sunny</option>
            <option>Rainy</option>
            <option>Cloudy</option>
            <option>Humid</option>

          </select>

          {/* TEMPERATURE */}
          <label className="text-green-700 font-semibold">
            🌡 Temperature (°C)
          </label>

          <input
            type="number"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Enter Temperature"
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* RAINFALL */}
          <label className="text-green-700 font-semibold">
            🌧 Rainfall (mm)
          </label>

          <input
            type="number"
            value={rain}
            onChange={(e) => setRain(e.target.value)}
            placeholder="Enter Rainfall"
            className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300"
          >

            {
              loading
                ? "Predicting..."
                : "Get AI Recommendation →"
            }

          </button>

          {/* ERROR */}
          {
            error && (

              <div className="mt-4 bg-red-100 text-red-700 p-4 rounded-lg">

                ⚠ {error}

              </div>
            )
          }

          {/* RESULT */}
          {
            result && (

              <div className="mt-6 bg-green-100 border border-green-300 p-5 rounded-xl text-center shadow">

                <h2 className="text-xl font-bold text-green-700">
                  🌾 Recommended Crop
                </h2>

                <p className="text-3xl mt-2 font-bold text-green-900">
                  {result}
                </p>

              </div>
            )
          }

        </div>
      </div>

      {/* SOIL INFO SECTION */}
      <div className="mt-14 px-6 pb-10">

        <h2 className="text-center text-3xl font-bold text-green-700 mb-8">

          Understanding Soil Types

        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow text-center relative overflow-hidden
                          hover:-translate-y-2 hover:shadow-xl transition-all duration-300
                          before:absolute before:top-0 before:left-0 before:w-full before:h-1
                          before:bg-green-600 before:scale-x-0 hover:before:scale-x-100
                          before:transition-transform before:duration-300 before:origin-left">

            <div className="text-5xl">🌾</div>

            <h3 className="font-bold text-green-700 mt-3 text-lg">
              Sandy Soil
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Light, warm, dry, and low in nutrients.
              Best for root vegetables and millet crops.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow text-center relative overflow-hidden
                          hover:-translate-y-2 hover:shadow-xl transition-all duration-300
                          before:absolute before:top-0 before:left-0 before:w-full before:h-1
                          before:bg-green-600 before:scale-x-0 hover:before:scale-x-100
                          before:transition-transform before:duration-300 before:origin-left">

            <div className="text-5xl">🌊</div>

            <h3 className="font-bold text-green-700 mt-3 text-lg">
              Loamy Soil
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Perfect balance of sand, silt, and clay.
              Ideal for rice, maize, and vegetables.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow text-center relative overflow-hidden
                          hover:-translate-y-2 hover:shadow-xl transition-all duration-300
                          before:absolute before:top-0 before:left-0 before:w-full before:h-1
                          before:bg-green-600 before:scale-x-0 hover:before:scale-x-100
                          before:transition-transform before:duration-300 before:origin-left">

            <div className="text-5xl">🌲</div>

            <h3 className="font-bold text-green-700 mt-3 text-lg">
              Peaty Soil
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Rich in organic matter and moisture.
              Suitable for potato and tea crops.
            </p>

          </div>

          {/* CARD 4 */}
          <div className="bg-white p-6 rounded-xl shadow text-center relative overflow-hidden
                          hover:-translate-y-2 hover:shadow-xl transition-all duration-300
                          before:absolute before:top-0 before:left-0 before:w-full before:h-1
                          before:bg-green-600 before:scale-x-0 hover:before:scale-x-100
                          before:transition-transform before:duration-300 before:origin-left">

            <div className="text-5xl">⛰</div>

            <h3 className="font-bold text-green-700 mt-3 text-lg">
              Clay Soil
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Heavy and nutrient-rich soil.
              Suitable for wheat, cotton, and sugarcane.
            </p>

          </div>

        </div>
      </div>

    </div>
  );
}