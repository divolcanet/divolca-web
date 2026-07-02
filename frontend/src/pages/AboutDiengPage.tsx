import sikidang from "../assets/dieng/kawah-sikidang.jpg";
import sileri from "../assets/dieng/kawah-sileri.jpg";
import telagaWarna from "../assets/dieng/telaga-warna.jpg";
import telagaPengilon from "../assets/dieng/telaga-pengilon.jpg";
import candiArjuna from "../assets/dieng/candi-arjuna.jpg";
import bukitSikunir from "../assets/dieng/bukit-sikunir.jpg";
import aboutDieng from "../data/about-dieng.json";
import { Reveal } from "../components/ui/reveal";
import Tag from "../components/ui/tag";
import Container from "../components/ui/container";

const destinations = [
  {
    img: sikidang,
    title: "Kawah Sikidang",
    desc: "Kawah aktif yang paling mudah diakses wisatawan, dikenal karena aktivitas solfatara dan lumpur panasnya.",
    source: "Kompas.com, 2022",
  },
  {
    img: sileri,
    title: "Kawah Sileri",
    desc: "Kawah terbesar dan salah satu kawah paling aktif di Dieng yang sering mengalami erupsi freatik.",
    source: "CNN Indonesia, 2021",
  },
  {
    img: telagaWarna,
    title: "Telaga Warna",
    desc: "Air telaga berubah warna-warni karena sinar matahari mengenai air yang mengandung sulfur tinggi.",
    source: "Kompas.com, 2020",
  },
  {
    img: telagaPengilon,
    title: "Telaga Pengilon",
    desc: "Perubahan warna air dipengaruhi kandungan mineral dan aktivitas gas vulkanik di dasar danau.",
    source: "Magelang Ekspres, 2023",
  },
  {
    img: candiArjuna,
    title: "Kompleks Candi Arjuna",
    desc: "Salah satu kompleks candi Hindu tertua di Jawa, diperkirakan dibangun pada abad ke-8 hingga ke-9 Masehi.",
    source: "Kompasiana.com, 2025",
  },
  {
    img: bukitSikunir,
    title: "Bukit Sikunir",
    desc: "Lokasi pengamatan matahari terbit yang menjadi salah satu daya tarik wisata utama di Dieng.",
    source: "Magelang Ekspres, 2023",
  },
];

