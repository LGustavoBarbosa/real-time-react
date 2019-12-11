import typesCars from "./typesCar";

const initialState = {
  cars: []
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case typesCars.PUT_CARS:
      return { ...state.cars, ...action.payload };

    default:
      return state;
  }
}
