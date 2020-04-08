<template>
  <v-layout columns>
    <v-flex xs12 sm8 md6>
      <div>
        <Map></Map>
      </div>
    </v-flex>
    <v-flex md6>
      <AddMarker></AddMarker>
    </v-flex>
  </v-layout>
</template>

<script>
import Map from '~/components/Map.vue'
import AddMarker from '~/components/AddMarker.vue'

export default {
  components: {
    Map,
    AddMarker
  },
  data() {
    return {
      title: 'Welcome to the Vuetify + Nuxt.js template'
    }
  }
}
</script>

<style>
.test {
  color: black;
}
</style>
