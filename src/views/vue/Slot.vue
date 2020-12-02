<template>
  <div class="slot">
    <h1>插槽</h1>
    <toDoButton>哈哈哈</toDoButton>
    <h1>具名插槽</h1>
    <Layout>
      <template #header>
        我是头
      </template>
      哈哈哈
      <template #footer>
        我是脚
      </template>
    </Layout>
    <h1>范围插槽</h1>
    <List :list="list">
      <template v-slot:default="scope">
        <i class="fa fa-check"></i>
        <span>{{ scope.item }}</span>
      </template>
    </List>
    <List :list="list">
      <template v-slot="scope">
        <i class="fa fa-check"></i>
        <span>{{ scope.item }}</span>
      </template>
    </List>
    <List :list="list">
      <template #="scope">
        <i class="fa fa-check"></i>
        <span>{{ scope.item }}</span>
      </template>
    </List>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import toDoButton from './components/To-do-button.vue'
import Layout from './components/layout.vue'
import List from './components/List.vue'
export default defineComponent({
  components: {
    toDoButton,
    Layout,
    List
  },
  setup () {
    const list = [
      { id: 1, type: 'text' },
      { id: 2, type: 'text' },
      { id: 3, type: 'image' },
      { id: 4, type: 'image' }
    ]
    return {
      list
    }
  }
})
</script>
