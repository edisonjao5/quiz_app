import { Question } from "../classes/Questions.js";
import { sports, programming, science, history, geography } from "./data.js";

export const sportQuestion = sports.map(
  (question) =>
    new Question(question.question, question.answers, question.correctAnswer)
);

export const programmingQuestion = programming.map(
  (question) =>
    new Question(question.question, question.answers, question.correctAnswer)
);

export const scienceQuestion = science.map(
  (question) =>
    new Question(question.question, question.answers, question.correctAnswer)
);

export const historyQuestion = history.map(
  (question) =>
    new Question(question.question, question.answers, question.correctAnswer)
);

export const geographyQuestion = geography.map(
  (question) =>
    new Question(question.question, question.answers, question.correctAnswer)
);
