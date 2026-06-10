import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─── Neural Network ─────────────────────────────────────────────
   FIX 1: Reduced node count 140→80.
   FIX 2: Limited connections per node (max 3) — the old O(n²) loop
           was generating ~3000+ line segments; now capped at ~240.
──────────────────────────────────────────────────────────────── */
function NeuralNodes({ count = 80 }) {
  const mesh = useRef()
  const linesRef = useRef()

  const { positions, linePositions } = useMemo(() => {
    const pos = []
    const nodes = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 28
      const y = (Math.random() - 0.5) * 18
      const z = (Math.random() - 0.5) * 10
      pos.push(x, y, z)
      nodes.push([x, y, z])
    }

    // Max 3 connections per node to avoid O(n²) explosion
    const linePos = []
    const threshold = 6
    const maxConn = 3
    for (let i = 0; i < nodes.length; i++) {
      let conn = 0
      for (let j = i + 1; j < nodes.length && conn < maxConn; j++) {
        const dx = nodes[i][0] - nodes[j][0]
        const dy = nodes[i][1] - nodes[j][1]
        const dz = nodes[i][2] - nodes[j][2]
        if (dx * dx + dy * dy + dz * dz < threshold * threshold) {
          linePos.push(...nodes[i], ...nodes[j])
          conn++
        }
      }
    }

    return {
      positions: new Float32Array(pos),
      linePositions: new Float32Array(linePos),
    }
  }, [count])

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    return geo
  }, [linePositions])

  // FIX 3: slow rotation only — no per-frame recalculations
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (mesh.current) mesh.current.rotation.y = t * 0.03
    if (linesRef.current) linesRef.current.rotation.y = t * 0.03
  })

  return (
    <group>
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial color="#00b4ff" transparent opacity={0.1} depthWrite={false} />
      </lineSegments>
      <Points ref={mesh} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00b4ff" size={0.1} sizeAttenuation depthWrite={false} opacity={0.8} />
      </Points>
    </group>
  )
}

/* ─── Ambient particles ─────────────────────────────────────────
   FIX 4: Reduced from 600 → 300 particles
──────────────────────────────────────────────────────────────── */
function AmbientParticles() {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(300 * 3)
    for (let i = 0; i < 300; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 50
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40
      arr[i * 3 + 2] = (Math.random() - 0.5) * 25
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.012
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#00fff0" size={0.03} sizeAttenuation depthWrite={false} opacity={0.35} />
    </Points>
  )
}

/* ─── Data orbs ─────────────────────────────────────────────────
   FIX 5: Reduced from 18 → 8 orbs
──────────────────────────────────────────────────────────────── */
function DataOrbs() {
  const groupRef = useRef()
  const orbData = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      position: [(Math.random() - 0.5) * 22, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 8],
      speed: 0.3 + Math.random() * 0.4,
      offset: Math.random() * Math.PI * 2,
      scale: 0.05 + Math.random() * 0.1,
      color: i % 3 === 0 ? '#7c3aff' : i % 3 === 1 ? '#00b4ff' : '#00fff0',
    })), [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    groupRef.current?.children.forEach((child, i) => {
      const d = orbData[i]
      child.position.y = orbData[i].position[1] + Math.sin(t * d.speed + d.offset) * 0.5
    })
  })

  return (
    <group ref={groupRef}>
      {orbData.map((orb, i) => (
        <mesh key={i} position={orb.position} scale={orb.scale}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={orb.color} emissive={orb.color} emissiveIntensity={1.5} transparent opacity={0.7} wireframe={i % 2 === 0} />
        </mesh>
      ))}
    </group>
  )
}

/* ─── Camera scroll controller ──────────────────────────────────
   FIX 6: Removed per-trigger cleanup leak — single effect
──────────────────────────────────────────────────────────────── */
function CameraController() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 14)
    const sections = ['#hero','#about','#education','#experience','#projects','#skills','#extras','#contact']
    const positions = [
      { x: 0,  y: 0,  z: 14 }, { x: -3, y: 1,  z: 12 },
      { x: 3,  y: -2, z: 13 }, { x: -2, y: 1,  z: 12 },
      { x: 2,  y: -1, z: 11 }, { x: -1, y: 2,  z: 12 },
      { x: 3,  y: 0,  z: 13 }, { x: 0,  y: 0,  z: 13 },
    ]
    const triggers = []
    sections.forEach((sel, i) => {
      const el = document.querySelector(sel)
      if (!el) return
      triggers.push(ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter:     () => gsap.to(camera.position, { ...positions[i], duration: 1.4, ease: 'power3.inOut' }),
        onEnterBack: () => gsap.to(camera.position, { ...positions[i], duration: 1.4, ease: 'power3.inOut' }),
      }))
    })
    return () => triggers.forEach(t => t.kill())
  }, [camera])

  return null
}

/* ─── Root Canvas ────────────────────────────────────────────────
   FIX 7: dpr capped at 1.5, antialias off on low-dpr screens
──────────────────────────────────────────────────────────────── */
export default function SceneCanvas() {
  return (
    <div id="canvas-wrapper">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 60 }}
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        style={{ background: 'linear-gradient(180deg, #020817 0%, #050f24 100%)' }}
      >
        <ambientLight intensity={0.3} color="#1a2a4a" />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#00b4ff" />
        <pointLight position={[-10, -8, -5]} intensity={0.6} color="#7c3aff" />
        <AmbientParticles />
        <NeuralNodes count={80} />
        <DataOrbs />
        <CameraController />
      </Canvas>
    </div>
  )
}
