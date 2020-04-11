import Vuex from 'vuex'
import markersStore from '~/store/markersStore'

const store = new Vuex.Store({
  modules: {
    markers: markersStore
  }
})
