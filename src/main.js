import Vue from 'vue'
import App from './App.vue'
import '@/init';
import router from '@/services/routes';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
