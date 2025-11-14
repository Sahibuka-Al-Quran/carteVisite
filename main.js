console.log("🎯 main.js chargé");

// --- Fonction appelée depuis index.html ---
function startQuiz() {

    // ⛔ Si l’utilisateur a déjà joué, on bloque
    if (localStorage.getItem("quizDone") === "true") {
        window.location.href = "error.html";
        return;
    }

    // 👉 Sinon on lance le quiz
    window.location.href = "quiz.html?niveau=quiz";
}
