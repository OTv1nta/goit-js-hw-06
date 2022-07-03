const refs = {
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.create.addEventListener("click", onGetAmount);
refs.destroy.addEventListener("click", onDestroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onGetAmount() {
  const amount = document.querySelector("#controls input").value;
  onCreateBoxes(amount);
}

function onCreateBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
      let size = 30 + i * 10;
      const markup = `<div class="square" style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px;"></div>`;
      refs.boxes.insertAdjacentHTML("beforeend", markup);
      document.querySelector("#controls input").value = 0;
    }
}

function onDestroyBoxes() {
  document.querySelector("#controls input").value = 0;
  return (refs.boxes.innerHTML = "");
}