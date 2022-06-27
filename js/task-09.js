const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#9966CC',
  '#78DBE2',
  '#7FFFD4',
  '#990066',
  '#480607',
  '#B00000',
  '#240935',
];

const refs = {
    body: document.body,
    btnClick: document.querySelector('button'),
}

const INTERVAL_DELAY = 1000;
let intervalId = null;

refs.btnClick.addEventListener('click',  getRandomHexColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function getRandomHexColor() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

