import { useState } from "react";

/* ================= CERTIFICATE IMPORTS ================= */

// PDF / IMAGE IMPORTS
import cert1 from "../assets/certi/1.jpg";
import cert2 from "../assets/certi/2.jpg";
import cert3 from "../assets/certi/5.pdf";
import cert4 from "../assets/certi/10.pdf";
import cert5 from "../assets/certi/4.png";
import cert6 from "../assets/certi/3.png";

/* ================= ICONS ================= */

import {
  FaBriefcase,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Experience() {

  /* ================= STATES ================= */

  const [showAll, setShowAll] = useState(false);

  const [showCertificates, setShowCertificates] =
    useState(false);

  /* ================= EXPERIENCE DATA ================= */

  const experiences = [
    {
      company: "Self Employed",
      role: "Freelancer",
      duration: "Oct 2023 - Present",
      side: "left",
    },

    {
      company: "ICT Academy & IBM",
      role: "Cyber Security Internship",
      duration: "November 2025 - November 2025 (120 Hours)",
      side: "right",
    },

    {
      company: "Top-Trove",
      role: "Management Information System Internship",
      duration: "January 2025 - April 2025",
      side: "left",
    },

    {
      company: "CodeAlpha",
      role: "C Language Developer Internship",
      duration: "September 2024 - October 2024",
      side: "right",
    },

    {
      company: "CodeAlpha",
      role: "Frontend Development Internship",
      duration: "October 2024 - November 2024",
      side: "left",
    },

    {
      company: "Younity",
      role: "Maintaining Records Internship",
      duration: "October 2024 - January 2025",
      side: "right",
    },
  ];

  /* ================= CERTIFICATES ================= */

  const certificates = [
    {
      title: "Frontend Development Certificate",
      company: "CodeAlpha",
      link: cert1,
    },

    {
      title: "Swarambh",
      company: "medha Career center",
      link: cert3,
    },

    {
      title: "Industrial Visits Certificate",
      company: "Network Bulls",
      link: cert4,
    },

    {
      title: "Maintaining Records Certificate",
      company: "Younity",
      link: cert5,
    },

    {
      title: "Freelancing Work Certificate",
      company: "Self Employed",
      link: cert6,
    },
  ];

  /* ================= SHOW FIRST 4 ================= */

  const displayedExperiences = showAll
    ? experiences
    : experiences.slice(0, 4);

  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-16 lg:px-24 bg-[#020617] text-white overflow-hidden"
    >

      {/* ================= BACKGROUND ================= */}

      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* ================= HEADING ================= */}

      <div className="relative z-10 text-center mb-20">

        <h1 className="text-4xl md:text-6xl font-black flex items-center justify-center gap-4">

          <FaBriefcase className="text-cyan-400" />

          Experience

        </h1>

        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto leading-8">

          My professional journey, internships, freelance work,
          and hands-on industry experience.

        </p>

      </div>

      {/* ================= TIMELINE ================= */}

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* CENTER LINE */}

        <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 transform -translate-x-1/2 rounded-full"></div>

        <div className="flex flex-col gap-14">

          {displayedExperiences.map((exp, index) => (

            <div
              key={index}
              className={`relative flex items-center ${
                exp.side === "left"
                  ? "md:justify-start"
                  : "md:justify-end"
              } justify-center`}
            >

              {/* TIMELINE DOT */}

              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-4 border-[#020617] shadow-lg shadow-cyan-500/50 z-20 animate-pulse"></div>

              {/* CARD */}

              <div className="group relative w-full md:w-[45%] p-8 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">

                {/* HOVER EFFECT */}

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition duration-500"></div>

                {/* CONTENT */}

                <div className="relative z-10 mb-5">

                  <div className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-semibold text-sm mb-5">

                    {exp.company}

                  </div>

                  <h2 className="text-2xl md:text-3xl font-black group-hover:text-cyan-400 transition duration-300">

                    {exp.role}

                  </h2>

                </div>

                {/* DURATION */}

                <div className="relative z-10 flex items-center gap-3 text-gray-300 text-lg">

                  <FaCalendarAlt className="text-blue-400" />

                  {exp.duration}

                </div>

                {/* BORDER */}

                <div className="absolute inset-0 rounded-[30px] border border-cyan-400/0 group-hover:border-cyan-400/30 transition duration-500"></div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ================= BUTTONS ================= */}

      <div className="relative z-10 flex flex-wrap justify-center gap-6 mt-20">

        {/* MORE EXPERIENCE */}

        {experiences.length > 4 && (

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
                More Experience
              </>
            )}

          </button>

        )}

        {/* CERTIFICATE BUTTON */}

        <button
          onClick={() =>
            setShowCertificates(!showCertificates)
          }
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border border-cyan-400/30 bg-white/5 backdrop-blur-xl text-white font-bold text-lg hover:bg-cyan-500/10 hover:scale-105 transition duration-300 shadow-2xl"
        >

          <FaCertificate className="text-cyan-400" />

          {showCertificates
            ? "Hide Certificates"
            : "View Certificates"}

        </button>

      </div>

      {/* ================= CERTIFICATES ================= */}

      {showCertificates && (

        <div className="relative z-10 max-w-6xl mx-auto mt-20">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {certificates.map((certificate, index) => (

              <div
                key={index}
                className="group p-8 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-500 shadow-2xl"
              >

                {/* ICON */}

                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mb-6">

                  <FaCertificate />

                </div>

                {/* TITLE */}

                <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition duration-300">

                  {certificate.title}

                </h2>

                {/* COMPANY */}

                <p className="text-gray-400 mb-6">

                  {certificate.company}

                </p>

                {/* VIEW BUTTON */}

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
                >

                  <FaExternalLinkAlt />

                  View Certificate

                </a>

              </div>

            ))}

          </div>

        </div>

      )}

    </section>
  );
}