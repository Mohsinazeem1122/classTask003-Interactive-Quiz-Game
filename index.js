const question = document.getElementById("question");
const answerBtn = document.querySelectorAll(".ans-btn");
const score = document.getElementById("score");
const nextButton = document.getElementById("next-button");
const playAgainButton = document.getElementById("play-again-button");

const questions = [
  {
    question: "What is your name?",
    choices: ["mohsin", "ali", "zaid", "ahmad"],
    answer: "mohsin",
  },
  {
    question: "What is 2 + 2",
    choices: [5, 6, 4, 10],
    answer: 4,
  },
  {
    question: "What comes after A?",
    choices: ["B", "C", "D", "E"],
    answer: "B",
  },
];

question.innerHTML = questions[0].question;
