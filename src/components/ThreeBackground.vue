<template>
  <div ref="canvasContainer" class="three-container"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref(null)
let scene, camera, renderer, particles, animationId
let mouseX = 0, mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2

const initThree = () => {
  // Scene setup
  scene = new THREE.Scene()
  // Ensure the scene background matches the pure black theme
  scene.background = new THREE.Color(0x000000)
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000)
  camera.position.z = 1000
  
  // Particles Geometry
  const geometry = new THREE.BufferGeometry()
  const particlesCount = 1500
  
  const positions = new Float32Array(particlesCount * 3)
  const scales = new Float32Array(particlesCount)
  
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() * 2 - 1) * 2000
    positions[i * 3 + 1] = (Math.random() * 2 - 1) * 2000
    positions[i * 3 + 2] = (Math.random() * 2 - 1) * 2000
    scales[i] = Math.random() * 2
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))
  
  // Material setup - Gold Accent #c5a059
  const material = new THREE.PointsMaterial({
    color: 0xc5a059,
    size: 3,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true
  })
  
  particles = new THREE.Points(geometry, material)
  scene.add(particles)
  
  // Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  
  if (canvasContainer.value) {
    canvasContainer.value.appendChild(renderer.domElement)
  }
  
  // Event Listeners
  document.addEventListener('mousemove', onDocumentMouseMove)
  window.addEventListener('resize', onWindowResize)
}

const onWindowResize = () => {
  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const onDocumentMouseMove = (event) => {
  mouseX = event.clientX - windowHalfX
  mouseY = event.clientY - windowHalfY
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  render()
}

const render = () => {
  // Parallax effect based on mouse movement
  camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05
  camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05
  camera.lookAt(scene.position)
  
  // Slow rotation
  particles.rotation.x += 0.0005
  particles.rotation.y += 0.001
  
  renderer.render(scene, camera)
}

onMounted(() => {
  initThree()
  animate()
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onDocumentMouseMove)
  window.removeEventListener('resize', onWindowResize)
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer && renderer.domElement && canvasContainer.value) {
    canvasContainer.value.removeChild(renderer.domElement)
  }
  // Cleanup WebGL contexts to prevent memory leaks
  if (renderer) renderer.dispose()
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
  background-color: var(--bg-color);
}
</style>
