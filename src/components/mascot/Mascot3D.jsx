import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Robot from './Robot'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export default function Mascot3D() {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className="w-16 h-16 flex items-center justify-center">
        <div className="text-4xl">🤖</div>
      </div>
    )
  }

  return (
    <div className="w-20 h-20">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} />
        <Suspense fallback={null}>
          <Robot />
        </Suspense>
        <OrbitControls
          enabled={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}

