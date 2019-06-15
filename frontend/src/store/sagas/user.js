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
      throw {
        message:'Only admins allowed'
      };
    }

    localStorage.setItem('@pizzapp', data.auth.token);

    yield put(UsersActions.UserLoginSuccess(data.username));
    yield put(push("/dashboard"));
  } catch (err) {

    toast.error(err.message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });

    yield put(UsersActions.UserLoginFailure(err));
  }
}
