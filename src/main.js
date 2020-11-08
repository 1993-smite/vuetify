import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store/index';

Vue.config.productionTip = false

import router from './routers/index'

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
