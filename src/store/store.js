import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        uidUser: '',
        marca: 'Tengo.Hambre',
        // usuarioLogueado: false
    },
    getters: {
        getMarca(state) {
            return state.marca;
        },
        getUsuarioLogueado(state) {
            return state.uidUser;
        }
        // getUsuarioLogueado(state) {
        //     return state.usuarioLogueado;
        // },
    },
    mutations: {
        // cambioEstadoLogueado(state) {
        //     state.usuarioLogueado = !state.usuarioLogueado;
        //     return state.usuarioLogueado;
        // },
        agregandoID(state, idRecibido) {
            state.uidUser = idRecibido;
        }
    },
    actions: {
        async obtenerRecetaNombre(context, nombreReceta) {
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + nombreReceta);
            return response.data.meals;
        },
        idUserLogin(context, idUsuarioRecibido) {
            context.commit('agregandoID', idUsuarioRecibido)
        }
    },
})