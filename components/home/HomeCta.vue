<template>
  <section class="cta">
    <div class="container content">
      <h2>
        Offrez à vos ongles<br />
        l’élégance qu’ils méritent
      </h2>

      <p>
        Prenez rendez-vous et laissez-vous guider
        par une expertise sur-mesure.
      </p>

      <BaseButton>Prendre rendez-vous</BaseButton>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background: radial-gradient(
    circle at center,
    #ffffff 0%,
    var(--bg-main) 70%
  );
  padding: 110px 0;
  text-align: center;
}

.cta h2 {
  font-size: 2.4rem;
}

.cta p {
  margin: 16px 0 36px;
  color: var(--text-soft);
}

@media (max-width: 768px) {
  .cta h2 {
    font-size: 1.9rem;
  }
}

</style>
