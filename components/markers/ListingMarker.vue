<template>
  <div>
    <p v-for="(marker, value) in markers" :key="value">
      <proposition></proposition>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Propositon from '~/components/propositions/proposition.vue'

@Component({
  components: { Propositon }
})
export default class ListingMarker extends Vue {
  get markers() {
    return this.$accessor.markersStore.allMarkers
  }
}
</script>

<style scoped></style>
