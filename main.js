import { sportQuestion, programmingQuestion, scienceQuestion, historyQuestion,geographyQuestion } from './data/questions.js';
import { Quiz } from './classes/Quiz.js';

//Making the initial process of the game
const main = document.querySelector('main');
const start_btn = document.getElementById('start_btn');
const instructions = document.querySelector('.instructions');
const quit_btn = document.querySelector('.quit_btn');
const continue_btn = document.getElementById('continue_btn');
const categories  = document.querySelector('.categories');
const exit_btn = document.querySelector('.exit_btn');
const question_container = document.querySelector('.question_container');
const sports_btn = document.getElementById('sports');

start_btn.onclick = () => {
    instructions.classList.add('show');
}

quit_btn.onclick = () => {
    instructions.classList.remove('show');
}

continue_btn.onclick = () => {
    categories.classList.add('show');
}

exit_btn.onclick = () => {
    categories.classList.remove('show');
    instructions.classList.remove('show');
}

sports_btn.onclick = () => {
    categories.classList.remove('show');
    instructions.classList.remove('show');
    main.classList.add('show');
    question_container.classList.add('show');
}
