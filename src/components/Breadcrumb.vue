<template>
  <a-breadcrumb :routes="routes" class="bread">
    <template #itemRender="{ route, routes, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{route.breadcrumbName}}
      </span>
      <router-link v-else :to="paths.join('/')">
        {{route.breadcrumbName}}
      </router-link>
    </template>
  </a-breadcrumb>
</template>
<script lang="ts">
import { useRouter, RouteRecordNormalized } from 'vue-router'
import { defineComponent } from 'vue'

export interface Route {
  path: string;
  breadcrumbName: string;
  children?: Array<Route>;
}
export default defineComponent({
  setup () {
    const router = useRouter()
    const allRoutes = router.getRoutes()
    const computedRoutes = (routes: RouteRecordNormalized[]) => {
      const res = [] as Route[]
      routes.forEach(route => {
        const obj: Route = {
          path: route.path,
          breadcrumbName: route.meta.breadcrumbName
        }
        if (route.children) {
          obj.children = computedRoutes(route.children as RouteRecordNormalized[])
        }
        res.push(obj)
      })
      return res
    }
    const routes = computedRoutes(allRoutes)
    return {
      routes
    }
  }
})
</script>
<style lang="less" scoped>
.bread{
  display: inline-block;
}
</style>
