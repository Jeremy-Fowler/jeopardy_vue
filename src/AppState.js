import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},

  /**@type {import('./models/Clue.js').Clue[]} */
  clues: [],

  /**@type {import('./models/Clue.js').Clue} */
  clue: null,

  players: [
    {
      name: 'Mick',
      points: 0,
      guessed: false
    },
    {
      name: 'Jerms',
      points: 0,
      guessed: false
    },
    {
      name: 'Tyler',
      points: 0,
      guessed: false
    },
    {
      name: 'Sam',
      points: 0,
      guessed: false
    },
  ],

  doubleJeopardy: false
})
