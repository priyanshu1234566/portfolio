import {
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

export default function Skills() {

  const skills = [
    {
      name: "ReactJS",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    },
    {
      name: "NodeJS",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "ExpressJS",
      icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      name: "TailwindCSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    },
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/color/48/000000/python--v1.png",
    },
    {
      name: "Java",
      icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
    },
    {
      name: "C++",
      icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    },
    {
      name: "MySQL",
      icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/color/48/postgreesql.png",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/color/48/amazon-web-services.png",
    },
    {
      name: "Vercel",
      icon: "https://img.icons8.com/ios-filled/48/ffffff/vercel.png",
    },

    // ================= MS OFFICE =================

    {
      name: "MS Word",
      icon: "https://img.icons8.com/color/48/microsoft-word-2019.png",
    },
    {
      name: "MS Excel",
      icon: "https://img.icons8.com/color/48/microsoft-excel-2019.png",
    },
    {
      name: "MS PowerPoint",
      icon: "https://img.icons8.com/color/48/microsoft-powerpoint-2019.png",
    },
    
    {
      name: "MS Outlook",
      icon: "https://img.icons8.com/color/48/microsoft-outlook-2019.png",
    },
    {
      name: "MS OneNote",
      icon: "https://img.icons8.com/color/48/microsoft-onenote-2019.png",
    },
    
    {
      name: "MS Office",
      icon: "https://img.icons8.com/color/48/microsoft-office-2019.png",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-28 px-6 md:px-12 lg:px-24 bg-[#020617] text-white overflow-hidden"
    >

      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Glow 1 */}
      <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Glow 2 */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-600/20 blur-[120px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* ================= SECTION TITLE ================= */}
      <div className="relative z-10 text-center mb-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 backdrop-blur-xl shadow-lg shadow-cyan-500/10 mb-8">

          <FaLaptopCode className="text-lg" />

          <span className="font-semibold tracking-wide">
            My Technical Skills
          </span>

        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight">

          Skills &{" "}

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">

            Abilities

          </span>

        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-9">

          Technologies and tools I use to build modern,
          responsive, and scalable full-stack web applications.

        </p>

      </div>

      {/* ================= SKILLS GRID ================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center justify-center text-center hover:-translate-y-3 hover:border-cyan-400/30 transition-all duration-500 shadow-xl"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition duration-500">

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />

              </div>

              {/* Skill Name */}
              <h3 className="relative z-10 text-lg font-bold text-white group-hover:text-cyan-300 transition duration-300">

                {skill.name}

              </h3>

            </div>

          ))}

        </div>

      </div>

      {/* ================= BOTTOM STATS ================= */}
      <div className="relative z-10 max-w-[1200px] mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-500">

          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mb-5">

            <FaCode />

          </div>

          <h3 className="text-4xl font-black text-cyan-400 mb-3">
            15+
          </h3>

          <p className="text-gray-300 text-lg">
            Projects Completed
          </p>

        </div>

        {/* Card 2 */}
        <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-500">

          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-5">

            <FaDatabase />

          </div>

          <h3 className="text-4xl font-black text-blue-400 mb-3">
            25+
          </h3>

          <p className="text-gray-300 text-lg">
            Technologies Learned
          </p>

        </div>

        {/* Card 3 */}
        <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-500">

          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl mb-5">

            <FaTools />

          </div>

          <h3 className="text-4xl font-black text-purple-400 mb-3">
            2+
          </h3>

          <p className="text-gray-300 text-lg">
            Years Experience
          </p>

        </div>

      </div>

    </section>
  );
}