export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}