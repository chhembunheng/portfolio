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
    type: 'Enterprise Platform · Laravel',
    description: 'Full-featured UMS for BELTEI International University. Led development of the Scholarship Module, Payment Module, Student Registration, Academic Scoring, and Attendance tracking — serving thousands of students across multiple campuses.',
    stack: ['Laravel', 'MySQL', 'Vue.js', 'REST API', 'RBAC']
  },
  {
    title: 'Beltei International School Portal',
    type: 'Multi-Module System · CodeIgniter',
    description: 'Contributed to a school management portal at BELTEI International School — building reporting modules and implementing features assigned by the Team Lead within a collaborative development team.',
    stack: ['CodeIgniter', 'MySQL', 'jQuery', 'PHP']
  },
  {
    title: 'World International School',
    type: 'Score & Mobile API · Laravel',
    description: 'Assisted in fixing academic scoring logic and developed RESTful APIs consumed by the school\'s mobile application, ensuring accurate grade data sync between the web system and mobile clients.',
    stack: ['Laravel', 'REST API', 'MySQL', 'Mobile Integration']
  },
  {
    title: 'Greenfield International School',
    type: 'Score, Reports & WebView API · Laravel',
    description: 'Worked on academic score management, PDF report generation, and built a WebView API bridge for the school\'s mobile app — enabling real-time data access from native mobile interfaces.',
    stack: ['Laravel', 'MySQL', 'WebView API', 'PDF Reports']
  },
  {
    title: 'Hotel Management System',
    type: 'Project Assignment · Laravel',
    description: 'Designed and built a full hotel management system as a project assignment — covering room booking, guest management, billing, and availability dashboards with a clean admin interface.',
    stack: ['Laravel', 'MySQL', 'Blade', 'Bootstrap']
  },
  {
    title: 'Personal Portfolio',
    type: 'Web App · Vue.js',
    description: 'This portfolio — a premium, immersive personal website built with Vue 3, Three.js particle animations, dark/light theme, and smooth page transitions to showcase projects and experience.',
    stack: ['Vue.js 3', 'Three.js', 'Vite', 'CSS3']
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
