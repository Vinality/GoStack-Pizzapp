import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import api from "../../services/api";
import { Creators as OrderActions } from "../ducks/order";

export function* GetOrders(action) {
  try {
    const token = localStorage.getItem('@pizzapp');

    const config = {
      headers: { Authorization: "bearer " + token }
    };

    const { data } = yield call(api.get, "/cart", config);

    const orders = data.map(order => (
      {
        when: order.created_at,
        user: order.user.username,
        size: order.size.size,
        price: order.size.price,
        type: order.size.types.type,
        product: order.size.types.product.name
      }
    ));

    console.tron.log(orders);

    yield put(OrderActions.GetOrdersSuccess(orders));
  } catch (err) {

    yield put(OrderActions.GetOrdersFailure(err));
  }
}
