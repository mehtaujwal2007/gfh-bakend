import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const html = document.documentElement;
    const themeToggle = document.getElementById("theme-toggle");
    const backToTop = document.getElementById("backToTop");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      html.setAttribute("data-theme", savedTheme);
    }

    // Theme toggle
    themeToggle?.addEventListener("click", () => {
      const current = html.getAttribute("data-theme");
      const newTheme = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });

    // Back to top
    const handleScroll = () => {
      if (backToTop) {
        backToTop.classList.toggle("show", window.scrollY > 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    backToTop?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 🌐 Site Footer */}
      <footer className="footer text-center py-4 mt-8 bg-gray-800 text-white">
        <p>&copy; 2025  GFH. All rights reserved.</p>
      </footer>

      {/* ⬆️ Back to Top Button */}
      <button
        id="backToTop"
        title="Scroll to Top"
        className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-indigo-600 text-white rounded-full shadow-lg hidden"
      >
        ⬆ Back to Top
      </button>
    </>
  );
};

export default Footer;
