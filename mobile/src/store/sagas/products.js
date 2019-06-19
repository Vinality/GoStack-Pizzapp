import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { navigate } from "../../services/navigation";
import { AsyncStorage } from 'react-native';

import { Creators as ProductAction, Types as ProductTypes } from "../ducks/products";

export function* GetProducts(action) {
  try {
    const token = yield call(getToken, null);
    const config = {
      headers: { Authorization: "bearer " + token }
    };

    const { data } = yield call(api.get, '/menu', config);


    const products = data.map(product => (
      {
        product_id: product.id,
        name: product.name,
        image_url: product.image_url,
        description: product.description
      }
    ));

    yield put(ProductAction.productSuccess(products));

    navigate("Types");
  } catch (error) {
    yield put(ProductAction.productFailed());
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
