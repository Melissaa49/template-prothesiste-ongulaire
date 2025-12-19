export function useNavigation() {
  const links = [
    { label: 'Accueil', to: '/' },
    { label: 'Galerie', to: '/galerie' },
    { label: 'Contact', to: '/contact' }
  ]

  return { links }
}
