const text1 = document.getElementById("text");

const input1 = document.getElementById("font-size-control");

input1.addEventListener("input", (e) => {
  const size = input1.value;
  // console.log(size);

  text1.style.fontSize = size + "px";
});