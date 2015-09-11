"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
  
var CustomerSchema = new Schema({
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Customer", CustomerSchema);