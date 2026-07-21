import { useState } from "react";
import { SiUdemy } from "react-icons/si";

const VISIBLE_COUNT = 4;

const EDUCATION = {
  title: "Ingeniero en Computación",
  subtitle: "Facultad de Ingeniería · Udelar",
  date: "Feb. 2023 — 2028",
};

const CERTIFICATIONS = [
  {
    title: "Certificate of Proficiency in English",
    issuer: "University of Michigan",
    date: "Dic. 2024",
    badge: "M",
  },
  {
    title: "Certificate of Competency in English",
    issuer: "University of Michigan",
    date: "Dic. 2022",
    badge: "M",
  },
  {
    title: "The Git & GitHub Bootcamp",
    issuer: "Udemy",
    date: "Dic. 2023",
    credentialId: "UC-254d26c1-cb1d-49a5-b8b5-7f6745d770c1",
    icon: SiUdemy,
  },
  {
    title: "The Web Developer Bootcamp 2024",
    issuer: "Udemy",
    date: "Ene. 2024",
    credentialId: "UC-f84ba9db-0068-44d4-aed6-82f0573ead43",
    icon: SiUdemy,
  },
  {
    title: "React - The Complete Guide (incl. React Router & Redux)",
    issuer: "Udemy",
    date: "Feb. 2024",
    credentialId: "UC-dcc163ed-c490-410d-beac-fb449263a41d",
    icon: SiUdemy,
  },
  {
    title: "CSS - The Complete Guide (incl. Flexbox, Grid & Sass)",
    issuer: "Academind by Maximilian Schwarzmüller · Udemy",
    date: "Ene. 2026",
    icon: SiUdemy,
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Jonas Schmedtmann · Udemy",
    date: "Abr. 2026",
    icon: SiUdemy,
  },
];

const TIMELINE = [
  { ...EDUCATION, issuer: EDUCATION.subtitle, primary: true },
  ...CERTIFICATIONS,
];

export default function Education() {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? TIMELINE : TIMELINE.slice(0, VISIBLE_COUNT);
  const remaining = TIMELINE.length - visibleItems.length;

  return (
    <section
      id="education"
      className="relative w-full overflow-hidden border-b border-white/10 bg-[#00042c] py-28 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#2d4d82] to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1100px] px-15 lg:px-0">
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute -top-16 -left-4 select-none text-[11rem] leading-none text-white/[0.05] lg:-top-20 lg:text-[14rem]"
        >
          04
        </span>

        <div className="animate-fade-up relative mb-14">
          <p className="font-mono mb-5 flex items-center gap-2 text-sm tracking-[0.3em] text-[#8fa4ef] uppercase">
            <span className="text-[#6988ec]">//</span> Educación
          </p>
          <h2 className="font-display text-4xl leading-[1.15] font-light lg:text-5xl">
            Formación{" "}
            <em className="font-normal text-[#8fa4ef] italic">continua</em>.
          </h2>
        </div>

        <div className="animate-fade-up relative mx-auto max-w-2xl [animation-delay:150ms]">
          {visibleItems.map((item, index) => (
            <div
              key={item.title}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              <div className="relative flex shrink-0 flex-col items-center">
                <div
                  className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold ${
                    item.primary
                      ? "border-[#6988ec] bg-[#6988ec]/20 text-[#8fa4ef]"
                      : "border-white/15 bg-[#00042c] text-white/70"
                  }`}
                >
                  {item.icon ? <item.icon size={16} /> : (item.badge ?? "•")}
                </div>
                {index < visibleItems.length - 1 && (
                  <div className="mt-1 w-px flex-1 bg-white/10" />
                )}
              </div>

              <div className="min-w-0 pt-1">
                {item.date && (
                  <p className="font-mono mb-1.5 text-xs tracking-widest text-[#6988ec] uppercase">
                    {item.date}
                  </p>
                )}
                <h4 className="font-display text-xl font-medium text-white lg:text-2xl">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-white/50">{item.issuer}</p>
                {item.credentialId && (
                  <p className="font-mono mt-1 text-xs text-white/30">
                    ID {item.credentialId}
                  </p>
                )}
              </div>
            </div>
          ))}

          {remaining > 0 && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="font-mono ml-[3.75rem] flex items-center gap-2 text-xs tracking-widest text-white/50 uppercase transition-colors duration-150 hover:text-[#6988ec]"
            >
              Ver {remaining} más ↓
            </button>
          )}

          {expanded && TIMELINE.length > VISIBLE_COUNT && (
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="font-mono ml-[3.75rem] flex items-center gap-2 text-xs tracking-widest text-white/50 uppercase transition-colors duration-150 hover:text-[#6988ec]"
            >
              Ver menos ↑
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
