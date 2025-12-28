import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const sampleProducts = [
  {
    id: "siriz",
    name: "SIRIZ Series",
    price: "₹120",
    description: "SIRIZ lighting variants in multiple colors for festive decor.",
    images: [
      "/images/sirizblue.png",
      "/images/sirizgreen.png",
      "/images/sirizorrange.png",
      "/images/sirizoff.png"
    ],
  },
  {
    id: "led-strip",
    name: "LED Strip Light",
    price: "₹180",
    description: "Bright and colorful LED strip for interior decor.",
    images: ["/images/ledstrip.png"],
  },
  {
    id: "light-putto",
    name: "Putto Light",
    price: "₹90",
    description: "Compact decorative putto light with elegant glow.",
    images: ["/images/lightputto.png"],
  },
  {
    id: "black-wire",
    name: "Black Wire Light",
    price: "₹85",
    description: "Durable and flexible black wire lighting solution.",
    images: ["/images/blackwire.png"],
  },
  {
    id: "par-light",
    name: "PAR Light",
    price: "₹2250",
    description: "Powerful PAR light for events and shows.",
    images: ["/images/parlighrt.png"],
  },
  {
    id: "multi-siriz",
    name: "Multi Color SIRIZ",
    price: "₹150",
    description: "Multicolor SIRIZ string for dynamic lighting effects.",
    images: ["/images/multisiriz.png"],
  },
  {
    id: "mini-golden-par",
    name: "Mini Golden PAR",
    price: "₹200",
    description: "Stylish golden finish mini PAR light.",
    images: ["/images/minigoldanpar.png"],
  },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filtered, setFiltered] = useState(sampleProducts);

  useEffect(() => {
    const results = sampleProducts.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFiltered(results);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-4 py-10 transition-colors font-poppins overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text animate-fade-in">
        Our Products
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-10 gap-4 animate-fade-in">
        <input
          type="text"
          placeholder="Search products..."
          className="p-3 w-full max-w-sm rounded-md text-black dark:text-white dark:bg-gray-800 dark:placeholder-gray-400 border dark:border-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out animate-pulse"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 animate-fade-in-up">
        {filtered.length === 0 ? (
          <p className="text-center text-lg col-span-full animate-fade-in">No products found.</p>
        ) : (
          filtered.map((product, index) => (
            <div
              key={product.id}
              className="group p-4 bg-white/70 dark:bg-white/10 rounded-xl shadow-md hover:shadow-2xl transform transition duration-500 hover:-translate-y-2 hover:scale-105 flex flex-col backdrop-blur-md border border-white/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 w-full bg-white p-2 rounded-md flex items-center justify-center overflow-hidden animate-zoom-in">
                <img
                  src={product.images?.[0] || "/images/fallback.jpg"}
                  alt={product.name}
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => (e.target.src = "/images/fallback.jpg")}
                />
              </div>

              <h3 className="text-xl font-semibold mt-4 mb-1 animate-fade-in">{product.name}</h3>
              <p className="text-sm mb-2 italic text-gray-700 dark:text-gray-300 animate-fade-in">
                {product.description}
              </p>
              <p className="text-md font-bold mb-3 text-pink-600 dark:text-pink-400 animate-fade-in">
                {product.price}
              </p>
              <Link
                to={`/products/${product.id}`}
                className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-2 rounded-full text-white font-semibold hover:scale-110 transition-all duration-300 shadow-md animate-fade-in"
              >
                View Details
              </Link>
            </div>
          ))
        )}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-500 transition-transform hover:rotate-12 animate-bounce"
      >
        ⬆ Back to Top
      </button>

      {/* Custom animations */}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes zoom-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out both;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
        .animate-zoom-in {
          animation: zoom-in 1s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Products;
