<template>
  <div id="app">
    <Header v-if="!$store.state.uidUser"></Header>
    <!-- 1) Se pasa el evento del hijo HeaderLogout.vue al padre App.vue: -->
    <HeaderLogout v-else @clickSalida="salida" :texto="texto"></HeaderLogout>
    <!-- <transition name="mi-transicion">-->
    <router-view />
    <!--</transition>-->
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import HeaderLogout from "@/components/HeaderLogout";
import Footer from "@/components/Footer.vue";
import firebase from "firebase";

export default {
  name: "App",
  components: {
    Header,
    HeaderLogout,
    Footer
  },
  data() {
    return {
      texto: "Logout"
    };
  },
  methods: {
    salida() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("salida de usuario");
          this.$router.replace("/login");
        });
    }
  },
  // 2) Probando evento desde el hijo HeaderLogout.vue:
  // methods: {
  //   salida(info) {
  //     console.log("Click con evento en el botón del children: " + info);
  //   }
  // },
  // Aquí va el proceso de escucha de estados de auth (para saber si un usuario entró o salió de la app):
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.$store.dispatch("idUserLogin", user.uid);
      } else {
        console.log("Salida de usuario");
        this.$store.dispatch("idUserLogin", "");
      }
    });
  }
};
</script>

<style lang="scss">
/*  .mi-transicion-enter-active, .mi-transicion-leave-active {
        transition: opacity 0.8s;
    }
    .mi-transicion-enter, .mi-transicion-leave-to{
        opacity: 0;
    }*/

#app {
  background-image: url("assets/img/bg-comida.jpg");
  width: 100%;
  height: auto;
  padding-top: 75px;
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
