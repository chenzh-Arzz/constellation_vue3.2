import { createRouter, createWebHashHistory } from 'vue-router'
import TodayPage from '../views/Today.vue'

const routes = [
  {
    path: '/',
    name: 'today',
    component: TodayPage
  },
  {
    path: '/month',
    name: 'month',
    component: () => import(/* webpackChunkName: "Month" */ '../views/Month.vue')
  },
  {
    path: '/week',
    name: 'week',
    component: () => import(/* webpackChunkName: "week" */ '../views/Week.vue')

  },
  {
    path: '/tomorrow',
    name: 'tomorrow',
    component: () => import(/* webpackChunkName: "week" */ '../views/Tomorrow.vue')

  },
  {
    path: '/year',
    name: 'year',
    component: () => import(/* webpackChunkName: "week" */ '../views/Year.vue')
  },
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
