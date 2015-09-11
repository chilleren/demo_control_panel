'use strict';
var mongoose = require('mongoose');

module.exports = function (callback) {

  var Customer = mongoose.model('Customer');
  var Product = mongoose.model('Product');
  var Order = mongoose.model('Order');

  var customerData = require('./customers');
  var productData = require('./products');
  var orderData = require('./orders');

  Customer.remove({})
    .then(function () {
      Customer.collection.insert(customerData);
    })
    .then(function () {
      Product.remove({});
    })
    .then(function () {
      Product.collection.insert(productData);
    })
    .then(function () {
      Order.remove({});
    })
    .then(function () {
      Order.collection.insert(orderData);
    })
    .then(callback);
}