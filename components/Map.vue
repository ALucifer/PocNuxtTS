<template class="fixed">
  <div id="map"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWx1Y2lmZXIiLCJhIjoiY2s3eHNva256MDBsMDNvcXRscWFvdHZyMCJ9.D7iW8-XpgS6VFpib94qgGg'

@Component
export default class Map extends Vue {
  mounted() {
    const coord = [2.0352626990854787, 48.93650227971116]
    /** Map */
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 17,
      center: coord,
      scrollZoom: true,
      hash: true,
      attributionControl: false // Remove @MapBox
    })

    new mapboxgl.Marker().setLngLat(coord).addTo(map)
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
