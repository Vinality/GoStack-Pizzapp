import { all, takeLatest, call, put, select } from "redux-saga/effects";
import api from "../../services/api";
import { navigate } from "../../services/navigation";
import { UserLogin, UserSignup } from "./user";
import { GetProducts } from "./products";
import { GetTypes } from "./type";

import { Creators as UserAction, Types as UserTypes } from "../ducks/user";
import { Creators as ProductAction, Types as ProductTypes } from "../ducks/products";
import { Creators as TypeAction, Types as TypeTypes } from "../ducks/type";

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.request, UserLogin),
    takeLatest(UserTypes.signup, UserSignup),
    takeLatest(ProductTypes.request, GetProducts),
    takeLatest(TypeTypes.request, GetTypes)
  ]);
}
