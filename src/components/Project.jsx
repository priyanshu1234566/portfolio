import { useState } from "react";

/* ================= IMPORT IMAGE ================= */
import project1 from "../assets/projects/1.png";
import project5 from "../assets/projects/5.png";

/* ================= IMPORT ICONS ================= */
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import { FaAndroid } from "react-icons/fa6";

export default function Work() {

  const [activeCategory, setActiveCategory] = useState("all");

  // SHOW MORE STATE
  const [showAll, setShowAll] = useState(false);

  /* ================= CATEGORIES ================= */
  const categories = [
    "all",
    "html&css",
    "javascript",
    "react",
    "react+vite",
    "freelance",
  ];

  /* ================= PROJECTS ================= */
  const projects = [

    {
      name: "Birthday Website",
      desc:
        "Modern birthday celebration website with glowing effects, animations, photo gallery, music, and interactive surprise sections using HTML and CSS.",
      image: project1,
      category: "html&css",
      view: "https://birthday-1-2026.netlify.app/",
      code: "#",
    },

    {
      name: "Flower JavaScript",
      desc:
        "Beautiful flower animation using JavaScript and CSS with smooth motion and interactive petals.",
      image: project5,
      category: "javascript",
      view: "https://impress-crush-lo.netlify.app/",
      code: "#",
    },

    {
      name: "Portfolio Website",
      desc:
        "Modern responsive portfolio website built using ReactJS and TailwindCSS with animations.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      category: "react",
      view: "https://portfolio-demo.netlify.app/",
      code: "#",
    },

    {
      name: "React Dashboard",
      desc:
        "Admin dashboard built using ReactJS with charts, analytics cards, and responsive UI.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      category: "react+vite",
      view: "https://dashboard-demo.netlify.app/",
      code: "#",
    },

    {
      name: "E-Commerce Website",
      desc:
        "Responsive online shopping website with product cards, cart page, and payment UI.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
      category: "freelance",
      view: "https://shop-demo.netlify.app/",
      code: "#",
    },

    {
      name: "Weather App",
      desc:
        "Live weather forecast application using API integration with modern glassmorphism design.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",
      category: "javascript",
      view: "https://weather-demo.netlify.app/",
      code: "#",
    },

    // EXTRA PROJECTS

    {
      name: "Movie App",
      desc:
        "Movie search application with trending movies and responsive card layout.",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
      category: "react",
      view: "https://movie-demo.netlify.app/",
      code: "#",
    },

    {
      name: "Food Website",
      desc:
        "Restaurant landing page with smooth scrolling and modern UI animations.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      category: "html&css",
      view: "https://food-demo.netlify.app/",
      code: "#",
    },

    {
      name: "Android App",
      desc:
        "Android application built using Java and XML with responsive layouts.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      category: "freelance",
      view: "https://github.com/",
      code: "https://github.com/",
    },

  ];

  /* ================= FILTER ================= */
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  // SHOW ONLY FIRST 6
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  /* ================= ICONS ================= */
  const getCategoryIcon = (category) => {

    switch (category) {

      case "react":
        return <FaReact />;

      case "react+vite":
        return <FaReact />;

      case "freelance":
        return <FaNodeJs />;

      case "android":
        return <FaAndroid />;

      default:
        return <FaHtml5 />;
    }
  };

  return (
    <section
      id="work"
      className="relative py-24 px-6 md:px-16 lg:px-24 bg-[#020617] text-white overflow-hidden"
    >

      {/* ================= HEADING ================= */}
      <div className="text-center mb-16">

        <h1 className="text-4xl md:text-6xl font-black">

          Projects{" "}

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">

            Made

          </span>

        </h1>

        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">

          Real-world projects built using modern technologies.

        </p>

      </div>

      {/* ================= FILTER BUTTONS ================= */}
      <div className="flex flex-wrap justify-center gap-5 mb-16">

        {categories.map((category, index) => (

          <button
            key={index}
            onClick={() => {
              setActiveCategory(category);
              setShowAll(false);
            }}
            className={`px-6 py-3 rounded-2xl font-semibold capitalize transition duration-300 border ${
              activeCategory === category
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-white"
                : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
            }`}
          >

            {category}

          </button>

        ))}

      </div>

      {/* ================= PROJECT GRID ================= */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

        {displayedProjects.map((project, index) => (

          <div
            key={index}
            className="group relative rounded-[32px] overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-3 transition-all duration-500 shadow-2xl"
          >

            {/* ================= IMAGE ================= */}
            <div className="relative overflow-hidden h-[260px]">

              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-black/40 to-transparent pointer-events-none"></div>

              {/* Category */}
              <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-black/50 border border-white/10 flex items-center gap-2 text-sm font-semibold text-cyan-300 z-10">

                {getCategoryIcon(project.category)}

                {project.category}

              </div>

            </div>

            {/* ================= CONTENT ================= */}
            <div className="p-7 relative z-20">

              <h2 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition duration-300">

                {project.name}

              </h2>

              <p className="text-gray-400 leading-8 text-[15px]">

                {project.desc}

              </p>

              {/* ================= BUTTONS ================= */}
              <div className="flex gap-4 mt-8">

                {/* LIVE BUTTON */}
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
                >

                  <FaExternalLinkAlt />

                  Live

                </a>

                {/* CODE BUTTON */}
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 font-semibold hover:scale-105 transition duration-300"
                >

                  <FaGithub />

                  Code

                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* ================= MORE BUTTON ================= */}
      {filteredProjects.length > 6 && (

        <div className="flex justify-center mt-20">

          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/20"
          >

            {showAll ? (
              <>
                <FaChevronUp />
                Show Less
              </>
            ) : (
              <>
                <FaChevronDown />
                More Projects
              </>
            )}

          </button>

        </div>

      )}

    </section>
  );
}