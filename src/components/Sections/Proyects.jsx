import { useEffect, useState } from "react";
import { ArrowLeft, Globe, X } from "lucide-react";
import {
  SiGithub,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

import imgPlayRank from "../../assets/proyectoPlayRank.webp";
import imgPlayRank2 from "../../assets/proyectoPlayRank2.webp";
import imgQuestLog from "../../assets/proyectoQuestLog.webp";
import imgQuestLog2 from "../../assets/proyectoQuestLog2.png";
import imgIronFuel from "../../assets/proyectoIronFuel.webp";
import imgIronFuel2 from "../../assets/proyectoIronFuel2.webp";
import imgReservApp from "../../assets/proyectoReservApp.webp";
import imgReservApp2 from "../../assets/proyectoReservApp2.webp";

const PROJECT_META = [
  {
    id: 1,
    key: "ironfuel",
    title: "IronFuel",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Supabase", icon: SiSupabase },
    ],
    images: [imgIronFuel, imgIronFuel2],
    githubUrl: "https://github.com/JuanI004/app-suplementos-deportivos",
    liveUrl: "https://app-suplementos-deportivos.vercel.app",
    stack: [
      "Next.js 16 (App Router)",
      "React 19",
      "Redux Toolkit",
      "Supabase (Auth + DB + Storage)",
      "CSS Modules",
    ],
  },
  {
    id: 2,
    key: "questlog",
    title: "QuestLog",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Supabase", icon: SiSupabase },
    ],
    images: [imgQuestLog, imgQuestLog2],
    githubUrl: "https://github.com/JuanI004/app-questlog",
    liveUrl: "https://app-questlog.vercel.app",
    stack: [
      "Next.js 14 (App Router)",
      "Tailwind CSS",
      "Supabase (Auth + DB + Storage)",
    ],
  },
  {
    id: 3,
    key: "playrank",
    title: "PlayRank",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node Js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
    images: [imgPlayRank, imgPlayRank2],
    githubUrl: "https://github.com/JuanI004/app-playRank",
    liveUrl: "https://app-play-rank.vercel.app",
    stack: [
      "React 19",
      "Tailwind CSS v4",
      "TanStack Query v5",
      "React Router v7",
      "RAWG API",
      "CheapShark API",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    id: 4,
    key: "reservapp",
    title: "ReservApp",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Supabase", icon: SiSupabase },
    ],
    images: [imgReservApp, imgReservApp2],
    githubUrl: "https://github.com/JuanI004/app-reservApp",
    stack: [
      "Next.js 16 (App Router)",
      "Supabase (Auth + DB + Storage)",
      "Tailwind CSS v4",
    ],
  },
];

