import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Reveal } from "../components/ui/reveal";
import Container from "../components/ui/container";
import Lightbox from "../components/Lightbox";
import { ZoomIn } from "lucide-react";
import galleryProjects, { type Photo } from "../data/gallery";
import { useLanguage } from "../data/translations/LanguageContext";
import { t } from "../data/translations";

function PhotoCard({ photo, delay, onOpen }: { photo: Photo; delay: number; onOpen: () => void }) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

export default function GalleryPage() {
  const { lang } = useLanguage();
  
  // State untuk Proyek (default: Proyek 2026)
  const [activeProjectId, setActiveProjectId] = useState<string>(galleryProjects[1]?.id ?? galleryProjects[0].id);
  
  const activeProject = galleryProjects.find((p) => p.id === activeProjectId) ?? galleryProjects[0];

  // State untuk Kategori (Gravity, Magnetik, dll.)
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>(activeProject.categories[0].key);

  const activeCategory =
    activeProject.categories.find((c) => c.key === activeCategoryKey) ?? activeProject.categories[0];

  const handleProjectChange = (projectId: string) => {
    setActiveProjectId(projectId);
    const newProject = galleryProjects.find((p) => p.id === projectId);
    if (newProject && newProject.categories.length > 0) {
      setActiveCategoryKey(newProject.categories[0].key);
    }
  };

  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  return (
    <Container className="bg-page flex flex-col items-center">
      <Reveal>
        <h1 className="font-fraunces text-4xl text-center font-bold text-title mb-4">
          {t.gallery.title[lang]}
        </h1>
        <p className="text-muted text-center max-w-3xl mb-8 mx-auto">
          {t.gallery.desc[lang]}
        </p>
      </Reveal>

      {/* Tab 1: Pilihan Proyek/Tahun */}
      <Reveal delay={100}>
        <Tabs value={activeProjectId} onValueChange={handleProjectChange} className="mb-4">
          <TabsList className="mx-auto flex flex-wrap justify-center gap-2">
            {galleryProjects.map((project) => (
              <TabsTrigger key={project.id} value={project.id}>
                {project.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </Reveal>

      {/* Tab 2: Pilihan Kategori Survei (Gravity, Magnetik, Seismic, Drone, Kegiatan) */}
      <Reveal delay={150}>
        <Tabs value={activeCategoryKey} onValueChange={setActiveCategoryKey} className="mb-8">
          <TabsList className="mx-auto flex flex-wrap justify-center gap-2">
            {activeProject.categories.map((category) => (
              <TabsTrigger key={category.key} value={category.key}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </Reveal>

      {/* Grid Foto */}
      <div key={`${activeProjectId}-${activeCategoryKey}`} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {activeCategory.photos.map((photo, i) => (
          <PhotoCard
            key={photo.src}
            photo={photo}
            delay={i * 50}
            onOpen={() => setLightboxPhoto(photo)}
          />
        ))}
      </div>

      {lightboxPhoto && (
        <Lightbox
          src={lightboxPhoto.src}
          caption={lightboxPhoto.caption}
          onClose={() => setLightboxPhoto(null)}
          closeLabel={t.gallery.close[lang]}
        />
      )}
    </Container>
  );
}