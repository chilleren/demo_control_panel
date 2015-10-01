'use strict';

var mongoose = require("mongoose");
var Customer = mongoose.model("Customer");

module.exports = {

  find: function (req, res, next) {
    return Customer.find(function (err, customers) {
      return res.json(err || customers);
    });
  },

  findById: function (req, res, next) {
    return Customer.findById(req.params.id, function (err, customers) {
      return res.json(err || customers);
    });
  }

}