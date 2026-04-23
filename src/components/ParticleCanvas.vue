<template>
  <canvas ref="canvasRef" class="bg-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationId = null
let particles = []
let mouse = { x: null, y: null }
let width = 0
let height = 0

const particleCount = window.innerWidth < 768 ? 35 : 70
const connectionDistance = 140
const mouseDistance = 200

class Particle {
  constructor() {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.vx = (Math.random() - 0.5) * 0.3
    this.vy = (Math.random() - 0.5) * 0.3
    this.size = Math.random() * 2 + 0.5
    this.color = Math.random() > 0.5 ? '#22d3ee' : '#d946ef'
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    if (this.x < 0 || this.x > width) this.vx *= -1
    if (this.y < 0 || this.y > height) this.vy *= -1

    if (mouse.x != null) {
      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < mouseDistance) {
        const force = (mouseDistance - distance) / mouseDistance
        this.x -= (dx / distance) * force * this.size * 0.6
        this.y -= (dy / distance) * force * this.size * 0.6
      }
    }
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

function init() {
  const canvas = canvasRef.value
  if (!canvas) return
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
  particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }
}

function animate() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, width, height)

  for (let i = 0; i < particles.length; i++) {
    particles[i].update()
    particles[i].draw(ctx)
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < connectionDistance) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(148,163,184,${0.15 * (1 - distance / connectionDistance)})`
        ctx.lineWidth = 1
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }
  animationId = requestAnimationFrame(animate)
}

function onMouseMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

function onResize() { init() }

onMounted(() => {
  setTimeout(() => {
    init()
    animate()
  }, 100)
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
.bg-canvas {
  position: fixed;
  inset: 0;
  z-index: -5;
  pointer-events: none;
  opacity: 0.4;
}
</style>
