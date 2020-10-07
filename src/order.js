function takeOrder(newOrder, currentOrders) {
  //only push if currentOrders has 2 or fewer elements
  if (currentOrders.length < 3) {
    return currentOrders.push(newOrder);
  }
}

function refundOrder(orderNumber, currentOrders) {
  //select element - 1 because of 0 index, the next value 1 deletes 1 element from the starting position
  return currentOrders.splice(orderNumber - 1, 1);
}

function listItems(currentOrders) {
  var ordersArr = [];
  //for each order we store the item in an array
  for (var i = 0; i < currentOrders.length; i++) {
    ordersArr.push(currentOrders[i].item);
  }
  //return the array, joined, with the proper grammatical spacing
  return ordersArr.join(", ");
}

function searchOrder(currentOrders, orderToSearch) {
  //search each order to see if the item is deep equal to the order being searched
  for (var i = 0; i < currentOrders.length; i++) {
    if (currentOrders[i].item === orderToSearch) {
      //once we find it return true
      return true;
    }
  }
  //if we don't find it after the entire loop it must not be there, return false
  return false;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
