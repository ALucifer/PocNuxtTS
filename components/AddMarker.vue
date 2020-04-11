<template>
  <div>
    <v-text-field v-model="lat" label="Latitude"></v-text-field>
    <v-text-field v-model="lng" label="Longitude"></v-text-field>
    <v-btn small color="primary" @click="addMarker">Sauvegarder</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Marker from '~/types/marker'

@Component
export default class AddMarker extends Vue {
  lat: number = 0
  lng: number = 0

  addMarker() {
    const marker = new Marker(this.lat, this.lng)
    console.log(marker)
    this.$store.commit('markers/addMarkerAction')
  }
}
</script>

<style scoped>
input {
  background: floralwhite;
  color: black;
}
</style>
