"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
  
var CustomerSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Customer", CustomerSchema);