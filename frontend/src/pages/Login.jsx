import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        navigate("/"); // ✅ Direct redirect (no alert)
      } else {
        const error = await res.text();
        console.log(error);
      }

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-[350px] text-center border border-green-300">

        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Login to Your Account
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-green-300 rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 mb-3"
        >
          🔐 Login
        </button>

        <p className="text-sm text-gray-600 mb-3">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600">
            Register
          </Link>
        </p>

        <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
          G Sign in with Google
        </button>

      </div>
    </div>
  );
}