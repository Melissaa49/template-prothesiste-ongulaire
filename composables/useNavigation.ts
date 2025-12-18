export function useNavigation() {
  const links = [
    { label: 'Accueil', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Galerie', to: '/galerie' },
    { label: 'Contact', to: '/contact' }
  ]

  return { links }
}
