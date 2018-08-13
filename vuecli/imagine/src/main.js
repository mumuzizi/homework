import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

Vue.config.productionTip = false
// global.API_PROXY = 'https://bird.ioliu.cn/v2?url=';
// global.activeNav = "movie"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
