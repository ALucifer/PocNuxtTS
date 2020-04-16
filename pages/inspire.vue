<template>
  <v-layout>
    <v-flex class="text-center">
      <ListingMarker></ListingMarker>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import ListingMarker from '~/components/ListingMarker'

export default {
  components: {
    ListingMarker
  }
}
</script>
