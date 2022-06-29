const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onChangeName);

function onChangeName(event) {
  return refs.nameInput.value === ""
    ? (refs.nameOutput.textContent = "Anonymous")
    : (refs.nameOutput.textContent = event.currentTarget.value);
}