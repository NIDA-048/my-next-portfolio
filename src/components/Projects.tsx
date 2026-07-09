export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio built using Next.js and Tailwind CSS.",
    },
    {
      title: "GitHub Practice",
      description: "Practiced Git workflow with branches, commits, and pull requests.",
    },
    {
      title: "HTML Revision Website",
      description: "Built a multi-page responsive website using HTML and CSS.",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}