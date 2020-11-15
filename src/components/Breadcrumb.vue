<template>
  <a-breadcrumb class="bread">
    <template v-if="matched.length > 0">
      <a-breadcrumb-item
        v-for="item in matched"
        :key="item.path">
        <router-link :to="item.path">
          {{item.meta.breadcrumbName}}
        </router-link>
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>
<script lang="ts">
import { useRoute } from 'vue-router'
import { defineComponent, watch, toRefs, reactive } from 'vue'

export default defineComponent({
  setup () {
    const route = useRoute()
    const state = reactive({
      matched: route.matched
    })
    console.log(route, route.matched)
    // 监听路由变化
    watch(() => route, route => {
      state.matched = route.matched
    }, {
      immediate: true,
      deep: true
    })
    return { ...toRefs(state) }
  }
})
</script>
<style lang="less" scoped>
.bread{
  display: inline-block;
}
</style>
