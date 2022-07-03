const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onChangeName);

function onChangeName(event) {
  refs.nameOutput.textContent = refs.nameInput.value === "" ? "Anonymous" : event.currentTarget.value
}