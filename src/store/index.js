import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 加载 './modules' 下面的js
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // 转换 './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  modules[moduleName] = modulesFiles(modulePath).default
  return modules
}, {})

export default new Vuex.Store({
  modules
})
