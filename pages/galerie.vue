<template>
  <main class="section">
    <div class="container">
      <SectionTitle
        title="Galerie"
        subtitle="Toutes mes réalisations"
      />

      <div class="grid">
        <div
          v-for="item in items"
          :key="item.id"
          class="card"
        >
          <img :src="item.image" :alt="item.alt" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { items } = useGallery()
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  background: white;
  padding: 12px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}

.card img {
  border-radius: 18px;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
