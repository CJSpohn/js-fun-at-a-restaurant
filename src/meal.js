function nameMenuItem(name) {
  return  `Delicious ${name}`;
}

function createMenuItem(item, price, meal) {
  return {
    name: item,
    price: price,
    type: meal
  };
}

function addIngredients(ingredient, ingredientArray) {
  //if we cannot find the index of the ingredient in our array it must not exist, so add it.
  if (ingredientArray.indexOf(ingredient) === -1) {
    ingredientArray.push(ingredient)
  }

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
