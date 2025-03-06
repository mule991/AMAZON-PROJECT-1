
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3iJGBCOXPsvx_JnVX6i5qUcpJBT9CS-E",
  authDomain: "clone-a17bc.firebaseapp.com",
  projectId: "clone-a17bc",
  storageBucket: "clone-a17bc.firebasestorage.app",
  messagingSenderId: "1035115582989",
  appId: "1:1035115582989:web:6ea868d75fab9febc0e744",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
// Import the functions you need from the SDKs you need


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

