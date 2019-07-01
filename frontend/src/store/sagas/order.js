import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as OrderActions } from "../ducks/order";

export function* GetOrders(action) {
  try {
    const token = localStorage.getItem('@pizzapp');

    const config = {
      headers: { Authorization: "bearer " + token }
    };

    const { data } = yield call(api.get, "/order", config);

    const orders = data.map(order => (
      {
        when: order.created_at,
        user: order.user.username,
        total: order.total,
        obs: order.obs,
        address: order.address,
        products: [
          {
            size: order.size.size,
            price: order.size.price,
            type: order.size.types.type,
            product: order.size.types.product.name,
            image_url: order.size.types.image_url
          },
          {
            size: order.size2 ? order.size2.size : null,
            price: order.size2 ? order.size2.price : null,
            type: order.size2 ? order.size2.types.type : null,
            product: order.size2 ? order.size2.types.product.name : null,
            image_url: order.size2 ? order.size2.types.image_url : null
          },
          {
            size: order.size3 ? order.size3.size : null,
            price: order.size3 ? order.size3.price : null,
            type: order.size3 ? order.size3.types.type : null,
            product: order.size3 ? order.size3.types.product.name : null,
            image_url: order.size3 ? order.size3.types.image_url : null
          }
        ]
      }
    ));

    yield put(OrderActions.GetOrdersSuccess(orders));
  } catch (err) {

    yield put(OrderActions.GetOrdersFailure(err));
  }
}
