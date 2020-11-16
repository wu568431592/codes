import { onMounted, onUnmounted, ref } from 'vue'

export default function useTimeCountDown (time: any) {
  let timer: any = null
  onMounted(() => {
    timer = setInterval(() => {
      time.value = time.value + 1000
    }, 1000)
  })
  onUnmounted(() => {
    clearInterval(timer)
    timer = null
  })
}
