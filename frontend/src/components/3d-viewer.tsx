import { useEffect, useRef, useState, type ReactNode, Suspense } from "react";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { useGLTF, Html, Center } from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";
import { X } from "lucide-react";

type GLTFResult = GLTF & {
  nodes: { [key: string]: THREE.Object3D };
  materials: { [key: string]: THREE.Material };
};

interface MapModelProps {
  url: string;
  position?: [number, number, number];
  opacity?: number;
}

export function MapModel({ url, opacity = 1, position }: MapModelProps) {
  const { scene } = useGLTF(url) as GLTFResult;

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const mats = Array.isArray(child.material)
          ? child.material
          : [child.material];
        const isTransparent = opacity < 1;
        mats.forEach((mat) => {
          mat.roughness = 0.9;
          mat.metalness = 0.0;
          mat.transparent = isTransparent;
          mat.opacity = opacity;
          mat.depthWrite = !isTransparent;
        });
      }
    });
  }, [scene, opacity]);

  return (
    <Center position={position}>
      <primitive object={scene} scale={0.001} />
    </Center>
  );
}

interface HotspotProps {
  position: [number, number, number];
  title: string;
  description: string;
  markerId: number;
  activeMarker: number | null;
  setActiveMarker: (id: number | null) => void;
}

export function Hotspot({
  position,
  title,
  description,
  markerId,
  activeMarker,
  setActiveMarker,
}: HotspotProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const isOpen = activeMarker === markerId;

  const pulseSphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (pulseSphereRef.current) {
      const time = state.clock.getElapsedTime();

      const progress = (time * 1.2) % 1;

      const scale = 1 + progress * 3.0;
      pulseSphereRef.current.scale.set(scale, scale, scale);

      const material = pulseSphereRef.current
        .material as THREE.MeshBasicMaterial;
      material.opacity = (1 - progress) * 0.4;
    }
  });

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(false);
  };

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setActiveMarker(isOpen ? null : markerId);
  };

  return (
    <group position={position}>
      <mesh ref={pulseSphereRef} position={[0, 0.05, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial
          color={hovered ? "#ef4444" : "#f59e0b"}
          transparent
          depthWrite={false} // Mencegah bagian dalam bola memotong visual penanda inti
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        position={[0, 0.05, 0]}
      >
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color={hovered ? "#ef4444" : "#f59e0b"} />
      </mesh>

      {isOpen && (
        <Html position={[0, 0.3, 0]}>
          <style>{`
            .chat-bubble {
              position: relative;
              background: #ffffff;
              padding: 12px 16px;
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
              width: 250px;
              color: #1f2937;
              font-family: monospace;
              transform: translate(-50%, -100%);
              margin-top: -10px;
              pointer-events: auto;
            }
            .chat-bubble::after {
              content: '';
              position: absolute;
              bottom: -8px;
              left: 50%;
              transform: translateX(-50%);
              border-width: 8px 8px 0;
              border-style: solid;
              border-color: #ffffff transparent;
              display: block;
              width: 0;
            }
          `}</style>

          <div className="chat-bubble ">
            <button
              className="absolute top-2 right-2 text-lava-600 cursor-pointer hover:text-black"
              onClick={(e) => {
                e.stopPropagation();
                setActiveMarker(null);
              }}
            >
              <X />
            </button>
            <h3 className=" mr-1.5 text-lg font-bold pr-4">{title}</h3>
            <p className=" text-gray-600">{description}</p>
          </div>
        </Html>
      )}
    </group>
  );
}

export function Viewer3D({ children }: { children?: ReactNode }) {
  return (
    <Canvas
      camera={{
        position: [20, 10, 12],
        fov: 45,
        near: 0.1,
        far: 5000,
      }}
      shadows
      gl={{
        antialias: true,
        toneMapping: 3,
        toneMappingExposure: 1.5,
      }}
      style={{ background: "#122a25" }}
    >
      <fog attach="fog" args={["#091413", 40, 70]} />
      <hemisphereLight args={["#87ceeb", "#3a3a3a", 0.8]} />
      <directionalLight
        position={[10, 30, 10]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-10, -5, -10]} intensity={0.5} />
      <ambientLight intensity={0.5} />

      <Suspense fallback={<>Loading model...</>}>{children}</Suspense>

      <OrbitControls
        makeDefault
        autoRotate
        rotateSpeed={0.1}
        autoRotateSpeed={0.8}
        minDistance={10}
        maxDistance={75}
      />

      <EffectComposer>
        <Bloom
          intensity={0.2}
          luminanceThreshold={0.7}
          luminanceSmoothing={0}
        />
        <ToneMapping mode={3} exposure={1.0} />
      </EffectComposer>
    </Canvas>
  );
}
