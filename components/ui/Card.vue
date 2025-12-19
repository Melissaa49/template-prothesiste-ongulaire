<template>
  <div class="card-luxe">
    <slot />
  </div>
</template>

<style scoped>
/* =========================
   CARD LUXE RECTANGULAIRE
========================= */

.card-luxe {
  position: relative;
  border-radius: 24px;
  padding: 8px;
  background: transparent;
  overflow: hidden;

  /* 🔑 carte RECTANGULAIRE */
  aspect-ratio: 4 / 3;

  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

/* 🔑 CADRE BIJOU (issu du bouton) */
.card-luxe::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;

  background-image: url('/images/nails/bouton.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 118%; /* ⬅ fin & subtil */

  pointer-events: none;
  z-index: 0;
  opacity: 0.9;
}

/* 🔑 masque interne (comme le bouton) */
.card-luxe::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 1;

  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.16) 0%,
    rgba(255, 255, 255, 0.05) 55%,
    rgba(160, 90, 50, 0.16) 100%
  );
}

/* IMAGE */
.card-luxe img {
  position: relative;
  z-index: 2;

  width: 100%;
  height: 100%;
  object-fit: cover;        /* ⬅ remplit le rectangle */
  display: block;

  background: white;
  border-radius: 18px;
}

/* Hover doux */
.card-luxe:hover {
  transform: translateY(-3px);
  box-shadow:
    0 18px 42px rgba(0, 0, 0, 0.12);
}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {
  .card-luxe {
    aspect-ratio: 3 / 2; /* ⬅ encore plus élégant sur mobile */
    border-radius: 20px;
    padding: 6px;
  }

  .card-luxe img {
    border-radius: 14px;
  }
}
</style>
