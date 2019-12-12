import { all, call, put, takeLatest } from "redux-saga/effects";
import typesUser from "./typesUser";
import * as actions from "./actions";
import * as repository from "./repository";
import { notification } from "antd";
import history from "../../routes/history";

export function* signIn(action) {
  try {
    const data = yield call(
      repository.signIn,
      action.payload.email,
      action.payload.password
    );

    yield put(actions.singInSuccess(data));

    notification.success({
      message: "Sucesso",
      description: "Logado com sucesso."
    });

    history.push("/dashboard");
  } catch (error) {
    notification.error({
      message: "Erro",
      description: "Dados incorretos, tente novamente."
    });
    yield put({ type: typesUser.SIGN_IN_FAILURE });
  }
}

export function* logOut() {
  try {
    yield call(repository.signOut);
    yield put({ type: typesUser.SIGN_OUT_SUCCESS });
    history.push("/");
  } catch (error) {
    yield put({ type: typesUser.SIGN_IN_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(typesUser.SIGN_IN_REQUEST, signIn),
    takeLatest(typesUser.SIGN_OUT_REQUEST, logOut)
  ]);
}
