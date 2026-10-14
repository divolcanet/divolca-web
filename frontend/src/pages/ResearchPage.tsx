import { MountainSnow } from "lucide-react";
import researchData from "../data/research";
import Container from "../components/ui/container";
import bgImage from "../assets/images/landing-cover.jpeg";
import { Reveal } from "../components/ui/reveal";
import Citation from "../components/Citation";
import { useLanguage } from "../data/translations/LanguageContext";
import { t } from "../data/translations";

import lpdp from "../assets/aknowledgement/lpdp.png";
import brin from "../assets/aknowledgement/brin.png";

// Import gambar poster dan PDF aslinya
import posterImg from "../assets/research/Rev 2_Poster Penelitian Dieng dengan Data Magnetik Satelit.png";
import posterPdf from "../assets/research/Rev 2_Poster Penelitian Dieng dengan Data Magnetik Satelit.pdf";

const stats = researchData.stats;

export default function ResearchPage() {
  const { lang } = useLanguage();
  return (
    <>
      <section className="relative flex justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="Hero Background" className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]" />
        </div>
        <Container className=" z-10  mt-40">
          <Reveal>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 font-fraunces text-center">
              {t.research.heroTitle[lang]} <br />
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <div className=" bg-page px-5 py-12 flex flex-col justify-center rounded-2xl space-y-8 z-10">
              <h1 className="font-fraunces font-bold text-title text-3xl text-center">{t.research.statsTitle[lang]}</h1>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.key} className="bg-card rounded-xl p-4 text-center">
                    <stat.icon className="w-5 h-5 text-primary-75 mx-auto mb-2" />
                    <dt className="text-xs uppercase tracking-wider font-mono mb-1">{stat.title[lang]}</dt>
                    <dd className="text-lg font-semibold text-primary-75">{stat.value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className=" bg-page ">
        <Reveal delay={400} className="flex flex-col items-center gap-8">
          <MountainSnow className="w-12 h-12 sm:w-16 sm:h-16 text-primary-10 mx-auto" />
          <h1 className="font-fraunces font-bold text-title text-4xl text-center">{t.research.publicationsTitle[lang]}</h1>
          <p className=" leading-relaxed text-center">{t.research.publicationsDesc[lang]}</p>
        </Reveal>
      </Container>

      {/* Bagian Poster (Gambar Preview & Tombol Download) */}
      <Container className=" bg-page ">
        <Reveal delay={450} className="flex flex-col items-center gap-6 w-full">
          <h1 className="font-fraunces font-bold text-title text-4xl text-center">
            Pemetaan Awal Zona Alterasi Hidrotermal
          </h1>
          <p className="leading-relaxed text-center max-w-3xl">
            Hasil analisis data magnetik satelit untuk mengidentifikasi zona alterasi hidrotermal di Kawasan Vulkanik Dieng.
          </p>
          
          <div className="w-full max-w-4xl rounded-2xl shadow-lg border border-gray-800 overflow-hidden bg-white">
            <img
              src={posterImg}
              alt="Poster Pemetaan Awal Zona Alterasi Hidrotermal"
              className="w-full h-auto"
            />
          </div>

          <a
            href={posterPdf}
            download
            className="flex items-center gap-2 px-6 py-3 bg-primary-75 text-white font-semibold rounded-lg hover:bg-primary-90 transition shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Unduh Poster PDF
          </a>
        </Reveal>
      </Container>

      <Container className=" bg-page ">
        <Reveal delay={500} className="flex flex-col items-center gap-8">
          <h1 className="font-fraunces font-bold text-title text-4xl text-center">{t.research.acknowledgementTitle[lang]}</h1>
          <p>{t.research.acknowledgementDesc[lang]}</p>
          <div className=" flex gap-8 flex-wrap justify-center ">
            <img src={brin} className="h-24" />
            <img src={lpdp} className="h-24" />
          </div>
        </Reveal>
      </Container>

      <Container className=" bg-page ">
        <Citation />
      </Container>
    </>
  );
}