import { useEffect, useRef, useState, type ReactNode } from "react";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const destinations = [
  {
    img: "/dieng/kawah-sikidang.jpg",
    title: "Kawah Sikidang",
    desc: "Kawah aktif yang paling mudah diakses wisatawan, dikenal karena aktivitas solfatara dan lumpur panasnya.",
    source: "Kompas.com, 2022",
  },
  {
    img: "/dieng/kawah-sileri.jpg",
    title: "Kawah Sileri",
    desc: "Kawah terbesar dan salah satu kawah paling aktif di Dieng yang sering mengalami erupsi freatik.",
    source: "CNN Indonesia, 2021",
  },
  {
    img: "/dieng/telaga-warna.jpg",
    title: "Telaga Warna",
    desc: "Air telaga berubah warna-warni karena sinar matahari mengenai air yang mengandung sulfur tinggi.",
    source: "Kompas.com, 2020",
  },
  {
    img: "/dieng/telaga-pengilon.jpg",
    title: "Telaga Pengilon",
    desc: "Perubahan warna air dipengaruhi kandungan mineral dan aktivitas gas vulkanik di dasar danau.",
    source: "Magelang Ekspres, 2023",
  },
  {
    img: "/dieng/candi-arjuna.jpg",
    title: "Kompleks Candi Arjuna",
    desc: "Salah satu kompleks candi Hindu tertua di Jawa, diperkirakan dibangun pada abad ke-8 hingga ke-9 Masehi.",
    source: "Kompasiana.com, 2025",
  },
  {
    img: "/dieng/bukit-sikunir.jpg",
    title: "Bukit Sikunir",
    desc: "Lokasi pengamatan matahari terbit yang menjadi salah satu daya tarik wisata utama di Dieng.",
    source: "Magelang Ekspres, 2023",
  },
];

const characteristics = [
  {
    title: "Dataran Tinggi Vulkanik",
    desc: "Salah satu dataran tinggi vulkanik terbesar di Indonesia dengan suhu udara berkisar 6–20°C.",
  },
  {
    title: "Aktivitas Panas Bumi",
    desc: "Manifestasi panas bumi berupa kawah aktif, mata air panas, solfatara, dan fumarola.",
  },
  {
    title: "Emisi Gas Beracun",
    desc: "Beberapa kawah menghasilkan gas CO₂ dan H₂S yang berbahaya, terutama di Kawah Timbang.",
  },
  {
    title: "Tanah Vulkanik Subur",
    desc: "Material vulkanik menyuburkan tanah, menjadikan kawasan ini sentra pertanian kentang, kubis, wortel, carica, dan bawang daun.",
  },
  {
    title: "Potensi Panas Bumi",
    desc: "Lapangan panas bumi Dieng telah dimanfaatkan untuk pembangkitan energi listrik melalui sistem geothermal.",
  },
];

const eruptionTimeline = [
  {
    year: "Abad 18–20",
    title: "Aktivitas Awal",
    desc: "Erupsi freatik berlangsung pada kawah-kawah aktif seperti Kawah Sileri, Kawah Timbang, dan Kawah Sikidang.",
  },
  {
    year: "20 Februari 1979",
    title: "Tragedi Gas Beracun",
    desc: "Pelepasan gas CO₂ dari Kawah Sinila dan kawasan Timbang menyebabkan kematian sekitar 149 penduduk — salah satu bencana gas vulkanik terbesar di Indonesia.",
  },
  {
    year: "2017",
    title: "Erupsi Kawah Sileri",
    desc: "Beberapa letusan freatik melontarkan lumpur dan material vulkanik hingga ratusan meter dari pusat erupsi.",
  },
  {
    year: "2018",
    title: "Erupsi Kawah Sileri",
    desc: "Kawah Sileri kembali mengalami erupsi freatik dengan semburan lumpur dan uap panas.",
  },
  {
    year: "29 April 2021",
    title: "Erupsi Kawah Sileri",
    desc: "Letusan freatik menghasilkan lontaran material hingga ratusan meter sehingga PVMBG menetapkan zona bahaya.",
  },
  {
    year: "Des 2024 – Jan 2025",
    title: "Aktivitas Terbaru",
    desc: "Erupsi freatik di Kawah Sileri menghasilkan semburan lumpur, sedimen, dan kolom uap putih tanpa peningkatan aktivitas signifikan sebelumnya.",
  },
];

