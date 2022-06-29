const textPol = document.getElementById("text");

const inputPol = document.getElementById("font-size-control");

inputPol.addEventListener("input", (e) => {
  const size = inputPol.value;
  // console.log(size);

  textPol.style.fontSize = size + "px";
});