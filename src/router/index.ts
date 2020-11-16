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
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
