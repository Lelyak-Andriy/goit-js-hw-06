"use strict";
// Знаходимо всі елементи .item в документі і виводимо кількість
const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);
// Створюємо масив з "розпилених" категорій, потім мапаємо його і виводимо текстовий контент
// кількість елементів буде довжина дочірніх елементів
// виводимо все в стовбчик? як?
const categoriesArray = [...totalCategories]
.map(categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`)
// ось так!!!
.join("\n");
console.log(categoriesArray);
