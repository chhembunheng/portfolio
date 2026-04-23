<template>
  <section class="page-section">
    <div class="container">
      <h2 class="h2-serif section-title">Journey.</h2>
      
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-meta">
            <span class="timeline-date">2023 &mdash; Present</span>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-role">Software Developer</h3>
            <h4 class="timeline-company">WINTECH Co., Ltd</h4>
            <p class="timeline-desc">Leading backend development and system architecture for BELTEI University's digital ecosystem. Architecting scalable, multi-tenant educational platforms and executing complex database migrations to structured relational systems.</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-meta">
            <span class="timeline-date">2023</span>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-role">Intern Developer</h3>
            <h4 class="timeline-company">855 Solutions</h4>
            <p class="timeline-desc">Assisted the senior engineering team in robust API construction and system debugging. Handled critical bug identification and implemented patches across legacy systems.</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-meta">
            <span class="timeline-date">Current</span>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-role">BSc Software Engineering</h3>
            <h4 class="timeline-company">BELTEI Intl University</h4>
            <p class="timeline-desc">Focusing on advanced software design, modern system architecture, algorithms, and secure web application development methodologies.</p>
          </div>
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

.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-item {
  display: grid;
  gap: 2rem;
  padding: 3rem 0;
  border-bottom: 1px solid var(--border-color);
}

@media (min-width: 768px) {
  .timeline-item {
    grid-template-columns: 1fr 3fr;
    gap: 4rem;
  }
}

.timeline-date {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
}

.timeline-role {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.timeline-company {
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.timeline-desc {
  font-size: 1.125rem;
  color: var(--text-secondary);
  font-weight: 300;
  line-height: 1.6;
  max-width: 650px;
}
</style>
