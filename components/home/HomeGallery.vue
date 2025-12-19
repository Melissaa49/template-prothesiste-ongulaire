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
          <NuxtImg
            :src="item.image"
            :alt="item.alt"
            loading="lazy"
          />
        </div>
      </div>

      <!-- CTA -->
      <div class="cta">
        <BaseButton>
          Voir la galerie complète
        </BaseButton>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGallery } from '~/composables/useGallery'
import { useResponsive } from '~/composables/useResponsive'

const { items } = useGallery()
const { isMobile } = useResponsive()

/* ✅ SSR-safe */
const displayedItems = computed(() => {
  return isMobile.value
    ? items.slice(0, 4) // 📱 mobile
    : items.slice(0, 6) // 🖥️ desktop
})
</script>

<style scoped>
/* =========================
   SECTION GALLERY
========================= */
.gallery {
  background: var(--bg-main);
  padding: 80px 0 120px;
}

/* =========================
   GRID
========================= */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 48px;
}

/* =========================
   CARD — RECTANGLE ÉLÉGANT
========================= */
.card {
  position: relative;
  background: #ffffff;
  border-radius: 26px;
  padding: 12px;
  overflow: hidden;

  aspect-ratio: 4 / 3;

  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.06);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow:
    0 18px 42px rgba(0, 0, 0, 0.1);
}

/* IMAGE */
.card :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 20px;
}

/* =========================
   CTA
========================= */
.cta {
  margin-top: 64px;
  text-align: center;
}

/* =========================
   MOBILE
========================= */
@media (max-width: 768px) {
  .gallery {
    padding: 70px 0 100px;
  }

  .grid {
    gap: 20px;
    margin-top: 36px;
  }

  .card {
    border-radius: 22px;
    padding: 10px;
    aspect-ratio: 3 / 2;
  }

  .card :deep(img) {
    border-radius: 16px;
  }
}
</style>
