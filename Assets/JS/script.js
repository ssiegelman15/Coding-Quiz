var rootEl = document.querySelector(".rootEl");
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
var finalScore = document.querySelector("#finalScore");
var highscoreList = document.querySelector("#highScoreList");

var timer;
var currentQ;
var isCorrect;
var score = 0;
var qIndex = 0;
var allScores = [];

// Questions and answers variable
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

var timerElement = (questions.length)*8;
timeLeft.textContent = timerElement;

// Function to run when user clicks "start quiz" button
function startGame() {
  opener.style.display = "none";
  quizSequence.style.display = "flex";
  timerElement = (questions.length)*8;
  timeLeft.textContent = timerElement;
  addQuestion()
  startTimer()

}

function addQuestion() {
  quizSequence.classList.remove("correct", "incorrect")
  currentQ = questions[qIndex];
  let qText = document.createElement("h1");
  questionText.appendChild(qText);
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
  choiceList.onclick = function (event) {
    choice = event.target.innerHTML;
    if (choice === answerText) {
      isCorrect = true;
      score++;
      quizSequence.classList.add("correct");
      setTimeout(function () {
        if (qIndex < (questions.length) - 1) {
          resetQuiz()
          qIndex++;
          addQuestion()
        } else {
          resetQuiz()
          qIndex = 0;
          clearInterval(timer);
          endGame()
        }
      }, 1000)
    } else {
      isCorrect = false;
      timerElement -= 4;
      quizSequence.classList.add("incorrect");
      setTimeout(function () {
        if (qIndex < (questions.length) - 1) {
          resetQuiz()
          qIndex++;
          addQuestion()
        } else {
          resetQuiz()
          qIndex = 0;
          clearInterval(timer);
          endGame()
        }
      }, 1000)
    }
  }
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
  timer = setInterval(function () {
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
  finalScore.textContent = score;
  quizSequence.style.display = "none";
  enterInitials.style.display = "flex";
}

function init() {
  score = 0;
  qIndex = 0;
  resetQuiz()
  headerBar.style.display = "flex"
  opener.style.display = "flex";
  highscorePage.style.display = "none";
  quizSequence.style.display = "none";
  enterInitials.style.display = "none";
  timeLeft.textContent = timerElement;
}

function showHighscores() {

  highscorePage.style.display = "flex";
  opener.style.display = "none";
  quizSequence.style.display = "none";
  enterInitials.style.display = "none";
  headerBar.style.display = "none";
  var userInitials = document.getElementById('initials').value.toUpperCase();
  var scoreInitials = [userInitials, score];
  var allScores = JSON.parse(localStorage.getItem("CodeQuiz")) || [];
  allScores.push(scoreInitials);
  localStorage.setItem("CodeQuiz", JSON.stringify(allScores));

  renderScores()


  // add logic for initials requirement, no initials pops up an alert, else submits form


}

function renderScores() {
  var allScores = JSON.parse(localStorage.getItem("CodeQuiz")) || [];
  highscoreList.innerHTML = '';
  for (var i = 0; i < allScores.length; i++) {
    var scoreArray = allScores[i];

    var li = document.createElement("li");
    li.textContent = scoreArray[0] + "    " + scoreArray[1];

    highscoreList.appendChild(li);
  }
}

function showHighscores2() {
  highscorePage.style.display = "flex";
  opener.style.display = "none";
  quizSequence.style.display = "none";
  enterInitials.style.display = "none";
  headerBar.style.display = "none";
  renderScores()
}

function clearStorage() {
  localStorage.clear();
  highscoreList.innerHTML = '';
}

startButton.addEventListener("click", startGame);
submitScore.addEventListener("click", showHighscores);
goBack.addEventListener("click", init);
highScores.addEventListener("click", showHighscores2);
clearHighscores.addEventListener("click", clearStorage)