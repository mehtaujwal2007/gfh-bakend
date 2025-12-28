import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Ravi Patel",
      message: "Amazing light quality! Loved the warm tone and design.",
      image: "/images/user1.jpg",
    },
    {
      name: "Sneha Shah",
      message: "LED strips made my Diwali magical!",
      image: "/images/user2.jpg",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setReviews([{ name: formData.name, message: formData.message }, ...reviews]);
      setFormData({ name: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">🌟 Customer Reviews</h1>

        {/* 📋 Review Form */}
        <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-white/10 p-6 rounded-lg shadow mb-10">
          <h2 className="text-2xl font-semibold mb-4">Write a Review ✍️</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Feedback..."
            className="w-full mb-4 p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-500 transition"
          >
            Submit Review
          </button>
        </form>

        {/* 💬 Review List */}
        <div className="grid gap-6 sm:grid-cols-2">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-white/10 p-5 rounded-lg shadow-md"
            >
              <h4 className="font-semibold">{review.name}</h4>
              <p className="mt-2 italic text-gray-700 dark:text-gray-300">"{review.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
