import { useState } from "react";

type Photo = {
  src: string;
  caption: string;
};

type Category = {
  key: string;
  label: string;
  photos: Photo[];
};

const categories: Category[] = [
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
];

export default function GalleryPage() {
  const [activeKey, setActiveKey] = useState(categories[0].key);
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  const activeCategory = categories.find((c) => c.key === activeKey)!;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-oswald text-4xl font-bold text-volcanic-50 mb-8">
        Galeri Kegiatan
      </h1>
      <p className="text-volcanic-300 leading-relaxed text-lg max-w-3xl mb-10">
        Dokumentasi kegiatan akuisisi data lapangan tim DiVolca di Pegunungan
        Dieng, meliputi survei gravity, magnetik, dan seismik.
      </p>

      <div className="flex gap-2 mb-8 border-b border-volcanic-800">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActiveKey(cat.key)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeKey === cat.key
                ? "border-magma-400 text-magma-400"
                : "border-transparent text-volcanic-400 hover:text-volcanic-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {activeCategory.photos.map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setLightboxPhoto(photo)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-volcanic-800 bg-volcanic-900"
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-volcanic-950/80 text-volcanic-100 text-xs px-2 py-1.5 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {photo.caption}
            </span>
          </button>
        ))}
      </div>

      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxPhoto(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxPhoto.src}
              alt={lightboxPhoto.caption}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-volcanic-100 text-center mt-4">
              {lightboxPhoto.caption}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setLightboxPhoto(null)}
            aria-label="Tutup"
            className="absolute top-4 right-4 text-volcanic-100 hover:text-magma-400 text-3xl leading-none"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}