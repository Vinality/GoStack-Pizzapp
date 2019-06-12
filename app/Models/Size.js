"use strict";

const Model = use("Model");

class Size extends Model {
  types() {
    return this.belongsTo('App/Models/Type');
  }

  // order() {
  //   return this.belongsTo('App/Models/Order');
  // }
}

module.exports = Size;
