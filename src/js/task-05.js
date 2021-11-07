const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

inputEl.oninput = function () {
    if (inputEl.value === '') {
       nameOutputEl.innerHTML = 'Anonymous';
    } else{
    nameOutputEl.innerHTML = inputEl.value;
    }
}