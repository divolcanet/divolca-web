import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import glossaryData from "../data/glossary";
import Container from "../components/ui/container";
import { Reveal } from "../components/ui/reveal";
import { cn } from "../lib/utils";
import { buttonVariants } from "../components/ui/button";

export default function GlossaryPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

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

  return (
    <Container className=" bg-page">
      <Reveal>
        <h1 className="font-fraunces text-4xl font-bold text-title text-center mb-8">
          Glosarium
        </h1>
        <p className="text-center leading-relaxed mb-12 mx-auto">
          Kumpulan istilah geofisika dan vulkanologi yang digunakan dalam
          penelitian Pegunungan Dieng.
        </p>
      </Reveal>

      {!glossaryData ? (
        <p className="text-volcanic-400">Belum ada istilah yang tersedia.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar — uses native <a href="#slug"> for browser-managed scroll */}
          <aside className="lg:w-64 shrink-0">
            <nav className=" p-4 lg:sticky lg:top-24 space-y-1 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto rounded-xl bg-card">
              <h2 className="font-fraunces font-bold  mb-3 lg:mb-4">
                Daftar Istilah
              </h2>
              {glossaryData.map((entry) => (
                <a
                  key={entry.slug}
                  href={`#${entry.slug}`}
                  onClick={() => setActiveSlug(entry.slug)}
                  className={cn(
                    buttonVariants({
                      variant: activeSlug === entry.slug ? "default" : "link",
                    }),
                    "w-full justify-start",
                  )}
                >
                  {entry.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <Reveal delay={300}>
            <div className="flex-1 min-w-0 divide-y divide-muted">
              {glossaryData.map((entry) => (
                <div
                  key={entry.slug}
                  id={entry.slug}
                  className="scroll-mt-16 py-8 first:pt-0 last:pb-0"
                >
                  <h2 className=" font-fraunces text-2xl font-semibold text-primary-75 mb-3">
                    {entry.title}
                  </h2>
                  <p>{entry.content}</p>
                  {entry.externalLink && (
                    <a
                      href={entry.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "link" }),
                        "font-normal p-0",
                      )}
                    >
                      <ExternalLink />
                      Baca selengkapnya
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      )}
    </Container>
  );
}
