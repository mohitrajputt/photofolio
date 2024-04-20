// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8ACc59YitA9JJFI5_3CNQf7ZF6OBbCEQ",
  authDomain: "april-2024-4ea4c.firebaseapp.com",
  projectId: "april-2024-4ea4c",
  storageBucket: "april-2024-4ea4c.appspot.com",
  messagingSenderId: "417624087927",
  appId: "1:417624087927:web:b0a45363e87f2d25ee5572"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
