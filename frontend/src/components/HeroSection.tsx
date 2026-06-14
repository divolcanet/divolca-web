import { Mountain, Map, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-volcanic-900 to-volcanic-950 py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          geofisika di Pegunungan Dieng menghasilkan data magnetik dan gravitasi
          bawah permukaan yang memberikan wawasan penting tentang struktur
          vulkanik dan potensi mitigasi bencana di kawasan tersebut.
        </p>

        <a
          href="#viewer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-magma-500 hover:bg-magma-400 text-volcanic-950 font-semibold rounded-lg transition-colors"
        >
          Jelajahi Model 3D
          <Map className="w-5 h-5" />
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-volcanic-500" />
      </div>
    </section>
  );
}
