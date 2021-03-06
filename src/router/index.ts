import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      breadcrumbName: 'Home',
      icon: 'fa-home'
    },
    component: () => import('@/views/Home.vue')
  }, {
    path: '/CSS',
    name: 'CSS',
    meta: {
      breadcrumbName: 'CSS',
      icon: 'fa-css3'
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/CSS/flex',
        name: 'flex',
        meta: {
          breadcrumbName: 'flex'
        },
        component: () => import('@/views/css/Flex.vue')
      }, {
        path: '/CSS/BFC',
        name: 'BFC',
        meta: {
          breadcrumbName: 'BFC'
        },
        component: () => import('@/views/css/BFC.vue')
      }, {
        path: '/CSS/Layout',
        name: 'Layout',
        meta: {
          breadcrumbName: 'Layout'
        },
        component: () => import('@/views/css/Layout.vue')
      }
    ]
  }, {
    path: '/javaScript',
    name: 'javascript',
    meta: {
      breadcrumbName: 'JavaScript',
      icon: 'fa-code'
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/javaScript/lazyLoad',
        name: 'lazyLoad',
        meta: {
          breadcrumbName: 'lazyLoad'
        },
        component: () => import('@/views/js/LazyLoad.vue')
      }
    ]
  }, {
    path: '/html',
    name: 'html',
    meta: {
      breadcrumbName: 'html',
      icon: 'fa-html5'
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/html/index',
        name: 'index',
        meta: {
          breadcrumbName: 'index'
        },
        component: () => import('@/views/html/index.vue')
      }
    ]
  }, {
    path: '/vue',
    name: 'vue',
    meta: {
      breadcrumbName: 'vue',
      icon: 'fa-vimeo'
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/vue/isComponent',
        name: '动态组件',
        meta: {
          breadcrumbName: '动态组件'
        },
        component: () => import('@/views/vue/IsComponent.vue')
      }, {
        path: '/vue/importComponent',
        name: '异步组件',
        meta: {
          breadcrumbName: '异步组件'
        },
        component: () => import('@/views/vue/ImportComponent.vue')
      }, {
        path: '/vue/Slot',
        name: '插槽',
        meta: {
          breadcrumbName: '插槽'
        },
        component: () => import('@/views/vue/Slot.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
