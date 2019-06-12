"use strict";

const Order = use("App/Models/Order");

class OrderController {
  async store({request, auth}) {
    const { id } = await auth.getUser();
    const data = request.only(['size_id'])
    const order = Order.create({ size_id: data.size_id, user_id: id});
  
    return order;
  }

  async show({auth}) {
    const { id } = await auth.getUser();
    const data = await Order.query().where('user_id', id).with('size.types.product').fetch();

    return data;
  }
}

module.exports = OrderController;
