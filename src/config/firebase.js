import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCyEoFeHmsMcWGX30-N-rlonZZt38KZNcg",
  authDomain: "real-time-react-651cd.firebaseapp.com",
  databaseURL: "https://real-time-react-651cd.firebaseio.com",
  projectId: "real-time-react-651cd",
  storageBucket: "real-time-react-651cd.appspot.com",
  messagingSenderId: "1073296568170",
  appId: "1:1073296568170:web:8c4d9cf5680a261659bf13",
  measurementId: "G-JZ79N8D2VB"
};

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();
