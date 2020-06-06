<template>
    <div id="app">
        <Header></Header>
        <!-- <transition name="mi-transicion">-->
         <router-view />
     <!--</transition>-->
        <Footer></Footer>
    </div>
</template>

<script>// @ is an alias to /src
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'

export default {
  name: 'Principal',
  components: {
      Header,
      Footer
  }
}</script>

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
     font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

</style>
