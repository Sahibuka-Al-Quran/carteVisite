console.log("🎯 quiz.js chargé");

// ---- Récupération du niveau depuis l'URL ----
const params = new URLSearchParams(window.location.search);
const level = params.get("niveau");

// Si pas de niveau → erreur
if (!level) {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("question-text").textContent = "Erreur : niveau non défini.";
    });
    throw new Error("Niveau absent");
}

// ---- Vérifie si déjà joué ----
if (localStorage.getItem("quizDone") === "true") {
    window.location.href = "error.html";
}

// ---- Questions ----
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
    question: "Quelle sourate est recommadée de réciter chaque vendredi selon la Sunna ?",
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
    question: "Quel Prophète est surnommé 'Kalim Allah' (celui à qui Allah a parlé) ?",
    options: ["Ibrahim", "Moussa", "Issa", "Dawud", "Yunus"],
    answer: "Moussa"
  },
  {
    question: "Quel prophète est avalé par un grand poisson selon le récit coranique ?",
    options: ["Yunus", "Yusuf", "Ibrahim", "Salih", "Lut"],
    answer: "Yunus"
  },
  {
    question: "Quel est le Prophète qui a parlé le premier la langue arabe ?",
    options: ["Adam", "Ibrahim", "Ismaïl", "Nuh", "Idris"],
    answer: "Ismaïl" 
  },
  {
    question: "Quels sont les deux Prophètes dont les épouses étaient mécréantes ?",
    options: [
      "Nuh et Lut",
      "Ibrahim et Nuh",
      "Lut et Salih",
      "Moussa et Harun",
      "Nuh et Yusuf"
    ],
    answer: "Nuh et Lut"
  },
  {
    question: "Quel est le Prophète qui est décédé mais qui n’est jamais né ?",
    options: [
      "Adam",
      "Issa",
      "Idris",
      "Yunus",
      "Moussa"
    ],
    answer: "Adam"
  },
  {
    question: "Quel est le Prophète dont le père était mécréant ?",
    options: [
      "Issa",
      "Ibrahim",
      "Nuh",
      "Yusuf",
      "Idris"
    ],
    answer: "Ibrahim"
  },
  {
    question: "De quelle tribu faisait partie Abu Bakr As-Siddiq ?",
    options: [
      "Quraysh",
      "Aws",
      "Khazraj",
      "Banu Umayyah",
      "Toutes les réponses"
    ],
    answer: "Quraysh"
  }
];

// ---- Sélection aléatoire d'une question ----
const questions = allQuestions[level];
const randomIndex = Math.floor(Math.random() * questions.length);
const selected = questions[randomIndex];

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

// ---- Vérification réponse ----
function checkAnswer(selectedOption, correct) {
  // Marque la participation comme utilisée
  localStorage.setItem("quizDone", "true");

  if (selectedOption === correct) {
    window.location.href = "success.html";
  } else {
    alert("Mauvaise réponse 😢 Tu ne peux plus rejouer.");
    window.location.href = "error.html";
  }
}
