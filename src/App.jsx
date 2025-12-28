// src/App.jsx
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Visuals from "./pages/Visuals";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reviews from "./pages/Reviews";

const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {!hideLayout && <Header />}

      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/visuals"
            element={
              <PrivateRoute>
                <Visuals />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          />
          <Route
            path="/products/:id"
            element={
              <PrivateRoute>
                <ProductDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/reviews"
            element={
              <PrivateRoute>
                <Reviews />
              </PrivateRoute>
            }
          />

          {/* 🔒 Redirect any unknown route to login or home */}
          <Route
            path="*"
            element={
              isAuthenticated ? (
                <Navigate to="/" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
