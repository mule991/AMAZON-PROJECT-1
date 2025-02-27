
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"

import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"

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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.fireSTORE()
