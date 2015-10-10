'use strict';

var faker = require('faker');

var products = [];

for (var i = 0; i < 100; i++) {
  products.push({
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    price: faker.commerce.price(),
    createdAt: faker.date.past()
  });
}

module.exports = products;