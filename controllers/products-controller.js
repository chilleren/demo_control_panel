'use strict';

var mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = {

  find: function (req, res, next) {
    return Product.find(function (err, products) {
      return res.json(err || products);
    });
  },

  findById: function (req, res, next) {
    return Product.findById(req.params.id, function (err, customers) {
      return res.json(err || customers);
    });
  }

}