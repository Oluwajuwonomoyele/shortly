import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDt8RB00sIHLoOA8m3VZXNmBd3fUUtzA70",
    authDomain: "shortly-app-51a47.firebaseapp.com",
    projectId: "shortly-app-51a47",
    storageBucket: "shortly-app-51a47.appspot.com",
    messagingSenderId: "939091116870",
    appId: "1:939091116870:web:f884c77ebdb58c4ce01b47"
  };

  firebase.initializeApp(firebaseConfig);

  const store = firebase.firestore();

  const auth = firebase.auth()

  const timestamp = firebase.firestore.Timestamp

  export { store, auth, timestamp }