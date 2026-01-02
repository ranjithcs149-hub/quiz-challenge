let score = 0;
let timeLeft = 30;
let currentQuestion = 0;
let isGameActive = false;
let timer;


const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mark Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling?",
    options: ["HTML", "CSS", "Java"],
    answer: 1
  },
  {
    question: "Which is used for logic?",
    options: ["CSS", "HTML", "JavaScript"],
    answer: 2
  }
];


function startGame() {
  score = 0;
  timeLeft = 30;
  currentQuestion = 0;
  isGameActive = true;

  document.getElementById("startScreen").style.display = "none";
  document.getElementById("gameScreen").style.display = "block";

  document.getElementById("score").innerText = score;
  document.getElementById("time").innerText = timeLeft;

  showQuestion();
  startTimer();
}


function showQuestion() {
  let q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  for (let i = 0; i < q.options.length; i++) {
    let btn = document.createElement("button");
    btn.innerText = q.options[i];
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  }
}


function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score += 10;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endGame();
  }

  document.getElementById("score").innerText = score;
}


function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}


function endGame() {
  clearInterval(timer);
  isGameActive = false;

  document.getElementById("gameScreen").style.display = "none";
  document.getElementById("gameOverScreen").style.display = "block";
  document.getElementById("finalScore").innerText = score;
}


function restartGame() {
  document.getElementById("gameOverScreen").style.display = "none";
  document.getElementById("startScreen").style.display = "block";
}


document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("restartBtn").addEventListener("click", restartGame);

