// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3uZDP_VKO9pUBPgg8XndAQ-tLMhcGKo0",
  authDomain: "tracker-ff6c2.firebaseapp.com",
  projectId: "tracker-ff6c2",
  storageBucket: "tracker-ff6c2.appspot.com",
  messagingSenderId: "471486773234",
  appId: "1:471486773234:web:ef90d3195028a11c3f1d6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);