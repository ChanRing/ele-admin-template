import Vue from 'vue'
import 'normalize.css/normalize.css' // 样式重置
import './styles/index.scss' // 通用样式

import ElementUI from './plugins/elementUI'
import './styles/element-variables.scss'
Vue.use(ElementUI)

import App from './App.vue'
import router from './router'
import store from './store'

// import mUtils from 'mutils'
// console.log(mUtils.timeFormat(new Date()))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
