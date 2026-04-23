<template>
  <footer class="footer">
    <p>&copy; {{ year }} CHHEM BUNHENG. All Systems Operational.</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: 1.5rem 0;
  border-top: 1px solid #0f172a;
  background: #020617;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #475569;
}
</style>
