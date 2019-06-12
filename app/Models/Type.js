'use strict'

const Model = use('Model')

class Type extends Model {
  sizes() {
    return this.hasMany('App/Models/Size')
  }

  product() {
    return this.belongsTo('App/Models/Product')
  }
}

module.exports = Type
