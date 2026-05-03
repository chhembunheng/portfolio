<template>
  <section class="resume-page">
    <div class="container">
      <header class="resume-header">
        <div class="identity">
          <span class="eyebrow">Resume</span>
          <h1 class="h1-serif">Chhem Bunheng</h1>
          <p>Full Stack Developer / Laravel Specialist</p>
        </div>

        <div class="resume-actions">
          <a class="btn-outline" href="/chhem_bunheng.pdf" download>Download CV</a>
          <a class="text-link" href="/chhem_bunheng.pdf" target="_blank" rel="noopener">Open PDF</a>
        </div>
      </header>

      <div class="cv-sheet">
        <aside class="cv-sidebar">
          <img src="/profile.png" alt="Chhem Bunheng" class="profile-photo">

          <section class="side-block">
            <h2>Contact</h2>
            <a href="mailto:chhembunheng77@gmail.com">chhembunheng77@gmail.com</a>
            <span>Phnom Penh, Cambodia</span>
            <a href="https://github.com/chhembunheng" target="_blank" rel="noopener">GitHub</a>
            <a href="https://t.me/henggdev_04" target="_blank" rel="noopener">Telegram</a>
          </section>

          <section class="side-block">
            <h2>Primary Skills</h2>
            <div class="compact-tags">
              <span v-for="skill in primarySkills" :key="skill">{{ skill }}</span>
            </div>
          </section>

          <section class="side-block">
            <h2>Tools</h2>
            <ul>
              <li v-for="tool in tools" :key="tool">{{ tool }}</li>
            </ul>
          </section>
        </aside>

        <main class="cv-main">
          <section class="cv-section summary-section">
            <h2>Professional Summary</h2>
            <p>
              Full Stack Developer with production experience building Laravel and PHP-based
              education systems, including university management workflows, school portals,
              REST APIs, scoring logic, payment flows, attendance tracking, and PDF reports.
            </p>
          </section>

          <section class="cv-section">
            <h2>Experience</h2>
            <article class="cv-role">
              <div class="role-line">
                <div>
                  <h3>Full Stack Developer</h3>
                  <span>WINTECH Co., Ltd</span>
                </div>
                <strong>2023 - Present</strong>
              </div>

              <ul class="bullet-list">
                <li v-for="item in experienceBullets" :key="item">{{ item }}</li>
              </ul>
            </article>
          </section>

          <section class="cv-section">
            <h2>Technical Skills</h2>
            <div class="skill-matrix">
              <div v-for="group in skillGroups" :key="group.title" class="skill-group">
                <h3>{{ group.title }}</h3>
                <p>{{ group.items.join(', ') }}</p>
              </div>
            </div>
          </section>

          <section class="cv-section">
            <h2>Selected Systems</h2>
            <div class="system-list">
              <article v-for="system in systems" :key="system.name">
                <h3>{{ system.name }}</h3>
                <p>{{ system.scope }}</p>
              </article>
            </div>
          </section>

          <section class="cv-section">
            <h2>Education</h2>
            <div class="education-row">
              <div>
                <h3>BSc Software Engineering</h3>
                <p>BELTEI International University</p>
              </div>
              <strong>Graduated</strong>
            </div>
          </section>
        </main>
      </div>
    </div>
  </section>
</template>

<script setup>
const primarySkills = [
  'Laravel',
  'PHP',
  'Vue.js',
  'MySQL',
  'REST API',
  'CodeIgniter'
]

const tools = [
  'Bootstrap',
  'jQuery',
  'Git',
  'PDF reports',
  'WebView API',
  'Mobile API integration'
]

const experienceBullets = [
  'Developed Laravel modules for scholarship, payment, student registration, scoring, attendance, and reporting workflows.',
  'Built REST API and WebView API integrations consumed by school mobile applications.',
  'Fixed scoring, reporting, and data consistency issues across education management systems.',
  'Worked with MySQL-backed admin systems, Blade/jQuery interfaces, and multi-module PHP applications.',
  'Collaborated with team leads to deliver assigned features, bug fixes, and report exports.'
]

const skillGroups = [
  {
    title: 'Backend',
    items: ['Laravel', 'PHP', 'CodeIgniter', 'REST APIs', 'Validation', 'CRUD workflows']
  },
  {
    title: 'Frontend',
    items: ['Vue.js', 'Blade', 'jQuery', 'Bootstrap', 'Responsive UI']
  },
  {
    title: 'Database & Reports',
    items: ['MySQL', 'Academic scoring', 'Payment records', 'Attendance data', 'PDF generation']
  }
]

