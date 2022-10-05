import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEYxI5M9oeaR3slfFfXlBD-uDtwK0wgBk",
  authDomain: "dive-pics.firebaseapp.com",
  projectId: "dive-pics",
  storageBucket: "dive-pics.appspot.com",
  messagingSenderId: "555701636243",
  appId: "1:555701636243:web:0a7c18c45bfc76bf6e9166",
  measurementId: "G-WRJ785WFMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(<App />, document.getElementById("root"));