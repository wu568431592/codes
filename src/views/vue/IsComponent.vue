<template>
  <div class="container">
    <ul>
      <li v-for="item in list" :key="item.id">
        <component v-bind:is="item.type"></component>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import image from './components/image.vue'
import text from './components/text.vue'

export default defineComponent({
  components: {
    image, text
  },
  setup () {
    const list = reactive([
      { id: 1, type: 'text' },
      { id: 2, type: 'text' },
      { id: 3, type: 'image' },
      { id: 4, type: 'image' }
    ])
    return {
      list
    }
  }
})
</script>
