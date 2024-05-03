import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 px-4 py-2 md:px-8 md:py-4 sticky top-0 z-50" data-aos="fade-down">
      <div className="container mx-auto flex items-center justify-between">
        <h2
          className="text-white text-lg md:text-xl font-bold cursor-pointer"
          data-text="EXMEDIA"
        >
          ExMedia
        </h2>
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`flex ${
            isOpen ? "flex-col" : "hidden"
          } md:flex md:space-x-8 text-grey text-sm md:text-base`}
          data-aos={isOpen ? "fade-down" : ""}
        >
          <li>
            <Link
              to="/"
              className="nav-link text-white hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link text-white hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className="nav-link text-white hover:text-gray-300"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link text-white hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
