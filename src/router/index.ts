import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      breadcrumbName: 'Home',
      icon: 'fa fa-address-book'
    },
    component: () => import('@/views/Home.vue')
  }, {
    path: '/CSS',
    name: 'CSS',
    meta: {
      breadcrumbName: 'CSS',
      icon: 'fa fa-address-book'
    },
    component: () => import('@/views/Flex.vue'),
    children: [
      {
        path: '/CSS/flex',
        name: 'flex',
        meta: {
          breadcrumbName: 'flex',
          icon: 'fa fa-address-book'
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
