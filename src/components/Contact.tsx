export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        Contact Me
      </h2>

      <form className="bg-white shadow rounded-xl p-8 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full border p-3 rounded-lg"
        ></textarea>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}