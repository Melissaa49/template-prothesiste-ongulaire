<template>
  <button class="btn-elegant">
    <span class="btn-label">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.btn-elegant {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 42px;
  padding: 0 28px;
  min-width: max-content;

  border-radius: 999px;
  border: none;
  overflow: hidden;

  /* 🎨 image de fond DU bouton */
  background-image: url('/images/nails/bouton.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 115%; /* ⬅ clé n°1 : on mange le halo */

  cursor: pointer;
  appearance: none;
  outline: none;

  box-shadow:
    0 8px 18px rgba(191, 137, 97, 0.35);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

/* 🧠 masque interne (clé n°2) */
.btn-elegant::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;

  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 55%,
    rgba(160, 90, 50, 0.18) 100%
  );

  pointer-events: none;
}
/* ✨ reflets dorés haut + bas */
.btn-elegant::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;

  background:
    linear-gradient(
      to bottom,
      rgba(255, 215, 160, 0.85) 0%,
      rgba(255, 215, 160, 0.35) 6%,
      rgba(255, 215, 160, 0.05) 12%,
      transparent 22%,
      transparent 78%,
      rgba(210, 160, 110, 0.05) 88%,
      rgba(210, 160, 110, 0.35) 94%,
      rgba(210, 160, 110, 0.85) 100%
    );
}

/* Texte */
.btn-label {
  position: relative;
  z-index: 1;

  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  white-space: nowrap;

  color: #8c5a3c;
  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.6);
}

/* Hover subtil */
.btn-elegant:hover {
  transform: translateY(-1px);
  box-shadow:
    0 12px 24px rgba(191, 137, 97, 0.45);
}
</style>
