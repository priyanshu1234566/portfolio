import { useState } from "react";

/* ================= IMPORT IMAGE ================= */
import project1 from "../assets/projects/1.png";

/* ================= IMPORT ICONS ================= */
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaReact,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";

import { FaAndroid } from "react-icons/fa6";

export default function Work() {

  const [activeCategory, setActiveCategory] = useState("all");

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
      name: "Flower JavaScript",
      desc:
        "Beautiful flower animation using JavaScript and CSS with interactive petals and smooth motion.",
      image: project1,
      category: "javascript",

      // WORKING LINKS
      view: "https://impress-crush-lo.netlify.app/",
      code: "https://github.com/jigar-sable/instagram-mern",
    },

    {
      name: "Crypto Tracker",
      desc:
        "Modern cryptocurrency tracker built using ReactJS and Chakra UI.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200&auto=format&fit=crop",
      category: "react",

      view: "https://crypto-tracker-react-project.netlify.app/",
      code: "https://github.com/jigar-sable/React-Projects",
    },

    {
      name: "Android App",
      desc:
        "Android application built using Java and XML.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      category: "android",

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

  /* ================= ICONS ================= */
  const getCategoryIcon = (category) => {

    switch (category) {

      case "react":
        return <FaReact />;

      case "fullstack":
        return <FaNodeJs />;

      case "android":
        return <FaAndroid />;

      case "php":
        return <FaNodeJs />;

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
            onClick={() => setActiveCategory(category)}
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

        {filteredProjects.map((project, index) => (

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
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20 z-50 relative"
                >

                  <FaExternalLinkAlt />

                  Live

                </a>

                {/* CODE BUTTON */}
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 font-semibold hover:scale-105 transition duration-300 z-50 relative"
                >

                  <FaGithub />

                  Code

                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* ================= HIRE BUTTON ================= */}
      <div className="flex justify-center mt-20">

        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:scale-105 transition duration-300"
        >

          <FaCode />

          Hire Me For Projects

        </a>

      </div>

    </section>
  );
}