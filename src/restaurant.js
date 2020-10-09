function createRestaurant(name) {
  return {
    //name property value equal to name given when called
    name: name,
    //menus only need to be empty arrays
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
}

function addMenuItem(restaurant, item) {
  //if the item is NOT included then we push it to the correct array
  if (!restaurant.menus[item.type].includes(item)) {
    return restaurant.menus[item.type].push(item);
  }
}

function removeMenuItem(restaurant, name, menu) {
  //store our return strings to clean up the code
  var itemDeletedString = `No one is eating our ${name} - it has been removed from the ${menu} menu!`
  var notOnMenuString = `Sorry, we don't sell ${name}, try adding a new recipe!`
  //iterate through each menu/item with a nested for..in statement
  for (var dish in restaurant.menus[menu]) { //for each dish on each menu
    if (restaurant.menus[menu][dish].name === name) { //if the names are the same (meaning duplicate):
      //remove the item from the array with .splice(), the index of that item is equal to
      //our dish variable (the nth item iterated through in the second for/in loop). We remove one element.
      restaurant.menus[menu].splice(dish, 1);
      return itemDeletedString; //return our string letting the user know it was deleted.
    }
  }

  //if we make it here we didn't find an item with the given name on any of our menus
  return notOnMenuString
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
