import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../components/Principal.vue'
import Busqueda from '../components/Busqueda.vue'
import Login from '../components/Login.vue'
import Favoritos from '../components/Favoritos.vue'

Vue.use(VueRouter)

  const routes = [
  {
        path: '/home',
        name: 'Principal',
        component: Principal,
          alias: '/',
          meta: {
              login: true
          }
    },
    {
        path: '/busqueda',
        name: 'Busqueda',
        component: Busqueda
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/favoritos',
        name: 'Favoritos',
        component: Favoritos
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
