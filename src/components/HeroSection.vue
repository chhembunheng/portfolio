<template>
  <section class="hero">
    <div class="hero-inner">

      <!-- Left column -->
      <div class="hero-left animate-fade-up">
        <!-- Status pill -->
        <div class="status-pill">
          <span class="status-ping"></span>
          <span class="status-dot animate-pulse-dot"></span>
          <span class="status-text">AI System Online &mdash; Accepting Requests</span>
        </div>

        <!-- Glitch title -->
        <div class="glitch-wrap" aria-label="CHHEM BUNHENG">
          <h1 class="glitch-title" :data-text="glitchTitle">{{ glitchTitle }}</h1>
          <div class="glitch-layer-1" aria-hidden="true">{{ glitchTitle }}</div>
          <div class="glitch-layer-2" aria-hidden="true">{{ glitchTitle }}</div>
        </div>

        <!-- AI typing line -->
        <div class="ai-type-line">
          <span class="ai-prefix">model://</span>
          <span class="ai-typed">{{ typedText }}</span>
          <span class="cursor animate-blink">|</span>
        </div>

        <p class="hero-desc">
          I'm <strong class="name-highlight">CHHEM BUNHENG</strong> — a Full-Stack Developer engineering
          robust systems for <span class="highlight-cyan">Education</span> &amp;
          <span class="highlight-purple">HR</span> sectors. Specialized in
          <span class="tag-chip">Laravel</span>
          <span class="tag-chip">Django</span>
          <span class="tag-chip">Next.js</span>
          &amp; <span class="tag-chip">Vue.js</span>.
        </p>

        <!-- Stats row -->
        <div class="stats-row">
          <div class="stat-card" v-for="stat in stats" :key="stat.label">
            <div class="stat-value gradient-text-2">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>

        <!-- CTA buttons -->
        <div class="cta-row">
          <a href="#projects" class="btn-primary">
            <span>Explore Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" class="btn-ghost">Init Contact</a>
          <a
            href="https://drive.google.com/file/d/1FXrwYorL587Gwb0UEvYr-Lxr02yqaSGc/view?usp=drive_link"
            target="_blank"
            class="btn-outline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            CV.pdf
          </a>
        </div>
      </div>

      <!-- Right column: AI Terminal -->
      <div class="hero-right">
        <!-- Rotating ring -->
        <div class="ring-wrap">
          <div class="ring animate-spin-slow"></div>
          <div class="ring ring-2"></div>
        </div>

        <div class="terminal glass-glow scan-line-overlay">
          <!-- Terminal top bar -->
          <div class="term-bar">
            <div class="term-dots">
              <span class="tdot red"></span>
              <span class="tdot yellow"></span>
              <span class="tdot green"></span>
            </div>
            <span class="term-title">bunheng@ai-core ~ neural-net</span>
            <span class="term-badge">● LIVE</span>
          </div>

          <!-- Terminal body -->
          <div class="term-body">
            <div v-for="(line, i) in termLines" :key="i" class="term-line" :class="line.type">
              <span v-if="line.prompt" class="prompt">{{ line.prompt }}</span>
              <span v-html="line.text"></span>
            </div>

            <!-- AI response block -->
            <div class="ai-response">
              <div class="ai-header">
                <span class="ai-label">◈ AI_CORE</span>
                <span class="ai-ver">v3.2.1</span>
              </div>
              <div class="ai-body">
                Analyzing developer profile...<br>
                <span class="ai-green">✓</span> Skills matrix: <span class="ai-cyan">OPTIMAL</span><br>
                <span class="ai-green">✓</span> Code quality: <span class="ai-cyan">EXCELLENT</span><br>
                <span class="ai-green">✓</span> Collaboration: <span class="ai-cyan">READY</span>
              </div>
            </div>

            <p class="term-line cmd"><span class="prompt">➜ ai</span> <span class="animate-blink cursor-block">█</span></p>
          </div>
        </div>

        <!-- Floating chips -->
        <div class="chip chip-1 animate-float">Laravel</div>
        <div class="chip chip-2 animate-float" style="animation-delay:1s">Vue 3</div>
        <div class="chip chip-3 animate-float" style="animation-delay:2s">Django</div>
      </div>

    </div>

    <!-- Bottom scroll cue -->
    <div class="scroll-cue">
      <span class="scroll-text">scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const glitchTitle = 'Building AI-Powered Systems'

