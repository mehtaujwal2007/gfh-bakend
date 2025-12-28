import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/user/signup", {
        name,
        email,
        password,
      });

      console.log(response.data.message);
      setError("");
      navigate("/login"); // Redirect to login after successful signup
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>

      <form onSubmit={handleSignup}>
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="w-full mt-1 p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            className="w-full mt-1 p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600">Login</a>
      </p>
    </div>
  );
};

export default Signup;
