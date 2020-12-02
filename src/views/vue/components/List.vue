<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <slot :item="item"></slot>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    list: {
      defalut: [],
      type: Array
    }
  }
})
</script>
