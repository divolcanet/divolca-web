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
          { src: "/gallery/gravity/kalibrasi-alat-badan-geologi.jpg", caption: "Kalibrasi Alat di Badan Geologi" },
          { src: "/gallery/gravity/pemukiman-dieng.jpg", caption: "Pengukuran di dekat pemukiman Dieng" },
          { src: "/gallery/gravity/jalan-dieng.jpg", caption: "Pengukuran di jalan Dieng" },
          { src: "/gallery/gravity/kawah-dieng.jpg", caption: "Pengukuran di Kawah Dieng" },
          { src: "/gallery/gravity/kawah-wurung.jpg", caption: "Pengukuran di Kawah Wurung" },
          { src: "/gallery/gravity/telaga-warna.jpg", caption: "Pengukuran di Telaga Warna" },
          { src: "/gallery/gravity/gunung-bismo.jpg", caption: "Pengukuran di track Gunung Bismo" },
          { src: "/gallery/gravity/gunung-prau.jpg", caption: "Pengukuran di track Gunung Prau" },
          { src: "/gallery/gravity/titik-ikat-banjarnegara.jpg", caption: "Pengukuran titik ikat di Banjarnegara" },
        ],
      },
      {
        key: "magnetik",
        label: "Magnetik",
        photos: [
          { src: "/gallery/magnetik/gunung-seroja.jpg", caption: "Badan Gunung Seroja" },
          { src: "/gallery/magnetik/basecamp-dieng.jpg", caption: "Dekat basecamp Dieng" },
          { src: "/gallery/magnetik/dieng-kulon.jpg", caption: "Dieng Kulon" },
          { src: "/gallery/magnetik/img-1968.jpg", caption: "Pengukuran lapangan" },
          { src: "/gallery/magnetik/jalan-dieng-banjarnegara.jpg", caption: "Jalan Dieng - Banjarnegara" },
          { src: "/gallery/magnetik/kalibrasi-alat.jpg", caption: "Kalibrasi alat" },
          { src: "/gallery/magnetik/gunung-pakuwaja.jpg", caption: "Kawah Gunung Pakuwaja" },
          { src: "/gallery/magnetik/kawah-sileri.jpg", caption: "Kawah Sileri" },
          { src: "/gallery/magnetik/lapangan.jpg", caption: "Pengukuran lapangan" },
          { src: "/gallery/magnetik/basecamp-pengukuran.jpg", caption: "Pengukuran di basecamp" },
          { src: "/gallery/magnetik/puncak-gunung-bismo.jpg", caption: "Puncak Gunung Bismo" },
          { src: "/gallery/magnetik/gunung-prau-track.jpg", caption: "Track Gunung Prau" },
        ],
      },
      {
        key: "seismic",
        label: "Seismic",
        photos: [
          { src: "/gallery/seismic/seismik-01.jpg", caption: "Dokumentasi kegiatan seismik 1" },
          { src: "/gallery/seismic/seismik-02.jpg", caption: "Dokumentasi kegiatan seismik 2" },
          { src: "/gallery/seismic/seismik-03.jpg", caption: "Dokumentasi kegiatan seismik 3" },
          { src: "/gallery/seismic/seismik-04.jpg", caption: "Dokumentasi kegiatan seismik 4" },
          { src: "/gallery/seismic/seismik-05.jpg", caption: "Dokumentasi kegiatan seismik 5" },
          { src: "/gallery/seismic/seismik-06.jpg", caption: "Dokumentasi kegiatan seismik 6" },
          { src: "/gallery/seismic/seismik-07.jpg", caption: "Dokumentasi kegiatan seismik 7" },
          { src: "/gallery/seismic/seismik-08.jpg", caption: "Dokumentasi kegiatan seismik 8" },
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
          { src: "/gallery/gravity/Gravity1.jpg", caption: "Survei Gravity 1" },
          { src: "/gallery/gravity/Gravity2.jpg", caption: "Survei Gravity 2" },
          { src: "/gallery/gravity/Gravity3.jpg", caption: "Survei Gravity 3" },
          { src: "/gallery/gravity/Gravity4.jpg", caption: "Survei Gravity 4" },
          { src: "/gallery/gravity/Gravity5.jpg", caption: "Survei Gravity 5" },
          { src: "/gallery/gravity/Gravity6.jpg", caption: "Survei Gravity 6" },
        ],
      },
      {
        key: "magnetik",
        label: "Magnetik",
        photos: [
          { src: "/gallery/magnetik/Magnetik1.jpg", caption: "Akuisisi Data Magnetik 1" },
          { src: "/gallery/magnetik/Magnetik2.jpg", caption: "Akuisisi Data Magnetik 2" },
          { src: "/gallery/magnetik/Magnetik3.jpg", caption: "Akuisisi Data Magnetik 3" },
          { src: "/gallery/magnetik/Magnetik4.jpg", caption: "Akuisisi Data Magnetik 4" },
          { src: "/gallery/magnetik/Magnetik5.jpg", caption: "Akuisisi Data Magnetik 5" },
          { src: "/gallery/magnetik/Magnetik6.jpg", caption: "Akuisisi Data Magnetik 6" },
        ],
      },
      {
        key: "seismic",
        label: "Seismic",
        photos: [
          { src: "/gallery/seismic/IMG_9626.jpg", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9537.jpg", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9623.jpg", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9633.jpg", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9637.jpg", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9663.jpg", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9693.jpg", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9695.jpg", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9715.jpg", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG_9719.jpg", caption: "Pengukuran Seismik" },
          { src: "/gallery/seismic/IMG.jpg", caption: "Pengukuran Seismik" },
        ],
      },
      {
        key: "drone",
        label: "Drone",
        photos: [
          { src: "/gallery/drone/Drone1.jpg", caption: "Pemetaan Drone 1" },
          { src: "/gallery/drone/Drone2.jpg", caption: "Pemetaan Drone 2" },
          { src: "/gallery/drone/Drone3.jpg", caption: "Pemetaan Drone 3" },
          { src: "/gallery/drone/Drone4.jpg", caption: "Pemetaan Drone 4" },
          { src: "/gallery/drone/Drone5.jpg", caption: "Pemetaan Drone 5" },
          { src: "/gallery/drone/Drone6.jpg", caption: "Pemetaan Drone 6" },
        ],
      },
      {
        key: "kegiatan",
        label: "Kegiatan",
        photos: [
          { src: "/gallery/kegiatan/IMG_9495.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9496.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9497.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9498.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9499.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9500.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9501.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9502.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9503.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9650.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9651.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9652.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9653.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9654.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9655.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9656.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9657.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9658.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9659.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9660.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9899.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9900.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9901.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9902.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9903.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9904.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9905.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9906.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9907.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9914.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9921.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9928.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9929.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9930.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9931.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9932.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
          { src: "/gallery/kegiatan/IMG_9933.jpg", caption: "Dokumentasi Kegiatan Lapangan" },
        ],
      },
    ],
  },
];

export default galleryProjects;