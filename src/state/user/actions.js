import typesUser from "./typesUser";

export function singIn(email, password) {
  return {
    type: typesUser.SIGN_IN_REQUEST,
    payload: { email, password }
  };
}

export function singInSuccess(user) {
  return {
    type: typesUser.SIGN_IN_SUCCESS,
    payload: user
  };
}
export function signOut() {
  return {
    type: typesUser.SIGN_OUT_REQUEST
  };
}

export function singInFailure(msg) {
  return {
    type: typesUser.SIGN_IN_FAILURE,
    payload: msg
  };
}
