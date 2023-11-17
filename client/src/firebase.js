// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-proj.firebaseapp.com",
  projectId: "mern-estate-proj",
  storageBucket: "mern-estate-proj.appspot.com",
  messagingSenderId: "951825921487",
  appId: "1:951825921487:web:6bb6aceb9f2925e7054eba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);