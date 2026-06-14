import * as THREE from 'three'

interface CrossSectionPlaneProps {
  y: number;
  visible: boolean;
}

export default function CrossSectionPlane({ y, visible }: CrossSectionPlaneProps) {
  if (!visible) return null

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, y, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#f59e0b"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
      <lineSegments
        position={[0, y, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <edgesGeometry args={[new THREE.PlaneGeometry(10, 10)]} />
        <lineBasicMaterial color="#f59e0b" transparent opacity={0.6} />
      </lineSegments>
    </group>
  )
}
