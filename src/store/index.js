import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      marca:'Tengo.Hambre'
    },
    getters:{
        getMarca(state) {
            return state.marca;
        }
    },
    mutations: {
  },
    actions: {
        async obtenerRecetaNombre(context,nombreReceta) {
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + nombreReceta);
            return response.data.meals;
        }
  },
  modules: {
  }
})
