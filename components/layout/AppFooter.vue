<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="brand">
        <h3>Votre Nom</h3>
        <p>
          Manucures élégantes<br />
          & personnalisées
        </p>
      </div>

      <div class="links">
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/galerie">Galerie</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>

      <div class="legal">
        <p>© {{ year }} – Tous droits réservés</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--bg-soft);
  padding: 64px 0 32px;
  margin-top: 80px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  align-items: center;
}

.brand h3 {
  font-family: 'Playfair Display', serif;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
}

.legal {
  font-size: 0.8rem;
  color: var(--text-soft);
  text-align: right;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .legal {
    text-align: center;
  }
}
</style>
