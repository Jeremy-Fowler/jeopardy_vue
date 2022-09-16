import { AppState } from "../AppState.js"

export class Clue {
  constructor (data) {
    this.id = data.id
    this.category = data.category.title.toUpperCase()
    this.question = data.question.toUpperCase()
    this.points = data.value || 1000
    if (AppState.doubleJeopardy) {
      this.points *= 2
    }
    this.answer = data.answer
    this.answered = false
  }
}