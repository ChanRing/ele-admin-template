import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = []

// 引入modules文件夹的路由js
const files = require.context('./modules', false, /\.js$/)
files.keys().forEach(key => {
  routes.push(...files(key).default)
})

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes
  })

const router = createRouter()

export const resetRouter = () => {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
