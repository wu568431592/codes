<template>
  <div class="home">
    <h1>学会前端知识，走遍天下都不怕</h1>
    <h2>{{times}}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import useTimeCountDown from '@/hooks/useTimeCountDown'
export default defineComponent({
  name: 'Home',
  setup () {
    const time = ref(new Date().getTime())
    useTimeCountDown(time)
    const times = computed(() => {
      return new Date(time.value).toLocaleString()
    })
    return {
      times
    }
  }
})
</script>
