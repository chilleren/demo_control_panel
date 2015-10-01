'use strict';

var mongoose = require("mongoose");

module.exports = function (app) {
  var customersController = require("../controllers/customers-controller");
  var productsController = require("../controllers/products-controller");
  var ordersController = require("../controllers/orders-controller");

  app.get('/customers', customersController.find);
  app.get('/customers/:id', customersController.findById);

  app.get('/products', productsController.find);
  app.get('/products/:id', productsController.findById);

  app.get('/orders', ordersController.find);
  app.get('/orders/:id', ordersController.findById);
}