'use strict';

var mongoose = require('mongoose');

var Customer = mongoose.model("Customer");
var Product = mongoose.model("Product");


function randomStatus () {
  var statuses = ['In Progress', 'Complete'];
  var randomNumber = randomInt(0, 5);
  if (randomNumber === 0) {
    return statuses[0];
  } else {
    return statuses[1];
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
          quantity: randomInt(1, 4),
          status: randomStatus()
        });
      }

      return callback(null, orders);

    });
  });
};