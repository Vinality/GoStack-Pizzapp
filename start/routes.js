"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("users", "UserController.store");
Route.post("session", "SessionController.store");

Route.post("prod", "ProductController.store");
Route.post("type", "TypeController.store");
Route.post("size", "SizeController.store");
