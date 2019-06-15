"use strict";

const Order = use("App/Models/Order");
const User = use("App/Models/User");

class OrderController {
  async store({request, auth}) {
    const { id } = await auth.getUser();
    const data = request.only(['size_id'])
    const order = Order.create({ size_id: data.size_id, user_id: id});

    return order;
  }

  async show({auth}) {
    const { id } = await auth.getUser();
    const user = await User.find(id);

    if(user.isCustomer === false) {
      const allOrders = await Order.query().with('size.types.product').with('user').fetch();

      return allOrders;
    }
    const data = await Order.query().where('user_id', id).with('size.types.product').fetch();

    return data;
  }
}

module.exports = OrderController;
