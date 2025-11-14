console.log("🎯 quiz.js chargé");

// ---- Vérifie si déjà joué ----
if (localStorage.getItem("quizDone") === "true") {
    window.location.href = "error.html";
}

// ---- Toutes les questions (sans niveaux) ----
const allQuestions = [
  {
    question: "Quel Prophète est mentionné le plus dans le Coran ?",
    options: ["Ibrahim", "Moussa", "Issa", "Yusuf", "Nuh"],
    answer: "Moussa"
  },
  {
    question: "Quelle sourate a été révélée en premier ?",
    options: ["Al-Alaq", "Al-Qalam", "Al-Fajr", "Al-Muddathir", "Ad-Duha"],
    answer: "Al-Alaq"
  },
  {
    question: "Quelle sourate est la plus courte du Coran ?",
    options: ["Al-Ikhlas", "Al-Kawthar", "Al-Asr", "An-Nasr", "Al-Falaq"],
    answer: "Al-Kawthar"
  },
  {
    question: "Quelle sourate commence par le verset 'Alif Lam Mim' ?",
    options: ["Al-Baqara", "Al-Imran", "Ar-Rum", "Al-Ankabut", "Toutes les précédentes"],
    answer: "Toutes les précédentes"
  },
  {
    question: "Quelle sourate raconte l’histoire de Dhul-Qarnayn ?",
    options: ["Yusuf", "Hud", "Al-Kahf", "Maryam", "Al-Qasas"],
    answer: "Al-Kahf"
  },
  {
    question: "Combien de Prophètes sont mentionnés dans le Coran ?",
    options: ["12", "25", "40", "50", "15"],
    answer: "25"
  },
  {
    question: "Quelle sourate parle de la calomnie contre Aïcha (radiAllahu ‘anha) ?",
    options: ["An-Nur", "Al-Munafiqun", "Al-Baqara", "Al-Ahzab", "Al-Mumtahanah"],
    answer: "An-Nur"
  },
  {
    question: "Quelle sourate est recommandée de réciter le vendredi ?",
    options: ["Al-Waqi'ah", "Al-Kahf", "Ar-Rahman", "Al-Mulk", "Saba"],
    answer: "Al-Kahf"
  },
  {
    question: "Quel est le nom arabe de l’exégèse du Coran ?",
    options: ["Tajwid", "Tafsir", "Hadith", "Fiqh", "Sirah"],
    answer: "Tafsir"
  },
  {
    question: "Quel Juz contient la sourate Yasin ?",
    options: ["22", "23", "25", "28", "30"],
    answer: "23"
  },
  {
    question: "Quelle sourate contient deux Basmala ?",
    options: ["An-Naml", "Al-Baqara", "At-Tawbah", "Yasin", "Al-Fath"],
    answer: "An-Naml"
  },
  {
    question: "Quelle sourate ne commence pas par la Basmala ?",
    options: ["At-Tawbah", "Yasin", "Al-Qalam", "Al-Fajr", "Al-Mulk"],
    answer: "At-Tawbah"
  },
  {
    question: "Quel Prophète est surnommé 'Kalim Allah' ?",
    options: ["Ibrahim", "Moussa", "Issa", "Dawud", "Yunus"],
    answer: "Moussa"
  },
  {
    question: "Quel Prophète a été avalé par un grand poisson ?",
    options: ["Yunus", "Yusuf", "Ibrahim", "Salih", "Lut"],
    answer: "Yunus"
  },
  {
    question: "Quel Prophète a parlé le premier la langue arabe ?",
    options: ["Adam", "Ibrahim", "Ismaïl", "Nuh", "Idris"],
    answer: "Ismaïl"
  },
  {
    question: "Quels Prophètes avaient des épouses mécréantes ?",
    options: ["Nuh et Lut", "Ibrahim et Nuh", "Lut et Salih", "Moussa et Harun", "Nuh et Yusuf"],
    answer: "Nuh et Lut"
  },
  {
    question: "Quel Prophète est décédé mais n'est jamais né ?",
    options: ["Adam", "Issa", "Idris", "Yunus", "Moussa"],
    answer: "Adam"
  },
  {
    question: "Quel Prophète avait un père mécréant ?",
    options: ["Issa", "Ibrahim", "Nuh", "Yusuf", "Idris"],
    answer: "Ibrahim"
  },
  {
    question: "De quelle tribu faisait partie Abu Bakr As-Siddiq ?",
    options: ["Quraysh", "Aws", "Khazraj", "Banu Umayyah", "Toutes les réponses"],
    answer: "Quraysh"
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
