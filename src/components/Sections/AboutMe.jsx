import imgPerfil from "../../assets/imgPerfil.webp";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export default function AboutMe() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden  bg-[#00042c] py-28 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
      />

      <div className="relative mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-16 px-15 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-0">
        <div className="relative">
          <div className="animate-fade-up relative">
            <p className="font-sans mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#8fa4ef]">
              <span className="text-[#6988ec]">//</span> {t.eyebrow}
            </p>

            <h2 className="font-display text-4xl leading-[1.15] font-light lg:text-5xl">
              {t.headlinePre}
              <em className="font-normal text-[#8fa4ef] italic">
                {t.headlineEm}
              </em>
              {t.headlinePost}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
              {t.paragraph}
            </p>

            <dl className="font-sans mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm">
              {t.facts.map((fact) => (
                <div key={fact.key} className="flex gap-4">
                  <dt className="w-28 shrink-0 text-white/35">{fact.key}</dt>
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
