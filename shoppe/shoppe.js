const items = [
  {
    name: 'barbarian',
    price: 3.5,
    quantity: 0,
    type: 'scoop',
  },
  {
    name: 'cleric',
    price: 3,
    quantity: 0,
    type: 'scoop',
  },
  {
    name: 'bard',
    price: 6,
    quantity: 0,
    type: 'scoop',
  },
  {
    name: 'rogue',
    price: 4,
    quantity: 0,
    type: 'scoop',
  },
  {
    name: 'sprinkles',
    price: .6,
    quantity: 0,
    type: 'topping',
  },
  {
    name: 'red hots',
    price: .99,
    quantity: 0,
    type: 'topping',
  },
  {
    name: 'syrup',
    price: 2,
    quantity: 0,
    type: 'topping',
  },
  {
    name: 'bowl',
    price: .25,
    quantity: 0,
    type: 'container',
  },
  {
    name: 'waffle cone',
    price: 3.5,
    quantity: 0,
    type: 'container',
  },
  {
    name: 'sprinkle bowl',
    price: 6,
    quantity: 0,
    type: 'container',
  },
];

const shoppingCart = document.getElementById('cart-items');

function addToCart(itemName) {
  console.log('addedItem', itemName);

}