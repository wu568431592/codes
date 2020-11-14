<template>
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="collapsedChange"
    />
    <menu-fold-outlined v-else class="trigger" @click="collapsedChange" />
    <Breadcrumb/>
  </a-layout-header>
</template>
<script lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue'
import { defineComponent } from 'vue'
import Breadcrumb from './Breadcrumb.vue'
export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Breadcrumb
  },
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  emits: ['collapsed-change'],
  setup (prop, context) {
    const collapsedChange = () => {
      context.emit('collapsed-change')
    }
    return {
      collapsedChange
    }
  }
})
</script>
<style lang="less" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
