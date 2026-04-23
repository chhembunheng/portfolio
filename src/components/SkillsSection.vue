<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <h2 class="section-title">Technical Arsenal</h2>

      <div class="skills-grid">
        <!-- Backend -->
        <div>
          <h3 class="group-title cyan">
            <span class="dot cyan-dot"></span> Backend &amp; Core
          </h3>
          <div class="bars">
            <div v-for="skill in backendSkills" :key="skill.name" class="skill-bar">
              <div class="bar-header">
                <span class="bar-name">{{ skill.name }}</span>
                <span class="bar-pct">{{ skill.pct }}%</span>
              </div>
              <div class="bar-track">
                <div class="bar-fill" :style="{ width: skill.pct + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Frontend & Tools -->
        <div>
          <h3 class="group-title fuchsia">
            <span class="dot fuchsia-dot"></span> Frontend &amp; Tools
          </h3>
          <div class="tools-grid">
            <div
              v-for="tool in tools"
              :key="tool.name"
              class="tool-card"
            >
              <div class="tool-name">{{ tool.name }}</div>
              <div class="tool-desc">{{ tool.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const backendSkills = [
  { name: 'Laravel / PHP', pct: 95 },
  { name: 'Django / Python', pct: 85 },
  { name: 'SQL (MySQL/Postgres)', pct: 90 },
]

const tools = [
  { name: 'Next.js', desc: 'Full Stack Framework' },
  { name: 'React', desc: 'UI Library' },
  { name: 'Vue.js', desc: 'Progressive Framework' },
  { name: 'Docker', desc: 'Containerization' },
  { name: 'Git/GitLab', desc: 'Version Control' },
  { name: 'Postman', desc: 'API Testing' },
  { name: 'Figma', desc: 'Design Handoff' },
  { name: 'Linux', desc: 'Server Admin' },
]
</script>

<style scoped>
.skills-section {
  padding: 6rem 0;
  background: rgba(15, 23, 42, 0.4);
  border-top: 1px solid #1e293b;
  border-bottom: 1px solid #1e293b;
}

.container {
  max-width: 1280px;
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

.skills-grid {
  display: grid;
  gap: 3rem;
}
@media (min-width: 768px) { .skills-grid { grid-template-columns: 1fr 1fr; } }

.group-title {
  font-family: var(--font-mono);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.group-title.cyan { color: var(--color-primary); }
.group-title.fuchsia { color: var(--color-secondary); }

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.cyan-dot { background: var(--color-primary); }
.fuchsia-dot { background: var(--color-secondary); }

/* Bars */
.bars { display: flex; flex-direction: column; gap: 1rem; }

.skill-bar {
  background: #020617;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #1e293b;
}

.bar-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 0.375rem;
}
.bar-name { color: #fff; }
.bar-pct  { color: var(--color-primary); }

.bar-track {
  height: 6px;
  background: #1e293b;
  border-radius: 9999px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(to right, #22d3ee, #0891b2);
  border-radius: 9999px;
  transition: width 1s ease;
}

/* Tools */
.tools-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.tool-card {
  padding: 0.75rem;
  border: 1px solid #1e293b;
  background: #020617;
  border-radius: 4px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.tool-card:hover {
  border-color: rgba(217, 70, 239, 0.5);
  transform: translateY(-2px);
}

.tool-name { color: #fff; font-weight: 700; font-size: 0.9rem; }
.tool-desc { color: #64748b; font-size: 0.75rem; margin-top: 0.25rem; }
</style>
