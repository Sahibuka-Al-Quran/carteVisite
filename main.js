function chooseLevel(level) {
  const alreadyPlayed = localStorage.getItem("quizPlayed");
  if (alreadyPlayed) {
    // Elle a déjà joué
    window.location.href = "error.html";
  } else {
    // On sauvegarde le niveau choisi
    localStorage.setItem("quizPlayed", level);
    window.location.href = `quiz.html?niveau=${level}`;
  }
}
