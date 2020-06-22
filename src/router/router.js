import Vue from "vue";
import VueRouter from "vue-router";
// import Principal from "../components/Principal.vue";
import Busqueda from "../components/Busqueda.vue";
// import BusquedaVista from "../components/BusquedaVista.vue";
// import LoginVista from "../components/LoginVista.vue";
import Login from "../components/Login.vue";
import FavoritosVista from "../views/FavoritosVista.vue";
import store from '../store/store';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/home",
  //   name: "Principal",
  //   component: Principal,
  // },
  {
    path: "/busqueda",
    name: "Busqueda",
    component: Busqueda,
    // component: BusquedaVista,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    alias: "/",
    // component: LoginVista,
  },
  {
    path: "/favoritos",
    name: "Favoritos",
    component: FavoritosVista,
    // Campo meta que permite entrar a favoritos sólo si estás autenticado:
    meta: {
      requiresAuth: true,
    },
  },
  // {
  //   path: "/registro",
  //   name: "Registro",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import("../views/Registro.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// permite entrar a favoritos sólo si estás autenticado:
router.beforeEach((to, from, next) => {
  let loginRequerido = to.matched.some(ruta => ruta.meta.requireAuth);

  if (loginRequerido && !store.state.uidUser) {
    next('/login')
  } else {
    next()
  }
})

export default router;