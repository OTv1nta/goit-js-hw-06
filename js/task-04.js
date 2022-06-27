let val1 = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

inkrBtn.addEventListener('click', event => {
  val1 += 1;
  counterValue.innerText = val1;
});

dekrBtn.addEventListener('click', event => {
  val1 -= 1;
  counterValue.innerText = val1;
});