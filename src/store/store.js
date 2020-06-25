import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
    db
} from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        uidUser: '',
        marca: 'Tengo.Hambre',
        datosUsuario: [],
        idDataUser: '',
    },
    getters: {
        getMarca(state) {
            return state.marca;
        },
        getUsuarioLogueado(state) {
            return state.uidUser;
        },
        mostrandoDatosUsuario(state) {
            return state.datosUsuario;
        },
    },
    mutations: {
        agregandoID(state, idRecibido) {
            state.uidUser = idRecibido;
        },

        traerBD(state, usuarioId) {
            db.collection("datosUsuario").onSnapshot(info => {
                let aux = [];
                console.log(info);
                info.forEach((element) => {
                    if (element.id === usuarioId) {
                        aux.push({
                            displayName: element.data().displayName,
                            email: element.data().email,
                            idDoc: element.id
                        })
                    }

                });
                state.datosUsuario = aux;
            })
        },
        guardandoIdDataUser(state, id) {
            state.idDataUser = id;
        }
    },

    actions: {
        async obtenerRecetaNombre(context, nombreReceta) {
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + nombreReceta);
            return response.data.meals;
        },

        idUserLogin(context, idUsuarioRecibido) {
            console.log(idUsuarioRecibido)
            context.commit('agregandoID', idUsuarioRecibido)
        },

        activandoMutacionDB(context, usuarioId) {
            context.commit('traerBD', usuarioId);
        },

        pasandoIdDataUser(context, id) {
            context.commit('guardandoIdDataUser', id);
        }
    },
})