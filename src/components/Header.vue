<template>
  <div>
    <nav class="navigation navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <div class="header__titulo">{{marca}}</div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item">
              <router-link :to="{ name: 'Busqueda'}" class="p-3 router__texto">B&uacute;squeda</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Registro'}" class="p-3 router__texto">Registro</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Login'}" class="p-3 router__texto">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header",
  computed: {
    marca() {
      return this.$store.getters.getMarca;
    }
  }
};
</script>
<style>
nav {
  background: black;
  padding: 15px !important;
}
.header__titulo {
  font-family: "Amatic SC", cursive;
  font-size: 30px;
  color: white;
}
.router__texto {
  text-decoration: none !important;
  color: white;
}
</style>