<template>
  <div class="page-transition">
    <HeroSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
</script>

<style scoped>
.page-transition {
  animation: fade-in 0.5s ease-out;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
