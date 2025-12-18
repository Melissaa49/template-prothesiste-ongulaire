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
      <button class="burger" @click="open = !open">
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
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  background: rgba(255, 248, 244, 0.85);
  backdrop-filter: blur(10px);
}

.header-inner {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* LOGO */
.logo {
  font-weight: 600;
  font-size: 1.1rem;
  color: #8a5a4a;
}

/* NAV DESKTOP */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-desktop a {
  color: #8a5a4a;
  text-decoration: none;
  font-size: 0.95rem;
}

.nav-btn {
  padding: 10px 22px;
}

/* BURGER */
.burger {
  display: none;
  font-size: 26px;
  background: none;
  border: none;
  color: #8a5a4a;
}

/* NAV MOBILE */
.nav-mobile {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  background: #fff8f4;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .burger {
    display: block;
  }
}

/* TRANSITION */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
