"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
  
var ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Product", ProductSchema);