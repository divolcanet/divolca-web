import { Mountain, Map, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url("/imgs/home_background.webp")` }}
    >
      <div className="w-full h-[calc(100svh-80px)] bg-linear-to-b from-volcanic-900/90 to-volcanic-950/90 py-20 sm:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Mountain
              className="w-12 h-12 sm:w-16 sm:h-16 text-magma-400"
              strokeWidth={1.5}
            />
          </div>

          <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-volcanic-50 tracking-wide mb-6">
            Informasi Geospasial
            <span className="block text-magma-400 mt-2">Pegunungan Dieng</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-volcanic-300 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Penelitian
            geofisika di Pegunungan Dieng menghasilkan data magnetik dan
            gravitasi bawah permukaan yang memberikan wawasan penting tentang
            struktur vulkanik dan potensi mitigasi bencana di kawasan tersebut.
          </p>

          <a
            href="#viewer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-magma-500 hover:bg-magma-400 text-volcanic-950 font-semibold rounded-lg transition-colors"
          >
            Jelajahi Model 3D
            <Map className="w-5 h-5" />
          </a>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-volcanic-500" />
        </div>
      </div>
    </section>
  );
}
