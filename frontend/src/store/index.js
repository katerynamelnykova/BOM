import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    dzos: [],
    tos: [],
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
    async deleteDZO({ commit }, id) {
      if (confirm('Ви впевнені, що хочете назавжди видалити цей запис?')) {
          await fetch(`/api/dzo/${id}`, {
              method: 'DELETE'
          })
          commit("DELETE_DZO")
      }
    },
    async deleteTO({ commit }, id) {
      if (confirm('Ви впевнені, що хочете назавжди видалити цей запис?')) {
          await fetch(`/api/to/${id}`, {
              method: 'DELETE'
          })
          commit("DELETE_TO")
      }
    },
    async addDZO({ dispatch }, { idParentDetail, cost, weight, name, isManufactured }) {
      await axios.post(`/api/dzo`, { idParentDetail: idParentDetail, cost: cost, weight: weight, name: name, isManufactured: isManufactured })
      dispatch("fetchDZOs")
    },
    async editDZO({ dispatch }, {idDetail, idParentDetail, cost, weight, name, isManufactured}) {
      await axios.put(`/api/dzo/${idDetail}`, 
      {idParentDetail: idParentDetail, cost: cost, weight: weight, name: name, isManufactured: isManufactured})
      dispatch("fetchDZOs")
    },
    async addTO({ dispatch }, { idManufacturedDetail, sequenceNumber, duration, district, department, equipmentTimeCost, workerTimeCost, cost, name }) {
      await axios.post(`/api/to`, { idManufacturedDetail: idManufacturedDetail, sequenceNumber: sequenceNumber, 
        duration: duration, district: district, department: department, 
        equipmentTimeCost: equipmentTimeCost, workerTimeCost: workerTimeCost, 
        cost: cost, name: name })
      dispatch("fetchTOs")
    },
    async editTO({ dispatch }, { idTO, idManufacturedDetail, sequenceNumber, duration, district, department, equipmentTimeCost, workerTimeCost, cost, name }) {
      await axios.put(`/api/to/${idTO}`, { idManufacturedDetail: idManufacturedDetail, sequenceNumber: sequenceNumber, 
        duration: duration, district: district, department: department, 
        equipmentTimeCost: equipmentTimeCost, workerTimeCost: workerTimeCost, 
        cost: cost, name: name })
      dispatch("fetchTOs")
    },
  },
  modules: {
  }
})
