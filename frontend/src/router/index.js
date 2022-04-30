import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/player',
    name: 'player',
    component: () => import(/* webpackChunkName: "player" */ '../views/AudioPlayer.vue')
  },

  {
    path: '/pjesme',
    name: 'pjesme',
    component: () => import(/* webpackChunkName: "pjesme" */ '../views/PjesmeView.vue')
  }
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
