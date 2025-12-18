<template>
  <section class="section gallery">
    <div class="container">
      <SectionTitle
        title="Mes Réalisations"
        subtitle="Explorez mon portfolio de manucures raffinées"
      />

      <!-- GRID -->
      <div class="grid">
        <div
          v-for="item in displayedItems"
          :key="item.id"
          class="card"
        >
          <img
            :src="item.image"
            :alt="item.alt"
            loading="lazy"
          />
        </div>
      </div>

      <!-- CTA -->
      <div class="cta">
        <BaseButton>
          Voir la Galerie complète
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGallery } from '~/composables/useGallery'

const { items } = useGallery()

/* ✅ logique SSR-safe */
const displayedItems = computed(() => {
  if (import.meta.client && window.innerWidth <= 768) {
    return items.slice(0, 4) // 📱 mobile
  }
  return items.slice(0, 6)   // 🖥️ desktop
})
</script>


<style scoped>
/* =========================
   SECTION
========================= */
.gallery {
  background: var(--bg-main);
  padding: 120px 0;
}

/* =========================
   GRID
========================= */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* =========================
   CARD IMAGE
========================= */
.card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 10px;
  box-shadow: var(--shadow-soft);
  transition: transform 0.25s ease;
}

.card:hover {
  transform: translateY(-2px);
}

.card img {
  width: 100%;
  display: block;
  border-radius: 18px;
}

/* =========================
   CTA
========================= */
.cta {
  margin-top: 48px;
  text-align: center;
}

/* =========================
   MOBILE
========================= */
@media (max-width: 768px) {
  .gallery {
    padding: 90px 0;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}
</style>
