
const controlFontEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");


controlFontEl.addEventListener("input", handleInputRange);
textEl.style.fontSize = controlFontEl.value + 'px';

function handleInputRange() {
  
  textEl.style.fontSize = controlFontEl.value + "px";
}