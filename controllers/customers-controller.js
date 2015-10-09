'use strict';

var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");
var Order = mongoose.model("Order");

module.exports = {

  find: function (req, res, next) {
    return Customer.find(function (err, customers) {
      return res.json(err || customers);
    });
  },

  findById: function (req, res, next) {
    //todo: promisify
    return Customer.findById(req.params.id, function (err, customer) {
      if (err) {
        res.json(err);
      }
      return Order.find({_customer: customer._id}, function (err, orders) {
        customer = JSON.parse(JSON.stringify(customer));
        customer._orders = orders || [];
        return res.json(err || customer);
      });
    });
  }

}