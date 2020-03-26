/**
 * 路由文件配置说明
 * hidden: true 如果设置为true，则不会在菜单栏显示（可改为通过接口返回权限列表控制）
 *
 * {
 *   title: 页面标题信息,
 *   icon: 菜单栏的图标,
 *   showMenu: 是否显示菜单栏，默认为true
 *   // 在新窗口打开  _blank
 *   // 在指定iframe中打开  _iframe
 *   // 在router-view中打开  _router
 *   target: 页面打开方式默认为router
 * }
 */

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
