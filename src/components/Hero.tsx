export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Nida 👋
        </h2>

        <p className="text-gray-600 mb-6">
          I am a Full Stack Developer Intern passionate about building modern,
          responsive, and user-friendly web applications using Next.js and
          Tailwind CSS.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          View Projects
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="w-64 h-64 rounded-full bg-gray-300 flex items-center justify-center text-5xl">
          👩‍💻
        </div>
      </div>
    </section>
  );
}