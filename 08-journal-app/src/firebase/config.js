// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_k1JFgOZa3UKWsPSI0AHyvRwNm9Ra3Pc",
  authDomain: "react-journal-a1d23.firebaseapp.com",
  projectId: "react-journal-a1d23",
  storageBucket: "react-journal-a1d23.appspot.com",
  messagingSenderId: "369688393323",
  appId: "1:369688393323:web:b53c633d47ac5cf583e32e",
};

// Initialize Firebase
 export const FirebaseApp = initializeApp(firebaseConfig);

 export const  FirebaseAuth= getAuth(FirebaseApp);

 export const FirebaseDB = getFirestore(FirebaseApp);


