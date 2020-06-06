import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../components/Principal.vue'
import Busqueda from '../components/Busqueda.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/principal',
    name: 'Principal',
    component: Principal
    },
    {
        path: '/busqueda',
        name: 'Busqueda',
        component: Busqueda
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
