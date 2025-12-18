<template>
  <button class="btn-elegant">
    <slot />
  </button>
</template>

<style scoped>
.btn-elegant {
  position: relative;
  padding: 16px 42px;
  border-radius: 999px;

  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-main);

  background: linear-gradient(
    145deg,
    #f7d8c8,
    #d9a08b
  );

  border: 1px solid rgba(207, 165, 124, 0.6);

  box-shadow:
    0 8px 20px rgba(207, 165, 124, 0.35),
    inset 0 0 0 2px rgba(255, 255, 255, 0.6);

  transition: all 0.3s ease;
}

.btn-elegant::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  pointer-events: none;
}

</style>
