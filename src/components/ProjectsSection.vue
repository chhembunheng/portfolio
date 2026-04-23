<template>
  <section class="page-section">
    <div class="container">
      <h2 class="h2-serif section-title">Selected Works.</h2>
      
      <div class="projects-list">
        <div v-for="(project, index) in projects" :key="index" class="project-item">
          <div class="project-meta">
            <span class="project-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="project-type">{{ project.type }}</span>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-stack">
              <span v-for="tech in project.stack" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'University Management System',
    type: 'Enterprise Architecture',
    description: 'Comprehensive platform for BELTEI Intl University covering enrollment, grades, attendance, finance, HR, and real-time dashboards.',
    stack: ['Laravel', 'MySQL', 'Vue.js', 'REST API']
  },
  {
    title: 'School Portal Modules',
    type: 'Multi-Tenant System',
    description: 'Multi-campus management modules for BELTEI & Zion International School. Built with a scalable multi-tenant architecture and granular RBAC.',
    stack: ['CodeIgniter', 'PostgreSQL', 'RBAC']
  },
  {
    title: 'HR Suite & Payroll Engine',
    type: 'Internal Automation',
    description: 'Employee tracking, leave management automation, and payroll processing engine with complex role-based access control and detailed audit trails.',
    stack: ['Django', 'React.js', 'PostgreSQL']
  }
]
</script>

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

.projects-list {
  display: flex;
  flex-direction: column;
}

.project-item {
  display: grid;
  gap: 2rem;
  padding: 4rem 0;
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

@media (min-width: 768px) {
  .project-item {
    grid-template-columns: 1fr 3fr;
    gap: 4rem;
  }
}

.project-item:hover {
  border-color: var(--text-primary);
}

.project-meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-number {
  font-family: var(--font-serif);
  font-size: 2rem;
  color: var(--text-tertiary);
}

.project-type {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
}

.project-title {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.project-desc {
  font-size: 1.125rem;
  color: var(--text-secondary);
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 600px;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-tag {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
}
</style>
