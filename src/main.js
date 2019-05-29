import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'

Vue.config.productionTip = false
// Vue.http = Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
