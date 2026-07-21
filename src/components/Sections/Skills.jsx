import * as SiIcons from "react-icons/si";
import { TECHS } from "../../utils/techs";

const CATEGORY_ORDER = ["Lenguaje", "Framework", "Herramienta"];
const CATEGORY_LABELS = {
  Lenguaje: "Lenguajes",
  Framework: "Frameworks",
  Herramienta: "Herramientas",
};

const groupByCategory = (techs) =>
  techs.reduce((groups, tech) => {
    const list = groups[tech.categoria] ?? [];
    return { ...groups, [tech.categoria]: [...list, tech] };
  }, {});

export default function Skills() {
  const grouped = groupByCategory(TECHS);
  const categories = CATEGORY_ORDER.filter((categoria) => grouped[categoria]);

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden border-b border-white/10 bg-[#2d4d82] py-28 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#082554] to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1100px] px-15 lg:px-0">
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute -top-16 -left-4 select-none text-[11rem] leading-none text-white/[0.08] lg:-top-20 lg:text-[14rem]"
        >
          03
        </span>

        <div className="animate-fade-up relative grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-mono mb-5 flex items-center gap-2 text-sm tracking-[0.3em] text-[#dde4ff] uppercase">
              <span className="text-white">//</span> Skills
            </p>
            <h2 className="font-display text-4xl leading-[1.15] font-light lg:text-5xl">
              Con lo que{" "}
              <em className="font-normal text-[#dde4ff] italic">trabajo</em>.
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {categories.map((categoria) => (
              <div key={categoria}>
                <h3 className="font-mono mb-5 text-left text-xs tracking-[0.3em] text-white/50 uppercase">
                  {CATEGORY_LABELS[categoria] ?? categoria}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {grouped[categoria].map((tech) => {
                    const Icon = SiIcons[tech.iconoColor.nombre];
                    return (
                      <div
                        key={tech.id}
                        className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors duration-150 hover:border-white/30 hover:bg-white/10"
                      >
                        {Icon && (
                          <Icon
                            size={20}
                            color={tech.iconoColor.color}
                            aria-hidden="true"
                          />
                        )}
                        <span className="text-sm text-white/80">
                          {tech.nombre}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
