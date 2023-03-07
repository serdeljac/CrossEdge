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
      path: '/Version',
      name: 'version',
      component: () => import('../views/version.vue'),
    },
    {
      path: '/Map_Room',
      name: 'mapRoom',
      component: () => import('../views/mapRoom.vue'),
    },
    {
      path: '/Dungeon_Map_Room',
      name: 'dunMapRoom',
      component: () => import('../views/dungeonMapRoom.vue'),
    },
    {
      path: '/Dungeon_Map_Room/:dungeon',
      name: 'dungeonDisplay',
      component: () => import('../views/dungeonoverview.vue'),
      props: true
    },
    {
      path: '/PlaythroughTips',
      name: 'playthrough',
      component: () => import('../views/playthrough.vue')
    },
    {
      path: '/Bestiary',
      name: 'bestiary',
      component: () => import('../views/bestiary.vue')
    },
    {
      path: '/Inventory',
      name: 'inventory',
      component: () => import('../views/inventory.vue')
    },
    {
      path: '/Titles',
      name: 'titles',
      component: () => import('../views/titles.vue')
    },
    {
      path: '/Synthesis',
      name: 'synthesis',
      component: () => import('../views/synthesis.vue')
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'zeine-1',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'zeine-2',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'zeine-3',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'wilkiet-1',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'wilkiet-2',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'wilkiet-3',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'brosste-1',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'brosste-2',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'brosste-3',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'pragma-1',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'pragma-2',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'pragma-3',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'ida-1',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'ida-1te',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
      name: 'ida-2',
      component: MapOverview,
      props: true
    },
    {
      path: '/Map_Room/:selectedMap',
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
