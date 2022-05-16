import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vuemask from './plugins/vue-mask'
import axios from './plugins/axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vuemask,
  axios,
  render: h => h(App)
}).$mount('#app')
