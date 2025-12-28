import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/contact", form);
      setSuccess(response.data.message);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We'd love to hear from you! Fill out the form below.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-white/10 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 border rounded bg-white dark:bg-gray-800"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 border rounded bg-white dark:bg-gray-800"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="p-3 border rounded bg-white dark:bg-gray-800"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            required
            className="p-3 border rounded bg-white dark:bg-gray-800"
          ></textarea>

          <button
            type="submit"
            className="bg-purple-600 text-white py-3 px-6 rounded hover:bg-purple-700 transition"
          >
            Send Message
          </button>

          {success && <p className="text-green-500 text-center">{success}</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
