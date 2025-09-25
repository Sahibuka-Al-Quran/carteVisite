// 🔍 Récupère le niveau depuis l'URL
// const alreadyPlayed = localStorage.getItem("quizPlayed");
// if (!level || (alreadyPlayed && alreadyPlayed !== level)) {
//   window.location.href = "error.html";
// }
console.log("🎯 quiz.js bien chargé !");

// Récupération du niveau depuis l'URL
const params = new URLSearchParams(window.location.search);
const level = params.get("niveau");

// Questions directement dans le fichier (plus de fetch !)
const allQuestions = {
  debutant: [
    {
      question: "Quelle est la première sourate du Coran ?",
      options: ["Al-Fatiha", "Al-Baqara", "An-Nas"],
      answer: "Al-Fatiha"
    },
    {
      question: "Combien de prières quotidiennes ?",
      options: ["3", "5", "7"],
      answer: "5"
    },
    {
  question: "Combien y a-t-il de piliers de l'islam ?",
  options: ["3", "5", "7"],
  answer: "5"
},
{
  question: "Quel est le mois du jeûne en islam ?",
  options: ["Shawwal", "Ramadan", "Dhul-Hijja"],
  answer: "Ramadan"
},
{
  question: "Quel livre est révélé au Prophète Muhammad ﷺ ?",
  options: ["La Bible", "Le Coran", "La Torah"],
  answer: "Le Coran"
},
{
  question: "Quel est le nom du dernier Prophète de l’islam ?",
  options: ["Issa", "Moussa", "Muhammad"],
  answer: "Muhammad"
}

  ],
  intermediaire: [
    {
      question: "Quel ange a transmis la révélation au Prophète ﷺ ?",
      options: ["Israfil", "Djibril", "Mikail"],
      answer: "Djibril"
    },
    {
  question: "Combien y a-t-il de sourates dans le Coran ?",
  options: ["114", "99", "120"],
  answer: "114"
},
{
  question: "Quel Prophète a parlé dès le berceau ?",
  options: ["Issa", "Yusuf", "Ibrahim"],
  answer: "Issa"
},
{
  question: "Quelle sourate commence par 'Alif Lam Mim' ?",
  options: ["Al-Baqara", "Al-Fatiha", "An-Nas"],
  answer: "Al-Baqara"
},
{
  question: "Quel ange est chargé du souffle de la trompe ?",
  options: ["Mikail", "Israfil", "Djibril"],
  answer: "Israfil"
}

  ],
  avance: [
    {
      question: "Quelle sourate contient le plus de versets ?",
      options: ["Al-Baqara", "Yasin", "An-Nisa"],
      answer: "Al-Baqara"
    },
    {
  question: "Combien de versets contient la sourate Al-Baqara ?",
  options: ["286", "114", "99"],
  answer: "286"
},
{
  question: "Quelle sourate est appelée 'le cœur du Coran' ?",
  options: ["Yasin", "Al-Kahf", "Al-Baqara"],
  answer: "Yasin"
},
{
  question: "Quel compagnon a rassemblé le Coran après la mort du Prophète ﷺ ?",
  options: ["Abu Bakr", "Umar", "Uthman"],
  answer: "Abu Bakr"
},
{
  question: "Quel verset est appelé Ayat al-Kursiy ?",
  options: ["Al-Baqara 255", "Al-Baqara 2", "Yasin 36"],
  answer: "Al-Baqara 255"
}
  ]
};


// Vérifie que le niveau est correct
// (si bloqué en test → commenter la ligne suivante)
if (!level) {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("question-text").textContent = "Erreur : niveau non défini.";
  });
} else {
  const questions = allQuestions[level];
  const randomIndex = Math.floor(Math.random() * questions.length);
  const selected = questions[randomIndex];

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("question-text").textContent = selected.question;

    const optionsDiv = document.getElementById("options");
    selected.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option, selected.answer);
      optionsDiv.appendChild(btn);
    });
  });
}


// Choix aléatoire
const questions = allQuestions[level];
const randomIndex = Math.floor(Math.random() * questions.length);
const selected = questions[randomIndex];

// Affiche la question et les options
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("question-text").textContent = selected.question;

  const optionsDiv = document.getElementById("options");
  selected.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, selected.answer);
    optionsDiv.appendChild(btn);
  });
});

function checkAnswer(selected, correct) {
  if (selected === correct) {
    window.location.href = "success.html";
  } else {
    alert("Mauvaise réponse 😢 Tu ne peux plus rejouer.");
    window.location.href = "error.html";
  }
}
