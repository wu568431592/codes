<template>
  <div class="container">
    <div class="box">
      long long age
    </div>
    <img ref="demo1" data-src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
    <img ref="demo2" data-src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="" loading="lazy">
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
export default defineComponent({
  setup () {
    const demo1 = ref<Element>(document.createElement('img'))
    const demo2 = ref()
    const observer = new IntersectionObserver((changes) => {
      changes.forEach((change) => {
        if (change.isIntersecting) {
          const img = change.target as HTMLImageElement
          img.src = img.dataset.src!
          observer.unobserve(img)
        }
      })
    })
    const handleScroll = (e: Event) => {
      const target = e.target
      const scrollTop = (target as HTMLElement).scrollTop
      const offsetHeight = (target as HTMLElement).offsetHeight
      const offsetTop = demo2.value.offsetTop
      if ((scrollTop + offsetHeight + 60) >= offsetTop) {
        if (!demo2.value.src) {
          demo2.value.src = demo2.value.dataset.src
        }
      }
    }
    onMounted(() => {
      const container = document.getElementById('layout-content')
      container!.addEventListener('scroll', handleScroll)
      observer.observe(demo1.value)
    })
    onUnmounted(() => {
      document.getElementById('layout-content')!.removeEventListener('scroll', handleScroll)
    })

    return {
      demo2,
      demo1
    }
  }
})
</script>
<style lang="less" scoped>
.box{
  height:2000px;
}
img{
  width:500px;
}
</style>
