var timeLeft = document.querySelector(".timeLeft");
var startButton = document.querySelector(".startButton");
var highScores = document.querySelector("#highScores");
var opener = document.querySelector(".opener");
var quizSequence = document.querySelector(".quizSequence");
var questionText = document.querySelector(".questionText");
var options = document.querySelector(".options");
var enterInitials = document.querySelector(".enterInitials");
var finalScore = document.querySelector("#finalScore");
var submitScore = document.querySelector(".submitScore");
var highscorePage = document.querySelector(".highscorePage");
var goBack = document.querySelector(".goBack");
var clearHighscores = document.querySelector(".clearHighscores");

var isOver = false;
var timer;
var timerElement;

function startGame() {
  opener.classList.add("hidden");
  quizSequence.classList.remove("hidden");
  timerElement = 10;
  startTimer()
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
  quizSequence.classList.add("hidden");
  enterInitials.classList.remove("hidden");
}


startButton.addEventListener("click", startGame);