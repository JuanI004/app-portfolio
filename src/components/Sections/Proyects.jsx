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

import imgPlayRank from "../../assets/proyectoPlayRank.webp";
import imgPlayRank2 from "../../assets/proyectoPlayRank2.webp";
import imgQuestLog from "../../assets/proyectoQuestLog.webp";
import imgQuestLog2 from "../../assets/proyectoQuestLog2.webp";
import imgIronFuel from "../../assets/proyectoIronFuel.webp";
import imgIronFuel2 from "../../assets/proyectoIronFuel2.webp";
import imgReservApp from "../../assets/proyectoReservApp.webp";
import imgReservApp2 from "../../assets/proyectoReservApp2.webp";

const projects = [
  {
    id: 1,
    type: "APP MÓVIL",
    title: "PlayRank",
    description:
      "Aplicación para ratear y descubrir videojuegos, con rankings comunitarios y perfiles de jugador.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node Js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
    images: [imgPlayRank, imgPlayRank2],
    githubUrl: "https://github.com/JuanI004/app-playRank",
    liveUrl: "https://app-play-rank.vercel.app",
    imageLabel: "capturas de PlayRank",
    longDescription:
      "Rateá tus juegos favoritos, armá tu Top 5, descubrí qué jugar según tu mood y encontrá los mejores precios. Toda la data de juegos sale de la API de RAWG, y el comparador de precios cruza tiendas como Steam, GOG y Epic en tiempo real.",
    features: [
      "Explorar juegos con filtros por género y plataforma, ordenados por metacritic, rating o fecha",
      "Página de cada juego con descripción, screenshots, trailer y tags",
      "Sistema de rating de 1 a 5 estrellas con persistencia local",
      "Playlist de favoritos con estadísticas personales",
      "Top 5 personal reordenable",
      "Comparador de precios entre Steam, GOG, Epic y más tiendas",
    ],
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "TanStack Query v5",
      "React Router v7",
      "RAWG API",
      "CheapShark API",
    ],
  },
  {
    id: 2,
    type: "EDTECH",
    title: "QuestLog",
    description:
      "Plataforma que gamifica el estudio: convierte tus materias en misiones, niveles y recompensas.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Supabase", icon: SiSupabase },
    ],
    images: [imgQuestLog, imgQuestLog2],
    githubUrl: "https://github.com/JuanI004/app-questlog",
    liveUrl: "https://app-questlog.vercel.app",
    imageLabel: "capturas de QuestLog",
    longDescription:
      "Cada sesión de estudio es una misión, cada materia es un desafío y cada día que estudiás suma a tu racha. A medida que progresás subís de nivel, desbloqueás títulos y ganás monedas para gastar en la tienda.",
    features: [
      "Sesiones de estudio que dan XP y monedas, con racha diaria y multiplicadores",
      "Sistema de niveles calculado automáticamente en la base de datos",
      "Onboarding RPG: elegís avatar y arquetipo (Caballero del Saber, Mago del Conocimiento o Elfo Explorador)",
      "Árbol de 15 habilidades que cambian cómo jugás: más XP, rachas más fuertes, bonus de monedas",
      "Flashcards y trivia con recompensas extra",
    ],
    stack: ["Next.js 14 (App Router)", "Tailwind CSS", "Supabase (Auth + DB + Storage)"],
  },
  {
    id: 3,
    type: "E-COMMERCE",
    title: "IronFuel",
    description:
      "Tienda online de suplementos deportivos con checkout propio y panel de administración.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Supabase", icon: SiSupabase },
    ],
    images: [imgIronFuel, imgIronFuel2],
    githubUrl: "https://github.com/JuanI004/app-suplementos-deportivos",
    liveUrl: "https://app-suplementos-deportivos.vercel.app",
    imageLabel: "capturas de IronFuel",
    longDescription:
      "E-commerce completo de suplementos deportivos: catálogo navegable, carrito persistente, autenticación de usuarios y checkout con seguimiento de pedidos de punta a punta.",
    features: [
      "Catálogo con paginación, filtros por categoría/subcategoría/marca y búsqueda",
      "Página de detalle con productos relacionados por marca y categoría",
      "Carrito con panel lateral animado y persistencia en localStorage",
      "Registro con confirmación por email y rutas protegidas",
      "Checkout con validación y métodos de pago (transferencia, efectivo, Mercado Pago)",
      "Historial de pedidos con estados: pendiente → confirmado → en camino → entregado",
    ],
    stack: [
      "Next.js 16 (App Router)",
      "React 19",
      "Redux Toolkit",
      "Supabase (Auth + DB + Storage)",
      "CSS Modules",
    ],
  },
  {
    id: 4,
    type: "SAAS",
    title: "ReservApp",
    description:
      "Sistema de reserva de turnos para negocios de servicios — peluquerías, estudios, consultorios.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Supabase", icon: SiSupabase },
    ],
    images: [imgReservApp, imgReservApp2],
    githubUrl: "https://github.com/JuanI004/app-reservApp",
    imageLabel: "capturas de ReservApp",
    badge: "EN DESARROLLO",
    longDescription:
      "Plataforma de gestión de turnos online para negocios uruguayos. Conecta negocios con sus clientes, permitiendo reservar turnos 24/7 desde una página pública única por negocio.",
    features: [
      "Agenda inteligente con visualización de turnos y sin superposiciones",
      "Gestión de empleados con servicios y horarios asignados por persona",
      "Recordatorios automáticos antes de cada turno",
      "Horarios flexibles: días, feriados y franjas configurables",
      "Página pública propia por negocio con URL única para compartir",
      "Roles diferenciados: dueño de negocio y cliente, con onboarding propio para cada uno",
    ],
    stack: [
      "Next.js 16 (App Router)",
      "Supabase (Auth + DB + Storage)",
      "Tailwind CSS v4",
      "FullCalendar",
    ],
  },
];