const systems = [
  {
    name: 'BELTEI International University',
    scope: 'University management modules for scholarship, payment, registration, scoring, and attendance.'
  },
  {
    name: 'BELTEI International School',
    scope: 'School portal features, report generation, maintenance, and assigned development tasks.'
  },
  {
    name: 'World / Greenfield International School',
    scope: 'Score fixes, mobile API endpoints, PDF reports, and WebView integration.'
  }
]
</script>

<style scoped>
.resume-page {
  min-height: 100vh;
  padding: 130px 0 120px;
}

.resume-header {
  display: grid;
  gap: 2rem;
  align-items: end;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
}

@media (min-width: 820px) {
  .resume-header {
    grid-template-columns: minmax(0, 1fr) auto;
  }
}

.eyebrow,
.cv-section h2,
.side-block h2 {
  color: var(--accent-gold);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.identity h1 {
  margin: 0.7rem 0 0.5rem;
}

.identity p {
  color: var(--text-secondary);
  font-size: 1.15rem;
  font-weight: 300;
}

.resume-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-items: center;
}

.text-link {
  color: var(--text-secondary);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: color 0.25s ease;
}

.text-link:hover {
  color: var(--accent-gold);
}

.cv-sheet {
  display: grid;
  border: 1px solid var(--border-color);
  background: color-mix(in srgb, var(--surface-color) 52%, transparent);
  backdrop-filter: blur(16px);
}

@media (min-width: 940px) {
  .cv-sheet {
    grid-template-columns: 300px minmax(0, 1fr);
  }
}

.cv-sidebar {
  padding: 2rem;
  border-bottom: 1px solid var(--border-color);
}

@media (min-width: 940px) {
  .cv-sidebar {
    border-right: 1px solid var(--border-color);
    border-bottom: 0;
  }
}

.profile-photo {
  display: block;
  width: 150px;
  height: 190px;
  object-fit: cover;
  object-position: center top;
  margin-bottom: 2rem;
  border: 1px solid var(--border-color);
  filter: saturate(0.9) contrast(1.05);
}

.side-block {
  display: grid;
  gap: 0.85rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border-color);
}

.side-block a,
.side-block span,
.side-block li {
  color: var(--text-secondary);
  font-size: 0.94rem;
  font-weight: 300;
  line-height: 1.6;
}

.side-block a:hover {
  color: var(--accent-gold);
}

.side-block ul {
  display: grid;
  gap: 0.55rem;
  list-style: none;
}

.compact-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.compact-tags span {
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  padding: 0.42rem 0.62rem;
  text-transform: uppercase;
}

.cv-main {
  padding: clamp(2rem, 5vw, 4rem);
}

.cv-section {
  padding: 2.25rem 0;
  border-bottom: 1px solid var(--border-color);
}

.cv-section:first-child {
  padding-top: 0;
}

.cv-section:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.summary-section p,
.cv-role > p,
.skill-group p,
.system-list p,
.education-row p {
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
}

.summary-section p {
  max-width: 760px;
  margin-top: 1rem;
  font-size: 1.08rem;
}

.role-line,
.education-row {
  display: grid;
  gap: 1rem;
  margin-top: 1.2rem;
}

@media (min-width: 700px) {
  .role-line,
  .education-row {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
  }
}

.role-line h3,
.education-row h3,
.skill-group h3,
.system-list h3 {
  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-weight: 400;
  line-height: 1.3;
}

.role-line span,
.role-line strong,
.education-row strong {
  color: var(--text-tertiary);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.bullet-list {
  display: grid;
  gap: 0.8rem;
  margin-top: 1.5rem;
  padding-left: 1.1rem;
}

.bullet-list li {
  color: var(--text-secondary);
  font-size: 0.98rem;
  font-weight: 300;
  line-height: 1.75;
}

.skill-matrix,
.system-list {
  display: grid;
  gap: 1.25rem;
  margin-top: 1.5rem;
}

@media (min-width: 760px) {
  .skill-matrix {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.skill-group,
.system-list article {
  padding-top: 1.2rem;
  border-top: 1px solid var(--border-color);
}

.skill-group h3,
.system-list h3 {
  margin-bottom: 0.55rem;
}

@media (max-width: 720px) {
  .resume-page {
    padding: 100px 0 80px;
  }
}
</style>
