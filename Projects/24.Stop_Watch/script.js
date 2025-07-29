let timer = 0;
let seconds = 0;
let isRunning = false;

const hourDisplay = document.getElementById("hourDisplay");
const minDisplay = document.getElementById("minDisplay");
const secDisplay = document.getElementById("secDisplay");

function updateDisplay() {
  const hour = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const sec = String(Math.floor(seconds % 60)).padStart(2, "0");

  hourDisplay.textContent = hour
  minDisplay.textContent = minutes
  secDisplay.textContent = sec
}

function start() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}     

function stop() {
  isRunning = false;
  clearInterval(timer);
}

function reset() {
  isRunning = false;
  clearInterval(timer);
  seconds = 0;
  updateDisplay();
}

