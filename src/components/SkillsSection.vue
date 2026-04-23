<template>
  <section class="page-section">
    <div class="container">
      <h2 class="h2-serif section-title">Expertise.</h2>
      
      <div class="skills-grid">
        <div class="skill-category">
          <h3 class="category-title">Frontend</h3>
          <ul class="skill-list">
            <li>React.js</li>
            <li>Vue.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        
        <div class="skill-category">
          <h3 class="category-title">Backend</h3>
          <ul class="skill-list">
            <li>Laravel</li>
            <li>Spring Boot</li>
            <li>CodeIgniter</li>
            <li>Node.js</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        
        <div class="skill-category">
          <h3 class="category-title">Database & DevOps</h3>
          <ul class="skill-list">
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Prisma ORM</li>
            <li>Docker</li>
            <li>Linux Server</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-section {
  padding: 80px 0;
  min-height: 80vh;
}

@media (min-width: 768px) {
  .page-section {
    padding: 120px 0;
  }
}

.section-title {
  margin-bottom: 4rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.skills-grid {
  display: grid;
  gap: 4rem;
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.category-title {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-list li {
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--text-primary);
  border-bottom: 1px solid var(--surface-color);
  padding-bottom: 0.5rem;
}
</style>