function ProjectModal({ project, onClose }) {
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
      aria-label={`Expediente de ${project.title}`}
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

      <span
        aria-hidden="true"
        className="font-display pointer-events-none fixed -top-10 right-0 select-none text-[16rem] leading-none text-white/[0.04] lg:text-[26rem]"
      >
        {num}
      </span>

      <div className="relative mx-auto w-full max-w-[1100px] px-15 pt-8 pb-20 lg:px-0">
        <div className="animate-fade-up flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="font-sans inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-white/50 uppercase transition-colors duration-150 hover:text-white"
          >
            <ArrowLeft size={15} /> Volver a proyectos
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="font-sans inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-white/50 uppercase transition-colors duration-150 hover:text-white"
          >
            [ esc ] <X size={16} />
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="animate-fade-up font-sans mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold tracking-wide text-[#8fa4ef] uppercase [animation-delay:100ms]">
              <span className="text-[#6988ec]">//</span> Proyecto {num} ·{" "}
              {project.type}
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
                Qué hace
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
                Stack
              </h4>
              <dl className="flex flex-col gap-2.5 border-t border-white/10 pt-6 text-sm">
                {project.stack.map((item, i) => (
                  <div key={item} className="flex gap-4">
                    <dt className="font-sans w-10 shrink-0 text-xs font-semibold text-white/35 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </dt>
                    <dd className="text-white/80">
                      <span className="text-[#6988ec]">"</span>
                      {item}
                      <span className="text-[#6988ec]">"</span>
                    </dd>
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
                  <Globe size={16} /> Ver sitio ↗
                </a>
              ) : null}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-white/80 uppercase transition-all duration-150 hover:border-[#6988ec] hover:text-white"
              >
                <SiGithub /> Ver en GitHub ↗
              </a>
            </div>
          </div>

          <div className="relative lg:sticky lg:top-14 lg:self-start">
            <div className="animate-fade-up relative flex flex-col gap-8 pt-6 [animation-delay:250ms]">
              <div className="group relative -rotate-2 overflow-hidden rounded-xl border border-white/15 shadow-2xl transition-transform duration-300 ease-out hover:rotate-0">
                <img
                  src={project.images[0]}
                  alt={`${project.imageLabel} 1`}
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
              <div className="group relative ml-8 rotate-3 overflow-hidden rounded-xl border border-white/15 shadow-2xl transition-transform duration-300 ease-out hover:rotate-0 lg:-mt-2">
                <img
                  src={project.images[1]}
                  alt={`${project.imageLabel} 2`}
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>

              <p className="font-sans text-xs font-semibold tracking-wide text-white/30 uppercase">
                fig. {num}.1 — {num}.2 · capturas del proyecto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Proyects() {
  const [selected, setSelected] = useState(null);

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
            <span className="text-[#6988ec]">//</span> Proyectos
          </p>
          <h2 className="font-display text-4xl leading-[1.15] font-light lg:text-5xl">
            Cosas que{" "}
            <em className="font-normal text-[#8fa4ef] italic">construí</em>.
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
                      <Globe size={16} /> Ver sitio ↗
                    </a>
                  ) : null}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-sans inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/70 uppercase transition-colors duration-150 hover:text-[#6988ec]"
                  >
                    <SiGithub /> Ver en GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected ? (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      ) : null}
    </section>
  );
}
