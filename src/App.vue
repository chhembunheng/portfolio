<template>
  <!-- Particle Background -->
  <ParticleCanvas />

  <!-- Background Ambience -->
  <div class="grid-bg fixed-bg"></div>
  <div class="glow-top"></div>
  <div class="glow-bottom"></div>

  <!-- Navigation -->
  <NavBar />

  <!-- Main Content -->
  <main class="main-wrap">
    <HeroSection />
    <ProjectsSection />
    <SkillsSection />
    <ExperienceSection />
    <HobbiesSection />
    <ContactSection />
  </main>

  <!-- Footer -->
  <FooterSection />
</template>

<script setup>
import ParticleCanvas from './components/ParticleCanvas.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import HobbiesSection from './components/HobbiesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style scoped>
.fixed-bg {
  position: fixed;
  inset: 0;
  z-index: -10;
  pointer-events: none;
}

.glow-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  background: rgba(34, 211, 238, 0.1);
  filter: blur(120px);
  border-radius: 50%;
  mix-blend-mode: screen;
  pointer-events: none;
  z-index: -8;
  transform: translateY(-50%);
}

.glow-bottom {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 500px;
  background: rgba(217, 70, 239, 0.1);
  filter: blur(120px);
  border-radius: 50%;
  mix-blend-mode: screen;
  pointer-events: none;
  z-index: -8;
  transform: translateY(50%);
}

.main-wrap {
  padding-top: 5rem;
}
</style>
