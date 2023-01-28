import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import MapOverview from '../views/mapoverview.vue'

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
      path: '/:selectedMap',
      name: 'zeine-1',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'zeine-2',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'zeine-3',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'wilkiet-1',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'wilkiet-2',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'wilkiet-3',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'brosste-1',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'brosste-2',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'brosste-3',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'pragma-1',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'pragma-2',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'pragma-3',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'ida-1',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'ida-1te',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'ida-2',
      component: MapOverview,
      props: true
    },
    {
      path: '/:selectedMap',
      name: 'ida-3',
      component: MapOverview,
      props: true
    },




    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: HomeView,
    },
  ]
})

export default router
