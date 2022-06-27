let input1 = document.querySelector('#name-input');
input1.addEventListener('input', onInputChange);

let output1 = document.querySelector('#name-output');

function onInputChange(event) {
  input1 = event.currentTarget.value;
  console.log(input1);

  input1 !== ' ' ? (output1.innerText = input1.trim()) : 'Anonymus';
}