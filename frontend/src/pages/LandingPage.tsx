import { ArrowDown, Rotate3D } from "lucide-react";
import bgImage from "../assets/images/landing-cover.jpeg";
import { buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";
import { Reveal } from "../components/ui/reveal";
import Container from "../components/ui/container";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex justify-center overflow-hidden">
        {/* Background Image Container with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Hero Background"
            className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-slate-900/30 compression mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-40 space-y-5">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-fraunces">
              Informasi Geospasial <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-25 to-primary-10 underline">
                Kompleks Vulkanik Dieng
              </span>
            </h1>
          </Reveal>

          <Reveal delay={500}>
            <p>
              Penelitian geofisika di Pegunungan Dieng menghasilkan data
              magnetik dan gravitasi bawah permukaan yang memberikan wawasan
              penting tentang struktur vulkanik dan potensi mitigasi bencana di
              kawasan tersebut.
            </p>
          </Reveal>
          <Reveal delay={800}>
            <NavLink className={buttonVariants({ size: "lg" })} to="/#3d-view">
              Jelajahi Model 3D
              <Rotate3D className="w-7 h-7" />
            </NavLink>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce bg-white",
          )}
        >
          <ArrowDown />
        </div>
      </section>

      <Container className=" bg-primary-fg">
        <Reveal className=" text-center">
          <h1 className="font-fraunces text-4xl font-bold text-primary-75 mb-4">
            Model 3D Peta Spasial
          </h1>
          <p className=" text-lg max-w-3xl mb-10">
            Jelajahi model spasial 3D peta data gaya berat (gravity) dan
            geomagnetik Kompleks Vulkanik Dieng. Gunakan scrollbar di sisi kanan
            untuk melihat irisan data pada setiap kedalaman.
          </p>
        </Reveal>
      </Container>
    </>
  );
};

export default LandingPage;
