import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/SendPage.vue'

const routes = [
  {
    path: '/',
    name: 'post',
    component: HomeView
  },
  {
    path: '/delete',
    name: 'delete',
    component: () => import(/* webpackChunkName: "about" */ '../views/DeletePage.vue')
  },
  {
    path: '/getId',
    name: 'getOne',
    component: () => import(/* webpackChunkName: "about" */ '../views/GetId.vue')
  },
  {
    path: '/search',
    name: 'searchAll',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchAll.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
