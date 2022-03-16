var headerBar = document.querySelector("#header");
var timeLeft = document.querySelector(".timeLeft");
var startButton = document.querySelector(".startButton");
var rightHeader = document.querySelector(".rightHeader");
var highScores = document.querySelector("#highscores");
var opener = document.querySelector(".opener");
var quizSequence = document.querySelector(".quizSequence");
var questionText = document.querySelector(".questionText");
var qText = document.querySelector(".qText");
var options = document.querySelector(".options");
var choiceList = document.querySelector(".choiceList");
var enterInitials = document.querySelector(".enterInitials");
var finalScore = document.querySelector("#finalScore");
var submitScore = document.querySelector("#submitScore");
var highscorePage = document.querySelector(".highscorePage");
var goBack = document.querySelector(".goBack");
var clearHighscores = document.querySelector(".clearHighscores");
var initials = document.querySelector("#initials");

var timer;
var timerElement;
var currentQ;
var isCorrect;
var score = 0;
var qIndex = 0;

var questions = [
  {
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language", "History Told Me Lies", "How To Make Latkes", "Have Too Many Landmines"],
    answer: "HyperText Markup Language"
  },
  {
    question: "How awesome is this coding bootcamp?",
    choices: ["Not great...", "This is the worst", "Biggest waste of money", "I'm learning so much!"],
    answer: "I'm learning so much!"
  },
  {
    question: "What does CSS stand for?",
    choices: ["Common Style Sheet", "Cascading Style Sheet", "Colorful Style Sheet", "Computer Style Sheet"],
    answer: "Cascading Style Sheet"
  },
]

function startGame() {
  opener.style.display = "none";
  quizSequence.style.display = "flex";
  timerElement = 75;
  // add for loop to insert question and answer choices into HTML UL
  startTimer()
  addQuestion()
}

function addQuestion() {
  currentQ = questions[qIndex];
  qText.textContent = questions[qIndex].question;

  for (let i = 0; i <= 3; i++) {
    let choiceButton = document.createElement("button");
    let choiceValue = currentQ.choices[i];
    choiceButton.classList.add("choiceButton");

    choiceButton.setAttribute("value", choiceValue);
    choiceButton.textContent = currentQ.choices[i];
    choiceList.appendChild(choiceButton);
    choiceButton.addEventListener("click", checkAnswer);

  }
}

function checkAnswer() {
  var choice;
  answerText = currentQ.answer;
  choiceList.onclick = function(event) {
    choice = event.target.innerHTML;
    console.log(choice);
    console.log(answerText);
    if (choice === answerText) {
      isCorrect = true;
      console.log(isCorrect);
    } else {
      isCorrect = false;
      console.log(isCorrect);
    }
  }
  resetQuiz()
}

function resetQuiz() {
  while (choiceList.firstChild) {
      choiceList.removeChild(choiceList.firstChild);
  }
  while (questionText.firstChild) {
    questionText.removeChild(questionText.firstChild);
  }
}

function startTimer() {
  timer = setInterval(function() {
    timerElement--;
    timeLeft.textContent = timerElement;
    // Tests if time has run out
    if (timerElement === 0) {
      // Clears interval
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function endGame() {
  quizSequence.style.display = "none";
  enterInitials.style.display = "flex";
}

function init() {
  headerBar.style.display = "flex"
  opener.style.display = "flex";
  highscorePage.style.display = "none";
  quizSequence.style.display = "none";
  enterInitials.style.display = "none";
  timeLeft.textContent = 75;
}

function showHighscores() {
  // add logic for initials requirement, no initials pops up an alert, else submits form
    highscorePage.style.display = "flex";
    opener.style.display = "none";
    quizSequence.style.display = "none";
    enterInitials.style.display = "none";
    headerBar.style.display = "none";
}

function showHighscores2() {
  highscorePage.style.display = "flex";
  opener.style.display = "none";
  quizSequence.style.display = "none";
  enterInitials.style.display = "none";
  headerBar.style.display = "none";
}

startButton.addEventListener("click", startGame);
submitScore.addEventListener("click", showHighscores);
goBack.addEventListener("click", init);
highScores.addEventListener("click", showHighscores2);