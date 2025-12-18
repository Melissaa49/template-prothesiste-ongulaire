<template>
  <main class="section">
    <div class="container contact">
      <SectionTitle
        title="Contact"
        subtitle="Prenez rendez-vous ou posez vos questions"
      />

      <form class="form">
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <textarea placeholder="Votre message" rows="5" />

        <BaseButton>Envoyer</BaseButton>
      </form>
    </div>
  </main>
</template>

<style scoped>
.contact {
  max-width: 600px;
}

.form {
  display: grid;
  gap: 16px;
}

input,
textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: none;
  background: var(--bg-soft);
  font-family: inherit;
}
</style>
