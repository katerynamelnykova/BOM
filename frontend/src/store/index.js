import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    dzos: [],
    tos: [],
    dzo: {},
    to: {}
  },
  getters: {
  },
  mutations: {
    SET_DZOS(state, dzos) {
      state.dzos = dzos
    },
    SET_TOS(state, tos) {
        state.tos = tos
    },
    SET_DZO(state, dzo) {
      state.dzo = dzo
    },
    SET_TO(state, to) {
        state.to = to
    },
    DELETE_DZO(state) {
        state.dzo = {}
    },
    DELETE_TO(state) {
        state.to = {}
    },
  },
  actions: {
    async fetchDZOs({ commit }) {
      try {
        const data = await axios.get(`/api/dzo`)
        commit("SET_DZOS", data.data.message)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchTOs({ commit }) {
      try {
        const data = await axios.get(`/api/to`)
        commit("SET_TOS", data.data.message)
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {
  }
})
