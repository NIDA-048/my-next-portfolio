export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Nida</h1>

      <ul className="flex gap-6">
        <a href="/projects">Projects</a>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
