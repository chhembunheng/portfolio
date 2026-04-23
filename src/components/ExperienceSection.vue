<template>
  <section id="experience" class="exp-section">
    <div class="container">
      <h2 class="section-title">System Logs (Experience)</h2>

      <div class="timeline">
        <div
          v-for="(item, i) in timeline"
          :key="i"
          class="timeline-item"
        >
          <span class="timeline-dot" :class="{ active: item.active }"></span>
          <div class="timeline-content">
            <div class="item-header">
              <h3 class="item-role">{{ item.role }}</h3>
              <span class="item-company">@ {{ item.company }}</span>
              <span class="item-period">{{ item.period }}</span>
            </div>
            <p class="item-desc">{{ item.desc }}</p>
            <ul v-if="item.bullets" class="item-bullets">
              <li v-for="(b, bi) in item.bullets" :key="bi" v-html="b"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const timeline = [
  {
    active: true,
    role: 'Software Developer',
    company: 'WINTECH Co., Ltd',
    period: '2023 — Present',
    desc: 'Leading the backend development for BELTEI University\'s digital ecosystem.',
    bullets: [
      'Developed core modules for University: <span class="hl">Enrollment, Grades, HR, Finance</span>.',
      'Orchestrated migration to structured relational databases (<span class="hl">MySQL/PostgreSQL</span>).',
      'Implemented complex business logic using <span class="hl">Laravel</span> Service Providers.',
    ],
  },
  {
    active: false,
    role: 'Intern Developer',
    company: '855 Solutions',
    period: '2023 (3 mos)',
    desc: 'Assisted senior developers in API endpoint construction and bug fixing in Laravel-based systems.',
  },
  {
    active: false,
    role: 'Education: Bachelor of Software Engineering',
    company: 'BELTEI Intl University',
    period: '2023 — Present',
    desc: 'Year 4 Student. Focus on System Architecture and Web Security.',
  },
]
</script>

<style scoped>
.exp-section {
  padding: 6rem 0;
}

.container {
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1rem;
}
@media (min-width: 640px) { .container { padding: 0 1.5rem; } }

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 3rem;
}

.timeline {
  position: relative;
  border-left: 1px solid #334155;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.timeline-item {
  position: relative;
  padding-left: 2rem;
}

.timeline-dot {
  position: absolute;
  left: -9px;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #334155;
  border: 1px solid #475569;
}

.timeline-dot.active {
  background: var(--color-primary);
  border: none;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
}

.item-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.item-role {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
}

.item-company {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--color-primary);
}

.item-period {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #64748b;
  border: 1px solid #1e293b;
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
}

.item-desc {
  color: #94a3b8;
  margin-bottom: 1rem;
  font-size: 0.9375rem;
}

.item-bullets {
  list-style: disc;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #94a3b8;
}

/* Rendered HTML highlights from v-html */
:deep(.hl) { color: #e2e8f0; }
</style>
