<template>
    <div class="login">
        <h1 class="login__titulo p-5 ">{{login_titulo}}</h1>
        <b-row class="my-1 login__grid">
            <b-form-input type="email" v-model="login_email" class="mb-3" id="email" placeholder="tengo.hambre@gmail.com"></b-form-input>
            <b-form-input type="password" v-model="login_pass" class="mb-3" id="password" placeholder="tu password"></b-form-input>

        </b-row>
        <button type="button" class="btn btn-success login__boton mb-5 mt-2" @keyup.enter="login" @click="login">{{login_boton}}</button>
    </div>
</template>
<script>

    import firebase from 'firebase'

    export default {
    name: 'Login',
    data: function () {
        return {
            login_titulo: 'Login',
            login_boton: 'Ingresar',
            login_email: '',
            login_pass: '',
            login_error: 'Datos incorrectos'
        }
      },
        methods: {
            login() {
                console.log("entro al login");
                firebase.auth()
                  .signInWithEmailAndPassword(this.login_email, this.login_pass)
                    .then(data => {
                        //var user = firebase.auth().currentUser;
                        this.$store.commit('cambioEstadoLogueado');
                        console.log("data " +data);
                    this.$router.replace({ name: "Principal" });
                  })
                    .catch(err => {
                        console.log("no entro");
                    this.error = err.message;
                  });
              }
            }
        
    }
</script>
<style>
    .login{
        margin: 4%;
        background: rgba(00,00,0,0.8);
    }
    .login__titulo{
        color:white;
        opacity:1!important;
        font-family: 'Amatic SC', cursive;
        font-size: 60px;
    }
    .login__boton{
        font-family: 'Amatic SC', cursive;
        font-size: 40px!important;
    }
    .login__grid{
        display: grid!important;
        justify-content: center;
    }
</style>