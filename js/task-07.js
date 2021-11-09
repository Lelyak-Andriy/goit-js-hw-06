const controlFontEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

// controlFontEl.oninput = function() {
//   textEl.style.fontSize = controlFontEl.value + 'px';
// };


controlFontEl.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}