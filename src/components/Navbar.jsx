import React, { useState } from 'react';
import { GrTechnology } from "react-icons/gr";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Courses", href: "#courses" },
  { name: "Instructors", href: "#instructors" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary shadow-lg fixed top-0 left-0 w-full z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl text-white font-bold flex items-center gap-2">
              <GrTechnology className="h-10 w-10 text-tertiary" />
              EduLearn
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map(({ name, href }) => (
                <li key={name} className="relative group">
                  <a
                    href={href}
                    className="text-white hover:text-tertiary transition duration-300 font-medium"
                  >
                    {name}
                  </a>
                  <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-tertiary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </li>
              ))}
            </ul>

            {/* Glowing Button */}
            <button className="bg-tertiary text-secondary px-6 py-2 rounded-full font-semibold shadow-[0_0_0px_0px_rgba(255,215,0,0)] hover:shadow-[0_0_20px_4px_rgba(255,215,0,0.8)] transition-all duration-500 ease-in-out">
              Start Learning
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-tertiary transition relative duration-300 focus:outline-none z-[100] cursor-pointer"
            >
              {isOpen ? <HiX className="h-8 w-8" /> : <HiMenu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Sliding from Right with Blur */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white/10 backdrop-blur-md shadow-xl transform transition-transform duration-500 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-20 text-secondary space-y-6 px-6 items-center text-xl">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={toggleMenu}
              className="relative hover:text-tertiary transition duration-300 group"
            >
              {name}
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-tertiary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}

          {/* Glowing Button in Mobile */}
          <button className="bg-tertiary text-secondary px-6 py-2 rounded-full font-semibold shadow-[0_0_0px_0px_rgba(255,215,0,0)] hover:shadow-[0_0_20px_4px_rgba(255,215,0,0.8)] transition-all duration-500 ease-in-out w-full">
            Start Learning
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
