<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-header">
        <div>
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">// Selected works in Production</p>
        </div>
        <div class="module-count">Total: {{ projects.length }} modules loaded</div>
      </div>

      <div class="projects-grid">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="project-card glass-panel"
        >
          <div class="card-top">
            <div class="card-icon">{{ project.icon }}</div>
            <div class="card-badge">{{ project.badge }}</div>
          </div>
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-desc">{{ project.desc }}</p>
          <div class="card-tags">
            <span
              v-for="(tag, ti) in project.tags"
              :key="ti"
              :class="['tag', tag.color]"
            >#{{ tag.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    icon: '🎓',
    badge: 'v2.0',
    title: 'University Management',
    desc: 'Comprehensive system for BELTEI Intl University covering enrollment, grades, attendance, and finance dashboards.',
    tags: [
      { name: 'Laravel', color: 'cyan' },
      { name: 'MySQL', color: 'fuchsia' },
      { name: 'AJAX', color: 'slate' },
    ],
  },
  {
    icon: '🏫',
    badge: 'Legacy',
    title: 'School Portal Modules',
    desc: 'Multi-campus management modules for BELTEI & Zion International School. Focused on scalability and multi-tenant data.',
    tags: [
      { name: 'CodeIgniter', color: 'cyan' },
      { name: 'PostgreSQL', color: 'fuchsia' },
    ],
  },
  {
    icon: '🧾',
    badge: 'Beta',
    title: 'HR Suite & Payroll',
    desc: 'Employee tracking, leave management automation, and payroll processing with complex role-based access control.',
    tags: [
      { name: 'Django', color: 'cyan' },
      { name: 'REST_API', color: 'fuchsia' },
      { name: 'Auth', color: 'slate' },
    ],
  },
]
</script>

<style scoped>
.projects-section {
  padding: 6rem 0;
  position: relative;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) { .container { padding: 0 1.5rem; } }

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 3rem;
  border-bottom: 1px solid #1e293b;
  padding-bottom: 1rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: #64748b;
}

.module-count {
  display: none;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #475569;
}
@media (min-width: 640px) { .module-count { display: block; } }

.projects-grid {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 768px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .projects-grid { grid-template-columns: repeat(3, 1fr); } }

.project-card {
  border-radius: 8px;
  padding: 1.5rem;
  transition: border-color 0.3s, transform 0.3s;
  cursor: default;
}
.project-card:hover {
  border-color: rgba(34, 211, 238, 0.5);
  transform: translateY(-4px);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.card-icon {
  width: 48px;
  height: 48px;
  background: #1e293b;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: background 0.3s, color 0.3s;
}
.project-card:hover .card-icon {
  background: rgba(34, 211, 238, 0.2);
}

.card-badge {
  padding: 0.125rem 0.5rem;
  background: #1e293b;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #94a3b8;
  border-radius: 4px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  transition: color 0.2s;
}
.project-card:hover .card-title { color: var(--color-primary); }

.card-desc {
  font-size: 0.875rem;
  color: #94a3b8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.tag.cyan    { color: #67e8f9; }
.tag.fuchsia { color: #e879f9; }
.tag.slate   { color: #94a3b8; }
</style>
