import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/register',
    name: 'register',
    component: () => import('../views/user/register.vue')
  },
  {
    path: '/user/login',
    name: 'login',
    component: () => import('../views/user/login.vue')
  },
  {
    path: '/data-analyze',
    name: 'DataAnalyze',
    component: () => import('../views/DataAnalyze')
  },
  {
    path: '/detail-info',
    name: 'DetailInfo',
    component: () => import('../views/DetailInfo')
  }
]

const router = new VueRouter({
  routes
})

export default router
