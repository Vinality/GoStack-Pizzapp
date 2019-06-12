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

  //Verificar cardapio completo
  Route.get("menu", "ProductController.show");

  //Adicionar pedido ao carriho
  Route.post("order", "OrderController.store");
  //Ver carrinho
  Route.get("cart", "OrderController.show");
}).middleware(["auth"]);
