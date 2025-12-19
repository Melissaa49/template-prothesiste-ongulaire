<template>
  <section class="home-services">
    <div class="services-inner container">

      <!-- HEADER -->
      <header class="services-header">
        <h2>Mes Services</h2>
        <p>
          Des prestations pensées pour sublimer vos mains,
          avec douceur et précision.
        </p>
      </header>

      <!-- GRID -->
      <div class="services-grid">
        <article
          v-for="service in services"
          :key="service.title"
          class="service-card"
        >
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Manucure classique',
    description:
      'Soin complet des ongles pour une mise en beauté naturelle et élégante.'
  },
  {
    title: 'Nail art raffiné',
    description:
      'Créations délicates, minimalistes ou sophistiquées, selon vos envies.'
  },
  {
    title: 'Pose gel',
    description:
      'Tenue longue durée, courbe parfaite et finition haut de gamme.'
  }
]
</script>

<style scoped>
/* =========================
   SECTION SERVICES
========================= */

.home-services {
  position: relative;

  /* ⬆️ on remonte la section */
  padding: 60px 0 120px;

  background-image: url('/images/nails/gallery-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 🌫️ voile ULTRA léger (papier de soie) */
.home-services::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 250, 245, 0.18); /* ⬅ clé du luxe */
}

/* contenu */
.services-inner {
  position: relative;
  z-index: 1;
}

/* =========================
   HEADER
========================= */

.services-header {
  max-width: 560px;
  margin: 0 auto 56px; /* ⬅ centrage horizontal */
  text-align: center;  /* ⬅ centre h2 + p */
}


.services-header h2 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 2.3rem;
  line-height: 1.2;
  margin-bottom: 14px;
  color: var(--text-main);
}

.services-header p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-soft);
}

/* =========================
   GRID
========================= */

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

/* =========================
   CARD SERVICE
========================= */

.service-card {
  position: relative;
  background: #ffffff;
  border-radius: 22px;
  padding: 30px 26px;

  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

/* hover doux */
.service-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 18px 42px rgba(0, 0, 0, 0.12);
}

/* TITRE */
.service-card h3 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: var(--text-main);
}

/* TEXTE */
.service-card p {
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--text-soft);
}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {
  .home-services {
    padding: 50px 0 96px; /* ⬅ encore plus remonté */
  }

  .services-header {
    margin-bottom: 40px;
  }

  .services-header h2 {
    font-size: 1.9rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .service-card {
    padding: 26px 22px;
  }
}
</style>
