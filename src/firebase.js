import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWpXGDMAbmcuqQ1ga-HA0oygiiqz3cwNQ",
  authDomain: "chat-app-466c4.firebaseapp.com",
  projectId: "chat-app-466c4",
  storageBucket: "chat-app-466c4.appspot.com",
  messagingSenderId: "8831308793",
  appId: "1:8831308793:web:7467c63c3054d77d99e328",
  measurementId: "G-G3FX2PH9G9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;