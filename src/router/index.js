import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  mode: 'hash',
  path: '/',
  component: () =>
    import ('@/layouts/default.vue'),
  children: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('@/pages/report.vue'),
    meta: { requiresAuth: true },
  },
  ],
},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
