import {
  FaGraduationCap,
  FaSchool,
  FaUniversity,
  FaBookOpen,
} from "react-icons/fa";

import clgImg from "../assets/my/clg.jpg";
import school12Img from "../assets/my/12th.jpg";
import school10Img from "../assets/my/10th.avif";

export default function Education() {

  const educationData = [
    {
      title: "Bachelor of Computer Science",
      school: "I.B(PG) College | KUK",
      year: "2023 - 2026 | Pursuing",
      icon: <FaUniversity />,
      image: clgImg,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Senior Secondary Education",
      school: "Government Senior Secondary School | HBSE",
      year: "2021 - 2022 | Completed",
      icon: <FaSchool />,
      image: school12Img,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Secondary Education",
      school: "Gian Ganga Senior Secondary School | HBSE",
      year: "2019 - 2020 | Completed",
      icon: <FaBookOpen />,
      image: school10Img,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-28 px-6 md:px-12 lg:px-24 bg-[#020617] text-white overflow-hidden"
    >

      {/* BACKGROUND EFFECTS */}

      {/* Glow 1 */}
      <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Glow 2 */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-600/20 blur-[120px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* SECTION TITLE */}
      <div className="relative z-10 text-center mb-24">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 backdrop-blur-xl shadow-lg shadow-cyan-500/10 mb-8">

          <FaGraduationCap className="text-lg" />

          <span className="font-semibold tracking-wide">
            My Academic Journey
          </span>

        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight">

          My{" "}

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">

            Education

          </span>

        </h1>

        {/* Quote */}
        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-9 italic">

          "Education is not the learning of facts,
          but the training of the mind to think."

        </p>

      </div>

      {/* EDUCATION CARDS */}
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {educationData.map((edu, index) => (

          <div
            key={index}
            className="group relative overflow-hidden rounded-[35px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl hover:-translate-y-4 transition-all duration-700"
          >

            {/* Top Image */}
            <div className="relative overflow-hidden h-[260px]">

              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${edu.color} opacity-30 z-10`}></div>

              {/* Image */}
              <img
                src={edu.image}
                alt={edu.title}
                draggable="false"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

            </div>

            {/* CONTENT */}
            <div className="p-8 relative">

              {/* Floating Icon */}
              <div className={`absolute -top-10 left-8 w-20 h-20 rounded-3xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-3xl shadow-2xl`}>

                {edu.icon}

              </div>

              {/* Title */}
              <h2 className="text-2xl font-black mt-10 mb-4 leading-snug">

                {edu.title}

              </h2>

              {/* School */}
              <p className="text-gray-300 text-lg mb-5 leading-8">

                {edu.school}

              </p>

              {/* Year */}
              <div className={`inline-block px-5 py-2 rounded-full bg-gradient-to-r ${edu.color} text-white font-semibold shadow-lg`}>

                {edu.year}

              </div>

            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/10 transition duration-700"></div>

          </div>

        ))}

      </div>

      {/* BOTTOM TIMELINE EFFECT */}
      <div className="relative z-10 flex justify-center mt-20">

        <div className="w-[250px] h-[6px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_40px_rgba(34,211,238,0.7)]"></div>

      </div>

    </section>
  );
}