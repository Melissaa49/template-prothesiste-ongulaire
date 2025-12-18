<template>
  <section class="section services">
    <div class="container">
      <SectionTitle
        title="Mes Services"
        subtitle="Des prestations pensées pour sublimer vos mains"
      />

      <div class="grid">
        <Card
          v-for="service in services"
          :key="service.title"
        >
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Manucure classique',
    description: 'Soin des ongles et mise en beauté naturelle.'
  },
  {
    title: 'Nail art',
    description: 'Créations artistiques délicates et personnalisées.'
  },
  {
    title: 'Pose gel',
    description: 'Tenue longue durée, finition élégante.'
  }
]
</script>

<style scoped>
.services {
  background: var(--bg-soft);
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* CONTENU */
h3 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  margin-bottom: 8px;
}

p {
  font-size: 0.9rem;
  color: var(--text-soft);
}

/* MOBILE */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
