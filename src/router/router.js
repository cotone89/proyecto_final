import Vue from "vue";
import VueRouter from "vue-router";
import Principal from "../components/Principal.vue";
import Busqueda from "../components/Busqueda.vue";
import Login from "../components/Login.vue";
import Favoritos from "../components/Favoritos.vue";
import store from '../store/store';

Vue.use(VueRouter);

const routes = [{
    path: "/home",
    name: "Principal",
    component: Principal,
    alias: "/",
    meta: {
      login: true,
    },
  },
  {
    path: "/busqueda",
    name: "Busqueda",
    component: Busqueda,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/favoritos",
    name: "Favoritos",
    component: Favoritos,
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