const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const resultHTML = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.classList.add('item');
  li.textContent = ingredient;
  return li;
});
document.querySelector('#ingredients').append(...resultHTML);