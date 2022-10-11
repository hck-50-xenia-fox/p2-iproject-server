// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { authDomain } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfyeQ6j_cvxQXZGsLZXcyY9Ed2lri6u_0",
  authDomain: "pokeapp-iproject.firebaseapp.com",
  databaseURL: "https://pokeapp-iproject-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pokeapp-iproject",
  storageBucket: "pokeapp-iproject.appspot.com",
  messagingSenderId: "200380258947",
  appId: "1:200380258947:web:72e6ba011ce0c79a8d99b6",
  measurementId: "G-GVJPE9Z77Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
