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
    path: '/pjesmebambus',
    name: 'pjesmebambus',
    component: () => import(/* webpackChunkName: "pjesmebambus" */ '../views/PjesmeViewBambus.vue')
  },

  {
    path: '/pjesmejaeger',
    name: 'pjesmejaeger',
    component: () => import(/* webpackChunkName: "pjesmejaeger" */ '../views/PjesmeViewJaeger.vue')
  },

  {
    path: '/pjesmegin',
    name: 'pjesmegin',
    component: () => import(/* webpackChunkName: "pjesmegin" */ '../views/PjesmeViewGin.vue')
  }
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
