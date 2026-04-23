<template>
  <header class="navbar">
    <div class="container nav-inner">
      <router-link to="/" class="brand" @click="closeMenu">C. BUNHENG</router-link>
      
      <!-- Desktop Nav -->
      <nav class="nav-links desktop-only">
        <router-link to="/work" class="nav-link" active-class="active">Work</router-link>
        <router-link to="/skills" class="nav-link" active-class="active">Expertise</router-link>
        <router-link to="/experience" class="nav-link" active-class="active">Journey</router-link>
        <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
      </nav>

      <!-- Mobile Toggle -->
      <button class="mobile-toggle mobile-only" @click="menuOpen = !menuOpen" aria-label="Toggle Menu">
        <span class="line" :class="{ 'open': menuOpen }"></span>
        <span class="line" :class="{ 'open': menuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Fullscreen Menu -->
    <Teleport to="body">
      <transition name="fade-menu">
        <div v-if="menuOpen" class="mobile-menu mobile-only">
          <nav class="mobile-nav-links">
            <router-link to="/" class="mobile-link" active-class="active" @click="closeMenu">Home</router-link>
            <router-link to="/work" class="mobile-link" active-class="active" @click="closeMenu">Work</router-link>
            <router-link to="/skills" class="mobile-link" active-class="active" @click="closeMenu">Expertise</router-link>
            <router-link to="/experience" class="mobile-link" active-class="active" @click="closeMenu">Journey</router-link>
            <router-link to="/contact" class="mobile-link" active-class="active" @click="closeMenu">Contact</router-link>
          </nav>
        </div>
      </transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
}

@media (min-width: 768px) {
  .navbar { padding: 2rem 0; }
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  z-index: 1001; /* Keep above mobile menu */
}

@media (min-width: 768px) {
  .brand { font-size: 1.5rem; }
}

.desktop-only { display: none; }
.mobile-only { display: block; }

@media (min-width: 768px) {
  .desktop-only { display: flex; }
  .mobile-only { display: none; }
}

/* Desktop Links */
.nav-links {
  gap: 3rem;
}

.nav-link {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
}

/* Mobile Toggle */
.mobile-toggle {
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .mobile-toggle {
    display: none;
  }
}

.line {
  display: block;
  width: 100%;
  height: 1px;
  background: var(--text-primary);
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

.line.open:first-child {
  transform: translateY(9.5px) rotate(45deg);
}

.line.open:last-child {
  transform: translateY(-9.5px) rotate(-45deg);
}

/* Mobile Fullscreen Menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none;
  }
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
}

.mobile-link {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.mobile-link:hover,
.mobile-link.active {
  color: var(--text-primary);
}

/* Transitions */
.fade-menu-enter-active,
.fade-menu-leave-active {
  transition: opacity 0.3s ease;
}

.fade-menu-enter-from,
.fade-menu-leave-to {
  opacity: 0;
}
</style>
