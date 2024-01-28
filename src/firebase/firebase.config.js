// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIYDVPfP0DPPS_ydSA7hbOZWIA1KApZQo",
  authDomain: "mp3-monkeymusic.firebaseapp.com",
  projectId: "mp3-monkeymusic",
  storageBucket: "mp3-monkeymusic.appspot.com",
  messagingSenderId: "871783175512",
  appId: "1:871783175512:web:41592424cce8cfa480812d",
  measurementId: "G-SE2Y604ZNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);