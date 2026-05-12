import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[10%] py-6 h-[6.5rem] bg-white shadow-md">

      {/* Logo */}
      <a
        href="/"
        className="text-[1.9rem] font-extrabold text-[#0e2431] flex items-center gap-2 hover:text-orange-500"
      >
        <FaUser className="text-[2.2rem]" />
        Priyanshu
      </a>

      {/* Hamburger Icon */}
      <div
        id="menu"
        className={`md:hidden text-5xl cursor-pointer text-[#18023f] transition duration-300 ${
          menuOpen ? "rotate-180" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navbar */}
      <nav
        className={`navbar fixed md:static top-[6.5rem] ${
          menuOpen ? "right-0" : "-right-full"
        } md:right-0 w-[75%] md:w-auto h-screen md:h-auto bg-[#0e0f31] md:bg-transparent text-left md:text-center items-start md:items-center transition-all duration-500`}
      >

        <ul className="flex flex-col md:flex-row justify-center items-start md:items-center p-5 md:p-0">

          <li className="text-center w-full md:w-auto my-4 md:my-0 md:ml-10 rounded-lg">
            <a
              href="#home"
              className="block p-4 md:p-0 text-left md:text-center text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] hover:border-b-4 hover:border-[#011aff]"
            >
              Home
            </a>
          </li>

          <li className="text-center w-full md:w-auto my-4 md:my-0 md:ml-10 rounded-lg">
            <a
              href="#about"
              className="block p-4 md:p-0 text-left md:text-center text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] hover:border-b-4 hover:border-[#011aff]"
            >
              About
            </a>
          </li>

          <li className="text-center w-full md:w-auto my-4 md:my-0 md:ml-10 rounded-lg">
            <a
              href="#skills"
              className="block p-4 md:p-0 text-left md:text-center text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] hover:border-b-4 hover:border-[#011aff]"
            >
              Skills
            </a>
          </li>

          <li className="text-center w-full md:w-auto my-4 md:my-0 md:ml-10 rounded-lg">
            <a
              href="#education"
              className="block p-4 md:p-0 text-left md:text-center text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] hover:border-b-4 hover:border-[#011aff]"
            >
              Education
            </a>
          </li>

          <li className="text-center w-full md:w-auto my-4 md:my-0 md:ml-10 rounded-lg">
            <a
              href="#work"
              className="block p-4 md:p-0 text-left md:text-center text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] hover:border-b-4 hover:border-[#011aff]"
            >
              Work
            </a>
          </li>

          <li className="text-center w-full md:w-auto my-4 md:my-0 md:ml-10 rounded-lg">
            <a
              href="#experience"
              className="block p-4 md:p-0 text-left md:text-center text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] hover:border-b-4 hover:border-[#011aff]"
            >
              Experience
            </a>
          </li>

          <li className="text-center w-full md:w-auto my-4 md:my-0 md:ml-10 rounded-lg">
            <a
              href="#contact"
              className="block p-4 md:p-0 text-left md:text-center text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] hover:border-b-4 hover:border-[#011aff]"
            >
              Contact
            </a>
          </li>

        </ul>

      </nav>

    </header>
  );
}