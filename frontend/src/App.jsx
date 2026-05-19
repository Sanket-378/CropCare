import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaSignInAlt,
  FaRobot,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

import Login from "./pages/Login";
import Register from "./pages/Register";
import IdentifyDisease from "./pages/IdentifyDisease";
import CropRecommend from "./pages/CropRecommend";
import AIChatbot from "./pages/AIChatbot";
import WeatherPrediction from "./pages/WeatherPrediction";
import RealImage from "./pages/RealImage";
import Market from "./pages/Market";
import ExportData from "./pages/ExportData";


// ================= HOME COMPONENT =================

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-[#eef3ea] text-black"
      }
    >
      {/* NAVBAR */}

      <nav
        className={`${
          darkMode
            ? "bg-gray-800 text-white"
            : "bg-gray-100"
        } px-12 py-3 flex justify-between items-center shadow-sm`}
      >
        <div className="flex items-center gap-2 text-green-600 font-bold text-lg">
          🌿 CROP CARE
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a
            href="#"
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            <FaHome /> Home
          </a>

          <a
            href="#about"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
          >
            <FaInfoCircle /> About
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
          >
            <FaEnvelope /> Contact
          </a>

          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
          >
            <FaSignInAlt /> Login/Register
          </Link>

          <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition">
            <FaUser /> Profile
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* HERO */}

      <section className="relative min-h-screen flex flex-col justify-center items-center text-center text-white pt-32 pb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
            alt="farm"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-green-700 opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Welcome to CROP CARE
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl mb-12 text-gray-200"
          >
            Your AI-powered agricultural assistant for smarter
            farming decisions and real-time crop guidance.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* CARD 1 */}

            <div
              className={`${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-green-800"
              } rounded-xl px-10 py-8 shadow-lg`}
            >
              <div className="text-green-600 text-3xl mb-3">
                🌱
              </div>

              <h2 className="text-3xl font-bold">1000+</h2>

              <p className="text-sm mt-2">
                Crops Analyzed
              </p>
            </div>

            {/* CARD 2 */}

            <div
              className={`${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-green-800"
              } rounded-xl px-10 py-8 shadow-lg`}
            >
              <div className="text-green-600 text-3xl mb-3">
                🌦️
              </div>

              <h2 className="text-3xl font-bold">24/7</h2>

              <p className="text-sm mt-2">
                Weather Updates
              </p>
            </div>

            {/* CARD 3 */}

            <div
              className={`${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-green-800"
              } rounded-xl px-10 py-8 shadow-lg`}
            >
              <div className="text-green-600 text-3xl mb-3">
                📈
              </div>

              <h2 className="text-3xl font-bold">95%</h2>

              <p className="text-sm mt-2">
                Accuracy Rate
              </p>
            </div>

            {/* CARD 4 */}

            <div
              className={`${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-green-800"
              } rounded-xl px-10 py-8 shadow-lg`}
            >
              <div className="text-green-600 text-3xl mb-3">
                🤖
              </div>

              <h2 className="text-3xl font-bold">
                AI Powered
              </h2>

              <p className="text-sm mt-2">
                Multilingual Farmer Chatbot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        className={`${
          darkMode
            ? "bg-gray-900"
            : "bg-[#eef3ea]"
        } py-16 px-10`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* IDENTIFY */}

          <div
            className={`rounded-xl shadow-md p-8 text-center ${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-white"
            }`}
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
              🔬
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Identify Crop Diseases
            </h3>

            <p className="text-sm mb-6">
              Advanced AI-powered disease detection
            </p>

            <Link to="/identify">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                Identify Diseases
              </button>
            </Link>
          </div>

          {/* CROP */}

          <div
            className={`rounded-xl shadow-md p-8 text-center ${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-white"
            }`}
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
              📊
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Find the Best Crop
            </h3>

            <p className="text-sm mb-6">
              Smart recommendations based on soil
            </p>

            <Link to="/crop_recommend">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                Get Prediction
              </button>
            </Link>
          </div>

          {/* EXPORT */}

          <div
            className={`rounded-xl shadow-md p-8 text-center ${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-white"
            }`}
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
              🌍
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Export Crop Analysis
            </h3>

            <p className="text-sm mb-6">
              Discover export opportunities
            </p>

            <Link to="/export-data">
              <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                View Export Data
              </button>
            </Link>
          </div>

          {/* WEATHER */}

          <Link to="/weather">
            <div
              className={`rounded-xl shadow-md p-8 text-center cursor-pointer ${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white"
              }`}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
                🌦️
              </div>

              <h3 className="font-semibold text-lg mb-2">
                Weather Forecast
              </h3>

              <p className="text-sm mb-6">
                Real-time weather updates
              </p>

              <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm">
                Check Weather
              </button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}


// ================= MAIN APP =================

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/identify"
        element={<IdentifyDisease />}
      />

      <Route
        path="/crop_recommend"
        element={<CropRecommend />}
      />

      <Route
        path="/ai-chat"
        element={<AIChatbot />}
      />

      <Route
        path="/weather"
        element={<WeatherPrediction />}
      />

      <Route
        path="/real-image"
        element={<RealImage />}
      />

      <Route
        path="/market"
        element={<Market />}
      />

      {/* EXPORT DATA ROUTE */}

      <Route
        path="/export-data"
        element={<ExportData />}
      />
    </Routes>
  );
}

export default App;