import Vue from 'vue'

import Element from 'element-ui'

import '@/styles/index.scss' // global css

import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(Element)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
