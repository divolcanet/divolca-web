import { ArrowRight, MountainSnow } from "lucide-react";
import researchData from "../data/research";
import Container from "../components/ui/container";
import bgImage from "../assets/images/landing-cover.jpeg";
import { Reveal } from "../components/ui/reveal";
import { cn } from "../lib/utils";
import { buttonVariants } from "../components/ui/button";
import Citation from "../components/Citation";
import { useLanguage } from "../data/translations/LanguageContext";
import { t } from "../data/translations";

import lpdp from "../assets/aknowledgement/lpdp.png";
import brin from "../assets/aknowledgement/brin.png";

const stats = researchData.stats;

export default function ResearchPage() {
  const { lang } = useLanguage();
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Hero Background"
            className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          />
        </div>

        <Container className=" z-10  mt-40">
          <Reveal>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 font-fraunces text-center">
              {t.research.heroTitle[lang]} <br />
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <div className=" bg-page px-5 py-12 flex flex-col justify-center rounded-2xl space-y-8 z-10">
              <h1 className="font-fraunces font-bold text-title text-3xl text-center">
                {t.research.statsTitle[lang]}
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.key}
                    className="bg-card rounded-xl p-4 text-center"
                  >
                    <stat.icon className="w-5 h-5 text-primary-75 mx-auto mb-2" />
                    <dt className="text-xs uppercase tracking-wider font-mono mb-1">
                      {stat.title[lang]}
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

      <Container className=" bg-page ">
        <Reveal delay={400} className="flex flex-col items-center gap-8">
          <MountainSnow className="w-12 h-12 sm:w-16 sm:h-16 text-primary-10 mx-auto" />

          <h1 className="font-fraunces font-bold text-title text-4xl text-center">
            {t.research.publicationsTitle[lang]}
          </h1>

          <p className=" leading-relaxed text-center">
            {t.research.publicationsDesc[lang]}
          </p>

          <a className={cn(buttonVariants(), " w-fit")}>
            {t.research.accessPaper[lang]}
            <ArrowRight className="w-5 h-5" />
          </a>
        </Reveal>
      </Container>

      <Container className=" bg-page ">
        <Reveal delay={500} className="flex flex-col items-center gap-8">
          <h1 className="font-fraunces font-bold text-title text-4xl text-center">
            {t.research.acknowledgementTitle[lang]}
          </h1>

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
