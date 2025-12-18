import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useMascot } from './MascotContext'

export default function Robot() {
  const groupRef = useRef()
  const rightArmRef = useRef()
  const { state } = useMascot()

  // Idle float animation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime()
      
      if (state === 'idle') {
        groupRef.current.position.y = Math.sin(time * 0.8) * 0.1
        groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.1
      } else if (state === 'celebrate') {
        groupRef.current.rotation.y += 0.1
        groupRef.current.position.y = Math.sin(time * 5) * 0.2
      }
    }

    // Wave animation
    if (rightArmRef.current) {
      if (state === 'wave') {
        const time = clock.getElapsedTime()
        rightArmRef.current.rotation.z = Math.sin(time * 4) * 0.8
      } else {
        rightArmRef.current.rotation.z = 0
      }
    }
  })

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial
          color="#6366f1"
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Visor */}
      <mesh position={[0, 1.2, 0.42]}>
        <boxGeometry args={[0.6, 0.3, 0.05]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.15, 1.25, 0.45]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh position={[0.15, 1.25, 0.45]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 1.7, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
      <mesh position={[0, 1.85, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.9, 1, 0.7]} />
        <meshStandardMaterial
          color="#4f46e5"
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.6, 0.5, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
        <meshStandardMaterial
          color="#6366f1"
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Right Arm (waving) */}
      <group ref={rightArmRef} position={[0.6, 0.5, 0]}>
        <mesh rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      </group>

      {/* Legs */}
      <mesh position={[-0.25, -0.3, 0]}>
        <boxGeometry args={[0.2, 0.4, 0.2]} />
        <meshStandardMaterial
          color="#4338ca"
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0.25, -0.3, 0]}>
        <boxGeometry args={[0.2, 0.4, 0.2]} />
        <meshStandardMaterial
          color="#4338ca"
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
    </group>
  )
}

