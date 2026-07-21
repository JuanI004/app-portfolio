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
    <nav className="fixed top-5 left-1/2 z-50 w-[calc(100%-2.5rem)] max-w-3xl -translate-x-1/2 rounded-full border border-white/10 bg-[#02040f]/80 px-3 py-3 shadow-2xl backdrop-blur-md">
      <div className="flex items-center justify-between gap-6">
        <a
          href="#"
          className="font-display shrink-0 rounded-full bg-gradient-to-br from-[#6988ec] to-[#1a2a63] px-4 py-1.5 text-lg font-semibold text-white italic"
        >
          JIG
        </a>

        <ul className="font-mono hidden items-center gap-7 text-xs tracking-widest text-white/60 uppercase md:flex">
          {SECTIONS.map((section, index) => (
            <li key={section.id}>
              <a
                href={section.href}
                className="group inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-white"
              >
                <span className="text-[#6988ec]/70 transition-colors duration-200 group-hover:text-[#6988ec]">
                  0{index + 1}
                </span>
                {section.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="font-mono shrink-0 rounded-full bg-[#6988ec] px-5 py-2 text-xs font-medium tracking-widest text-[#02040f] uppercase transition-colors duration-200 hover:bg-white"
        >
          Hablemos
        </a>
      </div>
    </nav>
  );
}
