// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Heart, Star, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-6 py-12 font-poppins overflow-hidden">
      {/* 🌟 Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold ">
          About Gurudev Lights Surat
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Illuminating Spaces with Passion & Precision
        </p>
      </motion.div>

      {/* 🌈 Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-20"
      >
        <p className="mb-6 text-lg leading-relaxed">
          At <strong>Gurudev Lights Surat</strong>, we specialize in crafting innovative lighting solutions that blend modern aesthetics with dependable functionality. Our lights aren't just products—they're experiences that enhance mood, beauty, and energy efficiency.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          With a dedication to quality, we design lights that shine through durability, elegance, and performance. From ambient glow to vibrant celebration, our range meets every need.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Trusted by designers, decorators, and homes alike, Gurudev Lights is your partner in illuminating brilliance.
        </p>
      </motion.div>

      {/* ✨ Values Section */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {[ 
          { icon: <Sparkles size={40} />, title: "Innovation", text: "We spark imagination with every design." },
          { icon: <Lightbulb size={40} />, title: "Efficiency", text: "Energy-saving lights that perform." },
          { icon: <Heart size={40} />, title: "Passion", text: "We pour our heart into every detail." },
          { icon: <Zap size={40} />, title: "Reliability", text: "Built to shine for years to come." },
          { icon: <Palette size={40} />, title: "Aesthetics", text: "Style and function in perfect balance." },
          { icon: <Star size={40} />, title: "Excellence", text: "Rated and loved by thousands of users." },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-white/10 p-6 rounded-2xl text-center shadow-md backdrop-blur border border-white/20"
          >
            <div className="mb-4 text-pink-500 dark:text-pink-400 mx-auto">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* 🌟 Background Light Effects */}
      <motion.div 
        className="fixed -top-40 -left-20 w-[400px] h-[400px] bg-pink-400 blur-[180px] opacity-30 rounded-full z-0 animate-pulse"
        animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="fixed top-0 right-0 w-[300px] h-[300px] bg-purple-400 blur-[160px] opacity-20 rounded-full z-0"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌠 Design Philosophy */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-28 max-w-2xl mx-auto text-center"
      >
        <p className="text-2xl italic text-gray-700 dark:text-gray-300">
          "Light is not just illumination—it's the soul of space."
        </p>
      </motion.div>

      {/* 🔆 Glow Animation Styles */}
      <style jsx>{`
        .gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from {
            text-shadow: 0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #8b5cf6;
          }
          to {
            text-shadow: 0 0 20px #ec4899, 0 0 30px #c084fc, 0 0 40px #8b5cf6;
          }
        }
      `}</style>
    </div>
  );
};

export default About;