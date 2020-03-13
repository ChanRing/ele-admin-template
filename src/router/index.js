import Vue from 'vue'
import VueRouter from 'vue-router'
import common from './common'

Vue.use(VueRouter)

const routes = [...common]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
