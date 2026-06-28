import React, { useRef, useState } from "react";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { useGLTF, OrbitControls, Html, Center } from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import * as THREE from "three";
import type { MarkerData, MarkerInfo } from "../types";

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

  // Ref untuk mengontrol animasi bola denyut 3D
  const pulseSphereRef = useRef<THREE.Mesh>(null);

  // Mengontrol animasi skala dan transparansi bola setiap frame
  useFrame((state) => {
    if (pulseSphereRef.current) {
      const time = state.clock.getElapsedTime();

      // Frekuensi denyut (kecepatan animasi)
      const progress = (time * 1.2) % 1;

      // Skala bola 3D membesar dari ukuran dasar ke arah sumbu X, Y, dan Z secara merata
      const scale = 1 + progress * 3.0;
      pulseSphereRef.current.scale.set(scale, scale, scale);

      // Transparansi memudar hingga hilang di ujung siklus
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
      {/* 1. Efek Denyut Bola 3D (3D Sphere Pulse) */}
      <mesh ref={pulseSphereRef} position={[0, 0.05, 0]}>
        {/* Menggunakan bola dengan segmen rendah untuk menjaga performa rendering */}
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial
          color={hovered ? "#ef4444" : "#f59e0b"}
          transparent
          wireframe={false} // Ubah ke true jika Anda ingin efek hologram/grid fiksi ilmiah
          depthWrite={false} // Krusial: Mencegah bagian dalam bola memotong visual penanda inti
          side={THREE.DoubleSide} // Merender sisi luar dan dalam bola agar efek volumetrik konsisten
        />
      </mesh>

      {/* 2. Titik Penanda Inti (Pusat Bola) */}
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

      {/* 3. Popup Informasi HTML (Tetap Berukuran Statis) */}
      {isOpen && (
        <Html position={[0, 0.3, 0]}>
          <style>{`
            .chat-bubble {
              position: relative;
              background: #ffffff;
              padding: 12px 16px;
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
              width: 220px;
              color: #1f2937;
              font-family: sans-serif;
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
            .chat-close-btn {
              position: absolute;
              top: 8px;
              right: 8px;
              background: none;
              border: none;
              color: #9ca3af;
              font-size: 16px;
              cursor: pointer;
              line-height: 1;
            }
            .chat-close-btn:hover {
              color: #4b5563;
            }
          `}</style>

          <div className="chat-bubble">
            <button
              className="chat-close-btn"
              onClick={(e) => {
                e.stopPropagation();
                setActiveMarker(null);
              }}
            >
              &times;
            </button>
            <h3
              style={{
                margin: "0 0 6px 0",
                fontSize: "14px",
                fontWeight: 600,
                paddingRight: "15px",
              }}
            >
              {info.title}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "12px",
                color: "#4b5563",
                lineHeight: "1.4",
              }}
            >
              {info.description}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
}
