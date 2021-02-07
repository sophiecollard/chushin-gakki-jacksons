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
    path: '/db/rr/jackson-rr-professional',
    name: 'JacksonRRProfessional',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/database/rhoads/JacksonRRProfessional.vue')    
  },
  {
    path: '/db/rr/grover-jackson-rr-professional',
    name: 'GroverJacksonRRProfessional',
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
  },
  {
    path: '/db/rr/grover-jackson-rr-i195',
    name: 'GroverJacksonRRI195',
    component: () => import('../views/database/rhoads/GroverJacksonRRI195.vue')
  },
  {
    path: '/db/rr/grover-jackson-rr-i170',
    name: 'GroverJacksonRRI170',
    component: () => import('../views/database/rhoads/GroverJacksonRRI170.vue')
  },
  {
    path: '/db/rr/grover-jackson-rr-s350',
    name: 'GroverJacksonRRS350',
    component: () => import('../views/database/rhoads/GroverJacksonRRS350.vue')
  },
  {
    path: '/db/rr/jackson-stars-rr-j1',
    name: 'JacksonStarsRRJ1',
    component: () => import('../views/database/rhoads/JacksonStarsRRJ1.vue')
  },
  {
    path: '/db/rr/jackson-stars-rr-j2sp',
    name: 'JacksonStarsRRJ2SP',
    component: () => import('../views/database/rhoads/JacksonStarsRRJ2SP.vue')
  },
  {
    path: '/db/rr/jackson-stars-rr-tn01',
    name: 'JacksonStarsRRTN01',
    component: () => import('../views/database/rhoads/JacksonStarsRRTN01.vue')
  },
  {
    path: '/db/rr/jackson-kevin-bond',
    name: 'JacksonKevinBond',
    component: () => import('../views/database/rhoads/JacksonKevinBond.vue')
  },
  {
    path: '/db/rr/jackson-rr24',
    name: 'JacksonRR24',
    component: () => import('../views/database/rhoads/JacksonRR24.vue')
  },
  {
    path: '/db/rr/jackson-rr24m',
    name: 'JacksonRR24M',
    component: () => import('../views/database/rhoads/JacksonRR24M.vue')
  },
  {
    path: '/db/rr/jackson-matt-tuck',
    name: 'JacksonMattTuck',
    component: () => import('../views/database/rhoads/JacksonMattTuck.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
