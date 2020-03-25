<template>
  <v-layout columns>
    <v-flex xs12 sm8 md6>
      <div>
        <Map></Map>
      </div>
    </v-flex>
    <v-flex md6>
      <div>test</div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Map from '~/components/Map.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    Map
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
    color: black
  }
</style>
