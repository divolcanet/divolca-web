import sileri from "../assets/dieng/kawah-sileri.jpg";
import aboutDieng from "../data/about-dieng";
import { Reveal } from "../components/ui/reveal";
import Tag from "../components/ui/tag";
import Container from "../components/ui/container";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../translations";

const destinations = aboutDieng.destinations;

export default function AboutDiengPage() {
  const { lang } = useLanguage();
  return (
    <div className=" bg-page">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-105 flex items-end overflow-hidden">
        <img
          src={sileri}
          alt="Kawah Sileri, Dieng"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary-fg via-primary-fg/50 to-primary-fg/10 dark:from-accent dark:via-accent/70 dark:to-accent/50" />
        <Reveal className=" relative max-w-7xl mx-auto px-5  pb-12 w-full space-y-3 ">
          <Tag className=" border-2 font-mono">{t.aboutDieng.heroTag[lang]}</Tag>
          <h1 className="font-fraunces text-4xl sm:text-5xl font-bold text-title">
            {t.aboutDieng.heroTitle[lang]}
          </h1>
          <p className="mt-3 max-w-2xl">
            {t.aboutDieng.heroDesc[lang]}
          </p>
        </Reveal>
      </section>

      <Container id="pendahuluan">
        <Reveal delay={300}>
          <h2 className="font-fraunces text-2xl font-semibold text-title mb-4">
            {t.aboutDieng.introTitle[lang]}
          </h2>
          <div className="space-y-4 text-volcanic-300 leading-relaxed">
            <p>{t.aboutDieng.intro1[lang]}</p>
            <p>{t.aboutDieng.intro2[lang]}</p>
          </div>
        </Reveal>
      </Container>

      <Container id="geolokasi">
        <Reveal>
          <h2 className="font-fraunces text-2xl font-semibold text-title mb-6">
            {t.aboutDieng.geoTitle[lang]}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {t.aboutDieng.geoStats.map((item) => (
              <div
                key={item.label.id}
                className="rounded-lg bg-card p-4 space-y-3"
              >
                <p className="text-xs uppercase tracking-wide font-bold">
                  {item.label[lang]}
                </p>
                <p className="text-primary-75 font-fraunces text-lg mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-4 text-volcanic-300 leading-relaxed">
            <p>{t.aboutDieng.geo1[lang]}</p>
            <p>{t.aboutDieng.geo2[lang]}</p>
          </div>
        </Reveal>
      </Container>

      <Container id="geologi">
        <Reveal>
          <h2 className="font-fraunces text-2xl font-semibold text-title mb-4">
            {t.aboutDieng.geologyTitle[lang]}
          </h2>
          <div className="space-y-4 text-volcanic-300 leading-relaxed">
            <p>{t.aboutDieng.geology1[lang]}</p>
            <p>{t.aboutDieng.geology2[lang]}</p>
          </div>
        </Reveal>
      </Container>

      <Container id="sejarah-erupsi" className=" bg-secondary">
        <Reveal>
          <h2 className="font-fraunces text-2xl font-semibold text-primary-75 mb-8">
            {t.aboutDieng.eruptionTitle[lang]}
          </h2>
          <div className="relative border-l border-primary-50 pl-6 space-y-8">
            {aboutDieng.eruptionTimeline.map((item) => (
              <div key={item.year} className="relative text-black">
                <span className="absolute -left-8.25 top-0.5 w-4 h-4 rounded-full bg-destructive animate-ping" />
                <span className="absolute -left-7.75 top-1 w-3 h-3 rounded-full bg-destructive" />
                <p className="text-primary-75 font-mono text-sm">{item.year}</p>
                <h3 className="font-fraunces font-bold text-lg mt-1">
                  {item.title[lang]}
                </h3>
                <p className=" mt-1 leading-relaxed">{item.desc[lang]}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container id="karakteristik">
        <Reveal>
          <h2 className="font-fraunces text-2xl font-semibold text-title mb-6">
            {t.aboutDieng.characteristicsTitle[lang]}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutDieng.characteristics.map((item) => (
              <div
                key={item.title.id}
                className="rounded-lg bg-card p-5 hover:shadow-md transition-all"
              >
                <h3 className="text-primary-75 font-fraunces text-base font-semibold mb-2">
                  {item.title[lang]}
                </h3>
                <p className="text-volcanic-300 text-sm leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container id="destinasi">
        <Reveal>
          <h2 className="font-fraunces text-2xl font-semibold text-title mb-2">
            {t.aboutDieng.destinationsTitle[lang]}
          </h2>
          <p className="text-volcanic-400 mb-6">
            {t.aboutDieng.destinationsDesc[lang]}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <div
                key={dest.title}
                className="group rounded-xl border border-muted/20 overflow-hidden bg-card hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-75/30 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={dest.img}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <h3 className="text-primary-75 font-fraunces text-lg font-semibold">
                    {dest.title}
                  </h3>
                  <p className="text-volcanic-300 text-sm leading-relaxed">
                    {dest.desc[lang]}
                  </p>
                  <Tag className="w-fit mt-auto">{t.aboutDieng.destinationsSource[lang]}: {dest.source}</Tag>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container id="reference">
        <details className="rounded-lg bg-card p-5">
          <summary className="cursor-pointer text-title font-fraunces text-base font-semibold">
            {t.aboutDieng.references[lang]}
          </summary>
          <ul className="mt-4 space-y-2 text-volcanic-400 text-sm leading-relaxed list-disc list-inside">
            <li>BMKG. (2023). Data Klimatologi Dataran Tinggi Dieng.</li>
            <li>BPS Jawa Tengah. (2023). Jawa Tengah Dalam Angka 2023.</li>
            <li>Bronto, S. (2013). Geologi Gunung Api Indonesia.</li>
            <li>
              Dinas Kebudayaan, Pariwisata, dan Ekonomi Kreatif Provinsi Jawa
              Tengah. (2026). Bukit Sikunir, Kawah Sikidang, Talaga Warna.
            </li>
            <li>
              Giggenbach, W. F., et al. (1991). The Dieng 1979 Phreatic
              Eruption. Journal of Volcanology and Geothermal Research.
            </li>
            <li>Hamilton, W. (1979). Tectonics of the Indonesian Region.</li>
            <li>
              Hochstein, M. P., & Sudarman, S. (2008). History of Geothermal
              Exploration in Indonesia. Geothermics.
            </li>
            <li>Kementerian ESDM. (2023). Statistik Panas Bumi Indonesia.</li>
            <li>Koesoemadinata, K. (1979). The Dieng Volcanic Gas Disaster.</li>
            <li>
              Munandar, A. A. (2011). Candi-candi di Dataran Tinggi Dieng.
            </li>
            <li>PVMBG. (2017–2024). Laporan Aktivitas Kawah Sileri.</li>
            <li>
              Smithsonian Institution. (2024). Global Volcanism Program: Dieng
              Volcanic Complex.
            </li>
            <li>Van Bemmelen, R. W. (1949). The Geology of Indonesia.</li>
          </ul>
        </details>
      </Container>
    </div>
  );
}