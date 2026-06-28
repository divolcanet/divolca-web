import { useRef, useState } from "react";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { useGLTF, Html, Center } from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import * as THREE from "three";
import type { MarkerInfo } from "../types";
import { X } from "lucide-react";

// Tipe untuk hasil load GLTF
type GLTFResult = GLTF & {
  nodes: { [key: string]: THREE.Object3D };
  materials: { [key: string]: THREE.Material };
};

interface MapModelProps {
  url: string;
}

export function MapModel({ url }: MapModelProps) {
  // Cast hasil useGLTF ke GLTFResult jika memerlukan akses node spesifik
  const { scene } = useGLTF(url) as GLTFResult;
  return (
    <Center>
      {" "}
      <primitive object={scene} />{" "}
    </Center>
  );
}

interface HotspotProps {
  position: [number, number, number];
  info: MarkerInfo;
  markerId: number;
  activeMarker: number | null;
  setActiveMarker: (id: number | null) => void;
}

export function Hotspot({
  position,
  info,
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
        <meshStandardMaterial
          color={hovered ? "#ef4444" : "#f59e0b"}
          roughness={0.3}
        />
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
            <h3 className=" mr-1.5 text-lg font-bold pr-4">{info.title}</h3>
            <p className=" text-gray-600">{info.description}</p>
          </div>
        </Html>
      )}
    </group>
  );
}
