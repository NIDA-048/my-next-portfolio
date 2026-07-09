export default function ProjectsPage() {
  const projects = [
    {
      title: "Shoe Hub App",
      description:
        "A shoe shopping application with a user-friendly interface.",
    },
    {
      title: "Flight Reservation System",
      description:
        "A system for searching and managing flight reservations.",
    },
    {
      title: "Developer Portfolio",
      description:
        "A responsive portfolio website built with Next.js and Tailwind CSS.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-3">
              {project.title}
            </h2>

            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}