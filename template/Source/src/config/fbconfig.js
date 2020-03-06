import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD2r4LZ-VdmQmZ47TZW-5Q1H6N_gRdrPXA",
    authDomain: "atun04-a29b1.firebaseapp.com",
    databaseURL: "https://atun04-a29b1.firebaseio.com",
    projectId: "atun04-a29b1",
    storageBucket: "atun04-a29b1.appspot.com",
    messagingSenderId: "718378291199",
    appId: "1:718378291199:web:0a2854d98235a9e3e6a1ca",
    measurementId: "G-75RLH8V517"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



export default firebase;