import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home_page.vue'
// import HomeView from '../views/builder.vue'

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
      path: '/zeine1',
      name: 'zeine 1',
      component: () => import('../views/maps/Zeine1.vue')
    },
    {
      path: '/zeine2',
      name: 'zeine 2',
      component: () => import('../views/maps/Zeine2.vue')
    },
    {
      path: '/zeine2',
      name: 'zeine 2',
      component: () => import('../views/maps/Zeine2.vue')
    },
    {
      path: '/wilkiet1',
      name: 'wilkiet 1',
      component: () => import('../views/maps/Wilkiet1.vue')
    },
    // {
    //   path: '/Titles',
    //   name: 'titles',
    //   component: () => import('../views/titles.vue')
    // },
    // {
    //   path: '/Maps',
    //   name: 'maps',
    //   component: () => import('../views/map.vue')
    // },
  ]
})

export default router
