import type { LatLngTuple } from "leaflet";

export type MapPoint = {
  slug: string;
  title: string;
  description: string;
  position: LatLngTuple;
};

export const mapPoints: MapPoint[] = [
  {
    slug: "kawah-sikidang",
    title: "Kawah Sikidang",
    description:
      "Kawah aktif yang paling mudah diakses wisatawan, dikenal karena aktivitas solfatara dan lumpur panasnya.",
    position: [-7.22007, 109.90401],
  },
  {
    slug: "kawah-sileri",
    title: "Kawah Sileri",
    description:
      "Kawah terbesar dan salah satu kawah paling aktif di Dieng yang sering mengalami erupsi freatik.",
    position: [-7.193045, 109.88371],
  },
  {
    slug: "telaga-warna",
    title: "Telaga Warna",
    description:
      "Air telaga berubah warna-warni karena sinar matahari mengenai air yang mengandung sulfur tinggi.",
    position: [-7.215141, 109.915275],
  },
  {
    slug: "telaga-pengilon",
    title: "Telaga Pengilon",
    description:
      "Perubahan warna air dipengaruhi kandungan mineral dan aktivitas gas vulkanik di dasar danau.",
    position: [-7.2165, 109.916],
  },
  {
    slug: "kompleks-candi-arjuna",
    title: "Kompleks Candi Arjuna",
    description:
      "Salah satu kompleks candi Hindu tertua di Jawa, diperkirakan dibangun pada abad ke-8 hingga ke-9 Masehi.",
    position: [-7.204939, 109.906939],
  },
  {
    slug: "bukit-sikunir",
    title: "Bukit Sikunir",
    description:
      "Lokasi pengamatan matahari terbit yang menjadi salah satu daya tarik wisata utama di Dieng.",
    position: [-7.239472, 109.925667],
  },
];
