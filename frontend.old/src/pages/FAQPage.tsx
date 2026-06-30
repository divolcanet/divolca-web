import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Apa itu DiVolca?",
    answer:
      "DiVolca (Dieng Volcanic Complex) adalah platform informasi geospasial yang dikembangkan oleh tim peneliti gabungan akademisi dan praktisi geofisika, vulkanologi, oseanografi, serta rekayasa perangkat lunak. Platform ini menyajikan hasil penelitian struktur bawah permukaan Pegunungan Dieng dalam bentuk visualisasi 3D, data gravity, magnetik, dan seismik, agar mudah diakses oleh publik, akademisi, maupun pihak yang berkepentingan dalam mitigasi bencana.",
  },
  {
    question: "Apa tujuan dibangunnya platform DiVolca?",
    answer:
      "DiVolca bertujuan menjembatani hasil riset geofisika yang kompleks dengan masyarakat umum, sehingga data struktur bawah permukaan, sejarah aktivitas vulkanik, dan potensi bahaya di kawasan Dieng dapat dipahami secara visual dan mudah diakses, sekaligus mendukung upaya mitigasi bencana di kawasan tersebut.",
  },
  {
    question: "Apa itu Kawasan Vulkanik Dieng?",
    answer:
      "Kawasan Dieng merupakan salah satu daerah vulkanik paling unik di Indonesia, berupa kompleks vulkanik aktif tipe kompleks yang tersusun atas sejumlah kerucut vulkanik, kubah lava, kawah, dan zona panas bumi. Selain memiliki nilai geologi tinggi, Dieng juga merupakan kawasan budaya dan pariwisata penting yang menyimpan kompleks candi Hindu tertua di Pulau Jawa.",
  },
  {
    question: "Di mana lokasi geografis Dataran Tinggi Dieng?",
    answer:
      "Dataran Tinggi Dieng terletak pada elevasi sekitar 1.900–2.100 meter di atas permukaan laut, secara administratif berada di Kabupaten Wonosobo dan Kabupaten Banjarnegara, Provinsi Jawa Tengah. Koordinatnya sekitar 7,2° LS, 109,88° BT, dengan elevasi maksimum kompleks vulkanik mencapai sekitar 2.565 mdpl. Lokasinya sekitar 26 km dari Kota Wonosobo, 116 km dari Semarang, dan 130 km dari Yogyakarta.",
  },
  {
    question: "Bagaimana karakteristik geologi Dieng?",
    answer:
      "Kompleks Vulkanik Dieng merupakan kaldera vulkanik besar hasil aktivitas vulkanik Kuarter, dengan luas sekitar 6 × 14 km dan terdiri atas lebih dari 20 kawah dan kerucut vulkanik. Produk vulkaniknya berumur Pleistosen hingga Holosen, didominasi batuan andesit dan andesit basaltik, serta memiliki kubah lava, aliran lava, kawah, danau kawah, dan manifestasi panas bumi seperti fumarola, solfatara, dan mata air panas.",
  },
  {
    question: "Jenis erupsi apa yang umum terjadi di Dieng?",
    answer:
      "Aktivitas vulkanik Dieng sebagian besar berupa erupsi freatik, yaitu letusan yang terjadi akibat interaksi air tanah dengan panas di bawah permukaan tanpa keluarnya magma secara langsung. Erupsi jenis ini umumnya terjadi di kawah-kawah aktif seperti Kawah Sileri, Kawah Timbang, dan Kawah Sikidang.",
  },
  {
    question: "Apa peristiwa vulkanik paling mematikan di Dieng?",
    answer:
      "Peristiwa paling mematikan terjadi pada 20 Februari 1979, ketika pelepasan gas karbon dioksida dari Kawah Sinila dan kawasan Timbang menyebabkan sekitar 149 penduduk meninggal. Gas CO2 yang lebih berat dari udara mengalir ke daerah rendah dan menyebabkan sesak napas hingga kematian — menjadikannya salah satu bencana gas vulkanik terbesar di Indonesia.",
  },
  {
    question: "Apa aktivitas vulkanik terbaru di Dieng?",
    answer:
      "Kawah Sileri tercatat mengalami beberapa kali erupsi freatik pada 2017, 2018, dan 29 April 2021 yang melontarkan lumpur dan material vulkanik hingga ratusan meter dari pusat erupsi. PVMBG juga melaporkan erupsi freatik di Kawah Sileri pada Desember 2024 dan Januari 2025, berupa semburan lumpur, sedimen, dan kolom uap putih.",
  },
  {
    question: "Apa bahaya utama yang mengintai di kawasan Dieng?",
    answer:
      "Bahaya utama kawasan ini tidak hanya berasal dari erupsi freatik, tetapi juga emisi gas beracun seperti karbon dioksida (CO2) dan hidrogen sulfida (H2S). Kawah Timbang dikenal sebagai salah satu lokasi dengan potensi emisi gas yang tinggi, sehingga masyarakat diminta menjauhi area kawah aktif.",
  },
  {
    question: "Apa saja destinasi wisata utama di kawasan Dieng?",
    answer:
      "Beberapa destinasi wisata geologi dan budaya utama di Dieng antara lain Kawah Sikidang (kawah aktif dengan solfatara dan lumpur panas), Kawah Sileri, Telaga Warna dan Telaga Pengilon (danau dengan fenomena perubahan warna air akibat kandungan sulfur tinggi), Kompleks Candi Arjuna (kompleks candi Hindu tertua di Jawa, dibangun abad ke-8 hingga ke-9 Masehi), dan Bukit Sikunir yang terkenal sebagai lokasi pengamatan matahari terbit.",
  },
  {
    question: "Mengapa tanah di kawasan Dieng sangat subur?",
    answer:
      "Material vulkanik dari aktivitas gunung api di Dieng menghasilkan tanah yang sangat subur, sehingga kawasan ini menjadi sentra pertanian dataran tinggi yang menghasilkan kentang, kubis, wortel, carica, dan bawang daun.",
  },
  {
    question: "Apakah Dieng memiliki potensi energi panas bumi?",
    answer:
      "Ya. Lapangan panas bumi Dieng merupakan salah satu sumber energi panas bumi penting di Indonesia dan telah dimanfaatkan untuk pembangkitan energi listrik melalui sistem geothermal.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-oswald text-4xl font-bold text-volcanic-50 mb-8">
        FAQ
      </h1>
      <p className="text-volcanic-300 leading-relaxed text-lg mb-12">
        Kumpulan pertanyaan yang sering diajukan seputar DiVolca dan Kompleks
        Vulkanik Dieng. Tidak menemukan jawaban yang kamu cari? Gunakan
        chatbot di pojok kanan bawah untuk bertanya langsung.
      </p>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="border border-volcanic-800 rounded-xl bg-volcanic-900 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-volcanic-50">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-magma-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="px-5 pb-4 text-volcanic-400 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}