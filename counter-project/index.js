const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLable");

let count = 0;

increaseBtn.onclick = function () {
  if (count < 100) {
    count++;
    countLabel.textContent = count;
    updateProgressBar();
    countLabel.classList.add("increase");
    setTimeout(() => countLabel.classList.remove("increase"), 200);

    // countLabel.classList.add('grow');
    // setTimeout(() => countLabel.classList.remove('grow'), 150);
  }
};

decreaseBtn.onclick = function () {
  if (count > 0) {
    count--;
    countLabel.textContent = count;
    updateProgressBar();
    countLabel.classList.add("decrease");
    setTimeout(() => countLabel.classList.remove("decrease"), 200);
  }
};
resetBtn.onclick = function () {
  count = 0;
  updateProgressBar();
  countLabel.textContent = count;
};

function updateProgressBar() {
  let percentage = (count / 100) * 100; // Calculate percentage based on count
  progressBar.style.width = percentage + "%"; // Update the width of the progress bar
}
