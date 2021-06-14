export const plugins = []

export const state = () => ({
  authenticated: false,
  darkTheme: false,
})

export const getters = () => ({
  isAdmin: (state) => {
    return state.authenticated
  },
  getTheme: (state) => {
    return state.darkTheme
  },
})

export const actions = {
  login({ commit }) {
    commit('authenticate')
  },
  logout({ commit }) {
    commit('deauthenticate')
  },
  toggleTheme({ commit }) {
    commit('setTheme')
  },
}

export const mutations = {
  authenticate(state) {
    state.authenticated = true
  },
  deauthenticate(state) {
    state.authenticated = false
  },
  setTheme(state) {
    state.darkTheme = !state.darkTheme
  },
}
