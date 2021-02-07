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
    path: '/db/rr/grover-jackson-rr-professional',
    name: 'GroverJacksonRRProfessional',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/database/rhoads/GroverJacksonRRProfessional.vue')    
  },
  {
    path: '/db/rr/grover-jackson-rr-custom',
    name: 'GroverJacksonRRCustom',
    component: () => import('../views/database/rhoads/GroverJacksonRRCustom.vue')
  },
  {
    path: '/db/rr/grover-jackson-dan-spitz',
    name: 'GroverJacksonDanSpitz',
    component: () => import('../views/database/rhoads/GroverJacksonDanSpitz.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