const phrases = [
  'full-stack.engineer()',
  'laravel.architect()',
  'django.builder()',
  'system.designer()',
  'vue.craftsman()',
]

const typedText = ref('')
let phraseIndex = 0
let charIndex = 0
let isDeleting = false
let timeout = null

function typeLoop() {
  const current = phrases[phraseIndex]
  if (isDeleting) {
    typedText.value = current.slice(0, --charIndex)
  } else {
    typedText.value = current.slice(0, ++charIndex)
  }

  let delay = isDeleting ? 40 : 80
  if (!isDeleting && charIndex === current.length) {
    delay = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    phraseIndex = (phraseIndex + 1) % phrases.length
    delay = 400
  }
  timeout = setTimeout(typeLoop, delay)
}

const stats = [
  { value: '3+', label: 'Years exp' },
  { value: '5+', label: 'Projects' },
  { value: '2', label: 'Stacks' },
  { value: 'PNH', label: 'Location' },
]

const termLines = [
  { prompt: '➜', text: '<span style="color:#22d3ee">~</span> whoami', type: 'cmd' },
  { text: 'CHHEM BUNHENG &mdash; Full-Stack Developer', type: 'out' },
  { prompt: '➜', text: '<span style="color:#22d3ee">~</span> cat ./stack.json', type: 'cmd' },
  { text: '<span style="color:#d946ef">{</span>', type: 'out' },
  { text: '&nbsp;&nbsp;<span style="color:#22d3ee">"backend"</span>: ["Laravel","Django","Node.js"],', type: 'out' },
  { text: '&nbsp;&nbsp;<span style="color:#22d3ee">"frontend"</span>: ["Vue 3","Next.js","React"],', type: 'out' },
  { text: '&nbsp;&nbsp;<span style="color:#22d3ee">"db"</span>: ["MySQL","PostgreSQL"]', type: 'out' },
  { text: '<span style="color:#d946ef">}</span>', type: 'out' },
]

onMounted(() => timeout = setTimeout(typeLoop, 500))
onUnmounted(() => clearTimeout(timeout))
</script>

<style scoped>
/* ---- Layout ---- */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5.5rem 1.25rem 4rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-size: 40px 40px;
  background-image:
    linear-gradient(to right,  rgba(34,211,238,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(34,211,238,0.04) 1px, transparent 1px);
  pointer-events: none;
}

.hero-inner {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) { .hero-inner { grid-template-columns: 1fr 1fr; } }

/* ---- Status pill ---- */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.875rem;
  border-radius: 99px;
  border: 1px solid rgba(34,211,238,0.25);
  background: rgba(34,211,238,0.07);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--primary);
  margin-bottom: 2rem;
  position: relative;
}

.status-ping {
  position: absolute;
  left: 12px;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--primary);
  animation: ping 1.5s ease-in-out infinite;
}
.status-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--primary);
  position: relative;
  z-index: 1;
}

/* ---- Glitch Title ---- */
.glitch-wrap {
  position: relative;
  margin-bottom: 1.25rem;
}

