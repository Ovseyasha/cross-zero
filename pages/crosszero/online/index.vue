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
              <h1 class="text-center">
                <!-- eslint-disable-next-line -->
                Крестики-нолики ONLINE
              </h1>
            </v-col>
          </v-row>
          <form @submit.prevent="play">
            <v-row justify="center">
              <v-col xl="6" lg="6" md="6" cols="12">
                <v-text-field v-model="name" required label="Имя" filled rounded />
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col xl="6" lg="6" md="6" cols="12">
                <v-text-field v-model="room" required label="Комната" filled rounded />
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
      room: ''
    }
  },
  methods: {
    play () {
      try {
        // зарегать пользователя в сокете, узнать его комнату и перебросить его туда
        const room = 1
        this.$router.push(`/crosszero/online/${room}`)
      } catch (error) {
      }
    }
  }
}
</script>
