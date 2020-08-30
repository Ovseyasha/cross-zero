<template>
  <!-- eslint-disable -->
  <v-app-bar app clipped-left color="secondary">
    <nuxt-link to="/" tag="span" class="title ml-3 mr-5">
      <span class="font-weight-light">Библиотека</span>
      игр
    </nuxt-link>
    <v-text-field solo-inverted flat hide-details label="Search"></v-text-field>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>

export default {

}
</script>

<style>
.title {
  cursor: pointer;
}
</style>
