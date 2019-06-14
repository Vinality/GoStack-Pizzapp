'use strict'

const Model = use('Model')

class Product extends Model {
  type() {
    return this.hasMany('App/Models/Type')
  }
}

module.exports = Product
