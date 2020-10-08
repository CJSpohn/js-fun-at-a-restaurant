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
  for (var menu in restaurant.menus) { //iterate through each menu
    for (var dish in restaurant.menus[menu]) {//iterate through each food item in that menu
      if (restaurant.menus[menu][dish] === item) { //if any dish is deep equal to the item we're passing in
        return; //this is a dupilcate, so breakout before adding
      }
    }
  }
  //If the menu item doesn't already exist, add it to the correct menu based on
  //the type property of the item being passed in
  if (item.type === "breakfast") {
    return restaurant.menus.breakfast.push(item);
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
  //first we want to locate the correct menu to operate on using an if/else statement
  if (menu === "breakfast") {
    //use a for/in loop to iterate through our menu object
    for (var i in restaurant.menus.breakfast) {
      //if the name of any of our current options is deep equal to the name of the item up for deletion
      if (restaurant.menus.breakfast[i].name === name) {
        //we remove that item from the menu array with the Array.splice() fuction at and index of
        //the i in our loop, remove only 1 item after that index, and return our found statement
        restaurant.menus.breakfast.splice(i, 1);
        return itemDeletedString;
      }
      //after searching the entire menu if we have not returned our found string it must not exist, so return
      //the not found string
      return notOnMenuString
    }
    //repeat the above for each menu so that it works for any item and any menu
  } else if (menu === "lunch") {
    for (var i in restaurant.menus.lunch) {
      if (restaurant.menus.lunch[i].name == name) {
        restaurant.menus.lunch.splice(i, 1);
        return itemDeletedString;
      }
    }
    return notOnMenuString
  } else if (menu === "dinner") {
    for (var i in restaurant.menus.dinner) {
      if (restaurant.menus.dinner[i].name === name) {
        restaurant.menus.dinner.splice(i, 1);
        return itemDeletedString;
      }
    }
    return notOnMenuString
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
