import { Question } from "./Questions.js";

export class Quiz {
  questionIndex = 0;
  score = 0;
  /**
   *
   * @param {Question[]} questions this is the array of questions
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question} returns the current question
   */
  questionIndexValue() {
    return this.questions[this.questionIndex];
  }

  /**
   *
   * @param {string} choice that is the choice that the user selected
   */
  guessQuestion(choice) {
    console.log(choice);
    if (this.questionIndexValue().rightAnswer(choice)) {
      this.score++;
    }
    this.questionIndex++;
  }

  /**
   *
   * @returns {boolean} returns true if the quiz is over
   */
  quizOver() {
    return this.questionIndex === this.questions.length;
  }
}
