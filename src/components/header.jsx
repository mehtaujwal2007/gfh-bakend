import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [spin, setSpin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  // Sync dark mode to document
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleThemeToggle = () => {
    setSpin(true);
    setDarkMode(!darkMode);
    setTimeout(() => setSpin(false), 500);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setMenuOpen(false);
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Visuals", path: "/visuals" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/80 backdrop-blur shadow-md transition-colors">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/image.svg"
            alt="GFH Logo"
            className={`w-24 h-16 transition duration-300 ${
              darkMode ? "invert brightness-150" : ""
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 dark:text-white font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-pink-600 transition ${
                  isActive ? "text-pink-600 font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Theme Toggle (Desktop) */}
          <button
            onClick={handleThemeToggle}
            className={`ml-3 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full hover:scale-110 transition-transform ${
              spin ? "animate-spin-once" : ""
            }`}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Logout */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-gray-800 dark:text-white animate-slide-down">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-lg transition hover:text-pink-600 ${
                  isActive ? "text-pink-600 font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Theme Toggle (Mobile) */}
          <button
            onClick={() => {
              handleThemeToggle();
              setMenuOpen(false);
            }}
            className={`block w-full text-left px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-full ${
              spin ? "animate-spin-once" : ""
            }`}
          >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>

          {/* Logout */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="block w-full text-left px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
            >
              Logout
            </button>
          )}
        </div>
      )}

      {/* 🔄 Custom Spin Animation */}
      <style>{`
        @keyframes spin-once {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(180deg); }
        }
        .animate-spin-once {
          animation: spin-once 0.5s ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
