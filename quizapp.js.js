const questions = [
   {
    question: "what is the capital of India? ",
    answers: ["Mumbai", "Delhi", "Gujarat", "Islamabad"],
    correct: "Delhi"
   },

   {
    question: "What is currency of India? ",
    answers: ["Taka", "Rupee", "Dollars", "Sterling"],
    correct: "Rupee"
    
   },

   {
    question: "What does CSS stand for?",
    answers: ["Color Style Sheet", "Cascading Style Sheet", "Cool Style Sheet", "Creative Style Syntax"],
    correct: "Cascading Style Sheet"
   }

];

let currentQuestionIndex = 0;
let score = 0;


const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score-display");
const restartBtn = document.getElementById("restart-button");

function showQuestion() {
    resetState();
    const current = questions[currentQuestionIndex];
    questionEl.textContent = current.question;


    current.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add('answer-button');
        button.addEventListener('click', () =>
            selectAnswer(button, current.correct) 
        )
        answerButtonsEl.appendChild(button);
    });
        
    }


    function resetState() {
        nextButton.style.display = "none";
        answerButtonsEl.innerHTML = "";
    }

    function selectAnswer(selectedBtn, correctAnswer) {
        const selected = selectedBtn.textContent;
        if (selected === correctAnswer) {
            selectedBtn.style.backgroundColor = "green";
            score++;

        } else {
            selectedBtn.style.backgroundColor = "red";
        }

           // Disable all buttons
  Array.from(answerButtonsEl.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.style.backgroundColor = "green";
    }
  });

  nextButton.style.display = "inline-block";

    }


nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.style.display = "none";
  answerButtonsEl.style.display = "none";
  nextButton.style.display = "none";
  scoreDisplay.style.display = "block";
  scoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;
  restartBtn.style.display = "inline-block"; //show the restart button
}


// Start the quiz
showQuestion();   

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.style.display = "none";
  restartBtn.style.display = "none";
  questionEl.style.display = "block";
  answerButtonsEl.style.display = "block";
  nextButton.style.display = "none";
  showQuestion();
} )






    
