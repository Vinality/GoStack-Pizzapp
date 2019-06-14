import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import api from "../../services/api";
import { Creators as UsersActions } from "../ducks/user";

export function* UserLogin(action) {
  try {
    const { data } = yield call(api.post, "/session", {
      email: action.payload.email,
      password: action.payload.password
    });

    localStorage.setItem('@pizzapp', data.auth.token);

    yield put(UsersActions.UserLoginSuccess());
    yield put(push("/dashboard"));
  } catch (err) {
    console.tron.log(err);
    yield put(UsersActions.UserLoginFailure("Usuário ou senha incorretos!"));
  }
}