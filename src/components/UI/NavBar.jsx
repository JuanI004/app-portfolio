const SECTIONS = [
  {
    id: 1,
    name: "Sobre mí",
    href: "#about",
  },
  {
    id: 2,
    name: "Proyectos",
    href: "#projects",
  },
  {
    id: 3,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 4,
    name: "Educación",
    href: "#education",
  },
];

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#02040f]/60 to-transparent ">
      <div className="flex items-center justify-between px-8 py-5 lg:px-14">
        <a
          href="#"
          className="font-display text-xl font-semibold text-white italic"
        >
          JIG
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={section.href}
                className="font-sans text-sm font-semibold tracking-wide text-white/60 uppercase transition-colors duration-200 hover:text-white"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="font-sans text-sm font-semibold tracking-wide text-white/80 uppercase transition-colors duration-200 hover:text-white"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}
