import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { navigate } from "../../services/navigation";
import { AsyncStorage } from 'react-native';

import { Creators as UserAction, Types as UserTypes } from "../ducks/user";

export function* UserLogin(action) {
  try {
    const { username, password } = action.payload;
    const { data } = yield call(api.post, '/session', { email: username, password });
    if(data.isCust === false) {
      throw new Error('Apenas clientes podem entrar!');
    }

    yield call(storeToken, data.auth.token);
    yield put(UserAction.userSuccess(data.username));

    navigate("Products");
  } catch (error) {
    yield put(UserAction.userFailed(error.message));
  }
}

export function* UserSignup(action) {
  try {
    const { username, email, password } = action.payload;
    yield call(api.post, '/users', { username, email, password });
    yield put(UserAction.signupSuccess());

    navigate("Login");
  } catch (error) {
    yield put(UserAction.userFailed(error.message));
  }
}

async function storeToken(token) {
  try {
    await AsyncStorage.setItem('@donjuan:token', token);
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
}
