<template>
  <div ref="canvasContainer" class="three-container"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref(null)
let scene, camera, renderer, animationId
let particleGroups = []
let mouseX = 0, mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2
let targetZ = 800 // Initial camera zoom
let currentTheme = 'dark'

// Generate a procedural soft circular gradient for glowing particles
const createParticleTexture = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 128
  const ctx = canvas.getContext('2d')

  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
  gradient.addColorStop(0, 'rgba(197, 160, 89, 1)')     // Solid gold core #c5a059
  gradient.addColorStop(0.2, 'rgba(197, 160, 89, 0.8)')
  gradient.addColorStop(0.5, 'rgba(197, 160, 89, 0.3)')
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')          // Transparent edge

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 128, 128)

  return new THREE.CanvasTexture(canvas)
}

const applyTheme = (themeName) => {
  const isLight = themeName === 'light'
  const bgColor = isLight ? '#ffffff' : '#000000'

  if (scene) {
    scene.background.set(bgColor)
    if (scene.fog) scene.fog.color.set(bgColor)
  }

  particleGroups.forEach(group => {
    if (group.mesh.material) {
      group.mesh.material.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending
      group.mesh.material.needsUpdate = true
    }
  })
}

const onThemeChanged = (e) => {
  currentTheme = e.detail
  applyTheme(currentTheme)
}

const initThree = () => {
  currentTheme = document.documentElement.classList.contains('light-mode') ? 'light' : 'dark'

  scene = new THREE.Scene()
  scene.background = new THREE.Color(currentTheme === 'light' ? '#ffffff' : '#000000')
  scene.fog = new THREE.FogExp2(currentTheme === 'light' ? '#ffffff' : '#000000', 0.0006)

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 4000)
  camera.position.z = targetZ

  const texture = createParticleTexture()

  // Layered particle system for immersive 3D depth
  const layers = [
    { count: 4000, size: 3, spread: 2000, opacity: 0.4, speed: 0.0002 },
    { count: 1500, size: 6, spread: 1500, opacity: 0.6, speed: 0.0003 },
    { count: 300, size: 12, spread: 1000, opacity: 0.8, speed: 0.0005 },
    { count: 50, size: 25, spread: 800, opacity: 1.0, speed: 0.0008 } // Hero particles
  ]

  layers.forEach(layer => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(layer.count * 3)

    for (let i = 0; i < layer.count; i++) {
      // Even spherical distribution using cube root
      const u = Math.random()
      const v = Math.random()
      const theta = 2 * Math.PI * u
      const phi = Math.acos(2 * v - 1)
      const r = layer.spread * Math.cbrt(Math.random())

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0xc5a059,
      size: layer.size,
      map: texture,
      transparent: true,
      opacity: layer.opacity,
      depthWrite: false, // Prevent z-fighting
      blending: currentTheme === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending,
      sizeAttenuation: true
    })

    const particles = new THREE.Points(geometry, material)
    // Random initial rotation so layers interleave nicely
    particles.rotation.x = Math.random() * Math.PI
    particles.rotation.y = Math.random() * Math.PI
    particles.rotation.z = Math.random() * Math.PI

    scene.add(particles)
    particleGroups.push({
      mesh: particles,
      speed: layer.speed
    })
  })

  // Renderer setup optimized for performance
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)

  if (canvasContainer.value) {
    canvasContainer.value.appendChild(renderer.domElement)
  }

  // Event Listeners
  document.addEventListener('mousemove', onDocumentMouseMove, { passive: true })
  window.addEventListener('resize', onWindowResize)
  window.addEventListener('scroll', onWindowScroll, { passive: true })
  window.addEventListener('theme-changed', onThemeChanged)
}

const onWindowResize = () => {
  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const onDocumentMouseMove = (event) => {
  mouseX = (event.clientX - windowHalfX) * 0.3
  mouseY = (event.clientY - windowHalfY) * 0.3
}

const onWindowScroll = () => {
  // Scroll mapping to fly through the particle space
  targetZ = 800 - window.scrollY * 0.25
}

const timer = new THREE.Timer()

const animate = () => {
  animationId = requestAnimationFrame(animate)
  timer.update()
  render()
}

const render = () => {
  const elapsedTime = timer.getElapsed()

  // Scroll Fly-through interpolation
  camera.position.z += (targetZ - camera.position.z) * 0.05

  // Smooth Mouse Parallax interpolation
  const targetX = mouseX * 0.5
  const targetY = mouseY * 0.5
  camera.position.x += (targetX - camera.position.x) * 0.02
  camera.position.y += (-targetY - camera.position.y) * 0.02

  // Gentle floating camera effect
  camera.rotation.x = Math.sin(elapsedTime * 0.5) * 0.02
  camera.rotation.y = Math.cos(elapsedTime * 0.3) * 0.02

  // Rotate each particle layer independently
  particleGroups.forEach((group, index) => {
    group.mesh.rotation.y += group.speed
    group.mesh.rotation.x += group.speed * 0.3
    // Subtle bobbing motion
    group.mesh.position.y = Math.sin(elapsedTime * 0.3 + index) * 15
  })

  renderer.render(scene, camera)
}

onMounted(() => {
  initThree()
  animate()
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onDocumentMouseMove)
  window.removeEventListener('resize', onWindowResize)
  window.removeEventListener('scroll', onWindowScroll)
  window.removeEventListener('theme-changed', onThemeChanged)
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer && renderer.domElement && canvasContainer.value) {
    canvasContainer.value.removeChild(renderer.domElement)
  }
  if (renderer) renderer.dispose()

  // Rigorous cleanup of WebGL contexts
  particleGroups.forEach(group => {
    group.mesh.geometry.dispose()
    if (group.mesh.material.map) group.mesh.material.map.dispose()
    group.mesh.material.dispose()
  })
})
</script>

<style scoped>
.three-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; /* Place it strictly in the background */
  pointer-events: none; /* Let clicks pass through to content */
  background-color: var(--bg-color, #000);
}
</style>
