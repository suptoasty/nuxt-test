export const plugins = []

export const state = () => ({
  authenticated: false,
})

export const getters = () => ({})

export const actions = {
  login({ commit }) {
    commit('authenticate')
  },
  logout({ commit }) {
    commit('deauthenticate')
  },
}

export const mutations = {
  authenticate(state) {
    state.authenticated = true
  },
  deauthenticate(state) {
    state.authenticated = false
  },
}
