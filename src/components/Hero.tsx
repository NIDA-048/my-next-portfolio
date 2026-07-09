export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Nida 👋
        </h2>

        <h3 className="text-xl text-blue-600 font-semibold mb-4">
          Full Stack Developer Intern
        </h3>

        <p className="text-gray-600 mb-6">
          I build modern, responsive, and user-friendly web applications using
          Next.js, TypeScript, and Tailwind CSS. I enjoy learning new
          technologies and improving my development skills.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300">
          View Projects
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="w-64 h-64 rounded-full bg-gray-300 shadow-lg flex items-center justify-center text-5xl">
          👩‍💻
        </div>
      </div>
    </section>
  );
}