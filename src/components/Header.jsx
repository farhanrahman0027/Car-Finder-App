import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  // Set dark mode if already active on load
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setDarkMode(true);
    }
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">
        <Link to="/">🚗 Car Finder</Link>
      </h1>

      <div className="flex items-center gap-6">
        {/* Home link (active underline if on home route) */}
        <Link
          to="/"
          className={`hover:underline ${
            location.pathname === '/' ? 'underline font-semibold' : ''
          }`}
        >
          Home
        </Link>

        {/* Scroll to Wishlist (anchor link to #wishlist) */}
        <a href="#wishlist" className="hover:underline">Wishlist</a>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-xl"
          title="Toggle Dark Mode"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
