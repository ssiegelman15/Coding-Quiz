var headerBar = document.querySelector("#header");
var timeLeft = document.querySelector(".timeLeft");
var startButton = document.querySelector(".startButton");
var rightHeader = document.querySelector(".rightHeader");
var highScores = document.querySelector("#highscores");
var opener = document.querySelector(".opener");
var quizSequence = document.querySelector(".quizSequence");
var questionText = document.querySelector(".questionText");
var options = document.querySelector(".options");
var enterInitials = document.querySelector(".enterInitials");
var finalScore = document.querySelector("#finalScore");
var submitScore = document.querySelector("#submitScore");
var highscorePage = document.querySelector(".highscorePage");
var goBack = document.querySelector(".goBack");
var clearHighscores = document.querySelector(".clearHighscores");

var timer;
var timerElement;

var questions = [
  {
    question: "What does HTML stand for?",
    choice1: "HyperText Markup Language",
    choice2: "History Told Me Lies",
    choice3: "How To Make Latkes",
    choice4: "Have Too Many Landmines",
    answer: 1
  },
  {
    question: "How awesome is this coding bootcamp?",
    choice1: "Not great...",
    choice2: "This is the worst",
    choice3: "Biggest waste of money",
    choice4: "I'm learning so much!",
    answer: 4
  }
]

function startGame() {
  opener.style.display = "none";
  quizSequence.style.display = "flex";
  timerElement = 3;
  // add for loop to insert question and answer choices into HTML UL
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
  highscorePage.style.display = "flex";
  opener.style.display = "none";
  quizSequence.style.display = "none";
  enterInitials.style.display = "none";
  headerBar.style.display = "none";
}

startButton.addEventListener("click", startGame);
submitScore.addEventListener("click", showHighscores);
goBack.addEventListener("click", init)
highScores.addEventListener("click",showHighscores)