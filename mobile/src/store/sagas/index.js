import { all, takeLatest, call, put, select } from "redux-saga/effects";
import api from "../../services/api";
import { navigate } from "../../services/navigation";
import { UserLogin, UserSignup } from "./user";

import { Creators as UserAction, Types as UserTypes } from "../ducks/user";

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.request, UserLogin),
    takeLatest(UserTypes.signup, UserSignup),
  ]);
}
