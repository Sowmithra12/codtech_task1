const questions = [
  {
    question: "1. What is the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    answer: "Paris"
  },
  {
    question: "2. Which language is used for web apps?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "3. What is the result of 2 + 2?",
    options: ["3", "4", "5", "22"],
    answer: "4"
  },
  {
    question: "4. What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyperlinks Text Mark Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "5. Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "6. Who invented the light bulb?",
    options: ["Nikola Tesla", "Albert Einstein", "Thomas Edison", "Isaac Newton"],
    answer: "Thomas Edison"
  },
  {
    question: "7. CSS stands for?",
    options: ["Creative Style Sheet", "Colorful Style Sheet", "Cascading Style Sheet", "Computer Style Sheet"],
    answer: "Cascading Style Sheet"
  },
  {
    question: "8. What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8"
  },
  {
    question: "9. Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "10. Which of the following is not a programming language?",
    options: ["Python", "HTML", "Java", "C++"],
    answer: "HTML"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionData = questions[currentQuestion];
  document.getElementById("question").textContent = questionData.question;
  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";

  questionData.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(option);
    optionsBox.appendChild(btn);
  });

  document.getElementById("feedback").textContent = "";
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = `❌ Wrong! Correct answer: ${correct}`;
    feedback.style.color = "red";
  }

  const options = document.querySelectorAll(".option");
  options.forEach(btn => btn.disabled = true);

  document.getElementById("score-box").textContent = `Score: ${score} / ${questions.length}`;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = `
      <h2>🎉 Quiz Completed!</h2>
      <p>Your final score: <strong>${score}/${questions.length}</strong></p>
      <p>${score >= 8 ? "🏆 Excellent Work!" : score >= 5 ? "👏 Good Try!" : "💡 Keep Practicing!"}</p>
    `;
  }
}

window.onload = loadQuestion;
