export default function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS"
  ];

  return (
    <section id="skills" className="p-20 bg-gray-100">

      <h1 className="text-4xl font-bold mb-10">
        Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

        {skills.map((skill,index)=>(
          <div
            key={index}
            className="bg-white p-5 shadow rounded"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}