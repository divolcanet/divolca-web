import {
  ArrowRight,
  Calendar,
  Clock,
  Database,
  MapPin,
  Mountain,
} from "lucide-react";
import spatialData from "../data/spatial.json";

const stats = [
  {
    key: "location",
    title: "Lokasi",
    value: spatialData.stats.lokasi,
    icon: MapPin,
  },
  {
    key: "research-offline",
    title: "Penelitian Langsung",
    value: spatialData.stats.lamaPenelitianLangsung,
    icon: Clock,
  },
  {
    key: "research-total",
    title: "Total Penelitian",
    value: spatialData.stats.lamaPenelitianTotal,
    icon: Calendar,
  },
  {
    key: "data-type",
    title: "Jenis Data",
    value: spatialData.stats.jenisData,
    icon: Database,
  },
];

export default function ResearchPage() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url("/imgs/home_background.webp")` }}
    >
      <div className="w-full bg-linear-to-b from-volcanic-900/90 to-volcanic-950/90 py-20 sm:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className=" bg-volcanic-900 px-5 py-8 h-[calc(100svh/2)] flex flex-col justify-center rounded-2xl space-y-8">
            <h1 className="font-oswald font-bold text-magma-400 text-4xl ">
              Statistik Penelitian
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.key}
                  className="bg-volcanic-800 rounded-lg p-4 text-center"
                >
                  <stat.icon className="w-5 h-5 text-magma-400 mx-auto mb-2" />
                  <dt className="text-xs uppercase tracking-wider text-volcanic-500 mb-1">
                    {stat.title}
                  </dt>
                  <dd className="text-lg font-semibold text-magma-400">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
          <Mountain
            className="w-12 h-12 sm:w-16 sm:h-16 text-magma-400 mx-auto"
            strokeWidth={1.5}
          />

          <p className="text-lg sm:text-xl text-volcanic-300 leading-relaxed">
            Penelitian geofisika di Pegunungan Dieng menghasilkan data magnetik
            dan gravitasi bawah permukaan yang memberikan wawasan penting
            tentang struktur vulkanik dan potensi mitigasi bencana di kawasan
            tersebut.
          </p>

          <a className="inline-flex items-center gap-2 px-6 py-3 bg-magma-500 hover:bg-magma-400 text-volcanic-950 font-semibold rounded-lg transition-colors">
            Akses Artikel Penelitian
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
