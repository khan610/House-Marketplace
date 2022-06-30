import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWcZWKclyltCMDI3sdpdr2DzaD4DM86qg",
  authDomain: "house-marketplace-app-cb596.firebaseapp.com",
  projectId: "house-marketplace-app-cb596",
  storageBucket: "house-marketplace-app-cb596.appspot.com",
  messagingSenderId: "217252010626",
  appId: "1:217252010626:web:6bfc55e1306b040854729b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
