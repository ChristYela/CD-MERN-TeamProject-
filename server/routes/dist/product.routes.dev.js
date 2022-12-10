"use strict";

var ProductController = require("../controllers/product.controller");

var UserController = require("../controllers/user.controller");

var _require = require("../config/jwt.config"),
    authenticate = _require.authenticate;

module.exports = function (app) {
  app.get('/api/product', authenticate, ProductController.get_all);
  app.post('/api/product', authenticate, ProductController.create_product);
  app.get('/api/product/:id', authenticate, ProductController.get_product);
  app.put('/api/product/:id', authenticate, ProductController.update_product);
  app["delete"]('/api/product/:id', authenticate, ProductController.delete_product);
  app.post('/api/register', UserController.register);
  app.post('/api/login', UserController.login);
  app.get('/api/logout', UserController.logout);
};