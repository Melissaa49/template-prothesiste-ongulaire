<template>
  <AppHeader />
  <slot />
  <ClientOnly>
    <AppFooter />
  </ClientOnly>
</template>

<script setup>
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>
