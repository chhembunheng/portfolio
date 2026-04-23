<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <!-- AI scan line -->
    <div class="nav-scan-line"></div>

    <div class="navbar-inner">
      <!-- Brand -->
      <a href="#" class="brand">
        <span class="brand-bracket">[</span>
        <span class="brand-ai">AI</span>
        <span class="brand-sep">::</span>
        <span class="brand-name">HengDev</span>
        <span class="brand-bracket">]</span>
        <span class="brand-cursor animate-blink">_</span>
      </a>

      <!-- Desktop links -->
      <div class="nav-links">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link">
          <span class="nav-link-prefix">~/</span>{{ link.label }}
        </a>
        <a
          href="https://drive.google.com/file/d/1FXrwYorL587Gwb0UEvYr-Lxr02yqaSGc/view?usp=drive_link"
          target="_blank"
          class="cv-btn"
        >
          <span class="cv-icon">⬇</span> download_cv
        </a>
      </div>

      <!-- Mobile toggle -->
      <button class="menu-btn" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <div class="hamburger" :class="{ open: menuOpen }">
          <span></span><span></span><span></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="menuOpen" class="mobile-menu">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="mobile-link"
          @click="menuOpen = false"
        >
          <span class="mobile-prompt">➜</span> {{ link.label }}
        </a>
        <a
          href="https://drive.google.com/file/d/1FXrwYorL587Gwb0UEvYr-Lxr02yqaSGc/view?usp=drive_link"
          target="_blank"
          class="mobile-link cv-mobile"
          @click="menuOpen = false"
        >
          <span class="mobile-prompt">⬇</span> download_cv.sh
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { href: '#projects', label: 'projects' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

function onScroll() { isScrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: rgba(2, 6, 23, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom-color: rgba(34, 211, 238, 0.15);
  box-shadow: 0 4px 30px rgba(34,211,238,0.05);
}

/* Scan line effect on navbar top */
.nav-scan-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #22d3ee, #818cf8, #d946ef, transparent);
  opacity: 0.6;
}

.navbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand */
.brand {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.05rem;
  text-decoration: none;
  letter-spacing: -0.01em;
}
.brand-bracket { color: var(--text-muted); }
.brand-ai      { color: var(--primary); }
.brand-sep     { color: #334155; margin: 0 2px; }
.brand-name    { color: #e2e8f0; }
.brand-cursor  { color: var(--primary); margin-left: 2px; }

/* Desktop nav */
.nav-links {
  display: none;
  align-items: center;
  gap: 1.75rem;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
}
@media (min-width: 768px) { .nav-links { display: flex; } }

.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
}
.nav-link-prefix { color: #334155; transition: color 0.2s; }
.nav-link:hover { color: var(--primary); }
.nav-link:hover .nav-link-prefix { color: var(--primary); opacity: 0.5; }

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0; right: 0;
  height: 1px;
  background: var(--primary);
  transform: scaleX(0);
  transition: transform 0.2s;
}
.nav-link:hover::after { transform: scaleX(1); }

/* CV button */
.cv-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.875rem;
  border: 1px solid rgba(34,211,238,0.3);
  border-radius: 4px;
  color: var(--primary);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  text-decoration: none;
  background: rgba(34,211,238,0.05);
  transition: all 0.2s;
}
.cv-btn:hover {
  background: rgba(34,211,238,0.12);
  border-color: var(--primary);
  box-shadow: 0 0 12px rgba(34,211,238,0.2);
}
.cv-icon { font-size: 0.75rem; }

/* Hamburger */
.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
}
@media (min-width: 768px) { .menu-btn { display: none; } }

.hamburger { display: flex; flex-direction: column; gap: 5px; }
.hamburger span {
  display: block; width: 22px; height: 1.5px;
  background: var(--text-muted);
  transition: all 0.25s;
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4.5px, 4.5px); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4.5px, -4.5px); }

/* Mobile menu */
.mobile-menu {
  background: rgba(2, 6, 23, 0.98);
  border-top: 1px solid rgba(34,211,238,0.1);
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-family: var(--font-mono);
  font-size: 0.875rem;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.mobile-link:last-child { border-bottom: none; }
.mobile-link:hover { color: var(--primary); }
.mobile-link.cv-mobile { color: var(--secondary); margin-top: 0.5rem; }
.mobile-prompt { color: var(--primary); font-size: 0.75rem; }

/* Slide transition */
.slide-enter-active, .slide-leave-active { transition: all 0.22s ease; }
.slide-enter-from, .slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
