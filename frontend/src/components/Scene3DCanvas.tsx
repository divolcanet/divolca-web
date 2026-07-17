import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";
import { Suspense, type ReactNode } from "react";

export function Scene3DCanvas({ children }: { children?: ReactNode }) {
  return (
    <Canvas
      camera={{ position: [8, 6, 8], fov: 45 }}
      shadows
      gl={{
        antialias: true,
        toneMapping: 3,
        toneMappingExposure: 1.2,
      }}
      style={{ background: "#000" }}
    >
      <fog attach="fog" args={["#091413", 15, 30]} />
      <hemisphereLight args={["#87ceeb", "#3a3a3a", 0.6]} />
      <directionalLight
        position={[8, 12, 4]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight intensity={0.3} />

      <Suspense fallback={null}>{children}</Suspense>

      <OrbitControls makeDefault />

      <EffectComposer>
        <Bloom
          intensity={0.3}
          luminanceThreshold={0.6}
          luminanceSmoothing={0.7}
        />
        <ToneMapping mode={3} exposure={1.0} />
      </EffectComposer>
    </Canvas>
  );
}
