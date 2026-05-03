<template>
  <div class="app-wrapper">
    <ThreeBackground />
    <div class="route-progress" :class="{ active: isRouteLoading }" aria-hidden="true"></div>
    <NavBar />

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import ThreeBackground from './components/ThreeBackground.vue'
import { useRouteProgress } from './composables/useRouteProgress'

const { isRouteLoading } = useRouteProgress()
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  overflow: hidden;
}

.route-progress {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
}

.route-progress.active {
  opacity: 1;
  transform: scaleX(1);
}

.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.55s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translate3d(0, 18px, 0);
  filter: blur(6px);
}

.page-leave-to {
  opacity: 0;
  transform: translate3d(0, -12px, 0);
  filter: blur(4px);
}

@media (prefers-reduced-motion: reduce) {
  .route-progress,
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }

  .page-enter-from,
  .page-leave-to {
    transform: none;
    filter: none;
  }
}
</style>
