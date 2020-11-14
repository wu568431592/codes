<template>
  <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo">
      但行好事莫问前程
    </div>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item v-for="item in list" :key="item.name">
        <Icon :component="item.icon"/>
        <span>{{item.name}}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import { createVNode, defineComponent, markRaw, ref } from 'vue'
import * as Icons from '@ant-design/icons-vue'
const Icon = Icons.default
export default defineComponent({
  components: {
    Icon
  },
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    const selectedKeys = ref(['1'])
    const createIcon = (name: string) => {
      return createVNode((Icons as any)[name])
    }
    const list = [
      {
        icon: createIcon('HomeOutlined'),
        name: 'Home'
      },
      {
        icon: createIcon('HomeOutlined'),
        name: 'Home'
      }, {
        icon: createIcon('HomeOutlined'),
        name: 'Home'
      }
    ]
    return {
      selectedKeys,
      list: markRaw(list)
    }
  }
})
</script>
<style lang="less" scoped>
.logo{
  text-align: center;
  color:#fff;
  line-height: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
