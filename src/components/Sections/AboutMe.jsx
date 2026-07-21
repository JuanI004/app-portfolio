import imgPerfil from "../../assets/imgPerfil.webp";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="h-[40rem] w-full flex flex-col justify-center items-center bg-[#00032b] text-white"
    >
      <div className="max-w-[1100px] w-full px-15 lg:px-0">
        <h2 className="text-left font-bold text-[#5aadff] uppercase tracking-widest mb-10">
          01 - Sobre mí
        </h2>
        <div className="flex items-center gap-10">
          <img
            className="w-[320px] h-[410px] object-cover  rounded-xl"
            src={imgPerfil}
            alt="Juan Ignacio Gutierrez"
          ></img>
          <div className="">
            <h2 className="text-2xl lg:text-4xl mb-10 font-bold text-left">
              Convierto problemas complejos en productos simples de usar.
            </h2>
            <p className="text-lg  text-left">
              Soy ingeniero de software con foco en construir aplicaciones
              completas: desde la idea y el diseño de producto hasta el
              desarrollo frontend y backend. Me interesa especialmente crear
              experiencias que la gente realmente use — juegos, hábitos de
              estudio, e-commerce y herramientas de reserva son algunos de los
              problemas que me tocó resolver últimamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
