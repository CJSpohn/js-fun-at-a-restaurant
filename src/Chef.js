class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(custName, isMorning) {
    //return (the boolean of isMorning. if true return this statement : if false return this statement)
    return isMorning ? `Good morning, ${custName}!` : `Hello, ${custName}!`
  }

/*

I know ternary operators were frowned upon by every instructor but I like
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
    //Here I prefer to use an if/else instead of a ternary because it's so long.
    //if the menu corresponding to the foodItem menu value contains our food item:
    if (this.restaurant.menus[foodItem.type].includes(foodItem)) {
      //let people know we are serving it
      return `Yes, we're serving ${foodItem.name} today!`
    } else {
      //if we cannot find it, return our sorry message
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }
  }
}

module.exports = Chef;
