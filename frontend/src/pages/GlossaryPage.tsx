import { useState, useEffect } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import glossaryData from "../data/glossary.json";

export default function GlossaryPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  // SPA edge case: React Router intercepts initial hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // IntersectionObserver: update activeSlug based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: "-120px 0px -60% 0px" },
    );

    const elements = document.querySelectorAll("[id]");
    elements.forEach((el) => {
      if (glossaryData.some((g) => g.slug === el.id)) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  if (glossaryData.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-oswald text-4xl font-bold text-volcanic-50 mb-8">
          Glosarium
        </h1>
        <p className="text-volcanic-400">Belum ada istilah yang tersedia.</p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <h1 className="font-oswald text-4xl font-bold text-volcanic-50 mb-4 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-magma-400" />
          Glosarium
        </h1>
        <p className="text-volcanic-300 leading-relaxed text-lg max-w-3xl">
          Kumpulan istilah geofisika dan vulkanologi yang digunakan dalam
          penelitian Pegunungan Dieng.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar — uses native <a href="#slug"> for browser-managed scroll */}
        <aside className="lg:w-64 shrink-0">
          <nav className="lg:sticky lg:top-24 space-y-1 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <h2 className="text-xs font-semibold text-volcanic-500 uppercase tracking-wider mb-3 lg:mb-4">
              Daftar Istilah
            </h2>
            {glossaryData.map((entry) => (
              <a
                key={entry.slug}
                href={`#${entry.slug}`}
                onClick={() => setActiveSlug(entry.slug)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSlug === entry.slug
                    ? "bg-volcanic-800 text-magma-400"
                    : "text-volcanic-400 hover:bg-volcanic-800 hover:text-volcanic-100"
                }`}
              >
                {entry.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0 divide-y divide-volcanic-800">
          {glossaryData.map((entry) => (
            <div
              key={entry.slug}
              id={entry.slug}
              className="scroll-mt-24 py-8 first:pt-0 last:pb-0"
            >
              <h2 className="font-oswald text-2xl font-semibold text-volcanic-50 mb-3">
                {entry.title}
              </h2>
              <p className="text-volcanic-300 leading-relaxed">
                {entry.content}
              </p>
              {entry.externalLink && (
                <a
                  href={entry.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm text-magma-400 hover:text-magma-500 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Baca selengkapnya
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
