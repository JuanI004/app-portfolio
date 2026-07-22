import Grainient from "../Grainient/Grainient";

export default function Header() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Grainient
          color1="#689ff7"
          color2="#082554"
          color3="#2d4d82"
          timeSpeed={2}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      <div className="animate-fade-up absolute bottom-0 left-0 z-10 flex flex-col gap-4 p-15">
        <p className="font-sans flex items-center gap-2 text-sm font-semibold tracking-wide text-white/80 uppercase">
          <span className="text-[#c9d5ff]">//</span> Ingeniero de Software
        </p>

        <h1 className="font-display text-[3.5rem] leading-[1.05] font-light text-white lg:text-[6rem]">
          Juan Ignacio Gutierrez
        </h1>

        <p className="max-w-[600px] text-lg text-white/70">
          Diseño y construyo productos digitales de punta a punta — del
          prototipo al código en producción.
        </p>
      </div>

      <div className="animate-fade-up absolute right-15 bottom-15 z-10 hidden flex-col items-center gap-3 [animation-delay:300ms] lg:flex">
        <span className="font-sans text-xs font-semibold tracking-wide text-white/50 uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-10 w-px animate-pulse bg-white/40" />
      </div>

      <div className="absolute inset-0 z-1 bg-linear-to-t from-[#00032b] via-transparent to-transparent" />
    </div>
  );
}
