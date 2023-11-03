import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

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
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();