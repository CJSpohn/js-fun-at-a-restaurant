class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(custName, isMorning) {
    //return (the boolean of isMorning. true means return first statement : false means return second statement)
    return isMorning ? `Good morning, ${custName}!` : `Hello, ${custName}!`
  }

/*

I know ternary operators are seemingly frowned upon by every instructor but I like
that they only use one line when they are very simple like the one above. I included
the if/else statement that my ternary operator is replacing just to make it clear I 
am comfortable using either operation. I'm hoping it's okay since I only did it in this extension.

if (isMorning) {
  return `Good morning, ${custName}!`
} else {
  return `Hello, ${custName}!`
}
*/

  checkForFood(foodItem) {
    var serving = `Yes, we're serving ${foodItem.name} today!`
    var sorryMsg = `Sorry, we aren't serving ${foodItem.name} today.`
    //using the same for in loop logic from addMenuItem in restaurant.js
    for (var menu in this.restaurant.menus) { //iterate through menus
      for (var dish in this.restaurant.menus[menu]) { //iterate through dishes
        if (this.restaurant.menus[menu][dish] === foodItem) { //if we find the requested dish
          return serving //let people know we are serving it
        }
      }
    }
    //if we cannot find it, return our sorry message
    return sorryMsg
  }
}

module.exports = Chef;
