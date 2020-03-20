/**
 * 系统内部的状态管理
 * Created By ChangRon 2020/03/20
 */

import { getMenus } from '../../api'

const state = {
  collapse: true, // 侧边栏是否折叠
  direction: 'horizontal', // 菜单栏显示方式 horizontal vertical
  theme: 'dark',
  hasNavs: false,
  menus: []
}

const actions = {
  toggleCollapse({ commit }) {
    commit('toggleCollapse')
  },
  async getMenus({ commit }) {
    const menus = (await getMenus()).data
    commit('getMenus', menus)
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
