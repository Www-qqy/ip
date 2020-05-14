import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/User/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/track',
    name: 'track',
    component: () => import('../views/Track.vue')
  },
  {
    path: '/user/login',
    name: 'login',
    component: () => import('../views/User/Login.vue')
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
  },
  {
    path: '/data-info',
    name: 'DataInfo',
    component: () => import('../views/DataInfo')
  }
]

const router = new VueRouter({
  routes
})

export default router
