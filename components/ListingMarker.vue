<template>
  <div>
    <p v-for="(marker, value) in markers" :key="value">
      Lat: {{ marker.lat }} | Lng: {{ marker.lng }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ListingMarker extends Vue {
  get markers() {
    return this.$accessor.markersStore.allMarkers
  }
}
</script>

<style scoped></style>
