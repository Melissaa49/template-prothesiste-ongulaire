<template>
  <section class="hero">
    <div class="hero-inner container">

      <!-- TEXTE -->
      <div class="hero-text">
        <h1>
          Sublimez vos ongles<br />
          avec élégance
        </h1>

        <p>
          Découvrez la beauté et la perfection<br />
          de manucures personnalisées
        </p>

        <BaseButton class="hero-btn">
          Prendre rendez-vous
        </BaseButton>
      </div>

      <!-- CARTES IMAGES -->
      <div class="hero-images">
        <img
          src="/images/nails/ongle1.png"
          alt="Manucure élégante"
          class="img img-1"
        />
        <img
          src="/images/nails/ongle2.png"
          alt="Nail art raffiné"
          class="img img-2"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
/* =========================
   HERO – BASE (DESKTOP)
========================= */
.hero {
  position: relative;
  background-image: url('/images/nails/fond-nails.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  padding-top: calc(160px + 72px); /* header + respiration */
  padding-bottom: 160px;
}

.hero-inner {
  position: relative;
}

/* TEXTE */
.hero-text {
  max-width: 520px;
  position: relative;
  z-index: 3;
}

.hero-text h1 {
  font-size: 3rem;
  line-height: 1.2;
}

.hero-text p {
  margin: 24px 0 36px;
  color: var(--text-soft);
  font-size: 1rem;
}


/* CARTES */
.hero-images {
  position: absolute;
  top: -52px;
  right: 0;
  width: 360px;
  height: 360px;
  z-index: 2;
}

.hero-images .img {
  position: absolute;
  width: 240px;
  padding: 8px;
  background: white;
  border-radius: 18px;
  box-shadow: var(--shadow-soft);
}

.hero-images .img-1 {
  top: 0;
  right: 0;
  transform: rotate(-3deg);
  z-index: 2;
}

.hero-images .img-2 {
  top: 140px;
  right: 20px;
  transform: rotate(3deg);
  z-index: 1;
}


/* MOBILE – ZONE CENTRALE COMME MAQUETTE */
@media (max-width: 768px) {
  .hero {
    background-position: top center;

    padding-top: calc(140px + 64px);
    padding-bottom: 120px;
  }

  /* TEXTE ALIGNÉ À GAUCHE */
  .hero-text {
    max-width: 320px;
    margin: 0;                 /* ✅ plus de centrage */
    text-align: left;          /* ✅ alignement gauche */
  }

  .hero-text h1 {
    font-size: 2.2rem;
    line-height: 1.25;
  }

  .hero-text p {
    margin: 20px 0 32px;
    color: #9a6a5a;
  }

  /* BOUTON ALIGNÉ À GAUCHE */
  .hero-btn {
    margin: 0;                 /* ✅ plus centré */
  }

  /* CARTES TOUJOURS À DROITE */
  .hero-images {
    right: -12px;
    width: 220px;
    height: 260px;
  }

  .hero-images .img {
    width: 160px;
    padding: 6px;
    border-radius: 14px;
  }

  .hero-images .img-2 {
    top: 100px;
    right: 12px;
  }
}


</style>

