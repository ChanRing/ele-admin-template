import Vue from 'vue'
import VueRouter from 'vue-router'
import common from './common'
import components from './components'

Vue.use(VueRouter)

const routes = [...common, ...components]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
