export default defineNuxtConfig({
  /* ✅ AUTO-IMPORT DES COMPOSANTS (LA CLÉ) */
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  css: [
    '~/assets/css/variables.css',
    '~/assets/css/base.css',
    '~/assets/css/layout.css',
    '~/assets/css/home.css'
  ],

  app: {
    head: {
      title: 'Votre Nom – Prothésiste Ongulaire',
      meta: [
        {
          name: 'description',
          content:
            'Sublimez vos ongles avec élégance grâce à des manucures personnalisées.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500&display=swap'
        }
      ]
    }
  },

  modules: ['@nuxt/image']
})