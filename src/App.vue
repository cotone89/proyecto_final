<template>
  <div id="app">
    <Header v-if="!$store.state.uidUser"></Header>
    <HeaderLogout v-else></HeaderLogout>
    <!-- <transition name="mi-transicion">-->
    <router-view />
    <!--</transition>-->
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HeaderLogout from "@/components/HeaderLogout";
import firebase from "firebase";

export default {
  name: "Principal",
  components: {
    Header,
    HeaderLogout,
    Footer
  },
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
