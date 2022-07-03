const inputEl = document.querySelector("#validation-input");

function onCheckNumbersOfInput(event) {
  if (inputEl.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}

inputEl.addEventListener("blur", onCheckNumbersOfInput);