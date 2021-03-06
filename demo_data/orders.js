'use strict';

var mongoose = require('mongoose');
var faker = require('faker');

var Customer = mongoose.model("Customer");
var Product = mongoose.model("Product");

var firstOrderNumber = 10000


function randomStatus () {
  var statuses = ['In Progress', 'Canceled', 'Complete'];
  var randomNumber = randomInt(0, 5);
  if (randomNumber === 0) {
    return statuses[0];
  } else if (randomNumber === 1) {
    return statuses[1];
  } else {
    return statuses[2];
  }
}

function pluckRandom (array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = function (callback) {
  var orders = [];

  Customer.find({}, function (err, customers) {
    if (err) return callback(err);
    Product.find({}, function (err, products) {
      if (err) return callback(err);

      for (var i = 0; i < 100; i++) {
        orders.push({
          _product: pluckRandom(products)._id,
          _customer: pluckRandom(customers)._id,
          //orderNumber: firstOrderNumber + i,
          quantity: randomInt(1, 10),
          status: randomStatus(),
          createdAt: faker.date.past()
        });
      }

      orders = orders.sort(function(a, b){
        return (new Date(b.createdAt) - new Date(a.createdAt));
      });

      orders = orders.reverse();

      for (var i = 0; i < orders.length; i++) {
        orders[i].orderNumber = firstOrderNumber + i;
      }

      return callback(null, orders);

    });
  });
};