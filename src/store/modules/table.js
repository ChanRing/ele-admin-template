// vuex 模块化管理

import { getTableData } from '../../api'

const state = {
  total: 0,
  items: []
}

const mutations = {
  GET_TABLE_DATA(state, response) {
    const { total, items } = response.data
    state.total = total
    state.items = items
  }
}

const actions = {
  async getTableData({ commit }, data) {
    commit('GET_TABLE_DATA', await getTableData(data))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
