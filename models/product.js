"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
  
var ProductSchema = new Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true}
});


module.exports = mongoose.model("Product", ProductSchema);