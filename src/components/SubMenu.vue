<template>
  <a-sub-menu :key="menuInfo.path" v-bind="$props">
    <template v-slot:title>
      <Icon v-if="menuInfo.meta.icon" :type="menuInfo.meta.icon"/>
      <span>{{ menuInfo.name }}</span>
    </template>
    <template v-for="item in menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.path">
        <router-link :to="item.path">
          <span>{{ item.name }}</span>
        </router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.path" :menu-info="item" :collapsed="collapsed" />
    </template>
  </a-sub-menu>
</template>

<script>
import { defineComponent } from 'vue'
import Icon from './Icon.vue'
export default defineComponent({
  name: 'SubMenu',
  components: {
    Icon
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    },
    collapsed: Boolean
  }
})
</script>

<style>
</style>
