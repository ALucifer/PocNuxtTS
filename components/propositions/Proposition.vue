<template>
  <v-card class="my-2" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Présent: 15</div>
        <v-list-item-title class="headline mb-1">
          Repas de noel
        </v-list-item-title>
        <v-list-item-subtitle>Repas de noel le 23/12/2020</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn despress color="teal darken-3">Présent</v-btn>
      <v-btn despress color="red darken-3">Abstent</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Proposition extends Vue {}
</script>