export default function AboutDiengPage() {
  return (
    <div className=" bg-primary-fg">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-105 flex items-end overflow-hidden">
        <img
          src={sileri}
          alt="Kawah Sileri, Dieng"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary-fg via-primary-fg/70 to-accent/50" />
        <Reveal className=" relative max-w-7xl mx-auto px-5  pb-12 w-full space-y-3">
          <Tag className=" border-2 font-mono">Kompleks Vulkanik</Tag>
          <h1 className="font-fraunces text-4xl sm:text-5xl font-bold text-primary-75">
            Tentang Dieng
          </h1>
          <p className="mt-3 max-w-2xl">
            Salah satu daerah vulkanik paling unik di Indonesia — kawah aktif,
            manifestasi panas bumi, dan warisan budaya yang masih hidup hingga
            kini.
          </p>
        </Reveal>
      </section>

      <Container id="pendahuluan">
        <Reveal delay={300}>
          <h2 className="font-fraunces text-2xl font-semibold text-primary-75 mb-4">
            Pendahuluan
          </h2>
          <div className="space-y-4 text-volcanic-300 leading-relaxed">
            <p>
              Kawasan Dieng merupakan salah satu daerah vulkanik paling unik di
              Indonesia. Kompleks vulkanik ini berada di dataran tinggi Jawa
              Tengah dan dikenal karena keberadaan kawah aktif, manifestasi
              panas bumi, emisi gas vulkanik, serta aktivitas hidrotermal yang
              masih berlangsung hingga saat ini. Selain memiliki nilai geologi
              yang tinggi, Dieng juga merupakan kawasan budaya dan pariwisata
              penting yang menyimpan kompleks candi Hindu tertua di Pulau Jawa.
            </p>
            <p>
              Secara vulkanologi, Kompleks Vulkanik Dieng termasuk gunung api
              aktif tipe kompleks yang tersusun atas sejumlah kerucut vulkanik,
              kubah lava, kawah, dan zona panas bumi. Aktivitas erupsi yang
              terjadi umumnya berupa erupsi freatik yang dipicu oleh interaksi
              antara air tanah dan sistem panas bumi di bawah permukaan. Bahaya
              utama kawasan ini tidak hanya berasal dari erupsi, tetapi juga
              emisi gas beracun seperti karbon dioksida (CO₂) dan hidrogen
              sulfida (H₂S).
            </p>
          </div>
        </Reveal>
      </Container>

      <Container id="geolokasi">
        <Reveal>
          <h2 className="font-fraunces text-2xl font-semibold text-primary-75 mb-6">
            Geografi &amp; Lokasi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Elevasi", value: "1.900–2.565 mdpl" },
              { label: "Koordinat", value: "7,2° LS, 109,88° BT" },
              { label: "Luas Kompleks", value: "± 6 × 14 km" },
              { label: "Jumlah Kawah", value: "20+ kawah & kerucut" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg bg-white p-4 space-y-3"
              >
                <p className="text-xs uppercase tracking-wide font-bold">
                  {item.label}
                </p>
                <p className="text-primary-75 font-fraunces text-lg mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-4 text-volcanic-300 leading-relaxed">
            <p>
              Dataran Tinggi Dieng berada di bagian tengah Pulau Jawa, secara
              administratif terbagi antara Kabupaten Wonosobo dan Kabupaten
              Banjarnegara, Provinsi Jawa Tengah. Kompleks ini berada pada jalur
              busur vulkanik Sunda yang terbentuk akibat subduksi Lempeng
              Indo-Australia di bawah Lempeng Eurasia.
            </p>
            <p>
              Lokasinya berjarak sekitar 26 km dari Kota Wonosobo, 116 km dari
              Kota Semarang, dan 130 km dari Kota Yogyakarta — dapat diakses
              melalui jalur Wonosobo–Dieng atau Banjarnegara–Batur–Dieng.
              Kawasan ini diapit oleh Gunung Sindoro dan Gunung Sumbing yang
              turut mempengaruhi morfologi regionalnya.
            </p>
          </div>
        </Reveal>
      </Container>

      <Container id="geologi">
        <Reveal>
          <h2 className="font-fraunces text-2xl font-semibold text-primary-75 mb-4">
            Geologi
          </h2>
          <div className="space-y-4 text-volcanic-300 leading-relaxed">
            <p>
              Secara geologi, Kompleks Vulkanik Dieng merupakan kaldera vulkanik
              besar yang terbentuk akibat aktivitas vulkanik Kuarter. Gunung
              Prau diduga merupakan gunung api purba yang mengalami keruntuhan
              membentuk kaldera besar pada masa Pleistosen. Setelah pembentukan
              kaldera, aktivitas vulkanik selanjutnya menghasilkan sejumlah
              kerucut dan kawah baru yang tersebar di dalam cekungan Dieng.
            </p>
            <p>
              Produk vulkanik kawasan ini berumur Pleistosen hingga Holosen,
              didominasi batuan andesit dan andesit basaltik, dengan kubah lava,
              aliran lava, kawah, danau kawah, serta manifestasi panas bumi
              berupa fumarola, solfatara, mata air panas, emisi gas vulkanik,
              dan kawah berair panas — menjadikan Dieng salah satu lapangan
              panas bumi utama di Indonesia.
            </p>
          </div>
        </Reveal>
      </Container>

      <Container id="sejarah-erupsi" className=" bg-secondary">
        <Reveal>
          <h2 className="font-fraunces text-2xl font-semibold text-primary-75 mb-8">
            Sejarah Erupsi
          </h2>
          <div className="relative border-l border-primary-50 pl-6 space-y-8">
            {aboutDieng.eruptionTimeline.map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-8.25 top-0.5 w-4 h-4 rounded-full bg-destructive animate-ping" />
                <span className="absolute -left-7.75 top-1 w-3 h-3 rounded-full bg-destructive" />
                <p className="text-primary-75 font-mono text-sm">{item.year}</p>
                <h3 className="font-fraunces font-bold text-lg mt-1">
                  {item.title}
                </h3>
                <p className=" mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container id="karakteristik">
        <Reveal>
          <h2 className="font-fraunces text-2xl font-semibold text-primary-75 mb-6">
            Karakteristik Daerah
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutDieng.characteristics.map((item) => (
              <div
                key={item.title}
                className="rounded-lg bg-white p-5 hover:shadow-md transition-all"
              >
                <h3 className="text-primary-75 font-fraunces text-base font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-volcanic-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container id="destinasi">
        <Reveal>
          <h2 className="font-fraunces text-2xl font-semibold text-primary-75 mb-2">
            Destinasi Wisata
          </h2>
          <p className="text-volcanic-400 mb-6">
            Kawasan Dieng merupakan salah satu destinasi wisata geologi dan
            budaya utama di Jawa Tengah.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <div
                key={dest.title}
                className="group rounded-xl border border-muted/20 overflow-hidden bg-white hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-75/30 transition-all duration-300 flex flex-col"
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
                    {dest.desc}
                  </p>
                  <Tag className="w-fit mt-auto">Sumber: {dest.source}</Tag>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container id="reference">
        <details className="rounded-lg bg-white p-5">
          <summary className="cursor-pointer text-primary-75 font-fraunces text-base font-semibold">
            Referensi
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
