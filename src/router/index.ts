import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Map_Room',
      name: 'mapRoom',
      component: () => import('../views/mapRoom.vue'),
    },
    {
      path: '/PlaythroughTips',
      name: 'playthrough',
      component: () => import('../views/playthrough.vue')
    },
    {
      path: '/Titles',
      name: 'titles',
      component: () => import('../views/titles.vue')
    },





    {
      path: '/World_Map',
      name: 'mapRoom2',
      component: () => import('../views/maps.vue'),
    },


    {
      path: '/personalTeam',
      name: 'personalteam',
      component: () => import('../views/personalteam.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: HomeView,
    },
  ]
})

export default router
