"use strict";

const buttonIncrementElem = document.querySelector("[data-action='increment']");

const buttonDecrementElem = document.querySelector("[data-action='decrement']");

const spanElem = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
  counterValue += 1;

 spanElem.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  spanElem.textContent = counterValue;
};

buttonIncrementElem.addEventListener("click", increment);
buttonDecrementElem.addEventListener("click", decrement);