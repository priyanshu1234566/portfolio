import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaAndroid,
} from "react-icons/fa6";

export default function Work() {

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    "mern",
    "basicweb",
    "android",
    "lamp",
  ];

  const projects = [
    {
      name: "Instagram MERN",
      desc: "Full-Stack Instagram clone built using MERN stack and realtime chat with Socket.io.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      category: "mern",
      view: "https://instagramernstack.herokuapp.com/",
      code: "https://github.com/jigar-sable/instagram-mern",
    },

    {
      name: "Flipkart MERN",
      desc: "E-commerce platform with admin dashboard and payment integration using MERN Stack.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
      category: "mern",
      view: "https://flipkartwebs.herokuapp.com/",
      code: "https://github.com/jigar-sable/flipkart-mern",
    },

    {
      name: "Crypto Tracker",
      desc: "Modern cryptocurrency tracker built using ReactJS and Chakra UI with live API data.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200&auto=format&fit=crop",
      category: "mern",
      view: "https://crypto-tracker-react-project.netlify.app/",
      code: "https://github.com/jigar-sable/React-Projects",
    },

    {
      name: "Hulu Website",
      desc: "Hulu clone built with NextJS and TailwindCSS using TMDB API.",
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
      category: "mern",
      view: "https://hulu-clone-jigar-sable.vercel.app/",
      code: "https://github.com/jigar-sable/React-Projects",
    },

    {
      name: "JavaScript Projects",
      desc: "Collection of JavaScript mini projects with responsive UI and animations.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
      category: "basicweb",
      view: "https://jigar-sable.github.io/JavaScript-Projects",
      code: "https://github.com/jigar-sable/JavaScript-Projects",
    },

    {
      name: "Portfolio Website",
      desc: "Modern animated personal portfolio built using React and TailwindCSS.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      category: "basicweb",
      view: "#",
      code: "https://github.com/jigar-sable/Portfolio-Website",
    },

    {
      name: "NewsBox Android",
      desc: "Native Android application for reading category-wise latest news.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      category: "android",
      view: "#",
      code: "https://github.com/jigar-sable/newsbox-android",
    },

    {
      name: "Weatherly Android",
      desc: "Android weather application using Java, XML and weather APIs.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",
      category: "android",
      view: "#",
      code: "https://github.com/jigar-sable/weatherly-android",
    },

    {
      name: "Flipkart PHP",
      desc: "Full-stack Flipkart clone built using PHP and MySQL.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      category: "lamp",
      view: "https://github.com/jigar-sable/Flipkart-Clone-PHP",
      code: "https://github.com/jigar-sable/Flipkart-Clone-PHP",
    },

    {
      name: "PHP Banking Website",
      desc: "Basic banking system project using PHP, MySQL, HTML and CSS.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      category: "lamp",
      view: "https://tsfbank.rf.gd",
      code: "https://github.com/jigar-sable/TSF-Bank",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const getCategoryIcon = (category) => {
    switch (category) {
      case "mern":
        return <FaReact />;
      case "android":
        return <FaAndroid />;
      case "lamp":
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

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">

        <h1 className="text-4xl md:text-6xl font-black">

          Projects{" "}

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Made
          </span>

        </h1>

        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
          Real-world projects built using modern technologies
          like MERN Stack, React, Node.js, Android, PHP and more.
        </p>

      </div>

      {/* Filter Buttons */}
      <div className="relative z-10 flex flex-wrap justify-center gap-5 mb-16">

        {categories.map((category, index) => (

          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-2xl font-semibold capitalize transition duration-300 border backdrop-blur-xl ${
              activeCategory === category
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 scale-105"
                : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:scale-105"
            }`}
          >

            {category}

          </button>

        ))}

      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

        {filteredProjects.map((project, index) => (

          <div
            key={index}
            className="group relative rounded-[32px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500 shadow-2xl"
          >

            {/* Project Image */}
            <div className="relative overflow-hidden h-[260px]">

              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-black/40 to-transparent"></div>

              {/* Category */}
              <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-2 text-sm font-semibold text-cyan-300">

                {getCategoryIcon(project.category)}

                {project.category}

              </div>

            </div>

            {/* Content */}
            <div className="p-7">

              <h2 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition duration-300">

                {project.name}

              </h2>

              <p className="text-gray-400 leading-8 text-[15px]">

                {project.desc}

              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">

                <a
                  href={project.view}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
                >

                  <FaExternalLinkAlt />

                  Live

                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 font-semibold hover:scale-105 transition duration-300"
                >

                  <FaGithub />

                  Code

                </a>

              </div>

            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-[32px] border border-cyan-400/0 group-hover:border-cyan-400/30 transition duration-500"></div>

          </div>

        ))}

      </div>

      {/* Bottom Button */}
      <div className="relative z-10 flex justify-center mt-20">

        <a
          href="#contact"
          className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/20"
        >

          <FaCode />

          Hire Me For Projects

        </a>

      </div>

    </section>
  );
}