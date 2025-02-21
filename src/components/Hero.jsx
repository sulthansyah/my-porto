import React from "react";
import HeroImage from "../assets/HeroImage.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Gambar Profil */}
        <img
          src={HeroImage}
          alt="Hero Image"
          className="mx-auto mb-6 w-40 md:w-48 rounded-full object-cover transform transition-transform duration-500 hover:scale-105"
        />

        {/* Judul & Deskripsi */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          I'm
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            {" "}
            Sulthan Ahmad Ferdiansyah
          </span>
          ,
          <br className="hidden md:block" /> Frontend Website Developer
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          I specialize in building modern, responsive, and high-performance
          websites. Let's create something amazing together!
        </p>

        {/* Tombol */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium transform transition-transform duration-300 hover:scale-110 px-6 py-2 rounded-full w-40 md:w-44">
            Contact Me
          </button>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium transform transition-transform duration-300 hover:scale-110 px-6 py-2 rounded-full w-40 md:w-44">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
