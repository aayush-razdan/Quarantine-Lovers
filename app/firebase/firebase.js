import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA6pJCz3NkPCp2pyh8he2oF3pn5NaM6Ovg",
  authDomain: "quarantineloversexpo.firebaseapp.com",
  databaseURL: "https://quarantineloversexpo.firebaseio.com",
  projectId: "quarantineloversexpo",
  storageBucket: "quarantineloversexpo.appspot.com",
  messagingSenderId: "1039687482395",
  appId: "1:1039687482395:web:d73bf6d7cd6e6fa8488cbe",
};
// Initialize Firebase
export const Firebase = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default { Firebase, db };
