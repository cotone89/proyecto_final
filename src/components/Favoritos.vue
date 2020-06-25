<template>
  <div class="favoritos">
    <h1 class="favoritos__titulo p-5">{{favoritos_titulo}}</h1>
    <div class="mt-4">
      <b-card-group deck class="mb-3">
        <b-card
          border-variant="dark"
          align="center"
          v-for="(favorito,index) in traeFavoritos"
          :key="index"
        >
          <b-card-text class="favoritos__tituloCard">{{favorito.receta_titulo}}</b-card-text>
          <b-card-text>
            <img :src="favorito.receta_imagen" :alt="index" class="favoritos__imagen" />
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>
<script>
import { db } from "../main";
export default {
  name: "Favoritos",
  data: function() {
    return {
      favoritos_titulo: "Mis Favoritos",
      receta_titulo: "",
      traeFavoritos: []
    };
  },
  methods: {},

  mounted() {
    db.collection(this.usuarioLogueado)
      .get()
      .then(obtenerDataFav => {
        let dataFav = [];
        obtenerDataFav.forEach(item => {
          dataFav.push({
            receta_titulo: item.data().recetaTitulo,
            receta_imagen: item.data().recetaImagen
          });
        });
        this.traeFavoritos = dataFav;
      });
  },
  computed: {
    usuarioLogueado() {
      return this.$store.getters.getUsuarioLogueado;
    }
  }
};
</script>
<style>
.favoritos {
  margin: 4%;
  background: rgba(00, 00, 0, 0.8);
}
.favoritos__titulo {
  color: white;
  opacity: 1 !important;
  font-family: "Amatic SC", cursive;
  font-size: 60px;
}
.favoritos__imagen {
  width: 100px;
  height: 100px;
}

.favoritos__tituloCard {
  color: black;
  font-family: "Amatic SC", cursive;
  font-size: 30px;
}
</style>