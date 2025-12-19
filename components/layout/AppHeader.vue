<template>
  <header class="app-header">
    <div class="container header-inner">

      <!-- LOGO -->
      <div class="logo">
        Votre Nom
      </div>

      <!-- NAV DESKTOP -->
      <nav class="nav-desktop">
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/galerie">Galerie</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <BaseButton class="nav-btn">Rendez-vous</BaseButton>
      </nav>

      <!-- BURGER MOBILE -->
      <button class="burger" @click="open = !open" aria-label="Menu">
        ☰
      </button>
    </div>

    <!-- MENU MOBILE -->
    <transition name="fade">
      <nav v-if="open" class="nav-mobile">
        <NuxtLink to="/" @click="open = false">Accueil</NuxtLink>
        <NuxtLink to="/galerie" @click="open = false">Galerie</NuxtLink>
        <NuxtLink to="/contact" @click="open = false">Contact</NuxtLink>
        <BaseButton>Rendez-vous</BaseButton>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
/* =========================
   HEADER — LUXE
========================= */

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;

  /* transparence élégante */
  background: rgba(255, 250, 246, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  }

.header-inner {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* =========================
   LOGO — même ADN que titres
========================= */

.logo {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.35rem;
  letter-spacing: 0.5px;
  color: #8a5a4a;
  white-space: nowrap;
}

/* =========================
   NAV DESKTOP
========================= */

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-desktop a {
  position: relative;
  font-size: 0.95rem;
  color: #8a5a4a;
  text-decoration: none;
  opacity: 0.85;
  transition: opacity 0.25s ease;
}

.nav-desktop a:hover {
  opacity: 1;
}

/* soulignement chic */
.nav-desktop a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.25s ease;
}

.nav-desktop a:hover::after {
  width: 100%;
}

/* bouton */
.nav-btn {
  padding: 10px 22px;
}

/* =========================
   BURGER
========================= */

.burger {
  display: none;
  font-size: 26px;
  background: none;
  border: none;
  color: #8a5a4a;
}

/* =========================
   NAV MOBILE
========================= */

.nav-mobile {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px 24px;

  background: rgba(255, 250, 246, 0.95);
  backdrop-filter: blur(10px);
}

.nav-mobile a {
  font-size: 1rem;
  color: #8a5a4a;
  text-decoration: none;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .burger {
    display: block;
  }
}

/* =========================
   TRANSITION
========================= */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
