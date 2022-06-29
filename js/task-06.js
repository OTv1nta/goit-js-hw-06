let input1 = document.querySelector('#validation-input');

let inputLength = parseInt(input1.dataset.length);
//Завдання 6. Замість  +inputLength в 9 рядку, краще parseInput(input1.dataset.length) в 3 рядку
// Я правильно понимаю что это опечатка ? parseInput и нужно было вставить  parseInt

const input = document.querySelector('input');
input1.addEventListener('change', e => {
  const text = e.target.value;

  if (text.length === +inputLength) {
    input1.classList.add('valid');
    input1.classList.remove('invalid');
  } else {
    input1.classList.remove('valid');
    input1.classList.add('invalid');
  }
});