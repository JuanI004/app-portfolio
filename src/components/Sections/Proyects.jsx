import {
  SiGithub,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiNextdotjs,
  SiFirebase,
  SiStripe,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    type: "APP MÓVIL",
    title: "PlayRank",
    description:
      "Aplicación para ratear y descubrir videojuegos, con rankings comunitarios y perfiles de jugador.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    githubUrl: "https://github.com/JuanI004/app-playRank",
    imageLabel: "captura de PlayRank",
  },
  {
    id: 2,
    type: "EDTECH",
    title: "QuestLog",
    description:
      "Plataforma que gamifica el estudio: convierte tus materias en misiones, niveles y recompensas.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Firebase", icon: SiFirebase },
    ],
    githubUrl: "https://github.com/JuanI004/app-questlog",
    imageLabel: "captura de QuestLog",
  },
  {
    id: 3,
    type: "E-COMMERCE",
    title: "IronFuel",
    description:
      "Tienda online de suplementos deportivos con checkout propio y panel de administración.",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Stripe", icon: SiStripe },
      { name: "Postgres", icon: SiPostgresql },
    ],
    githubUrl: "https://github.com/JuanI004/app-suplementos-deportivos",
    imageLabel: "captura de IronFuel",
  },
  {
    id: 4,
    type: "SAAS",
    title: "ReservApp",
    description:
      "Sistema de reserva de turnos para negocios de servicios — peluquerías, estudios, consultorios.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    githubUrl: "https://github.com/JuanI004/app-reservApp",
    imageLabel: "captura de ReservApp",
    badge: "EN DESARROLLO",
  },
];

export default function Proyects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden border-b border-white/10 bg-[#082554] py-28 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#00042c] to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1100px] px-15 lg:px-0">
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute -top-16 -left-4 -z-0 select-none text-[11rem] leading-none text-white/[0.05] lg:-top-20 lg:text-[14rem]"
        >
          02
        </span>

        <div className="animate-fade-up relative mb-14">
          <p className="font-mono mb-5 flex items-center gap-2 text-sm tracking-[0.3em] text-[#8fa4ef] uppercase">
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
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-xl transition-all duration-150 hover:cursor-pointer hover:scale-[1.02] hover:border-[#6988ec]/40 hover:shadow-2xl"
            >
              <div className="font-mono flex h-44 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.03] px-6 text-center text-xs tracking-wider text-white/30 uppercase">
                [ {project.imageLabel} ]
              </div>

              <div className="p-7 lg:p-8">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono mb-3 text-xs tracking-[0.2em] text-[#6988ec] uppercase">
                      {project.type}
                    </p>
                    <h3 className="font-display text-3xl font-medium text-white">
                      {project.title}
                    </h3>
                  </div>

                  {project.badge ? (
                    <span className="font-mono text-[0.65rem] tracking-wider text-[#8fa4ef] uppercase whitespace-nowrap">
                      · {project.badge}
                    </span>
                  ) : null}
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

                <a
                  href={project.githubUrl}
                  className="font-mono mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-white/70 uppercase transition-colors duration-150 hover:text-[#6988ec]"
                >
                  <SiGithub /> Ver en GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
