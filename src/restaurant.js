function createRestaurant(name) {
  return {
    //name property equal to given name
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
  //this block will see if our item already exists and break out before adding a duplicate
  //use a for..in loop to iterate through out objects
  for (var menu in restaurant.menus) { //iterate through each menu
    for (var dish in restaurant.menus[menu]) {//iterate through each food item in that menu
      if (restaurant.menus[menu][dish] === item) { //if any dish is deep equal to the item we're passing in
        return; //this is a dupilcate, so breakout before adding
      }
    }
  }
  //If the menu item doesn't already exist, add it to the correct menu based on
  //the type property of the item being passed in
  if (item.type === "breakfast") { //a simlpe if/else statement can tackle this
    return restaurant.menus.breakfast.push(item); //return the item being pushed to correct menu
  } else if (item.type === "lunch") {
    return restaurant.menus.lunch.push(item);
  } else if (item.type === "dinner") {
    return restaurant.menus.dinner.push(item);
  }
}

function removeMenuItem(restaurant, name, menu) {
  //store our returns to clean up the code
  var itemDeletedString = `No one is eating our ${name} - it has been removed from the ${menu} menu!`
  var notOnMenuString = `Sorry, we don't sell ${name}, try adding a new recipe!`
  //iterate through each menu with a for..in statement
  for (var menu in restaurant.menus) { //each menu
    for (var dish in restaurant.menus[menu]) { //each dish on that menu
      if (restaurant.menus[menu][dish].name === name) { //if the names are the same:
        //remove the item from the array with .splice() indexed at the dish that matches, removing 1 element
        restaurant.menus[menu].splice(dish, 1);
        return itemDeletedString; //return our string letting the user know it was deleted.
      }
    }
  }
  //if we make it here we didn't find and item with the given name on any of our menus
  return notOnMenuString
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
