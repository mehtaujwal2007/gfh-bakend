import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      setError("");
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-200 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/10 transition">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          🔐 Login to Your Account
        </h2>

        <form onSubmit={handleLogin}>
          <label className="block mb-5">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Email</span>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="block mb-5">
            <span className="text-gray-700 dark:text-gray-300 font-medium">Password</span>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </label>

          {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-full font-semibold hover:opacity-90 transition shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
          Don’t have an account?
          <a href="/signup" className="text-blue-600 hover:underline ml-1">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
