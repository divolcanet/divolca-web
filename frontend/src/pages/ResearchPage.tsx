import {
  ArrowRight,
  Calendar,
  Clock,
  Database,
  MapPin,
  Mountain,
} from "lucide-react";
import researchData from "../data/research.json";
import Container from "../components/ui/container";
import bgImage from "../assets/images/landing-cover.jpeg";
import { Reveal } from "../components/ui/reveal";
import { cn } from "../lib/utils";
import { buttonVariants } from "../components/ui/button";
import Citation from "../components/Citation";

const stats = [
  {
    key: "location",
    title: "Lokasi",
    value: researchData.stats.lokasi,
    icon: MapPin,
  },
  {
    key: "research-offline",
    title: "Penelitian Langsung",
    value: researchData.stats.lamaPenelitianLangsung,
    icon: Clock,
  },
  {
    key: "research-total",
    title: "Total Penelitian",
    value: researchData.stats.lamaPenelitianTotal,
    icon: Calendar,
  },
  {
    key: "data-type",
    title: "Jenis Data",
    value: researchData.stats.jenisData,
    icon: Database,
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex justify-center overflow-hidden">
        {/* Background Image Container with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Hero Background"
            className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-slate-900/30 compression mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <Container className=" z-10  mt-40">
          <Reveal>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 font-fraunces text-center">
              Informasi Hasil Riset <br />
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <div className=" bg-primary-fg px-5 py-12 flex flex-col justify-center rounded-2xl space-y-8 z-10">
              <h1 className="font-fraunces font-bold text-primary-75 text-3xl text-center">
                Statistik Penelitian
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.key}
                    className="bg-white rounded-xl p-4 text-center"
                  >
                    <stat.icon className="w-5 h-5 text-primary-75 mx-auto mb-2" />
                    <dt className="text-xs uppercase tracking-wider font-mono mb-1">
                      {stat.title}
                    </dt>
                    <dd className="text-lg font-semibold text-primary-75">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className=" bg-primary-fg ">
        <Reveal delay={400} className="flex flex-col items-center gap-8">
          <Mountain className="w-12 h-12 sm:w-16 sm:h-16 text-primary-10 mx-auto" />

          <h1 className="font-fraunces font-bold text-primary-75 text-4xl text-center">
            Publikasi Penelitian
          </h1>

          <p className=" leading-relaxed text-center">
            Penelitian geofisika di Pegunungan Dieng menghasilkan data magnetik
            dan gravitasi bawah permukaan yang memberikan wawasan penting
            tentang struktur vulkanik dan potensi mitigasi bencana di kawasan
            tersebut.
          </p>

          <a className={cn(buttonVariants(), " w-fit")}>
            Akses Paper Penelitian
            <ArrowRight className="w-5 h-5" />
          </a>
        </Reveal>
      </Container>
      <Container className=" bg-primary-fg ">
        <Citation />
      </Container>
    </>
  );
}
