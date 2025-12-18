import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'

function Grid() {
  const gridRef = useRef()
  
  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.rotation.z = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <mesh ref={gridRef} position={[0, 0, -5]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshBasicMaterial 
        color="#4f46e5" 
        wireframe 
        transparent 
        opacity={0.1}
      />
    </mesh>
  )
}

function Particles() {
  const particlesRef = useRef()
  const count = 100
  
  const positions = useRef(new Float32Array(count * 3))
  
  useEffect(() => {
    for (let i = 0; i < count * 3; i++) {
      positions.current[i] = (Math.random() - 0.5) * 20
    }
  }, [])

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#6366f1" transparent opacity={0.6} />
    </points>
  )
}

const TechBackground = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return null
  }

  return (
    <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Grid />
        <Particles />
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      </Canvas>
    </div>
  )
}

export default TechBackground

