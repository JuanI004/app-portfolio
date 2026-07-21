import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "jigutierrez004@gmail.com",
    href: "mailto:jigutierrez004@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Juan Ignacio Gutierrez",
    href: "https://www.linkedin.com/in/juan-ignacio-gutierrez-822a052a4/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "JuanI004",
    href: "https://github.com/JuanI004",
    icon: SiGithub,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#082554] py-28 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#00042c] to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1100px] px-15 text-center lg:px-0">
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 select-none text-[11rem] leading-none text-white/[0.05] lg:-top-20 lg:text-[14rem]"
        >
          05
        </span>

        <div className="animate-fade-up relative">
          <p className="font-mono mb-5 flex items-center justify-center gap-2 text-sm tracking-[0.3em] text-[#8fa4ef] uppercase">
            <span className="text-[#6988ec]">//</span> Contacto
          </p>
          <h2 className="font-display text-4xl leading-[1.15] font-light lg:text-6xl">
            Trabajemos{" "}
            <em className="font-normal text-[#8fa4ef] italic">juntos</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/60">
            ¿Tenés un proyecto en mente o una oportunidad para charlar?
            Escribime, siempre estoy abierto a nuevas conversaciones.
          </p>
        </div>

        <div className="animate-fade-up relative mt-12 flex flex-col items-center gap-4 [animation-delay:150ms] sm:flex-row sm:justify-center">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="font-mono flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80 transition-all duration-150 hover:border-[#6988ec] hover:bg-[#6988ec]/10 hover:text-white sm:w-auto"
            >
              <link.icon size={18} />
              {link.value}
            </a>
          ))}
        </div>

        <p className="font-mono relative mt-24 text-xs tracking-widest text-white/30 uppercase">
          © {new Date().getFullYear()} Juan Ignacio Gutierrez
        </p>
      </div>
    </section>
  );
}
