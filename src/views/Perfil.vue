<template>
  <div class="perfil">
    <h1 class="perfil__titulo p-5">{{perfil_titulo}}</h1>

    <ul v-for="(item, index) in dataUsers" :key="index" class="perfil__datos">
      <!-- <p>{{item.idDoc}}</p> -->
      <p>{{item.displayName}}</p>
      <p>{{item.email}}</p>
      <p>
        <button
          type="button"
          class="perfil__botones btn btn-success"
          data-toggle="modal"
          data-target="#exampleModal"
        >{{perfil_boton_editar}}</button>
      </p>
      <br />

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Actualizando Datos</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label class="perfil__modalLabel">Nombre:</label>
                  <input
                    id="nombre"
                    type="text"
                    class="form-control perfil__modalInput"
                    placeholder="Ingresa tu nombre"
                    :value="item.displayName"
                  />
                </div>

                <div class="form-group">
                  <label class="perfil__modalLabel">Correo:</label>
                  <input
                    id="correo"
                    type="text"
                    class="form-control perfil__modalInput"
                    placeholder="Ingresa tu email"
                    :value="item.email"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="perfil__botones btn btn-secondary"
                data-dismiss="modal"
              >Cancelar</button>
              <button
                type="button"
                class="perfil__botones btn btn-success"
                data-dismiss="modal"
                @click.prevent="agregando(item.idDoc)"
              >Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { db } from "../main";
export default {
  name: "Perfil",
  data() {
    return {
      perfil_titulo: "Mi Perfil",
      perfil_boton_editar: "Editar"
    };
  },
  computed: {
    dataUsers() {
      return this.$store.getters.mostrandoDatosUsuario;
    }
  },
  methods: {
    editarPerfil(id) {
      this.$store.dispatch("pasandoIdDataUser", id);
    },
    agregando(idDoc) {
      let nombrePerfil = document.getElementById("nombre").value;
      let correoPerfil = document.getElementById("correo").value;
      console.log(nombrePerfil);
      if (nombrePerfil && correoPerfil) {
        db.collection("datosUsuario")
          .doc(idDoc)
          .update({
            displayName: nombrePerfil,
            email: correoPerfil
          })
          .then(() => {
            console.log("Usuario actualizado");
          });
      } else {
        console.log("Hubo un error");
      }
    }
  }
};
</script>

<style>
.perfil {
  margin: 4%;
  background: rgba(00, 00, 0, 0.8);
}
.perfil__titulo {
  color: white;
  opacity: 1 !important;
  font-family: "Amatic SC", cursive;
  font-size: 60px;
}

.perfil__datos {
  font-family: "Amatic SC";
  font-size: 35px !important;
  color: white;
}

.perfil__modalLabel {
  color: black;
}

.perfil__modalInput {
  font-family: "Avenir";
  font-size: 18px;
}

.perfil__botones {
  padding: 0.7rem 1.5rem;
  font-size: 1.5rem;
}
</style>