.glitch-title {
  font-size: clamp(2rem, 5.5vw, 3.75rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -0.03em;
  position: relative;
  z-index: 1;
}

.glitch-layer-1,
.glitch-layer-2 {
  position: absolute;
  top: 0; left: 0;
  font-size: clamp(2rem, 5.5vw, 3.75rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  width: 100%;
  pointer-events: none;
}

.glitch-wrap:hover .glitch-layer-1 {
  color: var(--primary);
  animation: glitch-1 0.3s infinite linear;
}
.glitch-wrap:hover .glitch-layer-2 {
  color: var(--secondary);
  animation: glitch-2 0.3s infinite linear;
}

/* ---- AI typing line ---- */
.ai-type-line {
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 1.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.ai-prefix { color: #475569; }
.ai-typed  { color: var(--primary); }
.cursor    { color: var(--primary); font-size: 1.1rem; }

/* ---- Description ---- */
.hero-desc {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #94a3b8;
  max-width: 30rem;
  margin-bottom: 2rem;
}
.name-highlight { color: #f1f5f9; font-weight: 600; }
.highlight-cyan  { color: var(--primary); }
.highlight-purple { color: var(--secondary); }

.tag-chip {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  background: rgba(129,140,248,0.1);
  border: 1px solid rgba(129,140,248,0.2);
  border-radius: 4px;
  padding: 0.1rem 0.4rem;
  margin: 0 1px;
}

/* ---- Stats ---- */
.stats-row {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.stat-card {
  text-align: center;
  min-width: 60px;
}
.stat-value {
  font-family: var(--font-mono);
  font-size: 1.375rem;
  font-weight: 700;
}
.stat-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.125rem;
}

/* ---- CTAs ---- */
.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
  align-items: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #0e7490, #22d3ee);
  color: #020617;
  font-weight: 700;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s;
  box-shadow: 0 0 20px rgba(34,211,238,0.25);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 32px rgba(34,211,238,0.4);
}
.btn-primary svg { transition: transform 0.2s; }
.btn-primary:hover svg { transform: translateX(3px); }

.btn-ghost {
  padding: 0.75rem 1.25rem;
  color: #94a3b8;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  text-decoration: none;
  border: 1px solid #334155;
  border-radius: 4px;
  transition: all 0.2s;
}
.btn-ghost:hover { border-color: #64748b; color: #fff; background: rgba(255,255,255,0.04); }

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem 1rem;
  color: var(--secondary);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  text-decoration: none;
  border: 1px solid rgba(217,70,239,0.25);
  border-radius: 4px;
  background: rgba(217,70,239,0.05);
  transition: all 0.2s;
}
.btn-outline:hover {
  border-color: var(--secondary);
  box-shadow: 0 0 12px rgba(217,70,239,0.2);
}

/* ---- Terminal ---- */
.hero-right {
  position: relative;
  display: none;
}
@media (min-width: 1024px) { .hero-right { display: block; } }

/* Rotating rings */
.ring-wrap {
  position: absolute;
  inset: -40px;
  pointer-events: none;
  z-index: 0;
}
.ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(34,211,238,0.08);
}
.ring-2 { inset: 20px; border-color: rgba(217,70,239,0.08); animation: rotate-slow 30s linear infinite reverse; }

.terminal {
  position: relative;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
}

.term-bar {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 1rem;
  background: rgba(15,23,42,0.8);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.term-dots { display: flex; gap: 6px; }
.tdot { width: 11px; height: 11px; border-radius: 50%; }
.tdot.red    { background: #ef4444; }
.tdot.yellow { background: #f59e0b; }
.tdot.green  { background: #22c55e; }
.term-title { font-size: 0.72rem; color: #475569; margin-left: auto; }
.term-badge { font-size: 0.65rem; color: #22c55e; margin-left: 0.5rem; }

.term-body { padding: 1rem 1.25rem; background: rgba(2,6,23,0.9); }

.term-line { line-height: 1.8; color: #94a3b8; }
.term-line.cmd { display: flex; align-items: center; gap: 0.5rem; }
.term-line.out { padding-left: 1rem; }
.prompt { color: #4ade80; }

.cursor-block {
  color: var(--primary);
  font-size: 0.875rem;
}

/* AI response block */
.ai-response {
  margin: 0.875rem 0;
  border: 1px solid rgba(34,211,238,0.15);
  border-radius: 6px;
  background: rgba(34,211,238,0.04);
  overflow: hidden;
}
.ai-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.75rem;
  background: rgba(34,211,238,0.08);
  border-bottom: 1px solid rgba(34,211,238,0.1);
  font-size: 0.7rem;
}
.ai-label { color: var(--primary); font-weight: 700; }
.ai-ver   { color: #475569; }
.ai-body  { padding: 0.625rem 0.75rem; line-height: 1.9; font-size: 0.775rem; color: #94a3b8; }
.ai-green { color: #4ade80; }
.ai-cyan  { color: var(--primary); }

/* Floating chips */
.chip {
  position: absolute;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 0.3rem 0.7rem;
  border-radius: 99px;
  border: 1px solid rgba(34,211,238,0.25);
  background: rgba(34,211,238,0.08);
  color: var(--primary);
  pointer-events: none;
  white-space: nowrap;
}
.chip-1 { top: -16px; right: 30px; }
.chip-2 { bottom: 40px; right: -20px; border-color: rgba(217,70,239,0.3); background: rgba(217,70,239,0.07); color: var(--secondary); }
.chip-3 { bottom: 0; left: -10px; border-color: rgba(129,140,248,0.3); background: rgba(129,140,248,0.07); color: var(--accent); }

/* ---- Scroll cue ---- */
.scroll-cue {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
}
.scroll-text {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: #334155;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.scroll-line {
  width: 1px;
  height: 32px;
  background: linear-gradient(to bottom, #334155, transparent);
}
</style>
