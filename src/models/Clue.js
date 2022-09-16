export class Clue {
  constructor (data) {
    this.id = data.id
    this.category = data.category.title.toUpperCase()
    this.question = data.question.toUpperCase()
    this.points = data.value
    this.answer = data.answer
    this.answered = false
  }
}