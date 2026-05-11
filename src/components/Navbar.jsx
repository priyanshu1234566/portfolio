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
        className="md:hidden text-5xl cursor-pointer text-[#18023f]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navbar */}
      <nav
        className={`fixed md:static top-[6.5rem] ${
          menuOpen ? "right-0" : "-right-full"
        } md:right-0 w-[75%] md:w-auto h-screen md:h-auto bg-[#0e0f31] md:bg-transparent transition-all duration-500`}
      >

        <ul className="flex flex-col md:flex-row justify-center items-start md:items-center p-5 md:p-0">

          <li className="w-full md:w-auto md:ml-10 my-4 md:my-0">
            <a
              href="#home"
              className="block text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] border-b-4 border-transparent hover:border-[#011aff] pb-2"
            >
              Home
            </a>
          </li>

          <li className="w-full md:w-auto md:ml-10 my-4 md:my-0">
            <a
              href="#about"
              className="block text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] border-b-4 border-transparent hover:border-[#011aff] pb-2"
            >
              About
            </a>
          </li>

          <li className="w-full md:w-auto md:ml-10 my-4 md:my-0">
            <a
              href="#skills"
              className="block text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] border-b-4 border-transparent hover:border-[#011aff] pb-2"
            >
              Skills
            </a>
          </li>

          <li className="w-full md:w-auto md:ml-10 my-4 md:my-0">
            <a
              href="#education"
              className="block text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] border-b-4 border-transparent hover:border-[#011aff] pb-2"
            >
              Education
            </a>
          </li>

          <li className="w-full md:w-auto md:ml-10 my-4 md:my-0">
            <a
              href="#work"
              className="block text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] border-b-4 border-transparent hover:border-[#011aff] pb-2"
            >
              Work
            </a>
          </li>

          <li className="w-full md:w-auto md:ml-10 my-4 md:my-0">
            <a
              href="#experience"
              className="block text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] border-b-4 border-transparent hover:border-[#011aff] pb-2"
            >
              Experience
            </a>
          </li>

          <li className="w-full md:w-auto md:ml-10 my-4 md:my-0">
            <a
              href="#contact"
              className="block text-white md:text-[#0e2431] text-3xl md:text-[1.57rem] font-semibold tracking-wide hover:text-[#011aff] border-b-4 border-transparent hover:border-[#011aff] pb-2"
            >
              Contact
            </a>
          </li>

        </ul>

      </nav>

    </header>
  );
}