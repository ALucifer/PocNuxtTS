import { VuexModule, Module } from 'vuex-module-decorators'
import Marker from '~/types/marker'

@Module
export default class MarkersStore extends VuexModule {
  markers: Marker[] = []

  get allMarkers(): Marker[] {
    return this.markers
  }
}
