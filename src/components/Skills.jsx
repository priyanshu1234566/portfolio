import { FaLaptopCode, FaCode, FaDatabase, FaTools } from "react-icons/fa";

const skills = [
  {
    name: "ReactJS",
    percent: 90,
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
  },
  {
    name: "NodeJS",
    percent: 88,
    icon: "https://img.icons8.com/color/48/nodejs.png",
  },
  {
    name: "ExpressJS",
    percent: 85,
    icon: "https://img.icons8.com/fluency/48/node-js.png",
  },
  {
    name: "MongoDB",
    percent: 82,
    icon: "https://img.icons8.com/color/48/mongodb.png",
  },
  {
    name: "TailwindCSS",
    percent: 95,
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Bootstrap",
    percent: 90,
    icon: "https://img.icons8.com/color/48/bootstrap.png",
  },
  {
    name: "HTML5",
    percent: 98,
    icon: "https://img.icons8.com/color/48/html-5--v1.png",
  },
  {
    name: "CSS3",
    percent: 96,
    icon: "https://img.icons8.com/color/48/css3.png",
  },
  {
    name: "JavaScript",
    percent: 94,
    icon: "https://img.icons8.com/color/48/javascript--v1.png",
  },
  {
    name: "Python",
    percent: 82,
    icon: "https://img.icons8.com/color/48/python--v1.png",
  },
  {
    name: "Java",
    percent: 80,
    icon: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
  },
  {
    name: "C++",
    percent: 75,
    icon: "https://img.icons8.com/color/48/c-plus-plus-logo.png",
  },
  {
    name: "MySQL",
    percent: 84,
    icon: "https://img.icons8.com/color/48/mysql-logo.png",
  },
  {
    name: "PostgreSQL",
    percent: 80,
    icon: "https://img.icons8.com/color/48/postgreesql.png",
  },
  {
    name: "Git",
    percent: 92,
    icon: "https://img.icons8.com/color/48/git.png",
  },
  {
    name: "GitHub",
    percent: 93,
    icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
  },
  {
    name: "AWS",
    percent: 72,
    icon: "https://img.icons8.com/color/48/amazon-web-services.png",
  },
  {
    name: "Vercel",
    percent: 90,
    icon: "https://img.icons8.com/ios-filled/48/ffffff/vercel.png",
  },
  {
    name: "MS Word",
    percent: 95,
    icon: "https://img.icons8.com/color/48/microsoft-word-2019.png",
  },
  {
    name: "MS Excel",
    percent: 90,
    icon: "https://img.icons8.com/color/48/microsoft-excel-2019.png",
  },
  {
    name: "MS PowerPoint",
    percent: 92,
    icon: "https://img.icons8.com/color/48/microsoft-powerpoint-2019.png",
  },
  {
    name: "MS Outlook",
    percent: 85,
    icon: "https://img.icons8.com/color/48/microsoft-outlook-2019.png",
  },
  {
    name: "MS OneNote",
    percent: 80,
    icon: "https://img.icons8.com/color/48/microsoft-onenote-2019.png",
  },
];

export default function Skills() {

  const mid = Math.ceil(skills.length / 2);

  const topSkills = [...skills.slice(0, mid), ...skills.slice(0, mid)];

  const bottomSkills = [...skills.slice(mid), ...skills.slice(mid)];

  return (
    <>
      <style>{`
        @keyframes marquee{
          from{transform:translateX(0)}
          to{transform:translateX(-50%)}
        }

        @keyframes marqueeReverse{
          from{transform:translateX(-50%)}
          to{transform:translateX(0)}
        }

        .marquee{
          animation:marquee 28s linear infinite;
        }

        .marqueeReverse{
          animation:marqueeReverse 22s linear infinite;
        }

        .pause:hover{
          animation-play-state:paused;
        }
      `}</style>

      <section
        id="skills"
        className="relative py-28 px-6 md:px-12 lg:px-24 bg-[#020617] text-white overflow-hidden"
      >

        {/* BACKGROUND EFFECTS */}

        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-600/20 blur-[140px] rounded-full"></div>

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

        {/* SECTION TITLE */}

        <div className="relative z-10 text-center mb-20">

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 backdrop-blur-xl shadow-lg shadow-cyan-500/10 mb-8">

            <FaLaptopCode />

            <span className="font-semibold tracking-wide">
              My Technical Skills
            </span>

          </div>

          <h1 className="text-5xl md:text-7xl font-black">

            Skills{" "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              & Abilities
            </span>

          </h1>

          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-9">
            Technologies and tools I use to build modern,
            responsive and scalable full-stack applications.
          </p>

        </div>

        {/* TOP MARQUEE */}

        <div className="relative z-10 overflow-hidden mb-6">

          <div className="flex gap-6 w-max marquee pause">

            {topSkills.map((skill, index) => (

              <div
                key={index}
                className="min-w-[280px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 transition duration-500 shadow-xl"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-14 h-14 rounded-xl bg-white/10 p-2 object-contain"
                  />

                  <div>

                    <h3 className="text-xl font-bold">
                      {skill.name}
                    </h3>

                    <span className="text-cyan-400 font-semibold">
                      {skill.percent}%
                    </span>

                  </div>

                </div>

                <div className="mt-5 h-2 rounded-full bg-slate-700 overflow-hidden">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                    style={{ width: `${skill.percent}%` }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>
                {/* BOTTOM MARQUEE */}

        <div className="relative z-10 overflow-hidden mb-20">

          <div className="flex gap-6 w-max marqueeReverse pause">

            {bottomSkills.map((skill, index) => (

              <div
                key={index}
                className="min-w-[280px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 transition duration-500 shadow-xl"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-14 h-14 rounded-xl bg-white/10 p-2 object-contain"
                  />

                  <div>

                    <h3 className="text-xl font-bold">
                      {skill.name}
                    </h3>

                    <span className="text-cyan-400 font-semibold">
                      {skill.percent}%
                    </span>

                  </div>

                </div>

                <div className="mt-5 h-2 rounded-full bg-slate-700 overflow-hidden">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                    style={{ width: `${skill.percent}%` }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* BOTTOM STATS */}

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}

          <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-500 hover:border-cyan-400/30 shadow-xl">

            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mb-5">

              <FaCode />

            </div>

            <h2 className="text-5xl font-black text-cyan-400 mb-3">
              15+
            </h2>

            <p className="text-gray-300 text-lg">
              Projects Completed
            </p>

          </div>

          {/* CARD 2 */}

          <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-500 hover:border-blue-400/30 shadow-xl">

            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-5">

              <FaDatabase />

            </div>

            <h2 className="text-5xl font-black text-blue-400 mb-3">
              25+
            </h2>

            <p className="text-gray-300 text-lg">
              Technologies Learned
            </p>

          </div>

          {/* CARD 3 */}

          <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-2 transition duration-500 hover:border-purple-400/30 shadow-xl">

            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl mb-5">

              <FaTools />

            </div>

            <h2 className="text-5xl font-black text-purple-400 mb-3">
              2+
            </h2>

            <p className="text-gray-300 text-lg">
              Years Experience
            </p>

          </div>

        </div>

      </section>

    </>
  );
}