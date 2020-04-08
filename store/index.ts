import Vuex from 'vuex'
import MarkersStore from '~/store/markersStore'

export const store = new Vuex.Store({
  modules: {
    markers: MarkersStore
  }
})
