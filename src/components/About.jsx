import React from "react";
import AboutImage from "../assets/AboutMe.jpg";

const skills = [
  {
    name: "HTML & CSS",
    width: "90%",
  },
  {
    name: "PHP",
    width: "75%",
  },
  {
    name: "Javascript",
    width: "85%",
  },
  {
    name: "Python",
    width: "60%",
  },
];

const experiences = [
  {
    label: "Web Development Learning",
    value: "Ongoing",
  },
  {
    label: "Hours Self-Study",
    value: "50+",
  },
  {
    label: "Personal Project",
    value: "2+",
  },
];

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Gambar About */}
          <img
            src={AboutImage}
            alt="About Me"
            className="w-full max-w-md mx-auto rounded-lg object-cover"
          />

          {/* Teks About */}
          <div>
            <p className="text-lg leading-relaxed">
              Hi, I'm{" "}
              <span className="font-bold">Sulthan Ahmad Ferdiansyah</span>, a
              passionate Frontend Website Developer with a strong focus on
              creating modern, responsive, and user-friendly web experiences. I
              specialize in crafting clean and efficient code using technologies
              like React, Vue.js, and Tailwind CSS. With a keen eye for design
              and performance, I strive to build websites that not only look
              great but also provide seamless user interactions.
            </p>

            {/* Keahlian */}
            <div className="space-y-4 py-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <label className="w-1/3 md:w-2/12">{skill.name}</label>
                  <div className="w-2/3 md:w-10/12 bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2.5 rounded-full transition-all duration-300 hover:scale-105"
                      style={{ width: skill.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pengalaman */}
            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              {experiences.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                    {item.value}
                  </h3>
                  <p className="text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
