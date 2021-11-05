import Vue from 'vue'
import App from './App.vue'
import '@/init';
import router from '@/services/routes';
import store from '@/stores/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
