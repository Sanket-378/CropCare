import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.placeholder === "Full Name"
        ? "name"
        : e.target.type === "email"
        ? "email"
        : "password"]: e.target.value
    });
  };

  const handleRegister = async () => {
    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.text();
    alert(data);

    if (data === "User registered successfully") {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-[350px] text-center border border-green-300">

        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Create Your Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-green-300 rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-green-300 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 mb-3"
        >
          Register
        </button>

        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}