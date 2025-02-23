import React from "react";
import ProjectPorto from "../assets/ProjectPorto.png";
import ProjectPKL from "../assets/ProjectPKL.png";
import ProjectSkripsi from "../assets/ProjectSkripsi.png";

const projects = [
  {
    id: 1,
    name: "Website Profil Sekolah",
    technologies: "Laravel, PHP, HTML, CSS, Bootstrap",
    image: ProjectPKL,
    link: "Github",
    status: "Completed",
    github: "https://github.com/ramaasj/smanda",
  },
  {
    id: 2,
    name: "Skripsi Klasifikasi Tumor Otak",
    technologies: "Python, CV, Pandas, Numpy, Tensorflow",
    image: ProjectSkripsi,
    link: "Google Colab",
    status: "Completed",
    github: "https://colab.research.google.com/drive/1kencomfOTei70Utonvb6oTfq2bV8U2F2#scrollTo=ArkMGBgT-2tq",
  },
  {
    id: 3,
    name: "Website Portofolio",
    technologies: "ReactJs, HTML, CSS, Javascript, TailwindCSS",
    image: ProjectPorto,
    link: "Github",
    status: "60% Completed",
    github: "https://github.com/sulthansyah/my-porto",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 relative"
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="rounded-lg mb-4 w-full h-48 object-cover" 
              />

              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>

              {/* Link ke GitHub / Colab */}
              <a 
                href={project.github} 
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 
                text-white px-4 py-2 rounded-full hover:opacity-80 transition-opacity duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {project.link}
              </a>

              {/* Status di pojok kanan bawah */}
              <p className={`absolute bottom-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                project.status === "Completed"
                  ? "bg-green-500 text-white"
                  : "bg-yellow-500 text-black"
              }`}>
                {project.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
