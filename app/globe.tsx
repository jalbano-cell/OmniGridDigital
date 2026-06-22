'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Fibonacci sphere — evenly distributes N points on a unit sphere
function fibonacciSphere(n: number): Float32Array {
  const positions = new Float32Array(n * 3)
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = golden * i
    positions[i * 3]     = Math.cos(theta) * r
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = Math.sin(theta) * r
  }
  return positions
}

export function Globe() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    const W = el.clientWidth
    const H = el.clientHeight

    // ── Renderer ─────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    // ── Scene / camera ────────────────────────────────────────────────────────
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100)
    camera.position.z = 3.6

    // ── Group (everything rotates together) ───────────────────────────────────
    const group = new THREE.Group()
    scene.add(group)

    // ── Wireframe sphere ──────────────────────────────────────────────────────
    const sphereGeo = new THREE.IcosahedronGeometry(1, 4)
    const sphereMat = new THREE.MeshBasicMaterial({
      color:       0x9e7f28,
      wireframe:   true,
      transparent: true,
      opacity:     0.09,
    })
    group.add(new THREE.Mesh(sphereGeo, sphereMat))

    // ── Surface dots (Fibonacci distribution) ────────────────────────────────
    const DOT_COUNT = 320
    const dotPositions = fibonacciSphere(DOT_COUNT)
    const dotGeo = new THREE.BufferGeometry()
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3))
    const dotMat = new THREE.PointsMaterial({
      color:       0xddb94a,
      size:        0.022,
      transparent: true,
      opacity:     0.75,
      sizeAttenuation: true,
    })
    const dots = new THREE.Points(dotGeo, dotMat)
    group.add(dots)

    // ── Connection arcs ───────────────────────────────────────────────────────
    const ARC_COUNT = 38
    const arcGroup  = new THREE.Group()
    group.add(arcGroup)

    for (let i = 0; i < ARC_COUNT; i++) {
      const a = Math.floor(Math.random() * DOT_COUNT) * 3
      const b = Math.floor(Math.random() * DOT_COUNT) * 3
      const p1  = new THREE.Vector3(dotPositions[a],   dotPositions[a+1], dotPositions[a+2])
      const p2  = new THREE.Vector3(dotPositions[b],   dotPositions[b+1], dotPositions[b+2])
      const mid = p1.clone().add(p2).multiplyScalar(0.5).normalize().multiplyScalar(1.28)
      const curve  = new THREE.QuadraticBezierCurve3(p1, mid, p2)
      const arcGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(48))
      const arcMat = new THREE.LineBasicMaterial({
        color:       0xc9a840,
        transparent: true,
        opacity:     0.22,
      })
      arcGroup.add(new THREE.Line(arcGeo, arcMat))
    }

    // ── Saturn rings ──────────────────────────────────────────────────────────
    const RING_TILT = Math.PI * 0.36

    const innerRingGeo = new THREE.TorusGeometry(1.52, 0.055, 2, 140)
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0xddb94a, transparent: true, opacity: 0.18,
    })
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat)
    innerRing.rotation.x = RING_TILT
    group.add(innerRing)

    const midRingGeo = new THREE.TorusGeometry(1.82, 0.03, 2, 140)
    const midRingMat = new THREE.MeshBasicMaterial({
      color: 0xc9a840, transparent: true, opacity: 0.10,
    })
    const midRing = new THREE.Mesh(midRingGeo, midRingMat)
    midRing.rotation.x = RING_TILT
    group.add(midRing)

    const outerRingGeo = new THREE.TorusGeometry(2.08, 0.018, 2, 140)
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x9e7f28, transparent: true, opacity: 0.06,
    })
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat)
    outerRing.rotation.x = RING_TILT
    group.add(outerRing)

    // ── Mouse parallax ────────────────────────────────────────────────────────
    let targetX = 0
    let targetY = 0
    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      targetX = ((e.clientX - rect.left) / rect.width  - 0.5) *  0.5
      targetY = ((e.clientY - rect.top)  / rect.height - 0.5) * -0.3
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Animation loop ────────────────────────────────────────────────────────
    let raf: number
    const clock = new THREE.Clock()

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Base auto-rotation
      group.rotation.y += 0.0025

      // Smooth mouse tilt
      group.rotation.x += (targetY - group.rotation.x) * 0.04
      group.rotation.z += (targetX * 0.12 - group.rotation.z) * 0.04

      // Subtle ring wobble
      innerRing.rotation.z = Math.sin(t * 0.22) * 0.04
      midRing.rotation.z   = Math.sin(t * 0.18 + 1) * 0.03

      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}
