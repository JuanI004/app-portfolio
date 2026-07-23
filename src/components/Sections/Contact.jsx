import { useEffect, useState } from "react";
import { Mail, X } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

const EMAIL = "jigutierrez004@gmail.com";

const CONTACT_LINKS = [
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

function EmailModal({ onClose, t }) {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.nombre.value,
          email: form.email.value,
          message: form.mensaje.value,
          _subject: `${t.subjectPrefix} — ${form.nombre.value}`,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${t.titlePre}${t.titleEm}${t.titlePost}`}
        className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#00042c] p-8 text-left shadow-2xl lg:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="absolute top-5 right-5 text-white/50 transition-colors duration-150 hover:text-white"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <div className="py-10 text-center">
            <h3 className="font-display text-3xl font-light">
              {t.successTitlePre}
              <em className="text-[#8fa4ef] italic">{t.successTitleEm}</em>
              {t.successTitlePost}
            </h3>
            <p className="mt-4 text-white/60">{t.successBlurb}</p>
            <button
              type="button"
              onClick={onClose}
              className="font-sans mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/80 transition-all duration-150 hover:border-[#6988ec] hover:text-white"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-display text-3xl font-light">
              {t.titlePre}
              <em className="font-normal text-[#8fa4ef] italic">
                {t.titleEm}
              </em>
              {t.titlePost}
            </h3>
            <p className="mt-2 text-sm text-white/50">{t.subtitle(EMAIL)}</p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs font-semibold tracking-wide text-white/60 uppercase">
                  {t.nameLabel}
                </span>
                <input
                  name="nombre"
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors duration-150 focus:border-[#6988ec]"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs font-semibold tracking-wide text-white/60 uppercase">
                  {t.emailLabel}
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors duration-150 focus:border-[#6988ec]"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs font-semibold tracking-wide text-white/60 uppercase">
                  {t.messageLabel}
                </span>
                <textarea
                  name="mensaje"
                  required
                  rows={4}
                  placeholder={t.messagePlaceholder}
                  className="resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors duration-150 focus:border-[#6988ec]"
                />
              </label>

              {status === "error" ? (
                <p className="text-sm text-red-400">{t.errorMsg(EMAIL)}</p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="font-sans mt-2 rounded-full bg-[#6988ec] px-6 py-3 text-sm font-semibold tracking-wide text-[#02040f] uppercase transition-all duration-150 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? t.sending : t.send}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#00042c] py-28 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#082554] to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1100px] px-15 text-center lg:px-0">
        <div className="animate-fade-up relative">
          <p className="font-sans mb-5 flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-[#8fa4ef] uppercase">
            <span className="text-[#6988ec]">//</span> {t.eyebrow}
          </p>
          <h2 className="font-display text-4xl leading-[1.15] font-light lg:text-6xl">
            {t.headlinePre}
            <em className="font-normal text-[#8fa4ef] italic">
              {t.headlineEm}
            </em>
            {t.headlinePost}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/60">
            {t.blurb}
          </p>
        </div>

        <div className="animate-fade-up relative mt-12 flex flex-col items-center gap-4 [animation-delay:150ms] sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="font-sans flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition-all duration-150 hover:border-[#6988ec] hover:bg-[#6988ec]/10 hover:text-white sm:w-auto"
          >
            <Mail size={18} />
            {EMAIL}
          </button>

          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition-all duration-150 hover:border-[#6988ec] hover:bg-[#6988ec]/10 hover:text-white sm:w-auto"
            >
              <link.icon size={18} />
              {link.value}
            </a>
          ))}
        </div>

        <p className="font-sans relative mt-24 text-xs font-semibold tracking-wide text-white/30 uppercase">
          © {new Date().getFullYear()} Juan Ignacio Gutierrez
        </p>
      </div>

      {modalOpen ? (
        <EmailModal onClose={() => setModalOpen(false)} t={t.modal} />
      ) : null}
    </section>
  );
}
