<template>
    <div>
        <footer class="footer text-center footer__bg">
            <span class="footer__titulo">{{marca}}</span><span class="footer__derechos"> &copy; Todos los derechos reservados</span>
        </footer>
    </div>
</template>
<script>
    export default {
        name: 'Footer',
        computed: {
            marca() {
                return this.$store.getters.getMarca
            }
        }
}
</script>
<style>
    .footer__titulo {
       font-family: 'Amatic SC', cursive;
        font-size: 20px;
        color: white;
    }
    .footer__derechos{
        color:white;
        font-size: 12px;
    }
    .footer__bg {
        background: black;
        padding: 10px;
    }
</style>