import { ArrowDown, Rotate3D, ArrowRight } from "lucide-react";
import {
  useState,
  useEffect,
  type ReactElement,
  type HTMLAttributes,
} from "react";
import bgImage from "../assets/images/landing-cover.jpeg";
import sukunir from "../assets/dieng/bukit-sikunir.jpg";
import { buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";
import { Reveal } from "../components/ui/reveal";
import Container from "../components/ui/container";
import Citation from "../components/Citation";
import { SpatialMain } from "../components/SpatialMain";
import { MapDieng } from "../components/MapDieng";

type CTA = {
  text: string;
  href: string;
  icon: ReactElement;
};

type HeroSlide = {
  bg: string;
  title: string;
  highlight?: string;
  desc: string;
  cta: CTA;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

const heroSlides: HeroSlide[] = [
  {
    bg: bgImage,
    title: "Informasi Geospasial",
    highlight: "Kompleks Vulkanik Dieng",
    desc: "Penelitian geofisika di Pegunungan Dieng menghasilkan data magnetik dan gravitasi bawah permukaan yang memberikan wawasan penting tentang struktur vulkanik dan potensi mitigasi bencana di kawasan tersebut.",
    className: " mt-48",
    cta: {
      text: "Jelajahi Model 3D",
      href: "#3d-view",
      icon: <Rotate3D className="w-7 h-7" />,
    },
  },
  {
    bg: sukunir,
    title: "Destinasi Wisata",
    highlight: "Pegunungan Dieng",
    desc: "Kawasan Dieng merupakan salah satu destinasi wisata geologi dan budaya utama di Jawa Tengah.",
    className: " mt-48 text-white",
    cta: {
      text: "Pelajari Lebih Lanjut",
      href: "/tentang-dieng",
      icon: <ArrowRight className="w-7 h-7" />,
    },
  },
];

const LandingPage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-svh overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {heroSlides.map((slide, i) => {
            const isActive = current === i;
            return (
              <div key={i} className="relative w-full h-svh shrink-0">
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.bg}
                    alt={slide.title}
                    className="w-full min-h-full h-256 object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 z-1" />

                <div
                  className={cn(
                    "relative z-10 max-w-5xl mx-auto px-6 text-center space-y-5",
                    slide.className,
                  )}
                >
                  <Reveal delay={300} visible={isActive}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-fraunces">
                      {slide.title}{" "}
                      {slide.highlight && (
                        <>
                          <br />
                          <span className="text-transparent bg-clip-text bg-primary-10 underline">
                            {slide.highlight}
                          </span>
                        </>
                      )}
                    </h1>
                  </Reveal>

                  <Reveal delay={400} visible={isActive}>
                    <p>{slide.desc}</p>
                  </Reveal>

                  <Reveal delay={500} visible={isActive}>
                    <a
                      className={buttonVariants({ size: "lg" })}
                      href={slide.cta.href}
                    >
                      {slide.cta.text}
                      {slide.cta.icon}
                    </a>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                i === current
                  ? "bg-primary-10 w-6"
                  : "bg-white/50 w-2.5 hover:bg-white/80",
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "absolute bottom-30 left-1/2 -translate-x-1/2 z-10 smooth-bounce bg-white",
          )}
        >
          <ArrowDown />
        </div>
      </section>

      <Container className=" bg-page" id="3d-view">
        <Reveal>
          <h1 className="font-fraunces text-4xl font-bold text-title text-center mb-8">
            Model 3D Peta Spasial
          </h1>
          <p className="text-center leading-relaxed mb-12 mx-auto">
            Jelajahi model spasial 3D peta data gaya berat (gravity) dan
            geomagnetik Kompleks Vulkanik Dieng. Gunakan scrollbar di sisi kanan
            untuk melihat irisan data pada setiap kedalaman.
          </p>
        </Reveal>

        <SpatialMain />
      </Container>

      <Container className=" bg-secondary" id="3d-view">
        <Reveal>
          <h1 className="font-fraunces text-4xl font-bold text-title text-center mb-8">
            Titik Penelitian Kami
          </h1>
          <p className="text-center leading-relaxed mb-12 mx-auto">
            Jelajahi model spasial 3D peta data gaya berat (gravity) dan
            geomagnetik Kompleks Vulkanik Dieng. Gunakan scrollbar di sisi kanan
            untuk melihat irisan data pada setiap kedalaman.
          </p>
        </Reveal>
        <MapDieng />
      </Container>

      <Container className=" bg-page ">
        <Citation />
      </Container>
    </>
  );
};

export default LandingPage;
