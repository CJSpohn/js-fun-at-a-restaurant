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
  //This block will see if our item already exists and break out before adding a duplicate item.
  //Use a for..in loop to iterate through our objects.
  for (var menu in restaurant.menus) { //iterate through each menu
    for (var dish in restaurant.menus[menu]) {//iterate through each food item in that menu
      if (restaurant.menus[menu][dish] === item) { //If any dish is deep equal to the item we're passing in then return
        return; //If we get here we found a dupilcate, so breakout before adding below.
      }
    }
  }
  //If the menu item doesn't already exist, add it to the correct menu based on
  //the type property of the item being passed in.
  if (item.type === "breakfast") { //a simlpe if/else statement can tackle this
    return restaurant.menus.breakfast.push(item); //return the item being pushed to correct menu
  } else if (item.type === "lunch") {
    return restaurant.menus.lunch.push(item);
  } else if (item.type === "dinner") {
    return restaurant.menus.dinner.push(item);
  }
}

function removeMenuItem(restaurant, name, menu) {
  //store our return strings to clean up the code
  var itemDeletedString = `No one is eating our ${name} - it has been removed from the ${menu} menu!`
  var notOnMenuString = `Sorry, we don't sell ${name}, try adding a new recipe!`
  //iterate through each menu/item with a nested for..in statement
  for (var menu in restaurant.menus) { //for each menu
    for (var dish in restaurant.menus[menu]) { //for each dish on each menu
      if (restaurant.menus[menu][dish].name === name) { //if the names are the same (meaning duplicate):
        //remove the item from the array with .splice(), the index of that item is equal to
        //our dish variable (the nth item iterated through in the second for/in loop). We remove one element.
        restaurant.menus[menu].splice(dish, 1);
        return itemDeletedString; //return our string letting the user know it was deleted.
      }
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
