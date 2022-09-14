export class Clue {
  constructor (data) {
    this.id = data.id
    this.category = data.category.title
    this.question = data.question
    this.points = data.value
    this.answer = data.answer
    this.answered = false
  }
}