<template>
  <div>
    <v-text-field label="Latitude"></v-text-field>
    <v-text-field label="Longitude"></v-text-field>
    <v-btn small color="primary">Sauvegarder</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Marker from '../types/marker'

@Component
export default class AddMarker extends Vue {}
</script>

<style scoped>
input {
  background: floralwhite;
  color: black;
}
</style>
