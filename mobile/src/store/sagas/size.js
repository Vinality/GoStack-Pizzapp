import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { navigate } from "../../services/navigation";
import { AsyncStorage } from 'react-native';

import { Creators as SizeAction, Types as SizeTypes } from "../ducks/size";

export function* GetSizes(action) {
  try {
    const token = yield call(getToken, null);
    const config = {
      headers: { Authorization: "bearer " + token }
    };

    const { data } = yield call(api.get, `/menu/size/${action.payload.id}`, config);

    const sizes = data.map(size => (
      {
        size_id: size.id,
        size: size.size,
        price: size.price,
        size_url: size.size_url
      }
    ));

    yield put(SizeAction.sizeSuccess(sizes));
  } catch (error) {
    yield put(SizeAction.sizeFailed());
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
