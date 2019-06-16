'use strict'

const Model = use('Model')

class Order extends Model {
  size() {
    return this.hasOne('App/Models/Size', 'size_id' ,'id');
  }

  size2() {
    return this.hasOne('App/Models/Size', 'size_id2' ,'id');
  }

  size3() {
    return this.hasOne('App/Models/Size', 'size_id3o' ,'id');
  }

  user() {
    return this.hasOne('App/Models/User', 'user_id' ,'id');
  }
}

module.exports = Order
