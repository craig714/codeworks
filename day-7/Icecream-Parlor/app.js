

const iceCream = [
  { name: 'Cookie Dough', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Vanilla', price: 1, quantity: 0, type: 'scoop' },
  { name: 'Strawberry', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Sprinkles', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Cookie Chunks', price: 0.50, quantity: 0, type: 'topping' }
]





function orderItem(selectedItemName) {
  console.log('ordering', selectedItemName);
  let itemOrdered = null
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    if (item.name == selectedItemName) {
      console.log('found', item);
      itemOrdered = item
    }
  }

  itemOrdered.qty += 1
  drawOrder()

}


function orderVanilla() {
  let Vanilla = null
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    console.log('Vanilla', item);
    if (item.name == "Vanilla") {
      console.log('you found Vanilla', item);
      Vanilla = item
    }
  }

  console.log('Yummy Vanilla', item)
  Vanilla.qty += 1
  drawOrder()
}


function calculateOrderTotal() {
  let orderTotal = 0
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    orderTotal += item.price * item.qty
  }
  console.log('💳', orderTotal);

  return orderTotal
}



