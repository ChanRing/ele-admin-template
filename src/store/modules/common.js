/**
 * 系统内部的状态管理
 * Created By ChangRon 2020/03/20
 */

import { getMenus } from '@/api'

const state = {
  collapse: false, // 侧边栏是否折叠
  direction: 'vertical', // 菜单栏显示方式 horizontal vertical
  theme: 'dark',
  hasNavs: false,
  menus: [],
  routes: []
}
// 生成路由方法
function generateRouter() {}

const actions = {
  toggleCollapse({ commit }) {
    commit('toggleCollapse')
  },
  async getMenus({ commit }) {
    commit('getMenus', (await getMenus()).data)
    generateRouter()
  }
}

const mutations = {
  toggleCollapse(state) {
    state.collapse = !state.collapse
  },
  getMenus(state, menus) {
    state.menus = menus
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
