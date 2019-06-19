import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { navigate } from "../../services/navigation";
import { AsyncStorage } from 'react-native';

import { Creators as TypeAction, Types as TypeTypes } from "../ducks/type";

export function* GetTypes(action) {
  try {
    const token = yield call(getToken, null);
    const config = {
      headers: { Authorization: "bearer " + token }
    };

    const { data } = yield call(api.get, `/menu/${action.payload.id}`, config);


    const types = data.map(type => (
      {
        type_id: type.id,
        type: type.type,
        image_url: type.image_url
      }
    ));

    yield put(TypeAction.typeSuccess(types));

    // navigate("Sizes");
  } catch (error) {
    yield put(TypeAction.typeFailed());
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
