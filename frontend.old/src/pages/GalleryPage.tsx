import { useEffect, useRef, useState, type ReactNode } from "react";

type Photo = { src: string; caption: string };
type Category = { key: string; label: string; photos: Photo[] };

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

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
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
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function PhotoCard({
  photo,
  delay,
  onOpen,
}: {
  photo: Photo;
  delay: number;
  onOpen: () => void;
}) {
  const [hover, setHover] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={onOpen}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        className="group relative block w-full aspect-square overflow-hidden rounded-xl border border-volcanic-800 bg-volcanic-900 cursor-none"
      >
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-volcanic-950/90 via-volcanic-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <p className="absolute left-0 right-0 bottom-0 p-3 text-sm text-volcanic-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 line-clamp-2">
          {photo.caption}
        </p>

        {hover && (
          <div
            className="pointer-events-none absolute z-10 flex items-center justify-center w-12 h-12 rounded-full bg-magma-400/90 text-volcanic-950 -translate-x-1/2 -translate-y-1/2"
            style={{ left: cursorPos.x, top: cursorPos.y }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zM11 8v6m-3-3h6"
              />
            </svg>
          </div>
        )}
      </button>
    </Reveal>
  );
}

function Lightbox({ photo, onClose }: { photo: Photo; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-volcanic-950/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute top-4 right-4 p-2 rounded-full bg-volcanic-800 hover:bg-volcanic-700 text-volcanic-100 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
        <p className="text-volcanic-300 text-center mt-4">{photo.caption}</p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeKey, setActiveKey] = useState(categories[0].key);
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);
  const activeCategory = categories.find((c) => c.key === activeKey) ?? categories[0];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Reveal>
        <h1 className="font-oswald text-4xl font-bold text-volcanic-50 mb-4">
          Galeri Kegiatan
        </h1>
        <p className="text-volcanic-300 leading-relaxed text-lg max-w-3xl mb-10">
          Dokumentasi kegiatan akuisisi data lapangan tim DiVolca di
          Pegunungan Dieng, meliputi survei gravity, magnetik, dan seismik.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="flex gap-6 border-b border-volcanic-800 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveKey(cat.key)}
              className={`relative pb-3 text-sm font-medium transition-colors ${
                activeKey === cat.key
                  ? "text-magma-400"
                  : "text-volcanic-400 hover:text-volcanic-200"
              }`}
            >
              {cat.label}
              {activeKey === cat.key && (
                <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-magma-400 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </Reveal>

      <div
        key={activeKey}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {activeCategory.photos.map((photo, i) => (
          <PhotoCard
            key={photo.src}
            photo={photo}
            delay={i * 60}
            onOpen={() => setLightboxPhoto(photo)}
          />
        ))}
      </div>

      {lightboxPhoto && (
        <Lightbox photo={lightboxPhoto} onClose={() => setLightboxPhoto(null)} />
      )}
    </section>
  );
}