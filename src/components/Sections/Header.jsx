import Grainient from "../Grainient/Grainient";

export default function Header() {
  return (
    <div className="relative h-screen w-full overflow-hidden ">
      <div className="absolute inset-0 -z-10">
        <Grainient
          color1="#689ff7"
          color2="#082554"
          color3="#2d4d82"
          timeSpeed={0.25}
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
      <div className="absolute flex flex-col bottom-0 left-0 z-10 p-15">
        <h2 className="text-white text-xl uppercase tracking-widest ">
          Ingeniero de Software
        </h2>
        <h1 className="text-white text-[4rem] lg:text-[6rem] font-bold  t">
          Juan Ignacio Gutierrez
        </h1>
        <p className="text-white text-lg max-w-[600px]">
          Diseño y construyo productos digitales de punta a punta — del
          prototipo al código en producción.
        </p>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-[#00032b] via-transparent to-transparent z-1" />
    </div>
  );
}
