"use strict"

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// знаходимо відправну точку
const list = document.querySelector('#ingredients');
// розкладаємо масив на інгредієнти, щоб створити кожному окремий 'li'
const dishIngredients = ingredients.map(ingredient => {
// створюємо елементи списку згідно завдання
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = ingredient;

  return ingredientsEl;
});

console.log(dishIngredients);
// вставляємо всі <li> за одну операцію в список ul.ingredients.
list.append(...dishIngredients)