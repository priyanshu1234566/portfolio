import {
  FaUserGraduate,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaCode,
} from "react-icons/fa";

import aboutImg from "../assets/my/bio 2.jpg";
import resume from "../assets/my/priyanshu resume.pdf";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 lg:px-24 bg-[#020617] text-white overflow-hidden"
    >
      {/* BACKGROUND EFFECTS */}

      {/* Glow 1 */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-cyan-500/20 blur-[140px] rounded-full animate-pulse"></div>

      {/* Glow 2 */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-600/20 blur-[140px] rounded-full animate-pulse"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* SECTION TITLE */}
      <div className="relative z-10 text-center mb-24">

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 backdrop-blur-xl shadow-lg shadow-cyan-500/10 mb-8">

          <FaCode className="text-lg" />

          <span className="font-semibold tracking-wide">
            Know More About Me
          </span>

        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">

          About{" "}

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">

            Me

          </span>

        </h1>

        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-9">

          Passionate WEB Developer focused on building
          modern, scalable, and high-performance web applications
          with clean UI and smooth user experiences.

        </p>

      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">

          <div className="relative group">

            {/* Animated Ring */}
            <div className="absolute inset-[-15px] rounded-[40px] border border-cyan-500/30 animate-pulse"></div>

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl opacity-30 group-hover:opacity-60 transition duration-700 rounded-[40px]"></div>

            

            {/* Image */}
            <img
              src={aboutImg}
              alt="about"
              draggable="false"
              className="relative z-10 w-[320px] md:w-[470px] h-[420px] md:h-[580px] object-cover rounded-[40px] border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.25)] group-hover:scale-105 transition duration-700"
            />

           
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* SMALL TITLE */}
          <p className="text-cyan-400 font-semibold tracking-[3px] uppercase mb-5">

            Who I Am

          </p>

          {/* NAME */}
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">

            I'm{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">

              Priyanshu Kumar

            </span>

          </h2>

          {/* TAG */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-cyan-300 font-semibold mb-10">

            <FaUserGraduate />

            WEB Developer

          </div>

          {/* DESCRIPTION */}
          <div className="space-y-6 text-gray-300 text-lg leading-9">

            <p>
              I am a passionate Web Developer based in Haryana,
              India, currently pursuing Information Technology
              from Kurukshetra University.
            </p>

            <p>
              I specialize in creating responsive websites,
              modern UI/UX interfaces, and scalable full-stack
              applications using WEB technologies.
            </p>

            <p>
              I enjoy solving real-world problems through clean
              code and continuously improving my development
              skills by building impactful projects.
            </p>

          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">

            {/* CARD 1 */}
            <div className="group p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-500 hover:border-cyan-400/30 shadow-xl">

              <div className="flex items-center gap-4 mb-4">

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl">

                  <FaPhoneAlt />

                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Contact
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    Personal Info
                  </p>

                </div>

              </div>

              <p className="text-gray-300 mb-3">
                <span className="font-semibold text-white">
                  Phone:
                </span>{" "}
                +91 8396875894
              </p>

              <p className="text-gray-300">
                <span className="font-semibold text-white">
                  DOB:
                </span>{" "}
                25-11-2004
              </p>

            </div>

            {/* CARD 2 */}
            <div className="group p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-500 hover:border-blue-400/30 shadow-xl">

              <div className="flex items-center gap-4 mb-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl">

                  <FaEnvelope />

                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    E-mail
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Location Info
                  </p>

                </div>

              </div>

              <p className="text-gray-300 break-all mb-3">
                <span className="font-semibold text-white">
                  mail:
                </span>{" "}
                priyanshukumar2004panipat@gmail.com
              </p>

              <p className="text-gray-300 flex items-center gap-2">

                <FaMapMarkerAlt className="text-cyan-400" />

                Haryana, India

              </p>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-12">

            {/* Resume Button */}
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              download
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-cyan-500/20"
            >

              Download Resume

              <FaDownload className="group-hover:translate-y-1 transition duration-300" />

            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 transition duration-300"
            >

              Contact Me

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}