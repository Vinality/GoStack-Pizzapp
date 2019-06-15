'use strict'

const Model = use('Model')

class Order extends Model {
  size() {
    return this.hasOne('App/Models/Size', 'size_id' ,'id');
  }

  user() {
    return this.hasOne('App/Models/User', 'user_id' ,'id');
  }
}

module.exports = Order
