const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
const ingredientItems = []

for (let ingredient of ingredients) {
  const element = document.createElement('li')
  element.textContent = ingredient
  element.className = 'item'
  ingredientItems.push(element)
}

ingredientsList.append(...ingredientItems)


