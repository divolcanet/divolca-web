import { useMemo } from 'react'
import * as THREE from 'three'

export default function TerrainMesh() {
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(10, 10, 128, 128)
    const pos = geo.attributes.position.array as Float32Array

    for (let i = 0; i < pos.length; i += 3) {
      const x = pos[i]
      const y = pos[i + 1]

      const dist = Math.sqrt(x * x + y * y)
      const falloff = Math.max(0, 1 - dist / 5)

      let height = 0
      height += Math.sin(x * 0.8) * Math.cos(y * 0.6) * 1.2
      height += Math.sin(x * 1.5 + y * 0.9) * 0.5
      height += Math.cos(x * 0.3 - y * 1.2) * 0.8
      height += Math.sin(x * 2.1 + y * 1.7) * 0.2

      height *= falloff * falloff

      pos[i + 2] = height
    }

    geo.computeVertexNormals()
    return geo
  }, [])

  const colors = useMemo(() => {
    const geo = geometry.clone()
    const pos = geo.attributes.position.array as Float32Array
    const count = pos.length / 3
    const colorArray = new Float32Array(count * 3)

    const lowColor = new THREE.Color('#2d2d44')
    const midColor = new THREE.Color('#7a5a2a')
    const highColor = new THREE.Color('#f59e0b')
    const peakColor = new THREE.Color('#dc2626')

    for (let i = 0; i < count; i++) {
      const height = pos[i * 3 + 2]
      const normalizedHeight = (height + 2) / 4

      let color: THREE.Color
      if (normalizedHeight < 0.33) {
        color = lowColor.clone().lerp(midColor, normalizedHeight / 0.33)
      } else if (normalizedHeight < 0.66) {
        color = midColor.clone().lerp(highColor, (normalizedHeight - 0.33) / 0.33)
      } else {
        color = highColor.clone().lerp(peakColor, (normalizedHeight - 0.66) / 0.34)
      }

      colorArray[i * 3] = color.r
      colorArray[i * 3 + 1] = color.g
      colorArray[i * 3 + 2] = color.b
    }

    geo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3))
    return geo
  }, [geometry])

  return (
    <mesh geometry={colors} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial vertexColors side={THREE.DoubleSide} />
    </mesh>
  )
}
