import { useState } from "react";
import { Link } from "react-router-dom";

export default function IdentifyDisease() {
  const [crop, setCrop] = useState("");
  const [symptom, setSymptom] = useState("");

  const handleSubmit = () => {
    console.log(crop, symptom);
    // later we call backend here
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')] bg-cover bg-center flex flex-col">

      {/* TOP NAV BUTTONS */}
      <div className="p-4 flex gap-4">
        <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded-full">
          Home
        </Link>
        <button className="bg-green-400 text-white px-4 py-2 rounded-full">
          Weather
        </button>
        <button className="bg-green-300 text-white px-4 py-2 rounded-full">
          About
        </button>
      </div>

      {/* CENTER CARD */}
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-[350px] text-center border border-green-300">

          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Crop Disease Predictor
          </h2>

          {/* CROP SELECT */}
          <label className="block text-green-700 mb-2">🌱 Select Crop</label>
          <select
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-green-300 rounded-lg"
          >
            <option>Select Crop</option>
            <option>Tomato</option>
            <option>Potato</option>
            <option>Rice</option>
            <option>Wheat</option>
          </select>

          {/* SYMPTOM SELECT */}
          <label className="block text-green-700 mb-2">🌿 Select Symptom</label>
          <select
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-green-300 rounded-lg"
          >
            <option>Select Symptom</option>
            <option>Yellow Leaves</option>
            <option>Brown Spots</option>
            <option>Wilting</option>
          </select>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 mb-3"
          >
            🔍 FIND DISEASE
          </button>

          <button className="w-full bg-green-500 text-white py-2 rounded-lg">
            REAL IMAGE
          </button>

          {/* RESULT BOX */}
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            💡 Result will appear here
          </div>

        </div>
      </div>
    </div>
  );
}