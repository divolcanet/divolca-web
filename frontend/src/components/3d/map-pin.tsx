import { useMemo } from "react";
import * as THREE from "three";

function MapPin({ position = [0, 0, 0] as [number, number, number], color = "#ff4d4f", scale = 0.2 }) {
  const pinGeometry = useMemo(() => {
    const points = [];
    points.push(new THREE.Vector2(0, 0)); // tip
    points.push(new THREE.Vector2(0.15, 0.25));
    points.push(new THREE.Vector2(0.4, 0.55));
    points.push(new THREE.Vector2(0.5, 0.85));
    points.push(new THREE.Vector2(0.42, 1.15));
    points.push(new THREE.Vector2(0.2, 1.3));
    points.push(new THREE.Vector2(0, 1.32)); // top center
    return new THREE.LatheGeometry(points, 32);
  }, []);

  return (
    <group position={position} scale={scale}>
      {/* Pin body */}
      <mesh geometry={pinGeometry} castShadow>
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Hollow circle detail near the top */}
      <mesh position={[0, 0.95, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.22, 0.045, 16, 32]} />
        <meshStandardMaterial color="white" roughness={0.4} />
      </mesh>

      {/* Soft shadow disc at the base */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.3, 32]} />
        <meshBasicMaterial color="black" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export default MapPin;
