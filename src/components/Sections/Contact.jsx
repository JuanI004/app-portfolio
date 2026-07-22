import { useEffect, useState } from "react";
import { Mail, X } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

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

function EmailModal({ onClose }) {
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
          _subject: `Contacto desde el portfolio — ${form.nombre.value}`,
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
        aria-label="Enviame un correo"
        className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#00042c] p-8 text-left shadow-2xl lg:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-5 right-5 text-white/50 transition-colors duration-150 hover:text-white"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <div className="py-10 text-center">
            <h3 className="font-display text-3xl font-light">
              Mensaje <em className="text-[#8fa4ef] italic">enviado</em>.
            </h3>
            <p className="mt-4 text-white/60">
              Gracias por escribirme, te respondo a la brevedad.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="font-sans mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/80 transition-all duration-150 hover:border-[#6988ec] hover:text-white"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-display text-3xl font-light">
              Enviame un{" "}
              <em className="font-normal text-[#8fa4ef] italic">correo</em>.
            </h3>
            <p className="mt-2 text-sm text-white/50">
              Completá el formulario y me llega directo a {EMAIL}.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Tu nombre
                </span>
                <input
                  name="nombre"
                  type="text"
                  required
                  placeholder="Nombre y apellido"
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors duration-150 focus:border-[#6988ec]"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Tu email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors duration-150 focus:border-[#6988ec]"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-sans text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Mensaje
                </span>
                <textarea
                  name="mensaje"
                  required
                  rows={4}
                  placeholder="Contame sobre tu proyecto o propuesta..."
                  className="resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors duration-150 focus:border-[#6988ec]"
                />
              </label>

              {status === "error" ? (
                <p className="text-sm text-red-400">
                  No se pudo enviar el mensaje. Probá de nuevo o escribime
                  directo a {EMAIL}.
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="font-sans mt-2 rounded-full bg-[#6988ec] px-6 py-3 text-sm font-semibold tracking-wide text-[#02040f] uppercase transition-all duration-150 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
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

      {modalOpen ? <EmailModal onClose={() => setModalOpen(false)} /> : null}
    </section>
  );
}
