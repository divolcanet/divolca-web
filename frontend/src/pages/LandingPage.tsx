import { Canvas } from "@react-three/fiber";
import HeroSection from "../components/HeroSection";
import { Hotspot, MapModel } from "../components/3d-viewer";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import type { MarkerData } from "../types";

export default function LandingPage() {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  // Data dengan anotasi tipe strict
  const markers: MarkerData[] = [
    {
      id: 1,
      position: [0, 3, 50],
      info: { title: "Area A", description: "Detail informasi area A." },
    },
    {
      id: 2,
      position: [-3, 1, 4],
      info: { title: "Area B", description: "Detail informasi area B." },
    },
  ];

  return (
    <>
      <HeroSection />
      <section id="viewer" className="bg-volcanic-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-volcanic-50 mb-4">
              Model 3D Pegunungan
            </h2>
            <p className="text-volcanic-400 max-w-2xl mx-auto">
              Jelajahi model tiga dimensi Pegunungan Dieng beserta data spasial
              gravitasi dan magnetik. Gunakan scrollbar di sisi kanan untuk
              melihat irisan data pada setiap kedalaman.
            </p>
          </div>

          <div className="rounded-xl border border-volcanic-700 bg-black relative">
            <div className=" aspect-video relative">
              <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 8, 5]} intensity={0.8} />
                <directionalLight position={[-3, 4, -3]} intensity={0.3} />

                {/* Load Peta GLB */}
                <MapModel url="/3d/mountain_terrain.glb" />

                {markers.map((marker) => (
                  <Hotspot
                    key={marker.id}
                    markerId={marker.id}
                    position={marker.position}
                    info={marker.info}
                    activeMarker={activeMarker}
                    setActiveMarker={setActiveMarker}
                  />
                ))}
                <OrbitControls makeDefault />
              </Canvas>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
