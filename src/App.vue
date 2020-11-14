<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <Menu :collapsed="collapsed"/>
    <a-layout>
      <Header :collapsed="collapsed" @collapsed-change="handleCollapsedChange"/>
      <a-layout-content
        class="layout-content"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">

import { defineComponent, ref } from 'vue'
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
export default defineComponent({
  components: {
    Menu,
    Header
  },
  setup () {
    const collapsed = ref(false)
    const handleCollapsedChange = () => {
      collapsed.value = !collapsed.value
    }
    return {
      collapsed,
      handleCollapsedChange
    }
  }
})
</script>
<style lang="less">
#app{
  width:100%;
  height:100vh;
}
.ant-layout{
  height:100%;
  .layout-content{
    padding:20px;
    background: #fff;
    margin:10px 20px;
    overflow-x:hidden;
    overflow-y: auto;
  }
}
</style>
