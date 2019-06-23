"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("users", "UserController.store");
Route.post("session", "SessionController.store");

Route.group(() => {
  //Rotas para criação do cardapio
  Route.post("prod", "ProductController.store");
  Route.post("type", "TypeController.store");
  Route.post("size", "SizeController.store");

  //Verificar todos os produtos e tipos
  Route.get("menu", "ProductController.show");
  Route.get("menu/:type", "TypeController.show");
  Route.get("menu/size/:type", "SizeController.show");

  Route.post('cart', "CartController.show");

  //Finalizar pedido
  Route.post("order", "OrderController.store");
  //Ver carrinho
  Route.get("order", "OrderController.show");
}).middleware(["auth"]);
