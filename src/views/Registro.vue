<template>
  <div class="signin">
    <h1 class="login__titulo p-5">{{signin_titulo}}</h1>
    <div class="alert alert-danger" role="alert" v-if="signin_error">{{signin_error}}</div>
    <b-row class="my-1 login__grid">
      <b-form-input
        id="name"
        v-model="signin_nombre"
        class="mb-3"
        type="text"
        placeholder="Ingresa tu Nombre"
      ></b-form-input>

      <b-form-input
        type="email"
        v-model="signin_email"
        class="mb-3"
        id="email"
        placeholder="Ingresa tu Email"
      ></b-form-input>

      <b-form-input
        id="password1"
        v-model="signin_pass1"
        class="mb-3"
        type="password"
        placeholder="Tu password"
      ></b-form-input>

      <b-form-input
        id="password2"
        v-model="signin_pass2"
        class="mb-3"
        type="password"
        placeholder="Tu password de nuevo"
      ></b-form-input>
    </b-row>

    <button
      type="button"
      class="btn btn-success login__boton mb-5 mt-2"
      @keyup.enter="signin"
      @click.prevent="signin"
    >{{signin_boton}}</button>
    <h3 class="login__irLogin">{{texto_irLogin}}</h3>
    <button
      type="button"
      class="btn btn-success login__boton-irLogin mb-5 w-25"
      @click="irSignin"
    >{{titulo_boton_irLogin}}</button>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../main";
export default {
  name: "Registro",
  data() {
    return {
      signin_titulo: "Registro",
      signin_boton: "Registrarse",
      signin_nombre: "",
      signin_email: "",
      signin_pass1: "",
      signin_pass2: "",
      signin_error: "",
      texto_irLogin: "¿Ya te has registrado?",
      titulo_boton_irLogin: "Ir a Login!"
    };
  },
  methods: {
    signin() {
      console.log("registro");
      const expresionCorreo = /\w+@\w+\.+[a-z]/;
      const expresionNombre = /^[a-zA-ZàáÁÀñÑóÓúÚÖöíÍéÉ\s]/;
      if (
        (!this.signin_email &&
          !this.signin_pass1 &&
          !this.signin_pass2 &&
          !this.signin_nombre) ||
        (!this.signin_email && !this.signin_pass1 && !this.signin_pass2) ||
        (!this.signin_pass1 && !this.signin_pass2) ||
        (!this.signin_email && !this.signin_pass1 && !this.signin_pass2)
      ) {
        this.signin_error = "Debes llenar todos los datos de usuario";
        setTimeout(() => {
          this.signin_error = "";
        }, 3000);
      } else if (
        !expresionNombre.test(this.signin_nombre) ||
        this.signin_nombre.length < 2
      ) {
        this.signin_error = "El Nombre no es permitido";
        setTimeout(() => {
          this.signin_error = "";
        }, 3000);
      } else if (this.signin_pass1.length < 6) {
        this.signin_error = "La contraseña debe ser mayor a 6 digitos";
        setTimeout(() => {
          this.signin_error = "";
        }, 3000);
      } else if (!expresionCorreo.test(this.signin_email)) {
        this.signin_error = "Ingresa un correo electrónico válido";
        setTimeout(() => {
          this.signin_error = "";
        }, 3000);
      } else if (this.signin_pass1 != this.signin_pass2) {
        this.signin_error = "Contraseñas deben ser iguales";
        setTimeout(() => {
          this.signin_error = "";
        }, 3000);
      } else {
        console.log("correo bueno");
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.signin_email, this.signin_pass1)
          .then(respuesta => {
            return respuesta.user
              .updateProfile({
                displayName: this.signin_nombre
              })
              .then(() => {
                console.log(respuesta.user);
                this.signin_error = "";
                this.signin_nombre = "";
                this.signin_email = "";
                this.signin_pass1 = "";
                this.signin_pass2 = "";
                this.$router.replace({ name: "Busqueda" });
                db.collection("datosUsuario")
                  .doc(respuesta.user.uid)
                  .set({
                    displayName: respuesta.user.displayName,
                    email: respuesta.user.email,
                    emailVerified: respuesta.user.emailVerified,
                    uid: respuesta.user.uid
                  });
              });
          })
          .catch(error => {
            console.error(error);
          });

        //             }).catch(error => {
        //                 console.error(error);
        //                 if (error.code == 'auth/email-already-in-use'){
        //                     Swal.fire({
        //                         icon: 'error',
        //                         title: 'Oops...',
        //                         text: 'El usuario ya existe',
        //                         footer: '<b>Tengo.Hambre</b>'
        //                     });
        //                 }

        //             })
        //         }
        // }
      }
    },
    irSignin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.signin {
  margin: 4%;
  background: rgba(00, 00, 0, 0.8);
}
.login__titulo {
  color: white;
  opacity: 1 !important;
  font-family: "Amatic SC", cursive;
  font-size: 60px;
}
.login__boton {
  font-family: "Amatic SC", cursive;
  font-size: 40px !important;
}
.login__grid {
  display: grid !important;
  justify-content: center;
}
.login__irLogin {
  font-family: "Avenir";
  font-size: 20px !important;
  color: white;
}
.login__boton-irLogin {
  font-family: "Amatic SC", cursive;
  font-size: 25px !important;
}
</style>