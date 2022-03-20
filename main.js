import {
  sportQuestion,
  programmingQuestion,
  scienceQuestion,
  historyQuestion,
  geographyQuestion,
} from "./data/questions.js";
import { Quiz } from "./classes/Quiz.js";
import { Interface } from "./classes/Interface.js";

//Making the initial process of the game
const main = document.querySelector("main");
const start_btn = document.getElementById("start_btn");
const instructions = document.querySelector(".instructions");
const quit_btn = document.querySelector(".quit_btn");
const continue_btn = document.getElementById("continue_btn");
const categories = document.querySelector(".categories");
const exit_btn = document.querySelector(".exit_btn");
const question_container = document.querySelector(".question_container");
const sports_btn = document.getElementById("sports");
const programming_btn = document.getElementById("programming");
const science_btn = document.getElementById("science");
const history_btn = document.getElementById("history");
const geography_btn = document.getElementById("geography");
const timer = document.getElementById("timer");

start_btn.onclick = () => {
  instructions.classList.add("show");
};

quit_btn.onclick = () => {
  instructions.classList.remove("show");
};

continue_btn.onclick = () => {
  categories.classList.add("show");
};

exit_btn.onclick = () => {
  categories.classList.remove("show");
  instructions.classList.remove("show");
};

sports_btn.onclick = () => {
  categories.classList.remove("show");
  instructions.classList.remove("show");
  main.classList.add("show");
  question_container.classList.add("show");
  mainInterface(sportQuestion);
  startTimer(timer);
};

programming_btn.onclick = () => {
  categories.classList.remove("show");
  instructions.classList.remove("show");
  main.classList.add("show");
  question_container.classList.add("show");
  mainInterface(programmingQuestion);
  startTimer(timer);
};

science_btn.onclick = () => {
  categories.classList.remove("show");
  instructions.classList.remove("show");
  main.classList.add("show");
  question_container.classList.add("show");
  mainInterface(scienceQuestion);
  startTimer(timer);
};

history_btn.onclick = () => {
  categories.classList.remove("show");
  instructions.classList.remove("show");
  main.classList.add("show");
  question_container.classList.add("show");
  mainInterface(historyQuestion);
  startTimer(timer);
};

geography_btn.onclick = () => {
  categories.classList.remove("show");
  instructions.classList.remove("show");
  main.classList.add("show");
  question_container.classList.add("show");
  mainInterface(geographyQuestion);
  startTimer(timer);
};

/**
 *
 * @param {Quiz} quiz this is the quiz that will be rendered
 * @param {Interface} interfaceQuestion this is the object that will be used to render the questions
 */
const render = (quiz, interfaceQuestion) => {
  if (quiz.quizOver()) {
    interfaceQuestion.showScore(quiz.score);
  } else {
    interfaceQuestion.showQuestion(quiz.questionIndexValue().question);
    interfaceQuestion.showOptions(
      quiz.questionIndexValue().answers,
      (choice) => {
        quiz.guessQuestion(choice);
        render(quiz, interfaceQuestion);
      }
    );
    interfaceQuestion.showProgress(quiz.questionIndex, quiz.questions.length);
  }
};

function mainInterface(questionClass) {
  const quiz = new Quiz(questionClass);
  const interfaceQuestion = new Interface();

  render(quiz, interfaceQuestion);
}

let time;
let timerValue = 60;
function startTimer(timer) {
  time = setInterval(function () {
    timerValue--;
    timer.innerHTML = `<p>Time: ${timerValue}</p>`;
    if (timerValue === 0) {
      clearInterval(time);
    }
  }, 1000);
}
