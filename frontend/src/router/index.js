import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DZOView from '../views/DZOView.vue'
import TOView from '../views/TOView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dzo',
    name: 'dzo',
    component: DZOView
  },
  {
    path: '/to',
    name: 'to',
    component: TOView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
