<template>
  <div class="title">
    <h2>{{ title }}</h2>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 56px;
}

.title h2 {
font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #8a5a4a;}

.title p {
  margin-top: 8px;
  color: var(--text-soft);
}

</style>
