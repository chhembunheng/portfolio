<template>
  <section class="page-section">
    <div class="container">
      <h2 class="h2-serif section-title">Contact.</h2>
      
      <div class="contact-grid">
        <div class="contact-info">
          <p class="contact-desc">
            Currently open to new opportunities, freelance projects, and technical discussions. 
            I typically respond within 24 hours.
          </p>
          
          <div class="contact-details">
            <div class="detail-item">
              <span class="detail-label">Email</span>
              <a href="mailto:chhembunheng77@gmail.com" class="detail-link">chhembunheng77@gmail.com</a>
            </div>
            <div class="detail-item">
              <span class="detail-label">Location</span>
              <span class="detail-text">Phnom Penh, Cambodia</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Social</span>
              <div class="social-links">
                <a href="https://t.me/henggdev_04" target="_blank" class="detail-link">Telegram</a>
                <a href="https://github.com/chhembunheng" target="_blank" class="detail-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <input type="text" v-model="form.name" placeholder="Name" required class="elegant-input" />
          </div>
          <div class="form-group">
            <input type="email" v-model="form.email" placeholder="Email" required class="elegant-input" />
          </div>
          <div class="form-group">
            <textarea v-model="form.message" placeholder="Message" rows="5" required class="elegant-input"></textarea>
          </div>
          <button type="submit" class="btn-outline submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
          
          <p v-if="showSuccess" class="success-msg">Message received.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    showSuccess.value = true
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => showSuccess.value = false, 5000)
  }, 1000)
}
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

.contact-grid {
  display: grid;
  gap: 4rem;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
  }
}

.contact-desc {
  font-size: 1.125rem;
  color: var(--text-secondary);
  font-weight: 300;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.detail-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
}

.detail-link, .detail-text {
  font-size: 1.1rem;
  color: var(--text-primary);
}

.detail-link {
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
  width: max-content;
}

.detail-link:hover {
  border-color: var(--text-primary);
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.elegant-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 0;
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--text-primary);
  transition: border-color 0.3s ease;
  resize: vertical;
}

.elegant-input:focus {
  outline: none;
  border-color: var(--text-primary);
}

.elegant-input::placeholder {
  color: var(--text-tertiary);
}

.submit-btn {
  align-self: flex-start;
  margin-top: 1rem;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success-msg {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-style: italic;
}
</style>
