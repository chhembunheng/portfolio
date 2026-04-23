import { ref, watchEffect } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'dark')

watchEffect(() => {
  const html = document.documentElement
  if (theme.value === 'light') {
    html.classList.add('light-mode')
    html.classList.remove('dark-mode')
  } else {
    html.classList.add('dark-mode')
    html.classList.remove('light-mode')
  }
  localStorage.setItem('theme', theme.value)

  window.dispatchEvent(new CustomEvent('theme-changed', { detail: theme.value }))
})

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggleTheme }
}
