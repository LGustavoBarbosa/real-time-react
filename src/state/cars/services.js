import { takeLatest, call, put, race, take, all } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import typesCar from "./typesCar";
import typesUser from "../user/typesUser";
import * as repository from "./repository";
import { notification } from "antd";

export function* addCar(action) {
  try {
    const refCars = repository.refCars();
    yield refCars.push().set(action.payload);
    notification.success({
      message: "Sucesso",
      description: "Veiculo adicionado com sucesso."
    });
  } catch (error) {
    notification.error({
      message: "Erro",
      description: "Dados incorretos, tente novamente."
    });
  }
}

export function* handelWsConnection() {
  try {
    // Iniciamos a conexão com o socket
    const refCars = repository.refCars();
    // Criamos o channel
    const eventChannel = yield call(getWsChannel, refCars);

    // Iniciamos uma corrida que só irá terminar
    // Quando houver um dispatch da ação USER_LOGOUT
    const { cancel } = yield race({
      task: call(watchMessages, eventChannel),
      cancel: take(typesUser.SIGN_OUT_SUCCESS)
    });

    // Se a ação cancel vencer a corrida podemos
    // chamar o método close do channel.
    // Ele irá executar o websocket.close()
    // visto anteriormente.
    if (cancel) {
      eventChannel.close();
    }
  } catch (error) {
    yield put({ type: "" });
  }
}

function getWsChannel(cars) {
  // Devemos retornar o channel pois é
  // nele que iremos buscar os eventos emitidos

  // #2

  return eventChannel(emitter => {
    const listener = cars.on("value", snapshot => {
      emitter({ data: snapshot.val() || {} });
    });

    // O channel tem um método close
    // que executa esta função ao ser chamado
    return () => {
      listener.off();
    };
  });
}

export function* watchMessages(eventChannel) {
  // Executamos indefinidamente
  while (true) {
    // Usamos o effect take para ler os eventos do channel
    const event = yield take(eventChannel);
    // Enviamos uma ação para nossa store do redux
    yield put({ type: typesCar.PUT_CARS, payload: event.data });
  }
}

// Criamos um watch para fazer a conexão com o ws.
// Esse watch será executado quando houver um disptach da ação de tipo WS_CONNECT
export default function* rootSaga() {
  yield all([
    takeLatest(typesCar.WS_CONNECT, handelWsConnection),
    takeLatest(typesCar.ADD_CARS, addCar)
  ]);
}