export default function AboutDiengPage() {
  return (
    <div className="bg-volcanic-950">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img
          src="/dieng/kawah-sileri.jpg"
          alt="Kawah Sileri, Dieng"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-volcanic-950 via-volcanic-950/70 to-volcanic-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="text-magma-400 font-jetbrains text-sm uppercase tracking-widest mb-2">
            Kompleks Vulkanik
          </p>
          <h1 className="font-oswald text-4xl sm:text-5xl font-bold text-volcanic-50">
            Tentang Dieng
          </h1>
          <p className="text-volcanic-300 mt-3 max-w-2xl">
            Salah satu daerah vulkanik paling unik di Indonesia — kawah aktif,
            manifestasi panas bumi, dan warisan budaya yang masih hidup hingga kini.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Pendahuluan */}
        <Reveal>
          <h2 className="font-oswald text-2xl font-semibold text-volcanic-50 mb-4">
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

        {/* Geografi & Lokasi */}
        <Reveal>
          <h2 className="font-oswald text-2xl font-semibold text-volcanic-50 mb-6">
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
                className="rounded-lg border border-volcanic-700 bg-volcanic-900 p-4"
              >
                <p className="text-xs uppercase tracking-wide text-volcanic-400">
                  {item.label}
                </p>
                <p className="text-volcanic-50 font-oswald text-lg mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-4 text-volcanic-300 leading-relaxed">
            <p>
              Dataran Tinggi Dieng berada di bagian tengah Pulau Jawa, secara
              administratif terbagi antara Kabupaten Wonosobo dan Kabupaten
              Banjarnegara, Provinsi Jawa Tengah. Kompleks ini berada pada
              jalur busur vulkanik Sunda yang terbentuk akibat subduksi
              Lempeng Indo-Australia di bawah Lempeng Eurasia.
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

        {/* Geologi */}
        <Reveal>
          <h2 className="font-oswald text-2xl font-semibold text-volcanic-50 mb-4">
            Geologi
          </h2>
          <div className="space-y-4 text-volcanic-300 leading-relaxed">
            <p>
              Secara geologi, Kompleks Vulkanik Dieng merupakan kaldera
              vulkanik besar yang terbentuk akibat aktivitas vulkanik Kuarter.
              Gunung Prau diduga merupakan gunung api purba yang mengalami
              keruntuhan membentuk kaldera besar pada masa Pleistosen. Setelah
              pembentukan kaldera, aktivitas vulkanik selanjutnya menghasilkan
              sejumlah kerucut dan kawah baru yang tersebar di dalam cekungan
              Dieng.
            </p>
            <p>
              Produk vulkanik kawasan ini berumur Pleistosen hingga Holosen,
              didominasi batuan andesit dan andesit basaltik, dengan kubah
              lava, aliran lava, kawah, danau kawah, serta manifestasi panas
              bumi berupa fumarola, solfatara, mata air panas, emisi gas
              vulkanik, dan kawah berair panas — menjadikan Dieng salah satu
              lapangan panas bumi utama di Indonesia.
            </p>
          </div>
        </Reveal>

        {/* Sejarah Erupsi - Timeline */}
        <Reveal>
          <h2 className="font-oswald text-2xl font-semibold text-volcanic-50 mb-8">
            Sejarah Erupsi
          </h2>
          <div className="relative border-l border-volcanic-700 pl-6 space-y-8">
            {eruptionTimeline.map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-magma-400" />
                <p className="text-magma-400 font-jetbrains text-sm">
                  {item.year}
                </p>
                <h3 className="text-volcanic-50 font-oswald text-lg mt-1">
                  {item.title}
                </h3>
                <p className="text-volcanic-300 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Karakteristik Daerah */}
        <Reveal>
          <h2 className="font-oswald text-2xl font-semibold text-volcanic-50 mb-6">
            Karakteristik Daerah
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {characteristics.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-volcanic-700 bg-volcanic-900 p-5 hover:border-magma-400/50 transition-colors"
              >
                <h3 className="text-volcanic-50 font-oswald text-base font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-volcanic-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Destinasi Wisata - Gallery */}
        <Reveal>
          <h2 className="font-oswald text-2xl font-semibold text-volcanic-50 mb-2">
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
                className="group rounded-xl overflow-hidden border border-volcanic-700 bg-volcanic-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.img}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-volcanic-50 font-oswald text-lg font-semibold">
                    {dest.title}
                  </h3>
                  <p className="text-volcanic-300 text-sm mt-1 leading-relaxed">
                    {dest.desc}
                  </p>
                  <p className="text-volcanic-500 text-xs mt-2 font-jetbrains">
                    Sumber: {dest.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Referensi */}
        <Reveal>
          <details className="rounded-lg border border-volcanic-700 bg-volcanic-900 p-5">
            <summary className="cursor-pointer text-volcanic-50 font-oswald text-base font-semibold">
              Referensi
            </summary>
            <ul className="mt-4 space-y-2 text-volcanic-400 text-sm leading-relaxed list-disc list-inside">
              <li>BMKG. (2023). Data Klimatologi Dataran Tinggi Dieng.</li>
              <li>BPS Jawa Tengah. (2023). Jawa Tengah Dalam Angka 2023.</li>
              <li>Bronto, S. (2013). Geologi Gunung Api Indonesia.</li>
              <li>
                Dinas Kebudayaan, Pariwisata, dan Ekonomi Kreatif Provinsi
                Jawa Tengah. (2026). Bukit Sikunir, Kawah Sikidang, Talaga
                Warna.
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
              <li>
                Koesoemadinata, K. (1979). The Dieng Volcanic Gas Disaster.
              </li>
              <li>Munandar, A. A. (2011). Candi-candi di Dataran Tinggi Dieng.</li>
              <li>PVMBG. (2017–2024). Laporan Aktivitas Kawah Sileri.</li>
              <li>
                Smithsonian Institution. (2024). Global Volcanism Program:
                Dieng Volcanic Complex.
              </li>
              <li>Van Bemmelen, R. W. (1949). The Geology of Indonesia.</li>
            </ul>
          </details>
        </Reveal>
      </div>
    </div>
  );
}