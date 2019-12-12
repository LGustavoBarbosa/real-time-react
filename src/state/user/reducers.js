import typesUser from "./typesUser";

const initialState = {
  user: {
    name: "",
    type: "",
    photo: "",
    address: "",
    phone: ""
  },
  signed: false,
  loading: false,
  error: null,
  allowed: false,
  token: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case typesUser.SIGN_IN_REQUEST:
      return { ...state, loading: true };

    case typesUser.SIGN_OUT_REQUEST:
      return { ...state, loading: true };

    case typesUser.SIGN_IN_SUCCESS:
      return { ...state, user: action.payload, loading: false, signed: true };

    case typesUser.SIGN_OUT_SUCCESS:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
