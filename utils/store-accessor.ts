import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Markers from '~/store/markersModules'

let markersStore: Markers

function initialiseStores(store: Store<any>): void {
    markersStore = getModule(Markers, store)
}

export { initialiseStores, markersStore }