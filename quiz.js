console.log("🎯 quiz.js chargé");

// ---- Vérifie si déjà joué ----
if (localStorage.getItem("quizDone") === "true") {
    window.location.href = "error.html";
}

// ---- Toutes les questions (sans niveaux) ----
const allQuestions = [
  {
    question: "Quel est le nom arabe de l’exégèse du Coran ?",
    options: ["Tajwid", "Tafsir", "Hadith", "Fiqh", "Sirah"],
    answer: "Tafsir"
  },
  {
    question: "Quel Prophète a été avalé par un grand poisson ?",
    options: ["Yunus", "Yusuf", "Ibrahim", "Salih", "Lut"],
    answer: "Yunus"
  },
  {
    question: "Combien y a-t-il de sourates dans le Coran ?",
    options: ["114", "50", "99", "80", "140"],
    answer: "114"
  },
  {
    question: "Quelle est la première sourate du Coran ?",
    options: ["Al-Fatiha", "Al-Baqara", "An-Nas", "Maryam", "Al-Kahf"],
    answer: "Al-Fatiha"
  },
  {
    question: "Quelle est la dernière sourate du Coran ?",
    options: ["An-Nas", "Al-Falaq", "Al-Ikhlas", "Al-Baqara", "At-Tawbah"],
    answer: "An-Nas"
  },
  {
    question: "Combien de parties (Juz) contient le Coran ?",
    options: ["30", "12", "60", "25", "15"],
    answer: "30"
  },
  {
    question: "Comment s'appelle la langue du Coran ?",
    options: ["L’arabe", "Le français", "Le turc", "L’anglais", "Le persan"],
    answer: "L’arabe"
  },
  {
    question: "Quel Prophète a reçu le Coran ?",
    options: ["Le Prophète Muhammad ﷺ", "Moussa", "Issa", "Ibrahim", "Adam"],
    answer: "Le Prophète Muhammad ﷺ"
  },
  {
    question: "Quel est le mois du jeûne ?",
    options: ["Ramadan", "Shawwal", "Rajab", "Muharram", "Safar"],
    answer: "Ramadan"
  },
  {
    question: "Quel est le premier mot révélé dans le Coran ?",
    options: ["Iqra’ (Lis)", "Sabbih", "Qul", "Allahu", "Alif"],
    answer: "Iqra’ (Lis)"
  },
  {
    question: "Quelle sourate est recommandée le vendredi ?",
    options: ["Al-Kahf", "Al-Mulk", "Ar-Rahman", "Yasin", "Al-Waqi'ah"],
    answer: "Al-Kahf"
  },
  {
    question: "Quel ange a transmis la révélation ?",
    options: ["Djibril", "Mikail", "Israfil", "Azraïl", "Ridwan"],
    answer: "Djibril"
  }
];

// ---- Sélection aléatoire ----
const randomIndex = Math.floor(Math.random() * allQuestions.length);
const selected = allQuestions[randomIndex];

// ---- Affichage ----
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

// ---- Vérification ----
function checkAnswer(selectedOption, correct) {
  localStorage.setItem("quizDone", "true");

  if (selectedOption === correct) {
    window.location.href = "success.html";
  } else {
    alert("Mauvaise réponse 😢 Tu ne peux plus rejouer.");
    window.location.href = "error.html";
  }
}
