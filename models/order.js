"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
  
var OrderSchema = new Schema({
  _customer: {type: ObjectId, ref: "Customer", required: true},
  _product: {type: ObjectId, ref: "Product", required: true},
  quantity: {type: Number, required: true}
});


module.exports = mongoose.model("Order", OrderSchema);