import { useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TerrainMesh from "./TerrainMesh";
import CrossSectionPlane from "./CrossSectionPlane";
import DepthScrollbar from "./DepthScrollbar";
import DepthPopup from "./DepthPopup";
import spatialData from "../data/spatial.json";
import type { SpatialLayer, DepthSlice } from "../types";

const depthToY = (index: number, total: number): number => {
  const min = -2;
  const max = 2;
  return max - (index / (total - 1)) * (max - min);
};

export default function Viewer3D() {
  const [layers, setLayers] = useState<SpatialLayer[]>(spatialData.layers);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const slices = spatialData.depthSlices as DepthSlice[];
  const activeIndex = selectedIndex ?? hoveredIndex;

  const toggleLayer = (id: string) => {
    setLayers((prev) =>
      prev.map((layer) =>
        layer.id === id ? { ...layer, visible: !layer.visible } : layer,
      ),
    );
  };

  const handleDepthClick = useCallback((index: number) => {
    setSelectedIndex((prev) => (prev === index ? null : index));
  }, []);

  const handlePopupClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  return (
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

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {layers.map((layer) => (
            <button
              key={layer.id}
              type="button"
              onClick={() => toggleLayer(layer.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                layer.visible
                  ? "bg-volcanic-700 text-volcanic-50 ring-2 ring-offset-2 ring-offset-volcanic-900"
                  : "bg-volcanic-800 text-volcanic-500"
              }`}
              style={{
                ...(layer.visible
                  ? ({ "--tw-ring-color": layer.color } as React.CSSProperties)
                  : {}),
              }}
              aria-pressed={layer.visible}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: layer.visible ? layer.color : "#5a5a7a",
                }}
              />
              {layer.name}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-volcanic-700 bg-volcanic-950 relative">
          <div className=" aspect-video relative">
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 8, 5]} intensity={0.8} />
              <directionalLight position={[-3, 4, -3]} intensity={0.3} />
              {layers.find((l) => l.id === "mountain")?.visible && (
                <TerrainMesh />
              )}
              {layers.find((l) => l.id === "gravity")?.visible && (
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
                  <planeGeometry args={[10, 10]} />
                  <meshStandardMaterial
                    color="#dc2626"
                    transparent
                    opacity={0.4}
                  />
                </mesh>
              )}
              {layers.find((l) => l.id === "magnetic")?.visible && (
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
                  <planeGeometry args={[10, 10]} />
                  <meshStandardMaterial
                    color="#3b82f6"
                    transparent
                    opacity={0.4}
                  />
                </mesh>
              )}
              {activeIndex !== null && (
                <CrossSectionPlane
                  y={depthToY(activeIndex, slices.length)}
                  visible={true}
                />
              )}
              <OrbitControls makeDefault />
            </Canvas>

            <DepthScrollbar
              slices={slices}
              activeIndex={activeIndex}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
              onClick={handleDepthClick}
            />

            {activeIndex !== null && (
              <DepthPopup
                slice={slices[activeIndex]}
                index={activeIndex}
                totalSlices={slices.length}
                onClose={selectedIndex !== null ? handlePopupClose : undefined}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
