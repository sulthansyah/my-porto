import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Tambahkan icon menu burger

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24">
      <div className="container mx-auto py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Sulthan Ahmad</div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex space-x-7">
          <a
            href="#home"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Tombol (Desktop) */}
        <button className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium transform transition-transform duration-300 hover:scale-110 px-5 py-2 rounded-3xl">
          Hire Me!
        </button>

        {/* Menu Burger (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-5 pb-6">
          <a
            href="#home"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Contact
          </a>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium transform transition-transform duration-300 hover:scale-110 px-5 py-2 rounded-3xl">
            Hire Me!
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
