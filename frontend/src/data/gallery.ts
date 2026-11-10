export type Photo = {
  src: string;
  caption: string;
};

export type CategoryGroup = {
  key: string;
  label: string;
  photos: Photo[];
};

export type ProjectGallery = {
  id: string;
  title: string;
  categories: CategoryGroup[];
};

const galleryProjects: ProjectGallery[] = [
  {
    id: "riim-2025",
    title: "1. RIIM Invitasi Strategis 2025",
    categories: [
      {
        key: "gravity",
        label: "Gravity",
        photos: [
          { src: "/gallery/gravity/kalibrasi-alat-badan-geologi.avif", caption: "Kalibrasi Alat di Badan Geologi" },
          { src: "/gallery/gravity/pemukiman-dieng.avif", caption: "Pengukuran di dekat pemukiman Dieng" },
          { src: "/gallery/gravity/jalan-dieng.avif", caption: "Pengukuran di jalan Dieng" },
          { src: "/gallery/gravity/kawah-dieng.avif", caption: "Pengukuran di Kawah Dieng" },
          { src: "/gallery/gravity/kawah-wurung.avif", caption: "Pengukuran di Kawah Wurung" },
          { src: "/gallery/gravity/telaga-warna.avif", caption: "Pengukuran di Telaga Warna" },
          { src: "/gallery/gravity/gunung-bismo.avif", caption: "Pengukuran di track Gunung Bismo" },
          { src: "/gallery/gravity/gunung-prau.avif", caption: "Pengukuran di track Gunung Prau" },
          { src: "/gallery/gravity/titik-ikat-banjarnegara.avif", caption: "Pengukuran titik ikat di Banjarnegara" },
        ],
      },
      {
        key: "magnetik",
        label: "Magnetik",
        photos: [
          { src: "/gallery/magnetik/gunung-seroja.avif", caption: "Badan Gunung Seroja" },
          { src: "/gallery/magnetik/basecamp-dieng.avif", caption: "Dekat basecamp Dieng" },
          { src: "/gallery/magnetik/dieng-kulon.avif", caption: "Dieng Kulon" },
          { src: "/gallery/magnetik/img-1968.avif", caption: "Pengukuran lapangan" },
          { src: "/gallery/magnetik/jalan-dieng-banjarnegara.avif", caption: "Jalan Dieng - Banjarnegara" },
          { src: "/gallery/magnetik/kalibrasi-alat.avif", caption: "Kalibrasi alat" },
          { src: "/gallery/magnetik/gunung-pakuwaja.avif", caption: "Kawah Gunung Pakuwaja" },
          { src: "/gallery/magnetik/kawah-sileri.avif", caption: "Kawah Sileri" },
          { src: "/gallery/magnetik/lapangan.avif", caption: "Pengukuran lapangan" },
          { src: "/gallery/magnetik/basecamp-pengukuran.avif", caption: "Pengukuran di basecamp" },
          { src: "/gallery/magnetik/puncak-gunung-bismo.avif", caption: "Puncak Gunung Bismo" },
          { src: "/gallery/magnetik/gunung-prau-track.avif", caption: "Track Gunung Prau" },
        ],
      },
      {
        key: "seismic",
        label: "Seismic",
        photos: [
          { src: "/gallery/seismic/seismik-01.avif", caption: "Dokumentasi kegiatan seismik 1" },
          { src: "/gallery/seismic/seismik-02.avif", caption: "Dokumentasi kegiatan seismik 2" },
          { src: "/gallery/seismic/seismik-03.avif", caption: "Dokumentasi kegiatan seismik 3" },
          { src: "/gallery/seismic/seismik-04.avif", caption: "Dokumentasi kegiatan seismik 4" },
          { src: "/gallery/seismic/seismik-05.avif", caption: "Dokumentasi kegiatan seismik 5" },
          { src: "/gallery/seismic/seismik-06.avif", caption: "Dokumentasi kegiatan seismik 6" },
          { src: "/gallery/seismic/seismik-07.avif", caption: "Dokumentasi kegiatan seismik 7" },
          { src: "/gallery/seismic/seismik-08.avif", caption: "Dokumentasi kegiatan seismik 8" },
        ],
      },
    ],
  },
  {
    id: "rp-2026",
    title: "2. RP Purwarupa Hasil Riset & Inovasi 2026",
    categories: [
      {
        key: "gravity",
        label: "Gravity",
        photos: [
          { src: "/gallery/gravity/Gravity1.avif", caption: "Survei Gravity 1" },
          { src: "/gallery/gravity/Gravity2.avif", caption: "Survei Gravity 2" },
          { src: "/gallery/gravity/Gravity3.avif", caption: "Survei Gravity 3" },
          { src: "/gallery/gravity/Gravity4.avif", caption: "Survei Gravity 4" },
          { src: "/gallery/gravity/Gravity5.avif", caption: "Survei Gravity 5" },
          { src: "/gallery/gravity/Gravity6.avif", caption: "Survei Gravity 6" },
        ],
      },
      {
        key: "magnetik",
        label: "Magnetik",
        photos: [
          { src: "/gallery/magnetik/Magnetik1.avif", caption: "Akuisisi Data Magnetik 1" },
          { src: "/gallery/magnetik/Magnetik2.avif", caption: "Akuisisi Data Magnetik 2" },
          { src: "/gallery/magnetik/Magnetik3.avif", caption: "Akuisisi Data Magnetik 3" },
          { src: "/gallery/magnetik/Magnetik4.avif", caption: "Akuisisi Data Magnetik 4" },
          { src: "/gallery/magnetik/Magnetik5.avif", caption: "Akuisisi Data Magnetik 5" },
          { src: "/gallery/magnetik/Magnetik6.avif", caption: "Akuisisi Data Magnetik 6" },
        ],
      },
      {
        key: "seismic",
        label: "Seismic",
        photos: [
          { src: "/gallery/seismic/IMG_9626.avif", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9537.avif", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9623.avif", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9633.avif", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9637.avif", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9663.avif", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9693.avif", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9695.avif", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9715.avif", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9719.avif", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG.avif", caption: "Pengukuran Seismik" },
        ],
      },
      {
        key: "drone",
        label: "Drone",
        photos: [
          { src: "/gallery/drone/Drone1.avif", caption: "Pemetaan Drone 1" },
          { src: "/gallery/drone/Drone2.avif", caption: "Pemetaan Drone 2" },
          { src: "/gallery/drone/Drone3.avif", caption: "Pemetaan Drone 3" },
          { src: "/gallery/drone/Drone4.avif", caption: "Pemetaan Drone 4" },
          { src: "/gallery/drone/Drone5.avif", caption: "Pemetaan Drone 5" },
          { src: "/gallery/drone/Drone6.avif", caption: "Pemetaan Drone 6" },
        ],
      },
      {
        key: "kegiatan",
        label: "Kegiatan",
        photos: [
          { src: "/gallery/kegiatan/IMG_9495.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9496.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9497.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9498.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9499.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9500.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9501.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9502.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9503.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9650.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9651.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9652.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9653.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9654.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9655.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9656.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9657.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9658.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9659.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9660.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9899.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9900.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9901.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9902.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9903.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9904.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9905.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9906.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9907.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9914.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9921.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9928.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9929.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9930.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9931.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9932.avif", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9933.avif", caption: "Dokumentasi Kegiatan Lapangan" },
        ],
      },
    ],
  },
];

export default galleryProjects;