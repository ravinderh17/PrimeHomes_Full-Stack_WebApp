// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-40fb1.firebaseapp.com",
  projectId: "mern-estate-40fb1",
  storageBucket: "mern-estate-40fb1.appspot.com",
  messagingSenderId: "122590595880",
  appId: "1:122590595880:web:366e9e70db977568f39e1d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);