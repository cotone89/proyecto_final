import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import firebase from 'firebase'
import {
  firebaseConfig
} from './config/firebase'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

firebase.initializeApp(firebaseConfig);
// Para configurar base de datos(utilizamos de forma local la db):
export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')