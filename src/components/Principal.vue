<template>
    <div class="principal">
        <h1 class="principal__titulo p-5 ">{{titulo_principal}}</h1>
        <button type="button" class="btn btn-success principal__boton mb-5 w-25" @click="irBusqueda">{{titulo_boton}}</button>
        <!--add carrusel-->
    </div>
</template>

<script>

export default {
    name: 'Principal',
    data: function () {
        return {
            titulo_principal: 'Hola \u00bfTienes hambre?',
            titulo_boton:'S\u00ed!'
        }
      },
    methods: {
        irBusqueda() {
            this.$router.push('/busqueda')
        }
    }
}
</script>
<style>
    .principal{
        margin: 4%;
        background: rgba(00,00,0,0.8);
    }
    .principal__titulo{
        color:white;
        opacity:1!important;
        font-family: 'Amatic SC', cursive;
        font-size: 60px;
    }
    .principal__boton{
        font-family: 'Amatic SC', cursive;
        font-size: 40px!important;
    }
</style>