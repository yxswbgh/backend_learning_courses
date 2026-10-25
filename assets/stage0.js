const quizzes = [...document.querySelectorAll("[data-quiz]")];
const scoreLine = document.querySelector("#score-line");
const answered = new Set();

function updateScore() {
  let correct = 0;

  quizzes.forEach((quiz) => {
    if (quiz.dataset.answered === "true" && quiz.dataset.result === "correct") {
      correct += 1;
    }
  });

  if (!scoreLine) return;

  if (answered.size === 0) {
    scoreLine.textContent = "已作答 0 / 3 · 正确 0";
    return;
  }

  scoreLine.textContent = `已作答 ${answered.size} / ${quizzes.length} · 正确 ${correct}`;
}

quizzes.forEach((quiz) => {
  const options = [...quiz.querySelectorAll(".option")];
  const feedback = quiz.querySelector(".feedback");
  const correct = quiz.dataset.correct;

  options.forEach((option) => {
    option.addEventListener("click", () => {
      if (answered.has(quiz.id)) return;

      answered.add(quiz.id);
      quiz.dataset.answered = "true";
      quiz.classList.add("is-answered");

      const selected = option.dataset.choice;
      const isCorrect = selected === correct;
      quiz.dataset.result = isCorrect ? "correct" : "incorrect";

      options.forEach((item) => {
        item.disabled = true;
        if (item.dataset.choice === correct) item.classList.add("is-correct");
      });

      if (!isCorrect) option.classList.add("is-wrong");

      if (feedback) {
        feedback.classList.add("is-visible");
        feedback.innerHTML = isCorrect
          ? `<strong>对了。</strong>${feedback.dataset.correctText}`
          : `<strong>还差一步。</strong>${feedback.dataset.incorrectText}`;
      }

      updateScore();
    });
  });
});

updateScore();
