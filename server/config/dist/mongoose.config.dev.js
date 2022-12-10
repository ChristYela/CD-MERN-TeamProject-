"use strict";

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("Connected to DB");
})["catch"](function (err) {
  return console.log("Error connect to DB", err);
});