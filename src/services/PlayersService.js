import { AppState } from "../AppState.js"
import Pop from "../utils/Pop.js"
import { cluesService } from "./CluesService.js"

class PlayersService {
  answer(bool, name) {
    let player = AppState.players.find(p => p.name == name)
    let clue = AppState.clue
    if (player.guessed) {
      Pop.toast('Too bad, bud')
      return
    }
    if (bool) {
      player.points += clue.points
      clue.answered ? player.guessed = true : AppState.players.forEach(p => p.guessed = true)
    }
    else {
      player.points -= clue.points
      player.guessed = true
    }
  }
}

export const playersService = new PlayersService()