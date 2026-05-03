<template>
  <header class="navbar">
    <div class="container nav-inner">
      <router-link to="/" class="brand" @click="closeMenu" aria-label="Chhem Bunheng - Home">
        <svg class="brand-logo" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text
            x="36" y="46"
            font-family="Cinzel, serif"
            font-size="44"
            font-weight="400"
            fill="var(--accent-gold)"
            text-anchor="middle"
            letter-spacing="-2"
          >CB</text>
        </svg>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="nav-links desktop-only">
        <router-link to="/work" class="nav-link" active-class="active">Work</router-link>
        <router-link to="/skills" class="nav-link" active-class="active">Expertise</router-link>
        <router-link to="/experience" class="nav-link" active-class="active">Journey</router-link>
        <router-link to="/resume" class="nav-link" active-class="active">Resume</router-link>
        <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
      </nav>

      <!-- Mobile Toggle -->
      <div class="nav-actions">
        <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle Theme">
          <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>

        <button class="mobile-toggle mobile-only" @click="menuOpen = !menuOpen" aria-label="Toggle Menu">
          <span class="line" :class="{ 'open': menuOpen }"></span>
          <span class="line" :class="{ 'open': menuOpen }"></span>
        </button>
      </div>
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
            <router-link to="/resume" class="mobile-link" active-class="active" @click="closeMenu">Resume</router-link>
            <router-link to="/contact" class="mobile-link" active-class="active" @click="closeMenu">Contact</router-link>
          </nav>
        </div>
      </transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const menuOpen = ref(false)
const { theme, toggleTheme } = useTheme()

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
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: background 0.4s ease, padding 0.3s ease, border-color 0.4s ease;
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
  display: flex;
  align-items: center;
  z-index: 1001;
}

.brand-logo {
  height: 44px;
  width: auto;
  display: block;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.brand:hover .brand-logo {
  opacity: 0.75;
  transform: scale(1.05);
}

@media (min-width: 768px) {
  .brand-logo { height: 52px; }
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

/* Mobile Toggle & Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  z-index: 1001;
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease, transform 0.3s ease;
}

.theme-toggle:hover {
  color: var(--accent-gold);
  transform: scale(1.1);
}

.mobile-toggle {
  background: none;
  border: none;
  cursor: pointer;
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
