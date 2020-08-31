<template>
  <v-row justify="center">
    <v-col xl="6" lg="6" md="6" cols="12">
      <v-card min-height="500">
        <v-container>
          <v-row>
            <v-col>
              <!-- eslint-disable-next-line -->
              <v-btn nuxt to="/crosszero" rounded>←</v-btn>
            </v-col>
          </v-row>
          <v-row class="pt-15">
            <v-col cols="12">
              <!-- eslint-disable-next-line -->
              <h1 class="text-center">Крестики-нолики на двоих</h1>
            </v-col>
          </v-row>
          <form @submit.prevent="play">
            <v-row justify="center">
              <v-col xl="6" lg="6" md="6" cols="12">
                <v-text-field v-model="name" required label="Имя 1" filled rounded />
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col xl="6" lg="6" md="6" cols="12">
                <v-text-field v-model="name2" required label="Имя 2" filled rounded />
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col xl="6" lg="6" md="6" cols="12">
                <!-- eslint-disable-next-line -->
                <v-btn color="secondary" type="submit" rounded block x-large>Играть</v-btn>
              </v-col>
            </v-row>
          </form>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  layout: 'games',
  components: {
  },
  data () {
    return {
      name: '',
      name2: ''
    }
  },
  methods: {
    play () {
      try {
        // зарегать пользователя в сокете, узнать его комнату и перебросить его туда
        this.$router.push(`/crosszero/single/game?player1=${this.name}&player2=${this.name2}`)
      } catch (error) {
      }
    }
  }
}
</script>
