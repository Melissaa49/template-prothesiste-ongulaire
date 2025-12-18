import type { GalleryItem } from '../types/gallery'

export function useGallery() {
  const items: GalleryItem[] = [
    { id: 1, image: '/images/nails/ongle6.png', alt: 'Manucure élégante' },
    { id: 2, image: '/images/nails/ongle2.png', alt: 'Nail art rose' },
    { id: 3, image: '/images/nails/ongle3.png', alt: 'French moderne' },
    { id: 4, image: '/images/nails/ongle5.png', alt: 'Strass délicats' },
    { id: 5, image: '/images/nails/ongle1.png', alt: 'Rose poudré' },
    { id: 6, image: '/images/nails/ongle7.png', alt: 'Manucure luxe' }
  ]

  return { items }
}
