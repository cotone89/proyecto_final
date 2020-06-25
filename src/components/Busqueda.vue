<template>
  <div class="busqueda">
    <h1 class="busqueda__titulo p-5">{{titulo_principal}}</h1>
    <div class="input-group input-group-lg busqueda__input">
      <input
        v-model="input"
        @keyup.enter="obtieneRecetaNombre()"
        type="text"
        class="form-control"
        placeholder="ej:pasta"
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <button
      type="button"
      class="btn btn-success busqueda__boton mb-4 mt-4"
      @click="obtieneRecetaNombre()"
    >{{titulo_boton}}</button>

    <div id="resultadoBusqueda">
      <div
        id="busquedaNoEncontrada"
        class="busqueda__titulo__receta p-4"
        :style="{display:display}"
      >{{receta_no_encontrada}}</div>

      <!-- Cuando encuentra 1 receta -->
      <div id="busquedaEncontradaUnElemento" :style="{display:display2}">
        <h2 class="busqueda__titulo__receta pt-4">{{receta_titulo}}</h2>
        <!-- Botón de favoritos -->
        <b-button
          @click="enviarFavoritos"
          v-if="usuarioLogueado"
          variant="warning"
        >A&ntilde;adir a favoritos</b-button>

        <div class="row pb-3" style="margin:2%;">
          <div class="col-sm-6 p-3">
            <img :src="receta_imagen" class="busqueda__imagen__receta" alt="imagen no disponible" />
          </div>
          <div class="col-sm-6 p-3">
            <h3 class="busqueda__titulo__preparacion__receta">{{receta_titulo_ingredientes}}</h3>
            <div class="busqueda__preparacion__receta text-left">
              <ul>
                <li
                  v-for="(ingrediente,index) in receta_lista_ingredientes"
                  :key="index"
                >{{ ingrediente }}</li>
              </ul>
            </div>
            <h3 class="busqueda__titulo__preparacion__receta">{{receta_titulo_preparacion}}</h3>
            <div class="busqueda__preparacion__receta">{{receta_preparacion}}</div>
          </div>
        </div>
      </div>
      <!-- Cuando encuentra varias recetas -->
      <div id="busquedaEncontradaVariosElementos" :style="{display:display3}">
        <h2 class="busqueda__titulo__receta p-4">{{receta_titulo_lista}}</h2>
        <div class="pb-4">
          <b-container>
            <b-row>
              <b-col
                md="4"
                class="p-2 busqueda__lista__receta"
                @click="elijoReceta(receta)"
                v-for="(receta,index) in lista_recetas"
                :key="index"
              >{{ receta.strMeal }}</b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../main";
