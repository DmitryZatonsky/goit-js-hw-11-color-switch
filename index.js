const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548'
];

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalId = null;

btnStartRef.addEventListener('click', onColorChange);
btnStopRef.addEventListener('click', onStopColorChange);

function onColorChange() {
  btnStartRef.disabled = true;
  intervalId = setInterval(() => {
    bodyRef.style.background = colors [randomIntegerFromInterval(0, colors.length - 1)]
  }, 1000)
};

function onStopColorChange() {
  btnStartRef.disabled = false;
  clearInterval(intervalId);
};
