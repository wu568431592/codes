<template>
  <span class="anticon"><i :class="['fa',type]" aria-hidden="true"></i></span>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    type: {
      type: String,
      required: true
    }
  }
})
</script>
