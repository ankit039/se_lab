import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBRfJyO4yIbX9-ZPSSk6mZon645JYmRgxU",
  authDomain: "minorproject2-37660.firebaseapp.com",
  projectId: "minorproject2-37660",
  storageBucket: "minorproject2-37660.appspot.com",
  messagingSenderId: "1059670326264",
  appId: "1:1059670326264:web:ba9379689dcd2d2a83b40d",
  measurementId: "G-D7LZ8LNRP8"
};

const fire = firebase.initializeApp(firebaseConfig);

export {fire};