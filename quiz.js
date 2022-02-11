const quizForm = document.querySelector(".quiz-form")
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputE1 = document.querySelector('#output');

const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°"
  ];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score+1;
        }
        index = index+1;
    }
   outputE1.innerText = "Your score is " + score;
}


submitAnswerBtn.addEventListener('click', calculateScore);