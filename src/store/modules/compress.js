const state = {
  node: {},
  loading: false
}

const mutations = {
  CHANGE_NODE: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeNode({ commit }, data) {
    commit('CHANGE_NODE', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
