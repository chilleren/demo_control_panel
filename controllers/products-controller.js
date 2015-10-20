'use strict';

var mongoose = require("mongoose");
var Product = mongoose.model("Product");
var Order = mongoose.model("Order");

module.exports = {

  find: function (req, res, next) {
    return Product.find(function (err, products) {
      return res.json(err || products);
    });
  },

  findById: function (req, res, next) {

    //todo: promisify
    return Product.findById(req.params.id, function (err, product) {
      if (err) {
        res.json(err);
      }
      return Order.find({_product: product._id}).populate("_customer").exec(function (err, orders) {
        product = JSON.parse(JSON.stringify(product));
        product._orders = orders || [];
        return res.json(err || product);
      });
    });
  }

}