const acceptanceItems = [...document.querySelectorAll("[data-acceptance]")];
const progressLine = document.querySelector("#challenge-progress-line");
const resetButton = document.querySelector("#reset-challenge-progress");
const storageKey = "stage1-filemix-acceptance-v1";

function readProgress() {
  try {
    return new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
  } catch {
    return new Set();
  }
}

function saveProgress() {
  const checked = acceptanceItems
    .filter((item) => item.checked)
    .map((item) => item.dataset.acceptance);

  try {
    localStorage.setItem(storageKey, JSON.stringify(checked));
  } catch {
    // The checklist still works for this page view when storage is unavailable.
  }
}

function updateProgress() {
  const checked = acceptanceItems.filter((item) => item.checked).length;

  if (progressLine) {
    progressLine.textContent = `验收项 ${checked} / ${acceptanceItems.length}`;
  }
}

const saved = readProgress();

acceptanceItems.forEach((item) => {
  item.checked = saved.has(item.dataset.acceptance);
  item.addEventListener("change", () => {
    saveProgress();
    updateProgress();
  });
});

if (resetButton) {
  resetButton.addEventListener("click", () => {
    acceptanceItems.forEach((item) => {
      item.checked = false;
    });
    saveProgress();
    updateProgress();
  });
}

updateProgress();
