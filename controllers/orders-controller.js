'use strict';

var mongoose = require("mongoose");
var Order = mongoose.model("Order");

module.exports = {

  find: function (req, res, next) {
    return Order.find().populate('_product').populate('_customer').exec(function (err, orders) {
      return res.json(err || orders);
    });
  },

  findById: function (req, res, next) {
    return Order.findById(req.params.id).populate('_product').populate('_customer').exec(function (err, orders) {
      return res.json(err || orders);
    });
  }

}