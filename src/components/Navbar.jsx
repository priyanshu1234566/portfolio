import { useState, useEffect } from "react";
import {
  FaUserAstronaut,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Navbar Show / Hide
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {

    let lastScrollY = window.scrollY;

    const handleScroll = () => {

      // Blur effect
      setScrolled(window.scrollY > 30);

      // Hide / Show Navbar
      if (window.scrollY > lastScrollY) {

        // Scrolling Down
        setShowNavbar(false);

      } else {

        // Scrolling Up
        setShowNavbar(true);

      }

      lastScrollY = window.scrollY;

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const navLinks = [
    "home",
    "about",
    "skills",
    "education",
    "work",
    "experience",
    "contact",
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed left-0 w-full z-[1000] transition-all duration-500 ${
          showNavbar
            ? "top-0 opacity-100"
            : "-top-40 opacity-0"
        } ${
          scrolled
            ? "bg-[#020617]/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.35)] py-4"
            : "bg-transparent py-6"
        }`}
      >

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="/"
            className="group flex items-center gap-3"
          >

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition duration-500">

              <FaUserAstronaut className="text-white text-2xl" />

            </div>

            {/* Text */}
            <div>

              <h1 className="text-2xl md:text-3xl font-black text-white tracking-wide">
                Priyanshu
              </h1>

              <p className="text-xs text-cyan-300 tracking-[3px] uppercase">
                WEB Developer
              </p>

            </div>

          </a>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-4 py-3 rounded-full shadow-xl">

            {navLinks.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                onClick={() => setActive(item)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                  active === item
                    ? "text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item}
              </a>
            ))}

          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-14 h-14 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-lg flex items-center justify-center text-white text-2xl hover:bg-cyan-500/20 transition duration-300"
          >

            <span
              className={`transition duration-500 ${
                menuOpen ? "rotate-180" : ""
              }`}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </span>

          </button>

        </div>

      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden fixed top-0 z-[999] ${
          menuOpen ? "right-0" : "-right-full"
        } w-[80%] sm:w-[60%] h-screen bg-[#020617]/95 backdrop-blur-2xl border-l border-white/10 transition-all duration-500 shadow-2xl`}
      >

        {/* Top */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">

          <div>

            <h2 className="text-2xl font-black text-white">
              Priyanshu
            </h2>

            <p className="text-sm text-cyan-400">
              WEB Developer
            </p>

          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-3xl"
          >
            <FaTimes />
          </button>

        </div>

        {/* Links */}
        <nav className="flex flex-col gap-4 p-6">

          {navLinks.map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
              className={`group relative overflow-hidden px-5 py-4 rounded-2xl text-lg font-semibold uppercase tracking-wide transition-all duration-300 ${
                active === item
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >

              <span className="relative z-10">
                {item}
              </span>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            </a>
          ))}

        </nav>

        {/* Bottom Glow */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      </div>
    </>
  );
}