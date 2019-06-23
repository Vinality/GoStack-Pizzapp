import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { navigate } from "../../services/navigation";
import { AsyncStorage } from 'react-native';

import { Creators as CartAction, Types as CartTypes } from "../ducks/cart";

export function* GetCart(action) {
  try {
    const token = yield call(getToken, null);
    const config = {
      headers: { Authorization: "bearer " + token }
    };

    const send = {
      size_id: action.payload[0],
      size_id2: action.payload[1] ? action.payload[1] : null,
      size_id3: action.payload[2] ? action.payload[2] : null
    };

    const { data } = yield call(api.post, '/cart', send, config);

    var total = 0;
    const cart = data.map(size => {
      total += size.price;
      return(
      {
        id: size.id,
        size: size.size,
        price: size.price,
        type_url: size.types.image_url,
        name: size.types.product.name,
        type: size.types.type
      })
    });

    yield put(CartAction.getCartSuccess(cart, total));
  } catch (error) {
    yield put(CartAction.cartFailed());
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
