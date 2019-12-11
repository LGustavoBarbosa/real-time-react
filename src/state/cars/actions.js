import typesUser from "./typesCar";

export function wsConnect() {
  return {
    type: typesUser.WS_CONNECT
  };
}

export function addCar(car) {
  return {
    type: typesUser.ADD_CARS,
    payload: car
  };
}
