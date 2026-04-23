<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <span class="footer-brand">C. BUNHENG</span>
        <span class="footer-year">&copy; {{ new Date().getFullYear() }}</span>
      </div>
      
      <div class="footer-right">
        <span class="footer-note">Designed & Engineered with Precision.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border-color);
  padding: 3rem 0;
  margin-top: auto;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer-brand {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  margin-right: 1rem;
}

.footer-year, .footer-note {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-tertiary);
}
</style>
