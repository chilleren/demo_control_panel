'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var connectMongo = require("connect-mongo");  
var fs = require('fs');
var mongoose = require('mongoose');
var path = require('path');

var routes = require('./routes/index');

var app = express();

app.use(bodyParser.json());


//load mongoose models
var modelsPath = __dirname + "/models/";
fs.readdirSync(modelsPath).forEach(function (filename) {
  require(modelsPath + filename);
});

mongoose.connect("mongodb://localhost:27017/demo_control_panel");
mongoose.connection.once("open", function () {

  //initialize routes
  routes(app);

  app.use(express.static(__dirname + "/public"));

  var port = 8000;
  app.listen(port, function () {
    console.log("Listening on port " + port + ".");
  });
});