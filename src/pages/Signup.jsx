import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }

    try {
      const { name, email, password } = formData;
      const res = await axios.post("http://localhost:5000/api/user/signup", {
        name,
        email,
        password,
      });

      console.log("✅ Signup Success:", res.data);
      alert("✅ Signup successful!");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      navigate("/login"); // Redirect to login page after success
    } catch (error) {
      console.error("❌ Signup Error:", error);
      alert(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-pink-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white font-poppins relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 🎨 Floating Background Effects */}
      <motion.div
        className="absolute -top-40 -left-20 w-[400px] h-[400px] bg-pink-400 blur-[180px] opacity-30 rounded-full z-0"
        animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-400 blur-[160px] opacity-20 rounded-full z-0"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl z-10 max-w-md w-full"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text animate-pulse mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            Sign Up
          </button>

          <p className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-500 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Signup;
