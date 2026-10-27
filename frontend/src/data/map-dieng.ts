import type { LatLngTuple } from "leaflet";

// Import gambar-gambar yang sudah ada dari folder src/assets/dieng
import imgSikidang from "../assets/dieng/kawah-sikidang.jpg";
import imgSileri from "../assets/dieng/kawah-sileri.jpg";
import imgWarna from "../assets/dieng/telaga-warna.jpg";
import imgPengilon from "../assets/dieng/telaga-pengilon.jpg";
import imgArjuna from "../assets/dieng/candi-arjuna.jpg";
import imgSikunir from "../assets/dieng/bukit-sikunir.jpg";

export type MapPoint = {
  slug: string;
  title: string;
  description: string;
  position: LatLngTuple;
  image?: string; // Tipe data gambar
  details?: {
    nilaiTerkemuka?: string;
    banyakMakna?: string[];
    batuan?: string;
    strukturGeologi?: string;
    bentangAlam?: string;
    pemanfaatan?: string[];
  };
};

export const mapPoints: MapPoint[] = [
  {
    slug: "kawah-sikidang",
    title: "Kawah Sikidang",
    description: "Menunjukkan zona anomali rendah pada pengukuran geofisika yang mengindikasikan struktur batuan renggang dan kemagnetan lemah (alterasi hidrotermal).",
    position: [-7.22007, 109.90401],
    image: imgSikidang, // Foto sudah dihubungkan di sini
    details: {
      nilaiTerkemuka: "Kawah Sikidang memiliki nilai penting karena merupakan salah satu manifestasi vulkanik aktif di Kompleks Vulkanik Dieng yang menunjukkan adanya aktivitas panas bumi dan proses pelepasan gas vulkanik dari bawah permukaan. Area ini memperlihatkan hubungan antara aktivitas hidrotermal, struktur geologi, dan proses pembentukan kawah vulkanik. Hasil interpretasi menunjukkan zona anomali rendah (gravity renggang, magnetik lemah), mengindikasikan alterasi hidrotermal.",
      banyakMakna: [
        "Ilmiah: Menjadi lokasi penting untuk memahami proses vulkanisme, sistem panas bumi, dan perubahan batuan.",
        "Pendidikan: Menjadi lokasi pembelajaran langsung mengenai kawah aktif, gas vulkanik, dan proses geologi.",
        "Pariwisata: Memiliki nilai estetika berupa bentang alam kawah aktif yang mudah diamati masyarakat."
      ],
      batuan: "Diperkirakan berupa lava andesit dan endapan vulkanik hasil aktivitas erupsi Dieng yang telah mengalami perubahan akibat proses hidrotermal.",
      strukturGeologi: "Dipengaruhi oleh struktur rekahan dan jalur permeabilitas batuan yang memungkinkan naiknya fluida panas bumi dan gas vulkanik ke permukaan.",
      bentangAlam: "Berupa kawah aktif dengan aktivitas fumarol, tanah beruap, dan keluarnya gas vulkanik (sistem panas bumi aktif).",
      pemanfaatan: ["Ilmu pengetahuan", "Pendidikan kebencanaan", "Edukasi wisata geologi", "Geowisata berbasis geologi"]
    }
  },
  { 
    slug: "telaga-warna", 
    title: "Telaga Warna", 
    description: "Teridentifikasi sebagai zona anomali rendah. Hasil geofisika menunjukkan adanya keterkaitan area ini dengan zona alterasi hidrotermal.", 
    position: [-7.215141, 109.915275],
    image: imgWarna,
    details: {
      nilaiTerkemuka: "Telaga Warna memiliki nilai geologi karena merupakan bukti aktivitas vulkanik dan hidrotermal Dieng. Perubahan warna air berkaitan dengan kandungan mineral, aktivitas gas, dan proses kimia akibat interaksi air dengan sistem panas bumi. Hasil geofisika menunjukkan area ini terindikasi ada keterkaitan dengan zona alterasi hidrotermal.",
      banyakMakna: [
        "Ilmiah: Menjadi contoh interaksi antara aktivitas vulkanik, hidrotermal, dan proses geokimia air.",
        "Pendidikan: Memberikan pemahaman mengenai hubungan gunung api dengan lingkungan permukaan.",
        "Estetika: Memiliki nilai lanskap berupa danau vulkanik dengan perubahan warna alami."
      ],
      batuan: "Tersusun oleh produk gunung api Dieng berupa lava dan material piroklastik yang mengalami perubahan akibat aktivitas hidrotermal.",
      strukturGeologi: "Dipengaruhi oleh sistem rekahan vulkanik yang menjadi jalur pergerakan fluida panas bumi.",
      bentangAlam: "Berupa danau vulkanik yang terbentuk pada kawasan kompleks gunung api dengan aktivitas hidrotermal.",
      pemanfaatan: ["Penelitian panas bumi", "Pendidikan geologi", "Geowisata berbasis geologi"]
    }
  },
  {
    slug: "kawah-candradimuka",
    title: "Kawah Chandradimuka",
    description: "Merupakan zona anomali rendah yang berasosiasi erat dengan produk vulkanik Kompleks Dieng.",
    position: [-7.189722, 109.851944],
    // image: imgCandradimuka, (Nanti tambahkan jika foto sudah ada)
    details: {
      nilaiTerkemuka: "Kawah Chandradimuka memiliki nilai penting karena menjadi salah satu lokasi manifestasi aktivitas vulkanik dan hidrotermal Dieng. Area ini termasuk zona anomali rendah yang saling memperkuat dengan kondisi lapangan, berasosiasi dengan produk vulkanik Kompleks Dieng.",
      banyakMakna: [
        "Ilmiah: Menunjukkan proses pelepasan panas dan fluida dari sistem vulkanik bawah permukaan.",
        "Pendidikan: Menjadi lokasi pembelajaran mengenai kawah dan sistem panas bumi.",
        "Pariwisata: Memiliki daya tarik berupa bentang alam kawah."
      ],
      batuan: "Terdiri dari lava vulkanik dan endapan piroklastik hasil aktivitas gunung api Dieng.",
      strukturGeologi: "Dipengaruhi oleh rekahan vulkanik yang menjadi jalur naiknya fluida hidrotermal.",
      bentangAlam: "Kawah dengan aktivitas hidrotermal berupa uap dan manifestasi panas bumi.",
      pemanfaatan: ["Penelitian vulkanologi", "Pendidikan kebencanaan geologi", "Geowisata berbasis geologi"]
    }
  },
  {
    slug: "gunung-prau",
    title: "Gunung Prau",
    description: "Termasuk area dengan anomali rendah, bagian dari produk vulkanik yang telah berkembang sejak Pleistosen hingga Holosen.",
    position: [-7.186667, 109.923889],
    details: {
      nilaiTerkemuka: "Gunung Prau memiliki nilai geologi sebagai bagian dari kompleks vulkanik Dieng yang merekam perkembangan aktivitas gunung api dan proses pembentukan bentang alam vulkanik. Area ini merupakan produk vulkanik Kompleks Dieng yang telah berlangsung dari zaman Pleistosen hingga Holosen.",
      banyakMakna: [
        "Ilmiah: Menunjukkan sejarah perkembangan gunung api Dieng.",
        "Pendidikan: Lokasi pembelajaran geomorfologi gunung api.",
        "Pariwisata: Memiliki nilai lanskap tinggi."
      ],
      batuan: "Didominasi batuan vulkanik seperti lava andesit dan produk erupsi gunung api.",
      strukturGeologi: "Dipengaruhi oleh sistem struktur regional yang mengontrol perkembangan kompleks vulkanik Dieng.",
      bentangAlam: "Berupa gunung api dengan morfologi pegunungan dan lembah vulkanik.",
      pemanfaatan: ["Penelitian Vulkanologi", "Pendidikan Geologi", "Wisata alam"]
    }
  },
  { 
    slug: "kawah-sileri", 
    title: "Kawah Sileri", 
    description: "Termasuk zona anomali rendah yang menunjukkan bahwa aktivitas alterasi hidrotermal terus berlangsung di area kawah aktif ini.", 
    position: [-7.193045, 109.88371],
    image: imgSileri,
    details: {
      nilaiTerkemuka: "Kawah Sileri memiliki nilai tinggi karena merupakan salah satu kawah aktif Dieng yang masih menunjukkan aktivitas hidrotermal dan pernah mengalami erupsi freatik. Pengukuran geofisika menunjukkan adanya aktivitas alterasi hidrotermal yang terus berlangsung di area ini.",
      banyakMakna: [
        "Ilmiah: Rekaman aktivitas erupsi freatik dan sistem hidrotermal aktif.",
        "Pendidikan: Contoh nyata bahaya gunung api non-magmatik.",
        "Mitigasi: Lokasi penting untuk edukasi bahaya gas dan aktivitas kawah."
      ],
      batuan: "Lava andesit dan endapan piroklastik yang mengalami alterasi.",
      bentangAlam: "Kawah aktif dengan aktivitas gas dan perubahan hidrotermal.",
      pemanfaatan: ["Mitigasi bencana Vulkanik", "Pendidikan Geologi", "Penelitian vulkanologi"]
    }
  },
  {
    slug: "telaga-menjer",
    title: "Telaga Menjer",
    description: "Teridentifikasi sebagai area anomali rendah. Salah satu cekungan produk vulkanik Dieng yang tersusun atas lava dan endapan vulkanik.",
    position: [-7.291111, 109.932778],
    details: {
      nilaiTerkemuka: "Telaga Menjer merupakan bagian dari sistem vulkanik Dieng yang menunjukkan hubungan antara proses vulkanik, struktur geologi, dan pembentukan cekungan vulkanik. Telaga ini termasuk salah satu produk vulkanik dari Kompleks Vulkanik Dieng.",
      banyakMakna: [
        "Ilmiah: Memberikan informasi mengenai evolusi bentang alam vulkanik.",
        "Pendidikan: Media pembelajaran danau vulkanik.",
        "Pariwisata: Memiliki nilai estetika tinggi."
      ],
      batuan: "Tersusun oleh material vulkanik Dieng berupa lava dan endapan vulkanik.",
      pemanfaatan: ["Pendidikan geologi", "Penelitian lingkungan", "Wisata geologi"]
    }
  },
  {
    slug: "kawah-wurung",
    title: "Kawah Wurung (Gn. Pakuwaja)",
    description: "Termasuk zona anomali rendah. Menunjukkan adanya aktivitas hidrotermal pada area yang terhubung dengan sistem vulkanik Dieng.",
    position: [-7.230000, 109.923056],
    details: {
      nilaiTerkemuka: "Kawah Wurung memiliki nilai geologi sebagai bagian dari produk vulkanik Dieng yang menunjukkan proses pembentukan gunung api dan perubahan morfologi akibat aktivitas vulkanik. Area ini masih terhubung dengan aktivitas vulkanik lain di Kompleks Vulkanik Dieng.",
      banyakMakna: [
        "Menunjukkan sejarah aktivitas vulkanik Dieng.",
        "Menjadi lokasi pembelajaran bentang alam gunung api."
      ],
      batuan: "Produk lava dan material piroklastik.",
      pemanfaatan: ["Pendidikan", "Penelitian", "Wisata geologi"]
    }
  },
  {
    slug: "gunung-bismo-barat",
    title: "Area Barat Gunung Bismo",
    description: "Dicirikan oleh anomali magnetik relatif tinggi namun gravitasi rendah. Kombinasi ini mengindikasikan heterogenitas akibat rekahan atau alterasi.",
    position: [-7.251944, 109.897500],
    details: {
      nilaiTerkemuka: "Area barat Gunung Bismo menunjukkan indikasi adanya perubahan sifat fisik batuan yang berkaitan dengan aktivitas hidrotermal. Anomali magnetik relatif tinggi (batuan basaltik-andesitik) dan gravitasi rendah mengindikasikan adanya material densitas rendah, heterogenitas, dan rekahan.",
      banyakMakna: ["Menjadi area penting untuk penelitian hubungan struktur geologi atau produk dari aktivitas Vulkanik."],
      batuan: "Kemungkinan tersusun dari produk lava atau lahar yang sudah bersifat andesitik.",
      pemanfaatan: ["Pendidikan", "Mitigasi risiko geologi"]
    }
  },
  {
    slug: "gunung-bismo-selatan",
    title: "Gunung Bismo Bagian Selatan",
    description: "Menunjukkan anomali magnetik rendah yang menerus ke arah Kawah Sikidang, dan gravitasi rendah yang meningkat di puncak.",
    position: [-7.265000, 109.905000],
    details: {
      nilaiTerkemuka: "Gunung Bismo bagian Selatan menunjukkan anomali magnetik relatif rendah yang menerus menuju Kawah Sikidang. Anomali gravitasi meningkat mendekati puncak. Kombinasi ini mengindikasikan heterogenitas sifat fisik bawah permukaan yang berkaitan dengan sistem vulkanik-hidrotermal Gunung Bismo.",
      banyakMakna: [
        "Ilmiah: Menjadi lokasi penting untuk memahami hubungan antara struktur batuan, alterasi, dan sistem hidrotermal.",
        "Pendidikan: Memberikan contoh interpretasi data geofisika dalam kajian gunung api."
      ],
      batuan: "Kemungkinan tersusun dari produk lava basaltik-andesit hasil erupsi purba.",
      strukturGeologi: "Diduga dipengaruhi oleh jalur struktur yang menghubungkan sistem vulkanik Bismo dengan zona aktivitas sekitar Kawah Sikidang.",
      pemanfaatan: ["Penelitian lanjutan", "Pendidikan geologi", "Kajian mitigasi bencana"]
    }
  },
  { 
    slug: "bukit-sikunir", 
    title: "Bukit Sikunir", 
    description: "Lokasi pengamatan matahari terbit yang menjadi salah satu daya tarik wisata utama dengan morfologi produk vulkanik Dieng purba.", 
    position: [-7.239472, 109.925667],
    image: imgSikunir
  },
  { 
    slug: "telaga-pengilon", 
    title: "Telaga Pengilon", 
    description: "Perubahan warna air dipengaruhi kandungan mineral dan aktivitas gas vulkanik di dasar danau.", 
    position: [-7.2165, 109.916],
    image: imgPengilon
  },
  {
    slug: "kompleks-candi-arjuna",
    title: "Kompleks Candi Arjuna",
    description: "Salah satu kompleks candi Hindu tertua di Jawa, diperkirakan dibangun pada abad ke-8 hingga ke-9 Masehi.",
    position: [-7.204939, 109.906939],
    image: imgArjuna
  }
];