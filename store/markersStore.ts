import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators'
import Marker from '~/types/marker'

@Module({
  name: 'markers',
  namespaced: true,
  stateFactory: true
})
export default class MarkersStore extends VuexModule {
  markers: Marker[] = []

  get allMarkers(): Marker[] {
    return this.markers
  }

  @Mutation
  addMarkerMutation(marker: Marker) {
    this.markers.push(marker)
  }

  @Action({ commit: 'addMarkerMutation' })
  addMarkerAction() {
    console.log('toto')
    return true
  }
}
