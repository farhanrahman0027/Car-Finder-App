import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
const Header = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setDarkMode(true);
    }
  }, []);

  const navLinks = (
    <>
      <Link
        to="/"
        className={`block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
          location.pathname === "/" ? "font-semibold underline" : ""
        }`}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/wishlist"
        className={`block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
          location.pathname === "/wishlist" ? "font-semibold underline" : ""
        }`}
        onClick={() => setMenuOpen(false)}
      >
        Wishlist
      </Link>
    </>
  );

  return (
    <header className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
          <Link
            to="/"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <img
              src={logo}
              alt="Car Logo"
              className="w-16 sm:w-32" // Adjust the width here
            />
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks}
          <button
            onClick={toggleDarkMode}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-2 border-t border-gray-300 dark:border-gray-700 pt-4">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
