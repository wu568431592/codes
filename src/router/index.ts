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
        component: () => import('@/views/Flex.vue')
      }, {
        path: '/CSS/lazyLoad',
        name: 'lazyLoad',
        meta: {
          breadcrumbName: 'lazyLoad'
        },
        component: () => import('@/layout/index.vue')
      }
    ]
  }, {
    path: '/javaScript',
    name: 'javascript',
    meta: {
      breadcrumbName: 'JavaScript'
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/javaScript/base',
        name: 'base',
        meta: {
          breadcrumbName: 'base'
        },
        component: () => import('@/views/js/base.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
