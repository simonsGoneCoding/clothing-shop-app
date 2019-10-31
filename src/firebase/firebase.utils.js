import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD2IQlVrblJmLChLZ_GQO29KCvfgQJ3sjo",
  authDomain: "fake-clothing-shop.firebaseapp.com",
  databaseURL: "https://fake-clothing-shop.firebaseio.com",
  projectId: "fake-clothing-shop",
  storageBucket: "fake-clothing-shop.appspot.com",
  messagingSenderId: "827906844099",
  appId: "1:827906844099:web:047433bd9d8944a81ec976",
  measurementId: "G-JVZ8FN600D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fierestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
