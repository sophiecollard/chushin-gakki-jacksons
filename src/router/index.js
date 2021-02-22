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
    path: '/db/sl/jackson-soloist-pro',
    name: 'JacksonSoloistPro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/database/soloist/jackson-soloist-pro/Main.vue')
  },
  {
    path: '/db/sl/jackson-soloist-archtop-pro',
    name: 'JacksonSoloistArchtopPro',
    component: () => import('../views/database/soloist/jackson-soloist-archtop-pro/Main.vue')
  },
  {
    path: '/db/sl/jackson-soloist-xl',
    name: 'JacksonSoloistXL',
    component: () => import('../views/database/soloist/jackson-soloist-xl/Main.vue')
  },
  {
    path: '/db/sl/jackson-slsmg',
    name: 'JacksonSLSMG',
    component: () => import('../views/database/soloist/jackson-slsmg/Main.vue')
  },
  {
    path: '/db/sl/jackson-sls3',
    name: 'JacksonSLS3',
    component: () => import('../views/database/soloist/jackson-sls3/Main.vue')
  },
  {
    path: '/db/rr/jackson-rr-pro',
    name: 'JacksonRRPro',
    component: () => import('../views/database/rhoads/jackson-rr-pro/Main.vue')
  },
  {
    path: '/db/rr/jackson-kevin-bond',
    name: 'JacksonKevinBond',
    component: () => import('../views/database/rhoads/jackson-kevin-bond/Main.vue')
  },
  {
    path: '/db/rr/jackson-rr24',
    name: 'JacksonRR24',
    component: () => import('../views/database/rhoads/jackson-rr24/Main.vue')
  },
  {
    path: '/db/rr/jackson-rr24m',
    name: 'JacksonRR24M',
    component: () => import('../views/database/rhoads/jackson-rr24m/Main.vue')
  },
  {
    path: '/db/rr/jackson-matt-tuck',
    name: 'JacksonMattTuck',
    component: () => import('../views/database/rhoads/jackson-matt-tuck/Main.vue')
  },
  {
    path: '/db/rr/grover-jackson-rr-professional',
    name: 'GroverJacksonRRProfessional',
    component: () => import('../views/database/rhoads/grover-jackson-rr-professional/Main.vue')    
  },
  {
    path: '/db/rr/grover-jackson-rr-custom',
    name: 'GroverJacksonRRCustom',
    component: () => import('../views/database/rhoads/grover-jackson-rr-custom/Main.vue')
  },
  {
    path: '/db/rr/grover-jackson-dan-spitz',
    name: 'GroverJacksonDanSpitz',
    component: () => import('../views/database/rhoads/grover-jackson-dan-spitz/Main.vue')
  },
  {
    path: '/db/rr/grover-jackson-rr-i195',
    name: 'GroverJacksonRRI195',
    component: () => import('../views/database/rhoads/grover-jackson-rr-i-195/Main.vue')
  },
  {
    path: '/db/rr/grover-jackson-rr-i170',
    name: 'GroverJacksonRRI170',
    component: () => import('../views/database/rhoads/grover-jackson-rr-i-170/Main.vue')
  },
  {
    path: '/db/rr/grover-jackson-rr-s350',
    name: 'GroverJacksonRRS350',
    component: () => import('../views/database/rhoads/grover-jackson-rr-s-350/Main.vue')
  },
  {
    path: '/db/rr/jackson-stars-rr-j1',
    name: 'JacksonStarsRRJ1',
    component: () => import('../views/database/rhoads/jackson-stars-rr-j1/Main.vue')
  },
  {
    path: '/db/rr/jackson-stars-rr-j2',
    name: 'JacksonStarsRRJ2',
    component: () => import('../views/database/rhoads/jackson-stars-rr-j2/Main.vue')
  },
  {
    path: '/db/rr/jackson-stars-rr-j2sp',
    name: 'JacksonStarsRRJ2SP',
    component: () => import('../views/database/rhoads/jackson-stars-rr-j2sp/Main.vue')
  },
  {
    path: '/db/rr/jackson-stars-rr-tn01',
    name: 'JacksonStarsRRTN01',
    component: () => import('../views/database/rhoads/jackson-stars-rr-tn01/Main.vue')
  },
  {
    path: '/db/rr/jackson-stars-rr-tn02',
    name: 'JacksonStarsRRTN02',
    component: () => import('../views/database/rhoads/jackson-stars-rr-tn02/Main.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
