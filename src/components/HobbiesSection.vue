<template>
  <section class="hobbies-section">
    <div class="container">
      <div class="header">
        <h2 class="section-title">Off-Duty Mode</h2>
        <p class="section-desc">Photography, Videography, and exploring ideas.</p>
      </div>

      <div class="tiktok-grid">
        <div
          v-for="(id, i) in tiktokIds"
          :key="i"
          class="tiktok-card"
        >
          <div class="tiktok-aspect">
            <iframe
              :src="`https://www.tiktok.com/embed/v2/${id}`"
              class="tiktok-frame"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div class="spotify-wrap">
        <p class="spotify-label">// Currently Playing</p>
        <iframe
          style="border-radius:12px"
          src="https://open.spotify.com/embed/artist/2AdzvYhoaq2bHCk0u9RfnD?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
const tiktokIds = [
  '7305783757137546498',
  '7415926424487480577',
  '7430250322095852801',
]
</script>

<style scoped>
.hobbies-section {
  padding: 6rem 0;
  border-top: 1px solid #1e293b;
  overflow: hidden;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}
@media (min-width: 640px) { .container { padding: 0 1.5rem; } }

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #fff;
}

.section-desc {
  color: #94a3b8;
  margin-top: 0.5rem;
}

.tiktok-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
}
@media (min-width: 640px) { .tiktok-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .tiktok-grid { grid-template-columns: repeat(3, 1fr); } }

.tiktok-card {
  border-radius: 12px;
  overflow: hidden;
  background: #0f172a;
  border: 1px solid #1e293b;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8);
  transition: transform 0.3s;
}
.tiktok-card:hover { transform: scale(1.02); }

.tiktok-aspect {
  aspect-ratio: 9 / 16;
  position: relative;
  width: 100%;
}

.tiktok-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.spotify-wrap {
  background: rgba(15, 23, 42, 0.5);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #1e293b;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.spotify-label {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--color-primary);
  align-self: flex-start;
}
</style>
