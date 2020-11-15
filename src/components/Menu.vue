<template>
  <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo">
      但行好事莫问前程
    </div>
    <a-menu theme="dark" mode="inline" :selectedKeys="selectedKeys">
      <template v-for="(item, key) in list" :key="key">
        <a-menu-item v-if="!item.children" >
          <router-link :to="item.path">
            <Icon :type="item.meta.icon"/>
            <span>{{item.name}}</span>
          </router-link>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" :collapsed="collapsed" />
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import Icon from './Icon.vue'
import SubMenu from './SubMenu.vue'
import { routes } from '../router/index'
export default defineComponent({
  components: {
    Icon, SubMenu
  },
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    const selectedKeys = ref(['1'])
    const list = reactive(routes)
    return {
      selectedKeys,
      list
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
