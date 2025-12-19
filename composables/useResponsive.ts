import { ref, onMounted, onUnmounted } from 'vue'

export function useResponsive() {
  const isMobile = ref(false)

  if (import.meta.client) {
    const update = () => {
      isMobile.value = window.innerWidth <= 768
    }

    onMounted(() => {
      update()
      window.addEventListener('resize', update)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', update)
    })
  }

  return { isMobile }
}
