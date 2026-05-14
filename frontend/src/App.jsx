import { FaHome, FaInfoCircle, FaEnvelope, FaUser, FaSignInAlt } from "react-icons/fa";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FaRobot, FaMoon, FaSun, FaCloudSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Login from "./pages/Login";
import Register from "./pages/Register";
import IdentifyDisease from "./pages/IdentifyDisease";
import CropRecommend from "./pages/CropRecommend";
import AIChatbot from "./pages/AIChatbot";
import WeatherPrediction from "./pages/WeatherPrediction";
import RealImage from "./pages/RealImage";
import Market from "./pages/Market";

// ✅ HOME COMPONENT (your full UI moved here — unchanged)
function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>

      {/* NAVBAR */}
      <nav className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-100"} px-12 py-3 flex justify-between items-center shadow-sm`}>

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

          {/* LOGIN */}
          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition"
          >
            <FaSignInAlt /> Login/Register
          </Link>

          {/* PROFILE */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition">
            <FaUser /> Profile
          </div>

          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

        </div>
      </nav>

           <div className={darkMode ? "bg-gray-900 text-white" : "bg-[#eef3ea] text-black"}>

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
                   transition={{ duration: 1, delay: 0.5 }}
                   className="text-lg md:text-xl mb-12 text-gray-200"
                 >
                   Your AI-powered agricultural assistant for smarter farming decisions and real-time crop guidance.
                 </motion.p>

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">

                   {/* CARD 1 */}
                   <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.8 }}
                     className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-green-800"} rounded-xl px-10 py-8 shadow-lg w-full max-w-[240px] transition`}
                   >
                     <div className="text-green-600 text-3xl mb-3">🌱</div>
                     <h2 className="text-3xl font-bold">1000+</h2>
                     <p className={`${darkMode ? "text-gray-300" : "text-green-600"} text-sm mt-2`}>
                       Crops Analyzed
                     </p>
                   </motion.div>

                   {/* CARD 2 */}
                   <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 1.1 }}
                     className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-green-800"} rounded-xl px-10 py-8 shadow-lg w-full max-w-[240px] transition`}
                   >
                     <div className="text-green-600 text-3xl mb-3">🌦️</div>
                     <h2 className="text-3xl font-bold">24/7</h2>
                     <p className={`${darkMode ? "text-gray-300" : "text-green-600"} text-sm mt-2`}>
                       Weather Updates
                     </p>
                   </motion.div>

                   {/* CARD 3 */}
                   <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 1.4 }}
                     className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-green-800"} rounded-xl px-10 py-8 shadow-lg w-full max-w-[240px] transition`}
                   >
                     <div className="text-green-600 text-3xl mb-3">📈</div>
                     <h2 className="text-3xl font-bold">95%</h2>
                     <p className={`${darkMode ? "text-gray-300" : "text-green-600"} text-sm mt-2`}>
                       Accuracy Rate
                     </p>
                   </motion.div>

                   {/* CARD 4 */}
                   <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 1.7 }}
                     className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-green-800"} rounded-xl px-10 py-8 shadow-lg w-full max-w-[240px] transition`}
                   >
                     <div className="text-green-600 text-3xl mb-3">🤖</div>
                     <h2 className="text-3xl font-bold">AI Powered</h2>
                     <p className={`${darkMode ? "text-gray-300" : "text-green-600"} text-sm mt-2`}>
                       Multilingual Farmer Chatbot
                     </p>
                   </motion.div>

                 </div>

               </div>

             </section>

             <Link to="/ai-chat">

               <div className="fixed bottom-6 right-6 bg-green-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition cursor-pointer z-50">

                 <FaRobot size={28} />

               </div>

             </Link>

             {/* FEATURES */}

             <section className={`${darkMode ? "bg-gray-900" : "bg-[#eef3ea]"} py-16 px-10 transition-all duration-500`}>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                 {/* Card 1 */}
                 <div className={`group rounded-xl shadow-md p-8 text-center transition hover:shadow-xl hover:-translate-y-1 hover:border-t-4 hover:border-green-600 ${
                   darkMode ? "bg-gray-800 text-white" : "bg-white"
                 }`}>
                   <div className="w-14 h-14 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
                     🔬
                   </div>

                   <h3 className={`font-semibold text-lg mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                     Identify Crop Diseases
                   </h3>

                   <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm mb-6`}>
                     Advanced AI-powered disease detection for your crops
                   </p>

                   <Link to="/identify">
                     <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                       Identify Diseases
                     </button>
                   </Link>
                 </div>

                 {/* Card 2 */}
                 <div className={`group rounded-xl shadow-md p-8 text-center transition hover:shadow-xl hover:-translate-y-1 hover:border-t-4 hover:border-green-600 ${
                   darkMode ? "bg-gray-800 text-white" : "bg-white"
                 }`}>
                   <div className="w-14 h-14 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
                     📊
                   </div>

                   <h3 className={`font-semibold text-lg mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                     Find the Best Crop
                   </h3>

                   <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm mb-6`}>
                     Smart recommendations based on soil and climate
                   </p>

                   <Link to="/crop_recommend">
                     <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                       Get Prediction
                     </button>
                   </Link>
                 </div>

                 {/* Card 3 */}
                 <div className={`group rounded-xl shadow-md p-8 text-center transition hover:shadow-xl hover:-translate-y-1 hover:border-t-4 hover:border-green-600 ${
                   darkMode ? "bg-gray-800 text-white" : "bg-white"
                 }`}>
                   <div className="w-14 h-14 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
                     🌍
                   </div>

                   <h3 className={`font-semibold text-lg mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                     Export Crop Analysis
                   </h3>

                   <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm mb-6`}>
                     Discover international market demand and export opportunities
                   </p>

                   <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                     View Export Data
                   </button>
                 </div>

                 {/* Card 4 */}

                 <Link to="/weather">

                   <div className={`group cursor-pointer rounded-xl shadow-md p-8 text-center transition hover:shadow-xl hover:-translate-y-1 hover:border-t-4 hover:border-green-600 ${
                     darkMode ? "bg-gray-800 text-white" : "bg-white"
                   }`}>

                     <div className="w-14 h-14 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
                       🌦️
                     </div>

                     <h3 className={`font-semibold text-lg mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                       Weather Forecast
                     </h3>

                     <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm mb-6`}>
                       Real-time weather updates for better planning
                     </p>

                     <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                       Check Weather
                     </button>

                   </div>

                 </Link>

               </div>

             </section>



      {/* ABOUT */}
      <section
        id="about"
        className={`${darkMode ? "bg-gray-900 text-white" : "bg-[#eef3ea] text-black"} py-20 px-10 transition-all duration-500`}
      >

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-green-700 mb-12">
          About Our Platform
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-sm leading-7`}>

            <p className="mb-4">
              This platform helps farmers to easily identify crop diseases and
              receive crop recommendations based on their soil types. Our project
              aims to revolutionize Indian agriculture through technology by
              integrating real-time weather forecasts, crop disease detection,
              and crop recommendations.
            </p>

            <p>
              By leveraging data-driven insights, we empower farmers with the right
              knowledge to enhance yield, reduce losses, and promote sustainable
              farming practices.
            </p>

          </div>

          {/* Right Cards */}
          <div className="flex flex-wrap gap-6 justify-center">

            {/* Card 1 */}
            <div className={`rounded-xl shadow-md p-6 w-40 text-center hover:shadow-lg transition ${
              darkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}>

              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-xl">
                🧠
              </div>

              <h4 className={`font-semibold mb-1 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}>
                AI-Powered
              </h4>

              <p className={`text-xs ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Advanced algorithms for accurate predictions
              </p>

            </div>

            {/* Card 2 */}
            <div className={`rounded-xl shadow-md p-6 w-40 text-center hover:shadow-lg transition ${
              darkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}>

              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-xl">
                📱
              </div>

              <h4 className={`font-semibold mb-1 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}>
                Mobile Friendly
              </h4>

              <p className={`text-xs ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Access anywhere, anytime
              </p>

            </div>

            {/* Card 3 */}
            <div className={`rounded-xl shadow-md p-6 w-40 text-center hover:shadow-lg transition ${
              darkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}>

              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-xl">
                📊
              </div>

              <h4 className={`font-semibold mb-1 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}>
                Data-Driven
              </h4>

              <p className={`text-xs ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Based on real agricultural data
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer
        id="contact"
        className={`${darkMode ? "bg-black text-white" : "bg-green-800 text-white"} py-10 px-10 transition-all duration-500`}
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Left */}
          <div>

            <h3 className="font-semibold text-lg mb-2">
              Farmer's Helper
            </h3>

            <p className={`${darkMode ? "text-gray-400" : "text-green-200"} text-sm`}>
              Empowering farmers with technology
            </p>

          </div>

          {/* Middle */}
          <div>

            <h3 className="font-semibold text-lg mb-2">
              Quick Links
            </h3>

            <ul className={`${darkMode ? "text-gray-400" : "text-green-200"} text-sm space-y-1`}>

              <li className="hover:text-white cursor-pointer">
                Home
              </li>

              <li className="hover:text-white cursor-pointer">
                About
              </li>

              <li className="hover:text-white cursor-pointer">
                Contact
              </li>

            </ul>

          </div>

          {/* Right */}
          <div>

            <h3 className="font-semibold text-lg mb-2">
              Connect With Us
            </h3>

            <div className="flex gap-4 mt-2">

              <div className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-500 cursor-pointer">
                🌐
              </div>

              <div className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-500 cursor-pointer">
                🐦
              </div>

              <div className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-500 cursor-pointer">
                📸
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className={`${darkMode ? "text-gray-500" : "text-green-200"} text-center text-sm mt-8`}>
          © 2024 Farmer's Helper. All rights reserved.
        </div>

      </footer>

      </div>
      </div>

      );
      }



// ✅ MAIN APP (ROUTER ONLY)
function App() {
  return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/identify" element={<IdentifyDisease />} />
  <Route path="/crop_recommend" element={<CropRecommend />} />
  <Route path="/ai-chat" element={<AIChatbot />} />
  <Route path="/weather" element={<WeatherPrediction />} />
  <Route path="/real-image" element={<RealImage />} />
  <Route path="/market" element={<Market />} />
</Routes>
  );
}

export default App;