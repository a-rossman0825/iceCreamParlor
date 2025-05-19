const menu = [
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

//DOM Variable Declarations
let shoppingCartElm = document.getElementById('cart-items');
console.log(shoppingCartElm);
let cartTotalElm = document.getElementById('cart-total')

//Add Item to Cart (increase quantity)
function addToCart(itemName) {
  console.log('ordering', itemName);
  for (let i=0; i<menu.length; i++) {
    const item = menu[i];
    console.log(i, item);
    if (itemName == item.name) {
      item.quantity++;
    }
  }
  drawToCart();
  findTotal();
};

function drawToCart() {
  let cartContent = '';
  let total = 0;
  for(let i=0; i<menu.length; i++) {
    const item = menu[i];
    if (item.quantity > 0) {
      cartContent += `<p class="cart-content fw-bold medieval-font">${item.quantity}x ${item.name} $${(item.price * item.quantity).toFixed(2)}</p>`;
    }
  }
  shoppingCartElm.innerHTML = cartContent;
};


function findTotal() {
  let totalContent = '';
  let total = 0;
  for(let i=0; i<menu.length; i++) {
    const item = menu[i];
    if (item.quantity > 0) {
      total += (item.price * item.quantity);
      totalContent += `<p class="cart-content fw-bold medieval-font">Total: $${total}</p>`;
    }
  }
  shoppingCartElm.innerHTML = totalContent;
}