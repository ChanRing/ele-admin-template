import Vue from 'vue'
import 'normalize.css/normalize.css'

import './styles/element-variables.scss'
import './plugins/elementUI'
import './styles/index.scss' // 样式 - 系统样式

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
