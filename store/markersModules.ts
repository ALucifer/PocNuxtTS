import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import Marker from '~/types/marker';

@Module({name: 'markers', namespaced: true})
export default class Markers extends VuexModule {
    markers: Marker[] = [];

    @Mutation
    setMarkers(markers: Marker[]) {
        this.markers = markers
    }

    getMarkers() {
        return this.markers;
    }

    @Action
    addMarker(marker: Marker) {
        this.markers.push(marker);
    }
}