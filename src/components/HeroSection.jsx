import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative z-10 px-4 md:px-0 py-28 md:py-36 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/50 dark:bg-black/40 backdrop-blur-xl p-10 md:p-20 rounded-3xl shadow-2xl max-w-4xl w-full text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text drop-shadow-md">
          GURUDEV LIGHTS SURAT
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
          Discover lighting crafted to inspire.
          <br />
          Built to Shine. Engineered to Last.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            to="/products"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            ✨ Explore Lights
          </Link>
          <Link
            to="/contact"
            className="border border-gray-300 dark:border-white text-gray-900 dark:text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            💬 Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