function ProjectModal({ project, onClose, t }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const num = String(project.id).padStart(2, "0");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="animate-sheet-up fixed inset-0 z-[100] overflow-y-auto border-t-2 border-[#6988ec] bg-[#00042c] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1100px] px-15 pt-8 pb-20 lg:px-0">
        <div className="animate-fade-up flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="font-sans inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-white/50 uppercase transition-colors duration-150 hover:text-white"
          >
            <ArrowLeft size={15} /> {t.back}
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="animate-fade-up font-sans mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold tracking-wide text-[#8fa4ef] uppercase [animation-delay:100ms]">
              <span className="text-[#6988ec]">//</span> {num} · {project.type}
              {project.badge ? (
                <span className="text-white/50">· {project.badge}</span>
              ) : null}
            </p>

            <h3 className="animate-fade-up font-display text-5xl leading-[1.05] font-light [animation-delay:150ms] lg:text-7xl">
              {project.title}
              <span className="text-[#6988ec]">.</span>
            </h3>

            <p className="animate-fade-up mt-7 max-w-xl text-lg leading-8 text-white/60 [animation-delay:200ms]">
              {project.longDescription}
            </p>

            <div className="animate-fade-up [animation-delay:250ms]">
              <h4 className="font-sans mt-10 mb-5 text-xs font-semibold tracking-wide text-white/40 uppercase">
                {t.whatItDoes}
              </h4>
              <ul className="flex flex-col gap-4">
                {project.features.map((feature, i) => (
                  <li
                    key={feature}
                    className="flex gap-4 border-b border-white/5 pb-4 text-[0.95rem] leading-6 text-white/70 last:border-b-0"
                  >
                    <span className="font-sans pt-0.5 text-xs font-semibold text-[#6988ec]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-up [animation-delay:300ms]">
              <h4 className="font-sans mt-10 mb-5 text-xs font-semibold tracking-wide text-white/40 uppercase">
                {t.stackLabel}
              </h4>
              <dl className="flex flex-col gap-2.5 border-t border-white/10 pt-6 text-sm">
                {project.stack.map((item, i) => (
                  <div key={item} className="flex gap-4">
                    <dt className="font-sans w-10 shrink-0 text-xs font-semibold text-white/35 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </dt>
                    <dd className="text-white/80">{item}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="animate-fade-up mt-12 flex flex-wrap items-center gap-4 [animation-delay:350ms]">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans inline-flex items-center gap-2 rounded-full bg-[#6988ec] px-6 py-3 text-sm font-semibold tracking-wide text-[#02040f] uppercase transition-colors duration-150 hover:bg-white"
                >
                  <Globe size={16} /> {t.liveLabel} ↗
                </a>
              ) : null}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-white/80 uppercase transition-all duration-150 hover:border-[#6988ec] hover:text-white"
              >
                <SiGithub /> {t.githubLabel} ↗
              </a>
            </div>
          </div>

          <div className="relative lg:sticky lg:top-14 lg:self-start">
            <div className="animate-fade-up relative flex flex-col gap-8 pt-6 [animation-delay:250ms]">
              <div className="group relative -rotate-2 overflow-hidden rounded-xl border border-white/15 shadow-2xl transition-transform duration-300 ease-out hover:rotate-0">
                <img
                  src={project.images[0]}
                  alt={`${project.title} 1`}
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
              <div className="group relative ml-8 rotate-3 overflow-hidden rounded-xl border border-white/15 shadow-2xl transition-transform duration-300 ease-out hover:rotate-0 lg:-mt-2">
                <img
                  src={project.images[1]}
                  alt={`${project.title} 2`}
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Proyects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  const [selected, setSelected] = useState(null);

  const projects = PROJECT_META.map((meta) => ({
    ...meta,
    ...t.items[meta.key],
    imageLabel: `${meta.title} · ${t.items[meta.key].description}`,
  }));

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden  bg-[#082554] py-28 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#00042c] to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1100px] px-15 lg:px-0">
        <div className="animate-fade-up relative mb-14">
          <p className="font-sans mb-5 flex items-center gap-2 text-sm font-semibold tracking-wide text-[#8fa4ef] uppercase">
            <span className="text-[#6988ec]">//</span> {t.eyebrow}
          </p>
          <h2 className="font-display text-4xl leading-[1.15] font-light lg:text-5xl">
            {t.headlinePre}
            <em className="font-normal text-[#8fa4ef] italic">
              {t.headlineEm}
            </em>
            {t.headlinePost}
          </h2>
        </div>

        <div className="animate-fade-up grid grid-cols-1 gap-6 [animation-delay:150ms] md:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelected(project)}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-xl transition-all duration-150 hover:cursor-pointer hover:scale-[1.02] hover:border-[#6988ec]/40 hover:shadow-2xl"
            >
              <div className="relative flex h-52 items-center justify-center">
                <div className="absolute w-[62%] -translate-x-[14%] rotate-[-9deg] overflow-hidden rounded-lg border border-white/15 shadow-xl transition-transform duration-300 ease-out group-hover:-translate-x-[20%] group-hover:rotate-[-13deg]">
                  <img
                    src={project.images[1]}
                    alt=""
                    aria-hidden="true"
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
                <div className="relative z-10 w-[62%] translate-x-[10%] rotate-[6deg] overflow-hidden rounded-lg border border-white/20 shadow-2xl transition-transform duration-300 ease-out group-hover:translate-x-[16%] group-hover:rotate-[9deg]">
                  <img
                    src={project.images[0]}
                    alt={project.imageLabel}
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
              </div>

              <div className="p-7 lg:p-8">
                <div className="mb-5">
                  <p className="font-sans mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-wide text-[#6988ec] uppercase">
                    {project.type}
                    {project.badge ? (
                      <span className="text-[#8fa4ef]">· {project.badge}</span>
                    ) : null}
                  </p>
                  <h3 className="font-display text-3xl font-medium text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="max-w-2xl text-base leading-7 text-white/50">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item.name}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/70"
                    >
                      {item.icon && <item.icon className="text-base" />}
                      {item.name}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-6">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-sans inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#8fa4ef] uppercase transition-colors duration-150 hover:text-white"
                    >
                      <Globe size={16} /> {t.liveLabel} ↗
                    </a>
                  ) : null}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-sans inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/70 uppercase transition-colors duration-150 hover:text-[#6988ec]"
                  >
                    <SiGithub /> {t.githubLabel} ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected ? (
        <ProjectModal project={selected} onClose={() => setSelected(null)} t={t} />
      ) : null}
    </section>
  );
}
