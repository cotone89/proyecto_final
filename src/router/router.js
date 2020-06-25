import Vue from "vue";
import VueRouter from "vue-router";
import BusquedaVista from "../views/BusquedaVista.vue";
import LoginVista from "../views/LoginVista.vue";
import FavoritosVista from "../views/FavoritosVista.vue";
import store from "../store/store";

Vue.use(VueRouter);

const routes = [{
    path: "/busqueda",
    name: "Busqueda",
    component: BusquedaVista,
  },
  {
    path: "/login",
    name: "Login",
    alias: "/",
    component: LoginVista,
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
  {
    path: "/registro",
    name: "Registro",
    component: () => import("../views/Registro.vue"),
    alias: ['/registro', '/crearcuenta', '/signin']
  },
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('../views/Perfil.vue'),
    meta: {
      requiredAuth: true
    }
  },
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
    next("/login");
  } else {
    next();
  }
});

export default router;