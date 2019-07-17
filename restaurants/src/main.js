import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'
import VueAxios from 'vue-axios'

// axios.defaults.baseURL = process.env.BASE_URL
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA5WK7cqHv4wYJ3LSIdVaez5FwmBcZZ4ig',
    libraries: 'places',
  }
})
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
