import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCslYVduFWXYROM_lXJClHhdA39QfdqKI",
  authDomain: "nxt-fireship-albedo13.firebaseapp.com",
  projectId: "nxt-fireship-albedo13",
  storageBucket: "nxt-fireship-albedo13.appspot.com",
  messagingSenderId: "570510387579",
  appId: "1:570510387579:web:7b2671586b0e812b4375de",
  measurementId: "G-6241E2GTGC",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
