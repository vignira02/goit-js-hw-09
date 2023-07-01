
const bodyEl = document.querySelector('body');
const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');

let intervalTimeColor;

const handleClickStart = () => {

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

intervalTimeColor = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
    startButtonEl.removeEventListener('click', handleClickStart)
}


const handleClickStop = () => {
clearInterval(intervalTimeColor);
startButtonEl.addEventListener('click', handleClickStart)
}


startButtonEl.addEventListener('click', handleClickStart);
stopButtonEl.addEventListener('click', handleClickStop);