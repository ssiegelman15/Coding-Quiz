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

function startGame() {
  opener.classList.add("hidden");
  quizSequence.classList.remove("hidden");
}





startButton.addEventListener("click", startGame);