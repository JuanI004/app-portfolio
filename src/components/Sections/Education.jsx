import { useEffect, useRef, useState } from "react";
import { SiUdemy } from "react-icons/si";

const EDUCATION = {
  title: "Ingeniero en Computación",
  subtitle: "Facultad de Ingeniería · Udelar",
  date: "Feb. 2023 — 2028",
};

const CERTIFICATIONS = [
  {
    title: "Certificate of Competency in English",
    issuer: "University of Michigan",
    date: "Dic. 2022",
    badge: "M",
  },
  {
    title: "Certificate of Proficiency in English",
    issuer: "University of Michigan",
    date: "Dic. 2024",
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
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, -section.getBoundingClientRect().top / scrollable),
      );
      const maxX = Math.max(0, track.scrollWidth - track.clientWidth);
      setOffset(progress * maxX);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative w-full bg-[#082554] text-white"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#2d4d82] to-transparent"
        />

        <div className="relative mx-auto mb-14 w-full max-w-[1100px] px-15 lg:px-0">
          <p className="font-sans mb-5 flex items-center gap-2 text-sm font-semibold tracking-wide text-[#8fa4ef] uppercase">
            <span className="text-[#6988ec]">//</span> Educación
          </p>
          <h2 className="font-display text-4xl leading-[1.15] font-light lg:text-5xl">
            Formación{" "}
            <em className="font-normal text-[#8fa4ef] italic">continua</em>.
          </h2>
        </div>

        <div ref={trackRef} className="relative w-full overflow-hidden">
          <div
            className="flex w-max items-stretch pr-[20vw] pl-[max(3.75rem,calc((100vw-1100px)/2))]"
            style={{
              transform: `translateX(${-offset}px)`,
            }}
          >
            {TIMELINE.map((item, index) => (
              <div key={item.title} className="relative w-80 shrink-0 pr-10">
                <div className="relative flex items-center">
                  <div
                    className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                      item.primary
                        ? "border-[#6988ec] bg-[#6988ec]/20 text-[#8fa4ef]"
                        : "border-white/15 bg-[#082554] text-white/70"
                    }`}
                  >
                    {item.icon ? <item.icon size={16} /> : (item.badge ?? "•")}
                  </div>
                  {index < TIMELINE.length - 1 && (
                    <div className="h-px flex-1 bg-white/10" />
                  )}
                </div>

                <div className="mt-6 pr-4">
                  {item.date && (
                    <p className="font-sans mb-1.5 text-xs font-semibold tracking-wide text-[#6988ec] uppercase">
                      {item.date}
                    </p>
                  )}
                  <h4 className="font-display text-xl font-medium text-white lg:text-2xl">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-white/50">{item.issuer}</p>
                  {item.credentialId && (
                    <p className="font-sans mt-1 text-xs break-all text-white/30">
                      ID {item.credentialId}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-14 w-full max-w-[1100px] px-15 lg:px-0">
          <p className="font-sans flex items-center gap-2 text-xs font-semibold tracking-wide text-white/40 uppercase">
            Seguí scrolleando
            <span className="inline-block h-px w-10 bg-white/30" />
          </p>
        </div>
      </div>
    </section>
  );
}
