'use strict';

var mongoose = require("mongoose");

module.exports = function (app) {
  var Customer = mongoose.model("Customer");
  var Product = mongoose.model("Product");
  var Order = mongoose.model("Order");

  app.get('/customers', function (req, res) {
    return Customer.find(function (err, customers) {
      return res.json(err || customers);
    });
  });

  app.get('/products', function (req, res) {
    return Product.find(function (err, products) {
      return res.json(err || products);
    });
  });

  app.get('/orders', function (req, res) {
    return Order.find(function (err, orders) {
      return res.json(err || orders);
    });
  });
}