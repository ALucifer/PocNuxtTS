import { getAccessorType } from 'nuxt-typed-vuex'
import * as markersStore from '~/store/markersStore'

export const accessorType = getAccessorType({
  modules: {
    markersStore
  }
})
