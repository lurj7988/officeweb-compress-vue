const state = {
  url: 'http://localhost:8080'
}

const mutations = {
  CHANGE_URL: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeUrl({ commit }, data) {
    commit('CHANGE_URL', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
