import { FaHome, FaInfoCircle, FaEnvelope, FaUser, FaSignInAlt } from "react-icons/fa";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-gray-100 px-12 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2 text-green-600 font-bold text-lg">
          🌿 CROP CARE
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">

          {/* Home */}
          <a href="#" className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg">
            <FaHome /> Home
          </a>

          {/* About */}
          <a href="#about" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition">
            <FaInfoCircle /> About
          </a>

          {/* Contact */}
          <a href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition">
            <FaEnvelope /> Contact
          </a>

          {/* Login/Register */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition">
            <FaSignInAlt /> Login/Register
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition">
            <FaUser /> Profile
          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center text-white">

        {/* Background Image + Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
            alt="farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-700 opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-4">

          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Welcome to CROP CARE
          </h1>

          <p className="text-lg md:text-xl mb-12 text-gray-200">
            Your smart agricultural assistant for better farming decisions
          </p>

          {/* Stats Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">

            {/* Card 1 */}
            <div className="bg-white text-gray-800 rounded-xl px-10 py-8 shadow-lg w-64">
              <div className="text-green-600 text-3xl mb-3">🌱</div>
              <h2 className="text-3xl font-bold">1000+</h2>
              <p className="text-sm text-gray-600 mt-2">Crops Analyzed</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-gray-800 rounded-xl px-10 py-8 shadow-lg w-64">
              <div className="text-green-600 text-3xl mb-3">🌦️</div>
              <h2 className="text-3xl font-bold">24/7</h2>
              <p className="text-sm text-gray-600 mt-2">Weather Updates</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-gray-800 rounded-xl px-10 py-8 shadow-lg w-64">
              <div className="text-green-600 text-3xl mb-3">📈</div>
              <h2 className="text-3xl font-bold">95%</h2>
              <p className="text-sm text-gray-600 mt-2">Accuracy Rate</p>
            </div>

          </div>
        </div>
      </section>
      {/* FEATURES SECTION */}
      <section className="bg-[#eef3ea] py-16 px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="group bg-white rounded-xl shadow-md p-8 text-center transition hover:shadow-xl hover:-translate-y-1 hover:border-t-4 hover:border-green-600">
            <div className="w-14 h-14 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
              🔬
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Identify Crop Diseases
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Advanced AI-powered disease detection for your crops
            </p>
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition">
              Identify Diseases →
            </button>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-xl shadow-md p-8 text-center transition hover:shadow-xl hover:-translate-y-1 hover:border-t-4 hover:border-green-600">
            <div className="w-14 h-14 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
              📊
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Find the Best Crop
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Smart recommendations based on soil and climate
            </p>
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition">
              Get Prediction →
            </button>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-xl shadow-md p-8 text-center transition hover:shadow-xl hover:-translate-y-1 hover:border-t-4 hover:border-green-600">
            <div className="w-14 h-14 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
              🌍
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Export Crop Analysis
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Discover international market demand and export opportunities
            </p>
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition">
              View Export Data →
            </button>
          </div>

          {/* Card 4 */}
          <div className="group bg-white rounded-xl shadow-md p-8 text-center transition hover:shadow-xl hover:-translate-y-1 hover:border-t-4 hover:border-green-600">
            <div className="w-14 h-14 mx-auto mb-4 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl">
              🌦️
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Weather Forecast
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Real-time weather updates for better planning
            </p>
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition">
              Check Weather →
            </button>
          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#eef3ea] py-20 px-10">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-green-700 mb-12">
          About Our Platform
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-gray-700 text-sm leading-7">
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
            <div className="bg-white rounded-xl shadow-md p-6 w-40 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-xl">
                🧠
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">
                AI-Powered
              </h4>
              <p className="text-xs text-gray-600">
                Advanced algorithms for accurate predictions
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 w-40 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-xl">
                📱
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">
                Mobile Friendly
              </h4>
              <p className="text-xs text-gray-600">
                Access anywhere, anytime
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 w-40 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-xl">
                📊
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">
                Data-Driven
              </h4>
              <p className="text-xs text-gray-600">
                Based on real agricultural data
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-green-800 text-white py-10 px-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Left */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Farmer's Helper
            </h3>
            <p className="text-sm text-green-200">
              Empowering farmers with technology
            </p>
          </div>

          {/* Middle */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Quick Links
            </h3>
            <ul className="text-sm text-green-200 space-y-1">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
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
        <div className="text-center text-sm text-green-200 mt-8">
          © 2024 Farmer's Helper. All rights reserved.
        </div>

      </footer>
    </>
  );
}

export default App;