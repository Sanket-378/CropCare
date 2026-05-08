import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  FaHome,
  FaCloudSun,
  FaMoon,
  FaSun,
  FaLeaf,
  FaLanguage
} from "react-icons/fa";

function RealImage() {

  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState(null);

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const [language, setLanguage] = useState("English");

  // TRANSLATIONS

  const translations = {

    English: {

      home: "Home",

      weather: "Weather",

      title: "Upload Plant Image",

      analyze: "Analyze Image",

      uploading: "Analyzing...",

      confidence: "Confidence",

      solution: "Solution",

      uploadMsg: "Upload Crop Image",

      selectLang: "Language"
    },

    Hindi: {

      home: "होम",

      weather: "मौसम",

      title: "पौधे की तस्वीर अपलोड करें",

      analyze: "रोग पहचानें",

      uploading: "विश्लेषण हो रहा है...",

      confidence: "विश्वास",

      solution: "समाधान",

      uploadMsg: "फसल की तस्वीर अपलोड करें",

      selectLang: "भाषा"
    },

    Marathi: {

      home: "मुख्यपृष्ठ",

      weather: "हवामान",

      title: "पिकाचा फोटो अपलोड करा",

      analyze: "रोग शोधा",

      uploading: "विश्लेषण सुरू आहे...",

      confidence: "विश्वास",

      solution: "उपाय",

      uploadMsg: "पिकाचा फोटो अपलोड करा",

      selectLang: "भाषा"
    }
  };

  const text = translations[language];

  // IMAGE CHANGE

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    setImage(file);

    setPreview(URL.createObjectURL(file));

    setResult(null);
  };

  // ANALYZE IMAGE

  const analyzeImage = async () => {

    if (!image) {

      alert(text.uploadMsg);

      return;
    }

    const formData = new FormData();

    formData.append("image", image);

    try {

      setLoading(true);

      const response = await axios.post(

        "http://127.0.0.1:5000/predict",

        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);

    } catch (error) {

      console.log(error);

      alert("Prediction failed");
    }

    setLoading(false);
  };

  // PAGE TITLE

  useEffect(() => {

    document.title = "Real Image Detection | CropCare";

  }, []);

  return (

    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-green-50 text-black"
      }`}
    >

      {/* NAVBAR */}

      <div className={`flex items-center justify-between px-8 py-4 shadow-lg ${
        darkMode
          ? "bg-gray-800"
          : "bg-green-700"
      } text-white`}>

        {/* LEFT SIDE */}

        <div className="flex items-center gap-6">

          <button
            onClick={() => window.location.href = "/"}
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <FaHome />
            {text.home}
          </button>

          <button
            onClick={() => window.location.href = "/weather"}
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <FaCloudSun />
            {text.weather}
          </button>

        </div>

        {/* CENTER LOGO */}

        <div className="flex items-center gap-3">

          <FaLeaf className="text-3xl text-green-300" />

          <h1 className="text-3xl font-bold tracking-wide">
            CropCare
          </h1>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-5">

          {/* LANGUAGE */}

          <div className="flex items-center gap-2">

            <FaLanguage />

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="text-black px-3 py-2 rounded-lg outline-none"
            >

              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>

            </select>

          </div>

          {/* DARK MODE */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl hover:text-yellow-300 transition"
          >

            {darkMode ? <FaSun /> : <FaMoon />}

          </button>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="flex justify-center items-center py-12 px-4">

        <div className={`rounded-3xl shadow-2xl p-8 w-full max-w-md border transition-all duration-500 ${
          darkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white/95 border-green-200"
        }`}>

          <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
            {text.title}
          </h1>

          {/* IMAGE INPUT */}

          <div className={`border-2 border-dashed rounded-xl p-6 text-center ${
            darkMode
              ? "border-green-500"
              : "border-green-400"
          }`}>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />

            {preview && (

              <img
                src={preview}
                alt="preview"
                className="w-56 h-56 object-cover rounded-2xl mx-auto shadow-lg"
              />

            )}

          </div>

          {/* ANALYZE BUTTON */}

          <button
            onClick={analyzeImage}
            disabled={loading}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-lg transition"
          >

            {loading
              ? text.uploading
              : text.analyze}

          </button>

          {/* RESULT */}

          {result && (

            <div className={`mt-8 rounded-2xl p-5 border transition-all duration-500 ${
              darkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-green-50 border-green-200"
            }`}>

              <h2 className="text-2xl font-bold text-green-600 mb-3 text-center">
                {result.disease}
              </h2>

              <p className="text-center mb-3">

                <span className="font-semibold">
                  {text.confidence}:
                </span>{" "}

                {result.confidence}%

              </p>

              <p className="text-center">

                <span className="font-semibold">
                  {text.solution}:
                </span>{" "}

                {result.solution}

              </p>

            </div>
          )}

        </div>

      </div>
      {/* INFORMATION SECTION */}

      <div className="px-6 pb-16">

        <h2 className="text-4xl font-bold text-center text-green-600 mb-12">

          {language === "English" && "How Crop Disease Detection Helps Farmers"}

          {language === "Hindi" && "फसल रोग पहचान किसानों की कैसे मदद करती है"}

          {language === "Marathi" && "पीक रोग ओळख शेतकऱ्यांना कशी मदत करते"}

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}

          <div
            className={`rounded-3xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-t-4 hover:border-green-500 ${
              darkMode
                ? "bg-gray-800"
                : "bg-white"
            }`}
          >

            <div className="text-5xl mb-4 text-center">
              🌿
            </div>

            <h3 className="text-2xl font-bold text-center text-green-600 mb-4">

              {language === "English" && "Early Disease Detection"}

              {language === "Hindi" && "शुरुआती रोग पहचान"}

              {language === "Marathi" && "लवकर रोग ओळख"}

            </h3>

            <p className="text-center leading-7">

              {language === "English" &&
                "Our AI system quickly detects crop diseases from leaf images and helps farmers take immediate action."}

              {language === "Hindi" &&
                "हमारी AI प्रणाली पत्तियों की तस्वीर से जल्दी रोग पहचानती है और किसानों को तुरंत समाधान देती है।"}

              {language === "Marathi" &&
                "आमची AI प्रणाली पानांच्या फोटोमधून रोग ओळखून शेतकऱ्यांना त्वरित उपाय सुचवते."}

            </p>

          </div>

          {/* CARD 2 */}

          <div
            className={`rounded-3xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-t-4 hover:border-green-500 ${
              darkMode
                ? "bg-gray-800"
                : "bg-white"
            }`}
          >

            <div className="text-5xl mb-4 text-center">
              🤖
            </div>

            <h3 className="text-2xl font-bold text-center text-green-600 mb-4">

              {language === "English" && "Deep Learning Technology"}

              {language === "Hindi" && "डीप लर्निंग तकनीक"}

              {language === "Marathi" && "डीप लर्निंग तंत्रज्ञान"}

            </h3>

            <p className="text-center leading-7">

              {language === "English" &&
                "This feature uses CNN-based Deep Learning models trained on thousands of crop disease images."}

              {language === "Hindi" &&
                "यह सुविधा CNN आधारित डीप लर्निंग मॉडल का उपयोग करती है जिसे हजारों फसल रोग चित्रों पर प्रशिक्षित किया गया है।"}

              {language === "Marathi" &&
                "हे फीचर CNN आधारित डीप लर्निंग मॉडेल वापरते ज्याला हजारो पीक रोग प्रतिमांवर प्रशिक्षण दिले आहे."}

            </p>

          </div>

          {/* CARD 3 */}

          <div
            className={`rounded-3xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-t-4 hover:border-green-500 ${
              darkMode
                ? "bg-gray-800"
                : "bg-white"
            }`}
          >

            <div className="text-5xl mb-4 text-center">
              💊
            </div>

            <h3 className="text-2xl font-bold text-center text-green-600 mb-4">

              {language === "English" && "Smart Farming Solutions"}

              {language === "Hindi" && "स्मार्ट खेती समाधान"}

              {language === "Marathi" && "स्मार्ट शेती उपाय"}

            </h3>

            <p className="text-center leading-7">

              {language === "English" &&
                "Farmers receive proper remedies, preventive actions, and disease management guidance instantly."}

              {language === "Hindi" &&
                "किसानों को तुरंत उचित उपचार, रोकथाम और रोग प्रबंधन की जानकारी मिलती है।"}

              {language === "Marathi" &&
                "शेतकऱ्यांना त्वरित योग्य उपाय, प्रतिबंधक कृती आणि रोग व्यवस्थापन मार्गदर्शन मिळते."}

            </p>

          </div>
        </div>

      </div>

    </div>
  );
}

export default RealImage;