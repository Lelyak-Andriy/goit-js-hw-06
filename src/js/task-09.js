const body = document.querySelector("body")
const btn = document.querySelector('.change-color');
const bgColorName = document.querySelector('.color');

btn.addEventListener('click', bgChange);

body.style.backgroundColor = getRandomHexColor;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function bgChange() {
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
bgColorName.textContent = body.style.backgroundColor;
};



