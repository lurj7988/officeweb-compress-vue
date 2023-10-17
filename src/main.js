import Vue from 'vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import '@/styles/element-variables.scss'
import '@/styles/index.scss' // global css

import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(Element)

window.appSettings = process.env.NODE_ENV === 'production' ? window.appSettings : require('../appsettings.json')

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
