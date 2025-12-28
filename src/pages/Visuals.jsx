import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const visuals = [
  "/images/sirizblue.png",
  "/images/sirizgreen.png",
  "/images/sirizorrange.png",
  "/images/sirizoff.png",
  "/images/ledstrip.png",
];

const Visuals = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* 🔥 Section Title */}
      <section className="py-10 text-center">
        <h2 className="text-4xl font-bold mb-4">GFH Visual Showcase</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">Lighting that tells a story ✨</p>
      </section>

      {/* 🖼️ Swiper Carousel */}
      <div className="max-w-5xl mx-auto px-4">
        <Swiper
  modules={[Autoplay, Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  loop={true}
  spaceBetween={30}
  slidesPerView={1}
  speed={800} // 👈 Smooth transition speed in milliseconds
>
          {visuals.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
                <img
                  src={src}
                  alt={`Visual ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
    </div>
  );
};

export default Visuals;
