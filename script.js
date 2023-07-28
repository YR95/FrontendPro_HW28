let kitchenProducts = [
  {
    type: 'grater',
    price: 10
  },
  {
    type: 'pastry-bag',
    price: 25
  },
  {
    type: 'scale',
    price: 5
  },
  {
    type: 'whisk',
    price: 15
  }
];

let devicesProducts = [
  {
    type: 'desktop',
    price: [100, 1000]
  },
  {
    type: 'laptop',
    price: [50, 1500]
  },
  {
    type: 'smartphone',
    price: [80, 2000]
  },
  {
    type: 'tablet',
    price: [20, 1300]
  }
];

let cosmeticsProducts = [
  {
    type: 'blush',
    price: 100
  },
  {
    type: 'eyeshadow',
    price: 50
  },
  {
    type: 'lipstick',
    price: 80
  },
  {
    type: 'nail-polish',
    price: 200
  },
  {
    type: 'perfume',
    price: 300,
  }
];

function Product(category, type, price) {
  this.category = category;
  this.type = type;
  this.price = price;
  this.renderProduct = function () {
    return `<tr>
	<td><img src="${category}/${type}.svg" width="50" height="50"></td>
	<td>${type}</td>
	<td>${price}$</td>
</tr>`

  }
}


kitechen = kitchenProducts.map(function (value, array) {
  return new Product(
      Object.keys({kitchenProducts})[0].replaceAll("Products", ''), value.type,
      value.price);
});

devices = devicesProducts.map(function (value, array) {
  return new Product(
      Object.keys({devicesProducts})[0].replaceAll("Products", ''), value.type,
      value.price[0] + '-' + value.price[1]);
});

cosmetics = cosmeticsProducts.map(function (value, array) {
  return new Product(
      Object.keys({cosmeticsProducts})[0].replaceAll("Products", ''),
      value.type, value.price);
});

resultTr = [...kitechen, ...cosmetics, ...devices].map(function (item) {
  return item.renderProduct();
})
document.write(`<table>
<tr>
<th>Image</th>
<th>Type</th>
<th>Price</th>
</tr>
${resultTr.join(" ")}
</table>`)