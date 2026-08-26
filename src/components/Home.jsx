import { useEffect, useRef } from "react";
import Typed from "typed.js";

import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaGamepad,
  FaArrowDown,
  FaCode,
} from "react-icons/fa6";

import { FaTelegramPlane } from "react-icons/fa";

import profile from "../assets/my/my 2.jpeg";

export default function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "WEB Developer",
        "UI/UX Designer",
        "Freelancer",
      ],
      loop: true,
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1200,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020617] text-white flex items-center"
    >
      {/* Background Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[350px] h-[350px] bg-blue-600/20 rounded-full blur-[120px]"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="mt-10 mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 backdrop-blur-xl shadow-lg shadow-cyan-500/10 animate-pulse">

              <FaCode className="text-lg shrink-0" />

              <span className="text-sm md:text-base font-semibold tracking-wide whitespace-nowrap">
                WEB Developer
              </span>

            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Hi, I'm

            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Priyanshu Kumar
            </span>
          </h1>

          {/* Typing */}
          <h2 className="mt-8 text-2xl md:text-4xl font-semibold text-gray-300">
            I Build

            <span
              ref={typingRef}
              className="ml-3 text-cyan-400"
            ></span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-gray-400 text-lg leading-9 max-w-[650px]">
            Passionate WEB Developer focused on building
            modern, responsive, and high-performance web applications.
            I love creating clean UI designs, smooth user experiences,
            and scalable full-stack solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#about"
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg flex items-center gap-3 hover:scale-105 transition duration-300 shadow-xl shadow-cyan-500/20"
            >
              About Me

              <FaArrowDown className="group-hover:translate-y-1 transition duration-300" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 transition duration-300"
            >
              Hire Me
            </a>

          </div>

          {/* Social Icons + Floating Cards */}
          <div className="mt-12 flex flex-col gap-8">

            {/* Floating Cards */}
            <div className="flex flex-wrap gap-5">

              {/* Experience Card */}
              <div className="group px-6 py-5 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition duration-300 min-w-[180px]">

                <h3 className="text-3xl font-black text-cyan-400">
                  2+
                </h3>

                <p className="text-gray-300 mt-2 text-sm tracking-wide">
                  Years Experience
                </p>

              </div>

              {/* Projects Card */}
              <div className="group px-6 py-5 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition duration-300 min-w-[180px]">

                <h3 className="text-3xl font-black text-purple-400">
                  15+
                </h3>

                <p className="text-gray-300 mt-2 text-sm tracking-wide">
                  Projects Completed
                </p>

              </div>

            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-5">

              {[
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/in/priyanshu-kumar-b7148632b/",
                  hover: "hover:bg-[#0077b5]",
                },
                {
                  icon: <FaXTwitter />,
                  link: "https://x.com/PriyanshuK33564",
                  hover: "hover:bg-black",
                },
                {
                  icon: <FaTelegramPlane />,
                  link: "https://t.me/codewithme898",
                  hover: "hover:bg-[#0088cc]",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/alone_in_life_823",
                  hover: "hover:bg-pink-500",
                },
                {
                  icon: <FaGamepad />,
                  link: "https://zero-kata-five.vercel.app/",
                  hover: "hover:bg-purple-600",
                },
              ].map((social, index) => (

                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-xl text-white hover:scale-110 transition-all duration-300 ${social.hover}`}
                >
                  <span className="group-hover:rotate-12 transition duration-300">
                    {social.icon}
                  </span>
                </a>

              ))}

            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center w-full min-h-[600px]">

          {/* Outer Animated Ring */}
          <div className="absolute w-[340px] md:w-[460px] h-[340px] md:h-[460px] rounded-full border border-cyan-500/20 animate-spin-slow"></div>

          {/* Pulse Ring */}
          <div className="absolute w-[380px] md:w-[520px] h-[380px] md:h-[520px] rounded-full border border-blue-500/10 animate-pulse"></div>

          {/* Glow */}
          <div className="absolute w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-cyan-500/20 blur-[100px] rounded-full"></div>

          {/* Image Wrapper */}
          <div className="relative z-10 group">

            {/* Gradient Border */}
            <div className="p-[5px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_60px_rgba(34,211,238,0.4)]">

              <img
                src={profile}
                alt="profile"
                draggable="false"
                className="w-[280px] md:w-[420px] h-[280px] md:h-[420px] object-cover rounded-full border-[6px] border-[#020617] shadow-2xl group-hover:scale-105 transition duration-500"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}