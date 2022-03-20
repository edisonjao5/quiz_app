export class Interface {
  constructor() {}

  /**
   *
   * @param {string} text that is the Question that will be rendered
   */
  showQuestion(text) {
    const titleQuestion = document.querySelector(".questionSport");
    titleQuestion.innerText = text;
  }

  /**
   *
   * @param {string[]} options that are the options that will be rendered
   * @param {function} callback that is the function that will be called when the user selects an option
   */
  showOptions(options, callback) {
    const answerOptions = document.querySelector(".options");
    answerOptions.innerHTML = "";

    for (let i = 0; i < options.length; i++) {
      const buttonOption = document.createElement("button");
      buttonOption.innerText = options[i];
      buttonOption.className = "option_btn";
      buttonOption.addEventListener("click", () => callback(options[i]));

      answerOptions.append(buttonOption);
    }
  }

  /**
   *
   * @param {number} score that is the score that will be rendered
   */
  showScore(score) {
    const restart_btn = document.getElementById("restart_btn");
    const save_btn = document.getElementById("save_btn");
    const showScore_btn = document.getElementById("showScore_btn");
    const quizScore = `<h2>Your score is: ${score}</h2>
    <h3>Thanks for playing!</h3>
    <button class="option_btn" id="restart_btn">Restart</button>
    <button class="option_btn" id="save_btn">Save</button>
    <button class="option_btn" id="showScore_btn">Show High Scores</button>`;
    const scoreContainer = document.querySelector(".question_container");
    scoreContainer.innerHTML = quizScore;
  }

  /**
   *
   * @param {number} currentQuestionIndex this is the index of the current question
   * @param {number} totalQuestions this is the total of questions
   */
  showProgress(currentQuestionIndex, totalQuestions) {
    document.getElementById("progress").innerText = `Question ${
      currentQuestionIndex + 1
    } of ${totalQuestions}`;
  }
}
