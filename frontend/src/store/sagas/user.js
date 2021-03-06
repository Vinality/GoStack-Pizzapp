import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Creators as UsersActions } from "../ducks/user";

export function* UserLogin(action) {
  try {
    const { data } = yield call(api.post, "/session", {
      email: action.payload.email,
      password: action.payload.password
    });

    if(data.isCust !== false) {
      throw new Error('Only admins allowed');
    }

    localStorage.setItem('@pizzapp', data.auth.token);

    yield put(UsersActions.userLoginSuccess(data.username));
    yield put(push("/dashboard"));
  } catch (err) {
    toast.error(err.response.data[0].message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });

    yield put(UsersActions.userLoginFailure(err));
  }
}

export function* UserLogout(action) {
  localStorage.removeItem('@pizzapp');
  yield put(push("/"));
}
