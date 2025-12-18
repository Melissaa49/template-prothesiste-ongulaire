<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 12px;
  box-shadow: var(--shadow-soft);
}

</style>
