// firebase v8
// import firebase from "firebase";

// firebase v9
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzI7-Z5l4oTfRvuYr15RHfgHKYBHvY1ws",
  authDomain: "challenge-5ae4e.firebaseapp.com",
  projectId: "challenge-5ae4e",
  storageBucket: "challenge-5ae4e.appspot.com",
  messagingSenderId: "102112103098",
  appId: "1:102112103098:web:63f558c851af1e5e14d083",
  measurementId: "G-JD1TCQBKCY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
