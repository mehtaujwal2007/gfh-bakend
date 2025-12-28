import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import { Sparkles, Lightbulb, Palette } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

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

  return (
    <div className="bg-gradient-to-br from-white via-pink-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white min-h-screen font-poppins overflow-hidden relative">
      <HeroSection />

      {/* ✨ Floating Background Light Blobs */}
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

      {/* 🌟 Feature Highlights */}
      <motion.section 
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
        className="relative py-20 px-6 max-w-7xl mx-auto text-center z-10"
      >
        <motion.h2 
          className="text-4xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
          variants={fadeInUp}
        >
          Why Choose GFH Lights?
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-900 dark:text-gray-300 max-w-2xl mx-auto mb-14"
          variants={fadeInUp}
        >
          Illuminate your space with beauty, reliability, and a touch of innovation.
        </motion.p>

        <div className="grid gap-10 md:grid-cols-3">
          {[{
            icon: <Sparkles size={40} className="text-pink-500 mx-auto mb-4 animate-pulse" />, 
            title: "Stunning Visuals", 
            description: "Transform your atmosphere with radiant and dynamic lighting."
          }, {
            icon: <Lightbulb size={40} className="text-yellow-500 mx-auto mb-4 animate-bounce" />, 
            title: "Energy Efficient", 
            description: "Advanced LED tech for long-lasting, eco-friendly brightness."
          }, {
            icon: <Palette size={40} className="text-purple-600 mx-auto mb-4 animate-wiggle" />, 
            title: "Creative Designs", 
            description: "A perfect fit for every celebration, event, and style."
          }].map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-transform"
            >
              {feature.icon}
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h4>
              <p className="text-gray-900 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🌀 Floating Decorations */}
      <motion.div 
        className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 shadow-xl z-20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="fixed bottom-1/4 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-pink-400 shadow-lg z-20"
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
     {/* 🔆 Wiggle animation keyframes */}
<style>
  {`
    @keyframes wiggle {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }
    .animate-wiggle {
      animation: wiggle 1s infinite;
    }
  `}
</style>

    </div>
  );
};

export default Home;
