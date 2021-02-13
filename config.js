import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDjvhSppEB0hilQmholpLaBtgWx9QVEyZY",
    authDomain: "barter-system-fca0e.firebaseapp.com",
    projectId: "barter-system-fca0e",
    storageBucket: "barter-system-fca0e.appspot.com",
    messagingSenderId: "794676335933",
    appId: "1:794676335933:web:498f8515439c3abdbbe154"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
