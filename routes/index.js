'use strict';

var mongoose = require("mongoose");

module.exports = function (app) {
  var customersController = require("../controllers/customers-controller");
  var productsController = require("../controllers/products-controller");
  var ordersController = require("../controllers/orders-controller");
  var populateDb = require('../demo_data/populate-db');

  app.get('/customers', customersController.find);
  app.get('/customers/:id', customersController.findById);

  app.get('/products', productsController.find);
  app.get('/products/:id', productsController.findById);

  app.get('/orders', ordersController.find);
  app.get('/orders/:id', ordersController.findById);


  app.get("/repopulate", function (req, res) {
    return populateDb(function () {
	  return res.send('database repopulated');
    });
  });
}