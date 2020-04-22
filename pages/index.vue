<template>
  <v-layout columns>
    <v-flex md8>
      <Map></Map>
    </v-flex>
    <v-flex md4 class="px-4">
      <ListPropositions></ListPropositions>
    </v-flex>
  </v-layout>
</template>

<script>
import Map from '~/components/Map.vue'
import ListPropositions from '~/components/propositions/ListingPropositions.vue'

export default {
  components: {
    Map,
    ListPropositions
  },
  data() {
    return {
      title: 'Welcome to the Vuetify + Nuxt.js templates.'
    }
  }
}
</script>

<style>
.test {
  color: black;
}
</style>
