'use strict';

var connectMongo = require("connect-mongo"); 
var express = require('express'); 
var fs = require('fs');
var mongoose = require('mongoose');
var path = require('path');
var populateDb = require('./demo_data/populate-db');
var routes = require('./routes/index');

var app = express();

//load mongoose models
var modelsPath = path.join(__dirname, "/models/");
fs.readdirSync(modelsPath).forEach(function (filename) {
  require(path.join(modelsPath, filename));
});

mongoose.connect("mongodb://localhost:27017/demo_control_panel");
mongoose.connection.once("open", function () {

  routes(app); //load api routes

  app.use(express.static(__dirname + "/public")); //serve static content

  populateDb(function () {
    console.log('database populated');

    var port = 8000;
    app.listen(port, function () {
      console.log("Listening on port " + port);
    });
  });
});