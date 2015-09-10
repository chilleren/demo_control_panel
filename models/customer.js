"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
  
var CustomerSchema = new Schema({
  email: {type: String, required: true},
});


module.exports = mongoose.model("Customer", CustomerSchema);