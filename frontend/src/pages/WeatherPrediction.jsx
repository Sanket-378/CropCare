import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import {
  FaCloudSun,
  FaSearch,
  FaMapMarkerAlt,
  FaTint,
  FaWind,
  FaEye,
  FaTemperatureHigh,
  FaSun,
  FaClock,
  FaCalendarAlt,
  FaHome,
  FaInfoCircle,
  FaTwitter,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

export default function WeatherPrediction() {

  useEffect(() => {
    document.title = "Weather Prediction | Crop Care";
  }, []);

  const [city, setCity] = useState("Mumbai");

  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);

  // GET WEATHER BY CITY

  const getWeather = async () => {

    try {

      setLoading(true);

      const response = await axios.get(
        `http://localhost:8080/api/weather/${city}`
      );

      setWeatherData(response.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("City not found");
    }
  };

  // CURRENT LOCATION WEATHER

  const getCurrentLocation = () => {

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const lat = position.coords.latitude;

        const lon = position.coords.longitude;

        try {

          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=79a3f444d846e076ef99c344e342637f&units=metric`
          );

          setWeatherData(response.data);

        } catch (error) {

          console.log(error);
        }
      }
    );
  };

  // LOAD DEFAULT CITY

  useEffect(() => {

    getWeather();

  }, []);

  const getGreeting = () => {

      const hour = new Date().getHours();

      if (hour >= 0 && hour < 12) {

          return "Good Morning";
      }

      else if (hour >= 12 && hour < 16) {

          return "Good Afternoon";
      }

      else if (hour >= 16 && hour < 19) {

          return "Good Evening";
      }

      else {

          return "Good Night";
      }
  };

  return (

    <div className="min-h-screen bg-[#eef4e3]">

      {/* NAVBAR */}

      <div className="bg-green-700 shadow-lg px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3 text-white">

          <div className="bg-orange-400 p-2 rounded-full">
            <FaCloudSun />
          </div>

          <h1 className="text-2xl font-bold tracking-wide">
            WEATHER DASHBOARD
          </h1>

        </div>

        <div className="flex items-center gap-6 text-white text-sm font-semibold">

          <Link
              to="/"
              className="hover:text-yellow-300 flex items-center gap-2"
          >
              <FaHome />
              Home
          </Link>

          <Link
              to="/about"
              className="hover:text-yellow-300 flex items-center gap-2"
          >
              <FaInfoCircle />
              About
          </Link>

        </div>

      </div>

      {/* MAIN */}

      <div className="max-w-5xl mx-auto p-6">

        {/* HERO */}

        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center mb-8">

          <h1 className="text-5xl font-extrabold text-green-700 tracking-widest mb-4">

            WELCOME TO WEATHER DASHBOARD

          </h1>

          <p className="text-green-700 text-lg font-semibold">
            Your go-to web app for real-time weather updates and forecasts
          </p>

          <p className="text-gray-600 mt-2">
            Gateway to real-time weather insights 🌤️ 🌧️ 🌍
          </p>

        </div>

        {/* SEARCH */}

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

          <h2 className="text-green-700 font-bold mb-4 flex items-center gap-2">
            <FaSearch className="text-orange-400" />
            Search Location
          </h2>

          <div className="flex gap-4">

            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city..."
              className="flex-1 border border-green-200 rounded-full px-6 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
              onClick={getWeather}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2"
            >
              <FaSearch />
              SEARCH
            </button>

          </div>

          <button
            onClick={getCurrentLocation}
            className="w-full border border-dashed border-green-300 rounded-full py-3 mt-5 text-green-600 hover:bg-green-50"
          >

            📍 Use Current Location

          </button>

        </div>

        {/* WEATHER CARD */}

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

          {loading ? (

            <h1 className="text-center text-2xl font-bold text-green-700">
              Loading Weather...
            </h1>

          ) : (

            <>
              <div className="flex justify-between items-start mb-6">

                <div>

                  <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-orange-400" />

                    {weatherData?.city?.name}

                  </h2>

                </div>

                <div className="text-right">

                  <p className="text-gray-500">
                    Live Weather
                  </p>

                  <p className="text-green-600 font-semibold">
                      {getGreeting()}
                  </p>

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-8">

                {/* LEFT */}

                <div className="flex items-center gap-6">

                  <div className="bg-green-50 p-5 rounded-2xl">

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
                      alt="weather"
                      className="w-20"
                    />

                    <h1 className="text-5xl font-bold text-green-700 mt-3">

                      {Math.round(weatherData?.list?.[0]?.main?.temp)}°C

                    </h1>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-green-700">

                      {weatherData?.list?.[0]?.weather?.[0]?.description}

                    </h3>

                    <p className="text-gray-500 mt-2">

                      Feels like {Math.round(weatherData?.list?.[0]?.main?.feels_like)}°C

                    </p>

                  </div>

                </div>

                {/* RIGHT */}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                  <div className="border rounded-2xl p-4">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <FaTint className="text-green-500" />
                      HUMIDITY
                    </p>

                    <h2 className="text-xl font-bold text-green-700">

                      {weatherData?.list?.[0]?.main?.humidity}%

                    </h2>
                  </div>

                  <div className="border rounded-2xl p-4">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <FaWind className="text-green-500" />
                      WIND SPEED
                    </p>

                    <h2 className="text-xl font-bold text-green-700">

                      {weatherData?.list?.[0]?.wind?.speed} km/h

                    </h2>
                  </div>

                  <div className="border rounded-2xl p-4">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <FaEye className="text-green-500" />
                      VISIBILITY
                    </p>

                    <h2 className="text-xl font-bold text-green-700">

                      {weatherData?.list?.[0]?.visibility / 1000} km

                    </h2>
                  </div>

                  <div className="border rounded-2xl p-4">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <FaTemperatureHigh className="text-green-500" />
                      PRESSURE
                    </p>

                    <h2 className="text-xl font-bold text-green-700">

                      {weatherData?.list?.[0]?.main?.pressure} hPa

                    </h2>
                  </div>

                  <div className="border rounded-2xl p-4">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <FaSun className="text-green-500" />
                      WEATHER
                    </p>

                    <h2 className="text-xl font-bold text-green-700">

                      {weatherData?.list?.[0]?.weather?.[0]?.main}

                    </h2>
                  </div>

                  <div className="border rounded-2xl p-4">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      🌡️ TEMP MAX
                    </p>

                    <h2 className="text-xl font-bold text-green-700">

                      {Math.round(weatherData?.list?.[0]?.main?.temp_max)}°C

                    </h2>
                  </div>

                </div>

              </div>
            </>
          )}

        </div>

        {/* HOURLY */}

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">

          <h2 className="text-green-700 font-bold text-xl mb-6 flex items-center gap-2">

            <FaClock className="text-orange-400" />
            Hourly Forecast

          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

            {weatherData?.list?.slice(0, 5).map((item, index) => (

              <div
                key={index}
                className="bg-green-50 rounded-2xl p-4 text-center"
              >

                <h3 className="font-bold text-green-700">

                  {new Date(item.dt_txt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                  })}

                </h3>

                <img
                  src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                  alt=""
                  className="w-12 mx-auto my-2"
                />

                <p className="text-lg font-bold text-green-700">

                  {Math.round(item.main.temp)}°C

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* 5 DAY */}

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

          <h2 className="text-green-700 font-bold text-xl mb-6 flex items-center gap-2">

            <FaCalendarAlt className="text-orange-400" />
            5-Day Forecast

          </h2>

          <div className="grid md:grid-cols-5 gap-4">

            {weatherData?.list
              ?.filter((item, index) => index % 8 === 0)
              ?.slice(0, 5)
              ?.map((item, index) => (

                <div
                  key={index}
                  className="bg-green-50 rounded-2xl p-4 text-center"
                >

                  <h3 className="font-bold text-green-700 text-lg">

                    {new Date(item.dt_txt).toLocaleDateString("en-US", {
                      weekday: "short"
                    })}

                  </h3>

                  <img
                    src="https://cdn-icons-png.flaticon.com/512/414/414927.png"
                    alt=""
                    className="w-14 mx-auto my-3"
                  />

                  <p className="font-bold text-green-700">

                    {Math.round(item.main.temp)}°C

                  </p>

                  <p className="text-gray-500 text-sm mt-2">

                    {item.weather[0].description}

                  </p>

                </div>

              ))}

          </div>

        </div>

        {/* WHY CHOOSE */}

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-10">

          <h2 className="text-green-700 font-bold text-2xl mb-6">
            ⭐ Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <div className="border rounded-2xl p-5">

              <h3 className="font-bold text-green-700 mb-2">
                Accurate Forecasts
              </h3>

              <p className="text-gray-500 text-sm">
                Get up-to-date weather reports for your location and beyond
              </p>

            </div>

            <div className="border rounded-2xl p-5">

              <h3 className="font-bold text-green-700 mb-2">
                Alerts & Notifications
              </h3>

              <p className="text-gray-500 text-sm">
                Stay informed with instant weather alerts and notifications
              </p>

            </div>

            <div className="border rounded-2xl p-5">

              <h3 className="font-bold text-green-700 mb-2">
                Responsive Design
              </h3>

              <p className="text-gray-500 text-sm">
                Access weather information seamlessly on any device
              </p>

            </div>

            <div className="border rounded-2xl p-5">

              <h3 className="font-bold text-green-700 mb-2">
                Interactive Maps
              </h3>

              <p className="text-gray-500 text-sm">
                Explore real-time weather maps with live radar and satellite images
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div className="bg-green-900 text-white py-10">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">

          <div>

            <h2 className="font-bold text-xl mb-4">
              QUICK LINKS
            </h2>

            <div className="space-y-2 text-green-100">

              <p>🏠 Home</p>
              <p>ℹ️ About</p>
              <p>📧 Contact</p>

            </div>

          </div>

          <div>

            <h2 className="font-bold text-xl mb-4">
              CONNECT WITH US
            </h2>

            <div className="flex gap-4 text-2xl">

              <FaFacebook className="hover:text-blue-400 cursor-pointer" />

              <FaTwitter className="hover:text-sky-400 cursor-pointer" />

              <FaInstagram className="hover:text-pink-400 cursor-pointer" />

            </div>

          </div>

        </div>

        <div className="text-center text-green-200 mt-8 text-sm">

          © 2026 Weather Dashboard. All rights reserved.

        </div>

      </div>

    </div>
  );
}