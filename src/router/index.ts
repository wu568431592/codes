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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
