export class Question {
  /**
   *
   * @param {string} question this is the question that will be displayed
   * @param {string[]} answers this are the answers to choice
   * @param {string} correctAnswer this is the right answer
   */
  constructor(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  /**
   *
   * @param {string} choice that is the choice that the user selected
   * @returns {boolean} returns true just if the answer is correct
   */
  rightAnswer(choice) {
    return choice === this.correctAnswer;
  }
}
