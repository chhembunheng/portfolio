<template>
  <section class="hero-section">
    <div class="container hero-container animate-fade-in">
      <div class="hero-content">
        <h1 class="h1-serif title">
          Chhem Bunheng.
        </h1>
        <h2 class="subtitle h2-serif text-muted">
          Full Stack Developer
        </h2>
        <p class="description">
          Building enterprise-grade systems at Wintech Co., Ltd — from university
          management platforms and school portals to mobile APIs and reporting engines.
          Laravel specialist with a passion for clean architecture and scalable solutions.
        </p>
        
        <div class="action-group">
          <router-link to="/work" class="btn-outline">View Projects</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
}

@media (min-width: 768px) {
  .hero-section {
    padding-top: 100px;
  }
}

.hero-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-bottom: 0.5rem;
}

.subtitle {
  margin-bottom: 2rem;
  font-style: italic;
}

.description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 3rem;
  font-weight: 300;
  line-height: 1.8;
}

.action-group {
  display: flex;
  justify-content: center;
}
</style>
