import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { navigate } from "../../services/navigation";
import { AsyncStorage } from 'react-native';

import { Creators as OrderAction, Types as OrderTypes } from "../ducks/order";

export function* GetOrders(action) {
  try {
    const token = yield call(getToken, null);
    const config = {
      headers: { Authorization: "bearer " + token }
    };

    const { data } = yield call(api.get, '/order', config);

    let i = 0;
    const orders = data.map(order => {
      i++;
      return(
        {
          order_id: i,
          total: order.total,
          when: order.created_at
        }
    )});

    console.tron.log(orders);

    yield put(OrderAction.orderSuccess(orders));
  } catch (error) {
    yield put(OrderAction.orderFailed());
  }
}

async function getToken() {
  try {
    const token = await AsyncStorage.getItem('@donjuan:token');
    return token;
  } catch (error) {
    console.log('AsyncStorage error during token get:', error);
  }
}
