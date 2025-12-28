import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Sample Data
const productData = [
  {
    id: "siriz",
    name: "Siriz Light Series",
    description:
      "Illuminate your surroundings with our vibrant Siriz Light Series, available in multiple variants. Perfect for festive decorations, events, and mood lighting.",
    price: "₹199",
    images: [
      { src: "/images/sirizblue.png", label: "Blue Siriz" },
      { src: "/images/sirizgreen.png", label: "Green Siriz" },
      { src: "/images/sirizoff.png", label: "Off-White Siriz" },
      { src: "/images/sirizorrange.png", label: "Orange Siriz" },
    ],
  },
  // Add other products here...
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        ❌ Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-6 py-12 font-poppins overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        {/* 🔙 Back Button */}
        <div className="mb-6">
          <Link
            to="/products"
            className="fixed bottom-6 right-6 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            ← Back to Products
          </Link>
        </div>

        {/* 🏷️ Title */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
        >
          {product.name}
        </motion.h1>

        {/* 📝 Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6 text-lg text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300"
        >
          {product.description}
        </motion.p>

        {/* 💸 Price */}
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-2xl font-semibold text-center text-pink-600"
        >
          Price: <span className="text-black dark:text-white">{product.price}</span>
        </motion.p>

        {/* 🖼️ Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {product.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative group bg-white/80 dark:bg-white/10 p-4 rounded-lg shadow-md hover:shadow-xl backdrop-blur-md border border-white/20"
            >
              <div className="absolute inset-0 rounded-lg pointer-events-none group-hover:shadow-[0_0_15px_2px_rgba(255,0,128,0.4)] transition-shadow duration-300"></div>
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-64 object-cover rounded transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
                onError={(e) => (e.target.src = "/images/fallback.jpg")}
              />
              <p className="mt-3 text-center text-base font-medium text-gray-800 dark:text-gray-200">
                {img.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetail;
