const quizData = [
  {
    question: "Apa ibu kota Indonesia?",
    answers: ["Jakarta", "Bandung", "Surabaya", "Medan"],
    correct: 0
  },
  {
    question: "Siapa pencipta JavaScript?",
    answers: ["Brendan Eich", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
    correct: 0
  },
  {
    question: "Tahun berapa HTML pertama kali dirilis?",
    answers: ["1990", "1993", "1995", "1998"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.classList.add("answer-btn");
    btn.onclick = () => selectAnswer(index);
    answersEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  const q = quizData[currentQuestion];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add("correct"); 
    }
    if (i === index && index !== q.correct) {
      btn.classList.add("wrong"); 
    }
  });

  if (index === q.correct) {
    score++;
  }

  nextBtn.classList.remove("hidden");
}


nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.classList.add("hidden");
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");
  resultEl.textContent = `Kuis selesai! Skor kamu: ${score}/${quizData.length}`;
}

loadQuestion();
