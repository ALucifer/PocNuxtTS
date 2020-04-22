import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'
import Marker from '~/types/marker'

export const state = () => ({
  markers: [] as Marker[]
})

export const getters = getterTree(state, {
  allMarkers: (state) => state.markers
})

export const mutations = mutationTree(state, {
  addMarker(state, marker: Marker) {
    state.markers.push(marker)
  }
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    addMarkerAction({ commit }, marker: Marker) {
      commit('addMarker', marker)
    }
  }
)
