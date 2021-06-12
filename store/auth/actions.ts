export const actions = () => ({
  login({ commit }, { req }) {
    commit('authenticate')
  },
})
