const inputEl = document.querySelector("#validation-input");

const totalLenght = inputEl.getAttribute("data-length");
const intTotallenght = parseInt(totalLenght, 10);

inputEl.addEventListener('blur', oninput);

inputEl.oninput = function () {
  if (inputEl.value.length === intTotallenght) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
  
  if (inputEl.value.length !== intTotallenght && inputEl.value.length !== 0) {
    inputEl.classList.add("invalid");
  }
};
