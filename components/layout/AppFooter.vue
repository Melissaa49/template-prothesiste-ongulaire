<template>
  <footer class="footer">
    <div class="footer-overlay"></div>

    <div class="container footer-inner">
      <!-- BRAND -->
      <div class="footer-brand">
        <h3>Votre Nom</h3>
        <p>
          Manucures élégantes<br />
          & personnalisées
        </p>
      </div>

      <!-- NAV -->
      <nav class="footer-nav">
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/galerie">Galerie</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>

      <!-- LEGAL -->
      <div class="footer-legal">
        <p>© {{ year }} — Tous droits réservés</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
/* =========================
   FOOTER — LUXE
========================= */

.footer {
  position: relative;
  background-image: url('/images/nails/gallery-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 96px 0 40px;
  overflow: hidden;
}

/* voile soyeux */

/* contenu */
.footer-inner {
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 32px;
}

/* =========================
   BRAND
========================= */

.footer-brand h3 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.6rem;
  margin-bottom: 8px;
  color: var(--text-main);
}

.footer-brand p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-soft);
}

/* =========================
   NAV
========================= */

.footer-nav {
  display: flex;
  gap: 28px;
  justify-content: center;
}

.footer-nav a {
  font-size: 0.9rem;
  color: var(--text-main);
  text-decoration: none;
  position: relative;
  opacity: 0.85;
  transition: opacity 0.25s ease;
}

.footer-nav a:hover {
  opacity: 1;
}

/* petit soulignement chic */
.footer-nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.25s ease;
}

.footer-nav a:hover::after {
  width: 100%;
}

/* =========================
   LEGAL
========================= */

.footer-legal {
  text-align: right;
}

.footer-legal p {
  font-size: 0.75rem;
  color: var(--text-soft);
}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {
  .footer {
    padding: 72px 0 36px;
  }

  .footer-inner {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 28px;
  }

  .footer-legal {
    text-align: center;
  }

  .footer-nav {
    gap: 20px;
    flex-wrap: wrap;
  }
}

</style>
