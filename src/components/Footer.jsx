import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaLinkedinIn,
  FaXTwitter,
  FaGamepad,
  FaHeart,
  FaChevronRight,
  FaArrowUp,
} from "react-icons/fa6";

import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

        {/* LEFT */}
        <div>

          <h1 className="text-4xl md:text-5xl font-black leading-tight">

            Priyanshu Kumar

            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Developer Portfolio
            </span>

          </h1>

          <p className="mt-8 text-gray-400 text-[17px] leading-8 max-w-[450px]">
            Passionate Frontend Developer focused on creating
            beautiful, responsive, and user-friendly web experiences.
            Building modern digital products with creativity and clean code.
          </p>

          {/* Small Badge */}
          <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-medium backdrop-blur-md">

            🚀 Always Learning & Building

          </div>

        </div>

        {/* CENTER */}
        <div>

          <h2 className="text-3xl font-bold relative inline-block">

            Quick Links

            <span className="absolute left-0 -bottom-3 w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>

          </h2>

          <div className="mt-10 flex flex-col gap-5">

            {[
              "Home",
              "About",
              "Skills",
              "Education",
              "Projects",
              "Experience",
              "Contact",
            ].map((item, index) => (

              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="group flex items-center gap-4 text-lg text-gray-400 hover:text-cyan-400 transition-all duration-300"
              >

                <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all duration-300">

                  <FaChevronRight className="text-sm group-hover:translate-x-1 transition duration-300" />

                </span>

                {item}

              </a>

            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <h2 className="text-3xl font-bold relative inline-block">

            Get In Touch

            <span className="absolute left-0 -bottom-3 w-20 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>

          </h2>

          <div className="mt-10 flex flex-col gap-6">

            {/* Phone */}
            <div className="group flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">

                <FaPhone />

              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <h4 className="text-lg text-gray-300">
                  +91 8396875894
                </h4>
              </div>

            </div>

            {/* Email */}
            <div className="group flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">

                <FaEnvelope />

              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>

                <h4 className="text-[15px] md:text-lg text-gray-300 break-all">
                  priyanshukumar2004panipat@gmail.com
                </h4>
              </div>

            </div>

            {/* Location */}
            <div className="group flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">

                <FaLocationDot />

              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <h4 className="text-lg text-gray-300">
                  Panipat, Haryana, India
                </h4>
              </div>

            </div>

          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-4 mt-10">

            {[
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/priyanshu-kumar-b7148632b/",
                hover: "hover:bg-[#0077b5]",
              },
              {
                icon: <FaEnvelope />,
                link: "mailto:priyanshukumar2004panipat@gmail.com",
                hover: "hover:bg-red-500",
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
                className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-white backdrop-blur-md transition-all duration-300 hover:scale-110 ${social.hover}`}
              >

                {social.icon}

              </a>

            ))}

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="relative z-10 border-t border-white/10">

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-7 flex flex-col md:flex-row items-center justify-between gap-5">

          <h1 className="flex items-center gap-3 text-gray-400 text-center md:text-left">

            Designed & Developed with

            <FaHeart className="text-red-500 animate-pulse" />

            by

            <span className="text-cyan-400 font-semibold">
              Priyanshu Kumar
            </span>

          </h1>

          {/* Scroll Top */}
          <a
            href="#home"
            className="w-12 h-12 rounded-full bg-cyan-500 text-black flex items-center justify-center hover:scale-110 transition duration-300 shadow-lg shadow-cyan-500/30"
          >

            <FaArrowUp />

          </a>

        </div>

      </div>

    </footer>
  );
}