function chooseLevel(level) {
  // TEMPORAIREMENT DÉSACTIVÉ POUR TESTER
  // const alreadyPlayed = localStorage.getItem("quizPlayed");
  // if (alreadyPlayed) {
  //   window.location.href = "error.html";
  // } else {
    localStorage.setItem("quizPlayed", level);
    window.location.href = `quiz.html?niveau=${level}`;
  // }
}
