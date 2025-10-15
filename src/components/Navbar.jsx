import React, { useState } from 'react';
import { GrTechnology } from "react-icons/gr";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl text-white font-bold flex items-center gap-2">
              <GrTechnology className="h-10 w-10 text-tertiary" />
              EdTech
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a href="#home" className="text-white hover:text-tertiary transition duration-300 font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="text-white hover:text-tertiary transition duration-300 font-medium">
                  Courses
                </a>
              </li>
              <li>
                <a href="#instructors" className="text-white hover:text-tertiary transition duration-300 font-medium">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white hover:text-tertiary transition duration-300 font-medium">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white hover:text-tertiary transition duration-300 font-medium">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-tertiary transition duration-300 font-medium">
                  Contact
                </a>
              </li>
            </ul>
            <button className="bg-tertiary text-secondary px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 shadow-md">
              Start Learning
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-tertiary transition duration-300 focus:outline-none"
            >
              {isOpen ? <HiX className="h-8 w-8" /> : <HiMenu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary shadow-lg">
              <a href="#home" className="block px-3 py-2 text-white hover:text-tertiary transition duration-300 font-medium">
                Home
              </a>
              <a href="#courses" className="block px-3 py-2 text-white hover:text-tertiary transition duration-300 font-medium">
                Courses
              </a>
              <a href="#instructors" className="block px-3 py-2 text-white hover:text-tertiary transition duration-300 font-medium">
                Instructors
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-white hover:text-tertiary transition duration-300 font-medium">
                Testimonials
              </a>
              <a href="#faq" className="block px-3 py-2 text-white hover:text-tertiary transition duration-300 font-medium">
                FAQ
              </a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-tertiary transition duration-300 font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="bg-tertiary text-secondary px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 shadow-md w-full">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
