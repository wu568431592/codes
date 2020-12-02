<template>
  <div class="container">
    <ul>
      <li v-for="item in list" :key="item.id" @click="changeItem(item)">
        {{item.type}}
      </li>
    </ul>
    <div class="box">
      <keep-alive>
        <component v-bind:is="activeType"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue'
// import image from './components/image.vue'
// import text from './components/text.vue'
interface ItemProp {
  id: number;
  type: 'text' | 'image';
}
export default defineComponent({
  components: {
    image: defineAsyncComponent(() => import('./components/image.vue')),
    text: defineAsyncComponent(() => import('./components/text.vue'))
    // image,
    // text
  },
  setup () {
    const activeTab = ref(1)
    const list = reactive([
      { id: 1, type: 'text' },
      { id: 2, type: 'text' },
      { id: 3, type: 'image' },
      { id: 4, type: 'image' }
    ])
    const changeItem = (item: ItemProp) => {
      const { id } = item
      activeTab.value = id
    }
    const activeType = computed(() => {
      const id = activeTab.value
      return list.filter(item => item.id === id)[0].type
    })
    return {
      activeTab,
      list,
      activeType,
      changeItem
    }
  }
})
</script>
