let input1 = document.querySelector('#validation-input');

let inputLength = input1.dataset.length;

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