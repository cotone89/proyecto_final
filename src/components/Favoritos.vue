<template>
    <div class="favoritos">
        <h1 class="favoritos__titulo p-5 ">{{favoritos_titulo}}</h1>
    </div>
    
</template>
<script>
    export default {
    name: 'Favoritos',
    data: function () {
        return {
            favoritos_titulo: 'Mis Favoritos'
        }
      },
    methods: {
    }
}
</script>
<style>
    .favoritos{
        margin: 4%;
        background: rgba(00,00,0,0.8);
    }
    .favoritos__titulo{
        color:white;
        opacity:1!important;
        font-family: 'Amatic SC', cursive;
        font-size: 60px;
    }
</style>