<template>
  <div>
    <proposition></proposition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Proposition from '~/components/propositions/proposition.vue'

@Component({
  components: { Proposition }
})
export default class ListPropositions extends Vue {}
</script>
