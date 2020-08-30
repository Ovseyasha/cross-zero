<template>
  <!-- eslint-disable -->
  <v-row>
    <v-col xl="4" lg="4" md="4" sm="6" cols="12" v-for="(g,index) in games" :key="index">
      <v-hover>
        <template v-slot="{ hover }">
          <v-card color="info" class="mx-auto transition-swing" :elevation="hover ? 16 : 3">
            <v-card-text>
              <div>{{g.category}}</div>
              <p class="display-1 text--primary">{{g.name}}</p>
              <div class="text--primary">{{g.desc}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn rounded color="secondary" absolute right nuxt-link :to="g.url">Играть</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      games: [
        {
          name: 'Крестики-нолики',
          category: 'Игра двоих/онлайн',
          desc: 'Крестики-нолики – логическая игра между двумя противниками на квадратном поле 3х3 клетки. Один из игроков играет «крестиками», второй — «ноликами».',
          url: '/crosszero'
        }
      ]
    }
  }
}
</script>

<style>
</style>
