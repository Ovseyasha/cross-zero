<template>
  <v-app id="inspire" class="font-weight-light">
    <Navbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  data () {
    return {
    }
  }
}
</script>
<style >
html {
  font-weight: lighter;
}
</style>
