<template>
  <section class="page-section">
    <div class="container">

      <!-- ═══════════════════════════════════════
           SECTION 1: WORK EXPERIENCE
      ═══════════════════════════════════════ -->
      <h2 class="h2-serif section-title">Work Experience.</h2>

      <div class="experience-block" v-for="job in jobs" :key="job.company">
        <!-- Company Header -->
        <div class="job-header">
          <div class="job-meta">
            <span class="job-period">{{ job.period }}</span>
            <span class="job-location">{{ job.location }}</span>
          </div>
          <div class="job-info">
            <h3 class="job-role">{{ job.role }}</h3>
            <h4 class="job-company">{{ job.company }}</h4>
            <p class="job-summary">{{ job.summary }}</p>
          </div>
        </div>

        <!-- Projects / Assignments Within This Role -->
        <div class="assignments-label">Projects & Assignments</div>
        <div class="assignments-grid">
          <div class="assignment-card" v-for="proj in job.projects" :key="proj.title">
            <div class="assignment-header">
              <span class="assignment-client">{{ proj.client }}</span>
              <span class="assignment-stack">{{ proj.stack.join(' · ') }}</span>
            </div>
            <h5 class="assignment-title">{{ proj.title }}</h5>
            <p class="assignment-desc">{{ proj.desc }}</p>
            <ul class="assignment-modules" v-if="proj.modules">
              <li v-for="mod in proj.modules" :key="mod">{{ mod }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════
           SECTION 2: EDUCATION
      ═══════════════════════════════════════ -->
      <h2 class="h2-serif section-title education-title">Education.</h2>

      <div class="timeline">
        <div class="timeline-item" v-for="edu in education" :key="edu.degree">
          <div class="timeline-meta">
            <span class="timeline-date">{{ edu.period }}</span>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-role">{{ edu.degree }}</h3>
            <h4 class="timeline-company">{{ edu.institution }}</h4>
            <p class="timeline-desc">{{ edu.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    role: 'Full Stack Developer',
    company: 'WINTECH Co., Ltd',
    period: '2023 — Present',
    location: 'Phnom Penh, Cambodia',
    summary: 'Building and maintaining enterprise-grade education management systems for leading Cambodian institutions. Primary focus on Laravel backend architecture, REST API development for mobile integration, and comprehensive academic reporting.',
    projects: [
      {
        client: 'BELTEI International University',
        title: 'University Management System (UMS)',
        stack: ['Laravel', 'MySQL', 'Vue.js', 'REST API'],
        desc: 'End-to-end university management platform serving thousands of students across multiple campuses.',
        modules: [
          'Scholarship Module — application workflow, eligibility criteria & award tracking',
          'Payment Module — fee collection, invoicing & payment history',
          'Student Registration — enrollment, profile & academic records',
          'Scoring Module — grade entry, calculation & transcript generation',
          'Attendance Module — daily tracking, reports & absence alerts',
        ]
      },
      {
        client: 'BELTEI International School',
        title: 'School Management Portal',
        stack: ['CodeIgniter', 'MySQL', 'PHP', 'jQuery'],
        desc: 'Collaborated within the engineering team to build reporting modules and implement features assigned by the Team Lead for a multi-module school portal.',
        modules: [
          'Academic report generation & export',
          'Team Lead-assigned feature development & bug fixes',
        ]
      },
      {
        client: 'World International School',
        title: 'Score System & Mobile API',
        stack: ['Laravel', 'REST API', 'MySQL'],
        desc: 'Diagnosed and resolved academic scoring logic issues, then built RESTful API endpoints consumed by the school\'s mobile application.',
        modules: [
          'Score data correction & logic fixes',
          'REST API endpoints for mobile app data sync',
        ]
      },
      {
        client: 'Greenfield International School',
        title: 'Score, Reports & WebView API',
        stack: ['Laravel', 'MySQL', 'WebView API'],
        desc: 'Implemented academic score management, PDF report generation, and a WebView API bridge for the school\'s mobile application.',
        modules: [
          'Academic score management & adjustments',
          'PDF academic report generation',
          'WebView API bridge for native mobile integration',
        ]
      },
    ]
  }
]

const education = [
  {
    degree: 'BSc Software Engineering',
    institution: 'BELTEI International University',
    period: 'Graduated',
    desc: 'Focusing on advanced software design, modern system architecture, algorithms, and secure web application development.'
  }
]
</script>

<style scoped>
.page-section {
  padding: 80px 0 120px;
  min-height: 100vh;
}

@media (min-width: 768px) {
  .page-section { padding: 120px 0 160px; }
}

/* ─── Section Titles ─── */
.section-title {
  margin-bottom: 4rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.education-title {
  margin-top: 6rem;
}

/* ─── Job / Company Block ─── */
.experience-block {
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid var(--border-color);
}

.job-header {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .job-header {
    grid-template-columns: 1fr 3fr;
    gap: 4rem;
  }
}

.job-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.25rem;
}

.job-period {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-gold);
  font-weight: 500;
}

.job-location {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-tertiary);
}

.job-role {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 400;
  margin-bottom: 0.4rem;
  line-height: 1.2;
}

.job-company {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
}

.job-summary {
  font-size: 1.05rem;
  color: var(--text-secondary);
  font-weight: 300;
  line-height: 1.8;
  max-width: 650px;
}

/* ─── Assignments Label ─── */
.assignments-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-tertiary);
  margin-bottom: 1.5rem;
  padding-left: 0;
}

@media (min-width: 768px) {
  .assignments-label {
    padding-left: calc(25% + 4rem);
  }
}

/* ─── Assignments Grid ─── */
.assignments-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .assignments-grid {
    grid-template-columns: repeat(2, 1fr);
    padding-left: calc(25% + 4rem);
  }
}

@media (min-width: 1100px) {
  .assignments-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.assignment-card {
  border: 1px solid var(--border-color);
  padding: 1.75rem;
  transition: border-color 0.3s ease, transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.assignment-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: var(--accent-gold);
  transform: scaleY(0);
  transition: transform 0.3s ease;
  transform-origin: bottom;
}

.assignment-card:hover {
  border-color: var(--accent-gold);
  transform: translateY(-2px);
}

.assignment-card:hover::before {
  transform: scaleY(1);
}

.assignment-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.assignment-client {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-gold);
  font-weight: 500;
}

.assignment-stack {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-tertiary);
}

.assignment-title {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.assignment-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.assignment-modules {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.assignment-modules li {
  font-size: 0.85rem;
  color: var(--text-tertiary);
  padding-left: 1rem;
  position: relative;
  line-height: 1.5;
}

.assignment-modules li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent-gold);
  font-size: 0.75rem;
}

/* ─── Education Timeline ─── */
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
  font-size: 1.05rem;
  color: var(--text-secondary);
  font-weight: 300;
  line-height: 1.7;
  max-width: 600px;
}
</style>
