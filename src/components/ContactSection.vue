<template>
  <section id="contact" class="contact-section">
    <div class="bg-gradient"></div>
    <div class="container">
      <div class="contact-card">
        <h2 class="contact-title">Execute Collaboration</h2>
        <p class="contact-sub">Available for freelance and full-time opportunities.</p>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-row">
            <div class="field">
              <label class="label">Input: Name</label>
              <input
                v-model="form.name"
                required
                type="text"
                placeholder="John Doe"
                class="input"
              />
            </div>
            <div class="field">
              <label class="label">Input: Email</label>
              <input
                v-model="form.email"
                required
                type="email"
                placeholder="john@example.com"
                class="input"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Input: Payload (Message)</label>
            <textarea
              v-model="form.message"
              required
              rows="4"
              placeholder="Project details..."
              class="input textarea"
            ></textarea>
          </div>

          <button type="submit" class="submit-btn">
            <span v-if="!sent">Send Transmission [ENTER]</span>
            <span v-else class="sent-msg">✓ Transmission Sent. Standby for response.</span>
          </button>
        </form>

        <div class="social-links">
          <a href="mailto:chhembunheng77@gmail.com" class="social-link">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Email
          </a>
          <a href="https://t.me/henggdev_04" target="_blank" class="social-link">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            Telegram
          </a>
          <a href="https://github.com/chhembunheng" target="_blank" class="social-link">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.286-.01-1.04-.015-2.04-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.235 1.84 1.235 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.62-5.479 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.63.297 12 .297z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const sent = ref(false)

function handleSubmit() {
  sent.value = true
  setTimeout(() => {
    sent.value = false
    form.value = { name: '', email: '', message: '' }
  }, 4000)
}
</script>

<style scoped>
.contact-section {
  padding: 6rem 0;
  position: relative;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(6, 78, 59, 0.1), transparent);
  pointer-events: none;
}

.container {
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
}

.contact-card {
  background: #020617;
  border: 1px solid #1e293b;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.9);
}
@media (min-width: 768px) { .contact-card { padding: 3rem; } }

.contact-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 0.5rem;
}

.contact-sub {
  color: #94a3b8;
  text-align: center;
  margin-bottom: 2.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 768px) { .form-row { grid-template-columns: 1fr 1fr; } }

.field { display: flex; flex-direction: column; gap: 0.5rem; }

.label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-primary);
  text-transform: uppercase;
}

.input {
  background: #0f172a;
  border: 1px solid #334155;
  color: #fff;
  border-radius: 4px;
  padding: 0.75rem;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
}
.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 1px var(--color-primary);
}
.textarea { resize: vertical; min-height: 100px; }

.submit-btn {
  padding: 1rem;
  background: linear-gradient(to right, #0e7490, #22d3ee);
  color: #fff;
  font-weight: 700;
  font-family: var(--font-mono);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
}
.submit-btn:hover { opacity: 0.9; transform: translateY(-1px); }

.sent-msg { color: #86efac; }

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #1e293b;
  color: #64748b;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}
.social-link:hover { color: var(--color-primary); }
</style>
