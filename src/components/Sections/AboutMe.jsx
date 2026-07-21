import imgPerfil from "../../assets/imgPerfil.webp";

const FACTS = [
  { key: "rol", value: "Ingeniero de Software" },
  { key: "enfoque", value: "Producto end-to-end" },
  { key: "stack", value: "React · Node · Postgres" },
  { key: "estado", value: "Abierto a nuevos proyectos" },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden border-b border-white/10 bg-[#00042c] py-28 text-white"
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

      <div className="relative mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-16 px-15 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-0">
        <div className="relative">
          <span
            aria-hidden="true"
            className="font-display pointer-events-none absolute -top-16 -left-4 select-none text-[11rem] leading-none text-white/[0.05] lg:-top-20 lg:text-[14rem]"
          >
            01
          </span>

          <div className="animate-fade-up relative">
            <p className="font-mono mb-6 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#8fa4ef]">
              <span className="text-[#6988ec]">//</span> Sobre mí
            </p>

            <h2 className="font-display text-4xl leading-[1.15] font-light lg:text-5xl">
              Convierto problemas complejos en{" "}
              <em className="font-normal text-[#8fa4ef] italic">
                productos simples
              </em>{" "}
              de usar.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
              Soy ingeniero de software con foco en construir aplicaciones
              completas: desde la idea y el diseño de producto hasta el
              desarrollo frontend y backend. Me interesa especialmente crear
              experiencias que la gente realmente use — juegos, hábitos de
              estudio, e-commerce y herramientas de reserva son algunos de los
              problemas que me tocó resolver últimamente.
            </p>

            <dl className="font-mono mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm">
              {FACTS.map((fact) => (
                <div key={fact.key} className="flex gap-4">
                  <dt className="w-24 shrink-0 text-white/35">{fact.key}</dt>
                  <dd className="text-white/80">
                    <span className="text-[#6988ec]">"</span>
                    {fact.value}
                    <span className="text-[#6988ec]">"</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="animate-fade-up relative flex items-center justify-center [animation-delay:200ms]">
          <div className="relative w-full max-w-[320px]">
            <div className="absolute -right-5 -bottom-5 h-full w-full rounded-2xl border border-[#6988ec]/40 bg-[#6988ec]/10" />

            <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={imgPerfil}
                alt="Juan Ignacio Gutierrez"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#12245c] mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-700 group-hover:opacity-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
