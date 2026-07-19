import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Reveal } from "../components/ui/reveal";
import Container from "../components/ui/container";
import { Button } from "../components/ui/button";
import { X, ZoomIn } from "lucide-react";
import gallery from "../data/gallery";
import { useLanguage } from "../data/translations/LanguageContext";
import { t } from "../data/translations";

type Photo = { src: string; caption: string };

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
        className="group relative block w-full aspect-square overflow-hidden rounded-xl border-2 border-primary-10 cursor-none"
      >
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-accent/50  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <p className="absolute left-0 right-0 bottom-0 p-3 text-sm text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 line-clamp-2">
          {photo.caption}
        </p>

        {hover && (
          <div
            className="pointer-events-none absolute z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary-10/50 -translate-x-1/2 -translate-y-1/2"
            style={{ left: cursorPos.x, top: cursorPos.y }}
          >
            <ZoomIn />
          </div>
        )}
      </button>
    </Reveal>
  );
}

function Lightbox({
  photo,
  onClose,
  closeLabel,
}: {
  photo: Photo;
  onClose: () => void;
  closeLabel: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-page/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <Button
        onClick={onClose}
        aria-label={closeLabel}
        size="icon"
        variant="outline"
        className="absolute top-4 right-4 bg-white"
      >
        <X />
      </Button>
      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
        <p className=" text-white text-center mt-4">{photo.caption}</p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const { lang } = useLanguage();
  const [activeKey, setActiveKey] = useState(gallery[0].key);
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);
  const activeCategory = gallery.find((c) => c.key === activeKey) ?? gallery[0];

  return (
    <Container className=" bg-page flex flex-col items-center">
      <Reveal>
        <h1 className="font-fraunces text-4xl text-center font-bold text-title mb-4">
          {t.gallery.title[lang]}
        </h1>
        <p className="text-muted text-center max-w-3xl mb-10 mx-auto">
          {t.gallery.desc[lang]}
        </p>
      </Reveal>

      <Reveal delay={100}>
        <Tabs value={activeKey} onValueChange={setActiveKey} className=" mb-5">
          <TabsList className=" mx-auto">
            {gallery.map((category) => (
              <TabsTrigger key={category.key} value={category.key}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
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
        <Lightbox
          photo={lightboxPhoto}
          onClose={() => setLightboxPhoto(null)}
          closeLabel={t.gallery.close[lang]}
        />
      )}
    </Container>
  );
}
