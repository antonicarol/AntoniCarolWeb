import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAwx7jh7kcs1T530qbDBONV77m3f1kXW-o",
  authDomain: "portfolio-antoni.firebaseapp.com",
  databaseURL: "https://portfolio-antoni.firebaseio.com",
  projectId: "portfolio-antoni",
  storageBucket: "portfolio-antoni.appspot.com",
  messagingSenderId: "144847118955",
  appId: "1:144847118955:web:5c4211fb83163f1fb1472e",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, authProvider };
