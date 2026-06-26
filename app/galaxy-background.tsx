'use client'

import { useEffect, useRef } from 'react'

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let raf: number
    let disposed = false
    let renderer: any

    ;(async () => {
      const [THREE, { attribute, float, mul }] = await Promise.all([
        import('three/webgpu'),
        import('three/tsl'),
      ])

      if (disposed) return

      // ── Renderer ────────────────────────────────────────────────────────────
      renderer = new THREE.WebGPURenderer({ canvas, antialias: false, alpha: false })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
      renderer.setClearColor(0x0f172a, 1)

      try {
        await renderer.init()
      } catch {
        renderer.dispose()
        return
      }

      if (disposed) { renderer.dispose(); return }

      // ── Scene & Camera ───────────────────────────────────────────────────────
      const scene  = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        60, window.innerWidth / window.innerHeight, 0.1, 100,
      )
      camera.position.set(0, 3.5, 7)
      camera.lookAt(0, 0, 0)

      // ── Galaxy geometry ──────────────────────────────────────────────────────
      const COUNT    = 80_000
      const RADIUS   = 5.5
      const BRANCHES = 3
      const SPIN     = 1.3
      const SCATTER  = 0.22
      const POWER    = 3.5

      const positions = new Float32Array(COUNT * 3)
      const colors    = new Float32Array(COUNT * 3)
      const scales    = new Float32Array(COUNT)

      // Site palette: near-white core → sky-blue arms → deep-blue edges
      const cCore  = new THREE.Color('#93C5FD') // blue-300
      const cMid   = new THREE.Color('#60A5FA') // blue-400
      const cOuter = new THREE.Color('#1e3a8a') // blue-900

      for (let i = 0; i < COUNT; i++) {
        const i3  = i * 3
        const r   = Math.random() * RADIUS
        const ang = r * SPIN
        const arm = ((i % BRANCHES) / BRANCHES) * Math.PI * 2

        const rnd = (flat = 1) =>
          Math.pow(Math.random(), POWER) * (Math.random() < 0.5 ? 1 : -1) * SCATTER * r * flat

        positions[i3]     = Math.cos(arm + ang) * r + rnd()
        positions[i3 + 1] = rnd(0.35)   // flat disc
        positions[i3 + 2] = Math.sin(arm + ang) * r + rnd()

        const t = r / RADIUS
        const c = t < 0.35
          ? cCore.clone().lerp(cMid,   t / 0.35)
          : cMid.clone().lerp(cOuter, (t - 0.35) / 0.65)

        colors[i3] = c.r; colors[i3 + 1] = c.g; colors[i3 + 2] = c.b
        scales[i]  = 0.3 + Math.random() * 0.7
      }

      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geo.setAttribute('color',    new THREE.BufferAttribute(colors,    3))
      geo.setAttribute('aScale',   new THREE.BufferAttribute(scales,    1))

      // ── TSL PointsNodeMaterial ───────────────────────────────────────────────
      const mat = new THREE.PointsNodeMaterial({
        vertexColors:    true,
        transparent:     true,
        blending:        THREE.AdditiveBlending,
        depthWrite:      false,
        sizeAttenuation: true,
      })
      // Per-particle size driven by aScale attribute via TSL
      mat.sizeNode = mul(attribute('aScale', 'float'), float(3.5))

      const galaxy = new THREE.Points(geo, mat)
      scene.add(galaxy)

      // ── Resize ───────────────────────────────────────────────────────────────
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', onResize)

      // ── Animation loop ───────────────────────────────────────────────────────
      const clock = new THREE.Clock()
      const tick  = () => {
        if (disposed) return
        raf = requestAnimationFrame(tick)
        galaxy.rotation.y = clock.getElapsedTime() * 0.025
        renderer.render(scene, camera)
      }
      tick()

      // Store full cleanup for the effect teardown
      ;(canvas as any).__galaxyCleanup = () => {
        window.removeEventListener('resize', onResize)
        cancelAnimationFrame(raf)
        geo.dispose()
        mat.dispose()
        renderer.dispose()
      }
    })()

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      ;(canvas as any).__galaxyCleanup?.()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none opacity-[0.40]"
    />
  )
}
