"use strict";

const Order = use("App/Models/Order");
const User = use("App/Models/User");
const Size = use("App/Models/Size");

class OrderController {
  async store({request, auth}) {
    const { id } = await auth.getUser();
    const data = request.post()

    const order = Order.create({ ...data, user_id: id});

    return order;
  }

  async show({auth}) {
    const { id } = await auth.getUser();
    const user = await User.find(id);

    if(user.isCustomer === false) {
      const allOrders = await Order.query().with('size.types.product').with('size2.types.product').with('size3.types.product').with('user').fetch();

      return allOrders;
    }
    const data = await Order.query().where('user_id', id).with('size.types.product').fetch();

    return data;
  }
}

module.exports = OrderController;
