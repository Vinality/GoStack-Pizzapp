import { all, takeLatest } from "redux-saga/effects";
import { Types as UsersTypes } from "../ducks/user";
import { Types as OrderTypes } from "../ducks/order";
import { UserLogin, UserLogout } from "./user";
import { GetOrders } from "./order";

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.LOGIN_REQUEST, UserLogin),
    takeLatest(UsersTypes.LOGOUT, UserLogout),
    takeLatest(OrderTypes.ORDER_REQUEST, GetOrders),
  ]);
}
