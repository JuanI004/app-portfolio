import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export default function NavBar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  const SECTIONS = [
    { id: 1, name: t.about, href: "#about" },
    { id: 2, name: t.projects, href: "#projects" },
    { id: 3, name: t.skills, href: "#skills" },
    { id: 4, name: t.education, href: "#education" },
  ];

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

        <div className="flex items-center gap-5">
          <div
            role="group"
            aria-label="Idioma / Language"
            className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1"
          >
            <button
              type="button"
              onClick={() => setLang("es")}
              aria-pressed={lang === "es"}
              className={`font-sans rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide uppercase transition-colors duration-200 ${
                lang === "es"
                  ? "bg-white/15 text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`font-sans rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide uppercase transition-colors duration-200 ${
                lang === "en"
                  ? "bg-white/15 text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="font-sans text-sm font-semibold tracking-wide text-white/80 uppercase transition-colors duration-200 hover:text-white"
          >
            {t.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}
