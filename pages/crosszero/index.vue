<template>
  <!-- eslint-disable -->
  <v-row justify="center">
    <v-col xl="6" lg="6" md="6" cols="12">
      <v-card min-height="500">
        <v-container>
          <v-row class="pt-15 pb-15">
            <v-col cols="12">
              <!-- eslint-disable-next-line -->
              <h1 class="text-center">Крестики-нолики</h1>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col xl="6" lg="6" md="6" cols="12">
              <!-- eslint-disable-next-line -->
              <v-btn
                nuxt
                to="/crosszero/single"
                color="secondary"
                type="submit"
                rounded
                block
                x-large
              >Игра на двоих</v-btn>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col xl="6" lg="6" md="6" cols="12">
              <!-- eslint-disable-next-line -->
              <v-btn
                nuxt
                to="/crosszero/online"
                color="primary"
                type="submit"
                rounded
                block
                x-large
              >Игра Online</v-btn>
            </v-col>
          </v-row>
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
        this.$router.push(`/crosszero/${room}`)
      } catch (error) {
      }
    }
  }
}
</script>
