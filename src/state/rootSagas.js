import { all } from "redux-saga/effects";
import UserSagas from "./user/services";
import CarSagas from "./cars/services";

export default function* rootSaga() {
  return yield all([UserSagas(), CarSagas()]);
}
