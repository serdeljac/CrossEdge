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
      path: '/Items',
      name: 'items',
      component: () => import('../views/items.vue')
    },
    {
      path: '/Titles',
      name: 'titles',
      component: () => import('../views/titles.vue')
    },
    {
      path: '/Maps',
      name: 'maps',
      component: () => import('../views/map.vue')
    },
  ]
})

export default router
