// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdFH7omi9BcXFbJoj8wMJ2iRlp-N7M3Yc",
  authDomain: "fir-auth-463ed.firebaseapp.com",
  projectId: "fir-auth-463ed",
  storageBucket: "fir-auth-463ed.appspot.com",
  messagingSenderId: "387910576248",
  appId: "1:387910576248:web:ce8aefec2dec9d3f02658d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};