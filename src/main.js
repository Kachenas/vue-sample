import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  vuetify,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
