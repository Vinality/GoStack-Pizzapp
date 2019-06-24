"use strict";

const Order = use("App/Models/Order");
const User = use("App/Models/User");
const Size = use("App/Models/Size");

class OrderController {
  async store({request, auth}) {
    const { id } = await auth.getUser();
    const data = request.post();
    var arrOrders = await Size.query().where('id', data.size_id).orWhere('id', data.size_id2).orWhere('id', data.size_id3).fetch();
    var total = 0;
    
    arrOrders = arrOrders.toJSON();
    arrOrders.map(order => (total += order.price));

    const order = Order.create({ ...data, user_id: id, total});

    return order;
  }

  async show({auth}) {
    const { id } = await auth.getUser();
    const user = await User.find(id);

    if(user.isCustomer === false) {
      const allOrders = await Order.query().with('size.types.product').with('size2.types.product').with('size3.types.product').with('user').fetch();

      return allOrders;
    }
    const data = await Order.query().where('user_id', id).with('size.types.product').with('size2.types.product').with('size3.types.product').fetch();

    return data;
  }
}

module.exports = OrderController;
