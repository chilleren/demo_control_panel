'use strict';
var mongoose = require('mongoose');

module.exports = function (callback) {
  var Customer = mongoose.model('Customer');
  var Product = mongoose.model('Product');
  var Order = mongoose.model('Order');

  var customerData = require('./customers');
  var productData = require('./products');
  var orderData = require('./orders');

  Product.remove({})
    .then(function () {
      return Product.collection.insert(productData);
    })
    .then(function () {
      return Customer.remove({});
    })
    .then(function () {
      return Customer.collection.insert(customerData);
    })
    .then(function () {
      return Order.remove({});
    })
    .then(function () {
      //return Order.collection.insert(orderData);
      return null;
    })
    .then(callback);
}