let valCounter = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

inkrBtn.addEventListener('click', event => {
  valCounter += 1;
  counterValue.innerText = valCounter;
});

dekrBtn.addEventListener('click', event => {
  valCounter -= 1;
  counterValue.innerText = valCounter;
});