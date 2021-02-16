import * as firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClMQ8-6-ZadC8oEudbWjupHAvpQxRETvY",
  authDomain: "chat-firebase-reactnative.firebaseapp.com",
  projectId: "chat-firebase-reactnative",
  storageBucket: "chat-firebase-reactnative.appspot.com",
  messagingSenderId: "253030440541",
  appId: "1:253030440541:web:9848c192d2615724af37b4",
  measurementId: "G-P36HXRFPTQ",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
// to do
// expo install firebase bug
