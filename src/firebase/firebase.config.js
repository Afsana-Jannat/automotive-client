// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0fTZLKPBOd4A_e6Bxgif-uuyXje4C2eA",
  authDomain: "automotive-4a289.firebaseapp.com",
  projectId: "automotive-4a289",
  storageBucket: "automotive-4a289.appspot.com",
  messagingSenderId: "234976865613",
  appId: "1:234976865613:web:e9f9cb0f2f3aa6145a1b04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)