import { initializeApp } from "firebase/app";
import { getAuth,
     createUserWithEmailAndPassword,
   onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
 } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIBVVl1-qah5qPAns6ULaO8QmjfcnugiA",
  authDomain: "ecommerce-7f1e2.firebaseapp.com",
  databaseURL: "https://ecommerce-7f1e2-default-rtdb.firebaseio.com",
  projectId: "ecommerce-7f1e2",
  storageBucket: "ecommerce-7f1e2.firebasestorage.app",
  messagingSenderId: "1090647740235",
  appId: "1:1090647740235:web:525b9d48f10087cc7022ce",
  measurementId: "G-LZLVCX6VZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export {
            firebaseConfig,
             initializeApp,
             getAuth, 
    createUserWithEmailAndPassword,
   onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
  }