// Empêche plus d'une participation
function chooseLevel(level) {
    if (localStorage.getItem("quizDone") === "true") {
        window.location.href = "error.html";
        return;
    }

    // Sauvegarde du niveau choisi
    localStorage.setItem("selectedLevel", level);

    // Redirection vers le quiz avec le niveau dans l'URL
    window.location.href = "quiz.html?niveau=" + level;
}
