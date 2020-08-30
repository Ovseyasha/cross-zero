<template>
  <v-row justify="center">
    <!-- eslint-disable -->
    <v-col xl="6" lg="6" md="6" cols="12">
      <v-card min-height="600" min-width="600">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-row justify="space-between">
                <v-col cols="auto">
                  <h1 class="secondary--text">{{user1.name}}</h1>
                  <p class="secondary--text">{{user1.role === 'x' ? 'Крестики' : 'Нолики'}}</p>
                </v-col>
                <v-col align="right" cols="auto">
                  <h1 class="primary--text">{{user2.name}}</h1>
                  <p class="primary--text text-left">{{user2.role === 'x' ? 'Крестики' : 'Нолики'}}</p>
                </v-col>
              </v-row>
              <v-divider />
              <v-row>
                <v-col cols="12">
                  <v-row v-for="(row,i) in cells" :key="i">
                    <v-col
                      v-for="(m,j) in row"
                      :key="j"
                      align-self="center"
                      align="center"
                      cols="4"
                    >
                      <v-btn :disabled="dialog" x-large :value="m" @click="setVal(i,j)">{{ m }}</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-divider />
              <v-row v-if="dialog">
                <v-col cols="12">
                  <v-row justify="center">
                    <h2 class="text-center mt-5 mb-10">Победил {{winner}}</h2>
                  </v-row>
                  <v-row justify="center">
                    <v-btn color="secondary" rounded x-large @click="restart" class="mr-5">Заново!</v-btn>
                    <v-btn color="primary" rounded x-large @click="$router.push('/crosszero')">Выйти</v-btn>
                  </v-row>
                </v-col>
              </v-row>
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
  data () {
    return {
      dialog: false,
      winner: '',
      user1: {},
      user2: {},
      cells: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      order: 'x'
    }
  },
  computed: {
    inst () {
      // на серваке решить кто крестик
      const n = Math.floor(Math.random() * 2)
      return n === 1
    }
  },
  watch: {
    cells () {
      if (this.cells[0][0] === 'x' && this.cells[1][1] === 'x' & this.cells[2][2] === 'x') {
        this.endGame('x')
      }
      if (this.cells[0][0] === 0 && this.cells[1][1] === 0 & this.cells[2][2] === 0) {
        this.endGame(0)
      }
      if (this.cells[0][2] === 'x' && this.cells[1][1] === 'x' & this.cells[2][0] === 'x') {
        this.endGame('x')
      }
      if (this.cells[0][2] === 0 && this.cells[1][1] === 0 & this.cells[2][0] === 0) {
        this.endGame(0)
      }
      for (let i = 0; i < this.cells.length; i++) {
        if (this.cells[i][0] === 'x' && this.cells[i][1] === 'x' && this.cells[i][2] === 'x') {
          this.endGame('x')
        }
        if (this.cells[i][0] === 0 && this.cells[i][1] === 0 && this.cells[i][2] === 0) {
          this.endGame(0)
        }
        for (let j = 0; j < this.cells[i].length; j++) {
          if (this.cells[0][j] === 'x' && this.cells[1][j] === 'x' && this.cells[2][j] === 'x') {
            this.endGame('x')
          }
          if (this.cells[0][j] === 0 && this.cells[1][j] === 0 && this.cells[2][j] === 0) {
            this.endGame(0)
          }
        }
      }
      if (!this.cells[0].includes('') && !this.cells[1].includes('') && !this.cells[2].includes('')) {
        this.endGame('null')
      }
    }
  },
  beforeMount () {
    this.user1.name = this.$route.query.player1
    this.user2.name = this.$route.query.player2
    this.changeRole()
  },
  methods: {
    changeRole () {
      const n = Math.floor(Math.random() * 2)
      if (n === 1) {
        this.user1.role = 'x'
        this.user2.role = 0
      } else {
        this.user1.role = 0
        this.user2.role = 'x'
      }
    },
    setVal (i, j) {
      if (this.cells[i][j] === '') {
        if (this.order === 'x') {
          this.$set(this.cells[i], j, 'x')
          this.order = 0
        } else {
          this.$set(this.cells[i], j, 0)
          this.order = 'x'
        }
      }
    },
    endGame (w) {
      if (w === 'null') {
        this.winner = 'Дружба!'
      } else {
        if (this.user1.role === w) {
          this.winner = this.user1.name
        }
        if (this.user2.role === w) {
          this.winner = this.user2.name
        }
      }
      this.dialog = true
    },
    restart () {
      this.changeRole()
      this.dialog = false
      this.cells = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
    }
  }
}
</script>

<style>
.box {
  display: flex;
}
.cells {
  width: 200px;
  height: 200px;
}
</style>
