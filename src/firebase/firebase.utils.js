import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDEH2il5ebKD5QEm4GXwgwj-0nyWUEGMuQ",
  authDomain: "crown-db-47889.firebaseapp.com",
  databaseURL: "https://crown-db-47889.firebaseio.com",
  projectId: "crown-db-47889",
  storageBucket: "crown-db-47889.appspot.com",
  messagingSenderId: "292198204045",
  appId: "1:292198204045:web:f41c3e1b34c4a23637d8c4",
  measurementId: "G-T0F49EPEGP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
