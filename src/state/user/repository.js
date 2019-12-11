import { firebaseImpl } from "../../config/firebase";

export const signIn = (email, password) =>
  firebaseImpl.auth().signInWithEmailAndPassword(email, password);

export const signOut = () => firebaseImpl.auth().signOut();
