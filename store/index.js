export const plugins = []

export const state = () => ({
  authenticated: false,
})

export const getters = () => ({
  isAdmin: (state) => {
    return state.authenticated
  },
})

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
