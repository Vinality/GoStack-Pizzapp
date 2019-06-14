import { all, takeLatest } from "redux-saga/effects";
import { Types as UsersTypes } from "../ducks/user";
import { UserLogin } from "./user";

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.LOGIN_REQUEST, UserLogin),
  ]);
}
