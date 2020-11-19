import { onMounted, onUnmounted, Ref } from 'vue'

export default function useTimeCountDown (time: Ref<number>) {
  let timer: number | any = null
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
