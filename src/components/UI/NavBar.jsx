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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg  w-3xl mx-auto mt-5 p-4 rounded-full">
      <div className="container mx-auto">
        <ul className=" flex  justify-between gap-10 items-center">
          <li className="text-white bg-linear-to-r from-[#2666cd] to-[#000030] rounded-full p-2 font-bold text-lg ">
            JIG
          </li>
          {SECTIONS.map((section) => (
            <li key={section.id} className="inline-block  ">
              <a
                href={section.href}
                className="text-gray-700 hover:border-b border-b-blue-600  uppercase hover:text-gray-900 transition-all duration-100"
              >
                {section.name}
              </a>
            </li>
          ))}
          <li className="inline-block hover:scale-105 transition-all duration-100">
            <a
              href="#contact"
              className="bg-[#0f3f92] hover:bg-[#1862e4] text-white  rounded-full px-5 py-2"
            >
              Hablemos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
