import { ref } from 'vue'

const isRouteLoading = ref(false)

let finishTimer

export function startRouteProgress() {
  clearTimeout(finishTimer)
  isRouteLoading.value = true
}

export function finishRouteProgress() {
  clearTimeout(finishTimer)
  finishTimer = setTimeout(() => {
    isRouteLoading.value = false
  }, 260)
}

export function useRouteProgress() {
  return { isRouteLoading, startRouteProgress, finishRouteProgress }
}
