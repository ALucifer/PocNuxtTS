<template class="fixed">
    <div id="map"></div>
</template>

<script>
import { getters } from '~/store';

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = "pk.eyJ1IjoiYWx1Y2lmZXIiLCJhIjoiY2s3eHNva256MDBsMDNvcXRscWFvdHZyMCJ9.D7iW8-XpgS6VFpib94qgGg";

export default {
    mounted() {
    let coord = [2.0352626990854787,48.93650227971116]
    /** Map */
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 17,
        center: coord,
        scrollZoom: true,
        hash: true,
        attributionControl: false // Remove @MapBox
    })
    
    var popup = new mapboxgl.Popup()
      .setLngLat(coord)
      .setHTML('<h1 class="test">Hello World!</h1>')
      .addTo(map);
  },
  methods: {
    generateMarkers() {
        let marker = this.$store.getters['getMarkers'] as ReturnType<typeof getters.markers>
    }
  }
}
</script>

<style scoped>
    .fixed {
        position: relative;
    }
    #map {
        width: 500px;
        height: 500px;
        position: fixed;
    }
</style>