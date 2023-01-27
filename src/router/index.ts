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
      path: '/World_Map',
      name: 'mapRoom',
      component: () => import('../views/maps.vue'),
      props: true,
      children: [
        {
          path: ':selectedMap',
          name: 'zeine-1',
          component: () => import('../views/maps/Zeine1.vue'),
        },
        {
          path: ':selectedMap',
          name: 'zeine-2',
          component: () => import('../views/maps/Zeine2.vue'),
        },
        {
          path: ':selectedMap',
          name: 'zeine-3',
          component: () => import('../views/maps/Zeine3.vue'),
        },
        {
          path: ':selectedMap',
          name: 'wilkiet-1',
          component: () => import('../views/maps/Wilkiet1.vue'),
        },
        {
          path: ':selectedMap',
          name: 'wilkiet-2',
          component: () => import('../views/maps/Wilkiet2.vue'),
        },
        {
          path: ':selectedMap',
          name: 'wilkiet-3',
          component: () => import('../views/maps/Wilkiet3.vue'),
        },
        {
          path: ':selectedMap',
          name: 'brosste-1',
          component: () => import('../views/maps/Brosste1.vue'),
        },
        {
          path: ':selectedMap',
          name: 'brosste-2',
          component: () => import('../views/maps/Brosste2.vue'),
        },
        {
          path: ':selectedMap',
          name: 'brosste-3',
          component: () => import('../views/maps/Brosste3.vue'),
        },
        {
          path: ':selectedMap',
          name: 'pragma-1',
          component: () => import('../views/maps/Pragma1.vue'),
        },
        {
          path: ':selectedMap',
          name: 'pragma-2',
          component: () => import('../views/maps/Pragma2.vue'),
        },
        {
          path: ':selectedMap',
          name: 'pragma-3',
          component: () => import('../views/maps/Pragma3.vue'),
        },
        {
          path: ':selectedMap',
          name: 'ida-1',
          component: () => import('../views/maps/Ida1.vue'),
        },
        {
          path: ':selectedMap',
          name: 'ida-1 (True End)',
          component: () => import('../views/maps/Ida1te.vue'),
        },
        {
          path: ':selectedMap',
          name: 'ida-2 (True End)',
          component: () => import('../views/maps/Ida2te.vue'),
        },
      ]
    },
    {
      path: '/Titles',
      name: 'titles',
      component: () => import('../views/titles.vue')
    },
    {
      path: '/PlaythroughTips',
      name: 'playthrough',
      component: () => import('../views/playthrough.vue')
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
