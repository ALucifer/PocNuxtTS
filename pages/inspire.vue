<template>
  <v-layout>
    <v-flex class="text-center">
      <ListingMarker></ListingMarker>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import ListingMarker from '~/components/markers/ListingMarker.vue'

export default {
  components: {
    ListingMarker
  }
}
</script>
