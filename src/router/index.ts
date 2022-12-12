import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home_page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/trueend',
      name: 'trueend',
      component: () => import('../views/true_end.vue')
    },
    {
      path: '/synthesis',
      name: 'synthesis',
      component: () => import('../views/synthesis.vue')
    }
  ]
})

export default router