export default {
  name: "Principal",
  data: function() {
    return {
      titulo_principal: "Se te antoja comer...",
      titulo_boton: "Buscar",
      input: "",
      display: "none",
      display2: "none",
      display3: "none",
      receta_titulo: "",
      receta_imagen: "",
      receta_titulo_preparacion: "Manos a la obra",
      receta_preparacion: "",
      receta_titulo_ingredientes: "Necesitamos",
      receta_lista_ingredientes: [],
      receta_no_encontrada: "No hemos encontrado tu antojo :(",
      receta_titulo_lista: "Tenemos m\u00E1s de una opci\u00F3n para ti",
      lista_recetas: [],
      receta_boton_volver: "Volver a la lista"
    };
  },
  computed: {
    usuarioLogueado() {
      return this.$store.getters.getUsuarioLogueado;
    }
  },
  methods: {
    enviarFavoritos() {
      db.collection(this.usuarioLogueado)
        .add({
          recetaTitulo: this.receta_titulo,
          recetaImagen: this.receta_imagen
        })
        .then(() => {
          this.$router.push("/favoritos");
        });
    },
    elijoReceta(receta) {
      console.log("elijo receta-- " + receta.strMeal);
      this.display = "none";
      this.display2 = "block";
      this.display3 = "none";
      this.muestraReceta(receta);
    },
    muestraReceta(retorno) {
      let lista = [];
      if (retorno.length == 1) {
        retorno = retorno[0];
      }

      this.receta_titulo = retorno.strMeal;
      this.receta_imagen = retorno.strMealThumb;
      this.receta_preparacion = retorno.strInstructions;

      let ing1 = retorno.strIngredient1;
      let cant1 = retorno.strMeasure1;
      lista.push(cant1 + " " + ing1);

      let ing2 = retorno.strIngredient2;
      let cant2 = retorno.strMeasure2;
      lista.push(cant2 + " " + ing2);

      let ing3 = retorno.strIngredient3;
      let cant3 = retorno.strMeasure3;
      lista.push(cant3 + " " + ing3);

      let ing4 = retorno.strIngredient4;
      let cant4 = retorno.strMeasure4;
      lista.push(cant4 + " " + ing4);

      let ing5 = retorno.strIngredient5;
      let cant5 = retorno.strMeasure5;
      lista.push(cant5 + " " + ing5);

      let ing6 = retorno.strIngredient6;
      let cant6 = retorno.strMeasure6;
      lista.push(cant6 + " " + ing6);

      let ing7 = retorno.strIngredient7;
      let cant7 = retorno.strMeasure7;
      lista.push(cant7 + " " + ing7);

      let ing8 = retorno.strIngredient8;
      let cant8 = retorno.strMeasure8;
      lista.push(cant8 + " " + ing8);

      let ing9 = retorno.strIngredient9;
      let cant9 = retorno.strMeasure9;
      lista.push(cant9 + " " + ing9);

      let ing10 = retorno.strIngredient10;
      let cant10 = retorno.strMeasure10;
      lista.push(cant10 + " " + ing10);

      let ing11 = retorno.strIngredient11;
      let cant11 = retorno.strMeasure11;
      lista.push(cant11 + " " + ing11);

      let ing12 = retorno.strIngredient12;
      let cant12 = retorno.strMeasure12;
      lista.push(cant12 + " " + ing12);

      let ing13 = retorno.strIngredient13;
      let cant13 = retorno.strMeasure13;
      lista.push(cant13 + " " + ing13);

      let ing14 = retorno.strIngredient14;
      let cant14 = retorno.strMeasure14;
      lista.push(cant14 + " " + ing14);

      let ing15 = retorno.strIngredient15;
      let cant15 = retorno.strMeasure15;
      lista.push(cant15 + " " + ing15);

      let ing16 = retorno.strIngredient16;
      let cant16 = retorno.strMeasure16;
      lista.push(cant16 + " " + ing16);

      let ing17 = retorno.strIngredient17;
      let cant17 = retorno.strMeasure17;
      lista.push(cant17 + " " + ing17);

      let ing18 = retorno.strIngredient18;
      let cant18 = retorno.strMeasure18;
      lista.push(cant18 + " " + ing18);

      let ing19 = retorno.strIngredient19;
      let cant19 = retorno.strMeasure19;
      lista.push(cant19 + " " + ing19);

      let ing20 = retorno.strIngredient20;
      let cant20 = retorno.strMeasure20;
      lista.push(cant20 + " " + ing20);

      lista.forEach(element => {
        if (
          element != " " &&
          element.trim() != "" &&
          !element.includes("null")
        ) {
          this.receta_lista_ingredientes.push(element.trim());
        }
      });
    },
    async obtieneRecetaNombre() {
      let retorno = await this.$store.dispatch(
        "obtenerRecetaNombre",
        this.input
      );

      if (retorno == null) {
        console.log("no se encuentra nada");
        this.display = "block";
        this.display2 = "none";
        this.display3 = "none";
      } else if (retorno.length == 1) {
        console.log("retorno 1 elemento");
        this.display = "none";
        this.display2 = "block";
        this.display3 = "none";
        this.muestraReceta(retorno);
      } else {
        this.display = "none";
        this.display2 = "none";
        this.display3 = "block";
        this.lista_recetas = retorno;
        console.log("retorno muchos elementos");
      }
    }
  }
};
</script>
<style scoped>
.busqueda {
  margin: 4%;
  background: rgba(00, 00, 0, 0.8);
}
.busqueda__titulo {
  color: white;
  font-family: "Amatic SC", cursive;
  font-size: 60px;
}
.busqueda__input {
  padding: 0 20%;
  margin-top: -30px;
}
.busqueda__boton {
  width: 140px !important;
  font-family: "Amatic SC", cursive;
  font-size: 35px !important;
}
.busqueda__titulo__receta {
  color: white;
  font-family: "Amatic SC", cursive;
  font-size: 45px;
}
.busqueda__imagen__receta {
  position: relative;
  width: 70%;
}
.busqueda__titulo__preparacion__receta {
  color: white;
  font-family: "Amatic SC", cursive;
  font-size: 35px;
}
.busqueda__preparacion__receta {
  color: white;
}
.busqueda__lista__receta {
  color: white;
  font-family: "Amatic SC", cursive;
  font-size: 30px;
  cursor: pointer;
}
.busqueda__lista__receta:hover {
  background-color: black;
  font-size: 40px;
}
</style>