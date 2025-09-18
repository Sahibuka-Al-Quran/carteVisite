// 🔍 Récupère le niveau depuis l'URL
const params = new URLSearchParams(window.location.search);
const level = params.get("niveau");

// 🧱 Vérifie qu'elle n’a pas déjà joué
const alreadyPlayed = localStorage.getItem("quizPlayed");
if (!level || alreadyPlayed !== level) {
  window.location.href = "error.html";
}

// 🔄 Charge les questions et lance le quiz
fetch("data/questions.json")
  .then(response => response.json())
  .then(data => {
    const questions = data[level];
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selected = questions[randomIndex];

    displayQuestion(selected);
  });

// 🔽 Affiche la question
function displayQuestion(q) {
  document.getElementById("question-text").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, q.answer);
    optionsDiv.appendChild(btn);
  });
}

// ✅ Vérifie la réponse
function checkAnswer(selected, correct) {
  if (selected === correct) {
    // Bonne réponse → redirection vers succès
    window.location.href = "success.html";
  } else {
    // Mauvaise réponse → elle ne peut plus rejouer
    localStorage.setItem("quizPlayed", "fail");
    alert("Mauvaise réponse 😢 Tu ne peux plus rejouer.");
    window.location.href = "error.html";
  }
}
