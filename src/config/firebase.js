// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXSYtLv-2E5UBlfBPZwo1IJF7MlIyg5d4",
  authDomain: "crud-react-app-f5b3e.firebaseapp.com",
  projectId: "crud-react-app-f5b3e",
  storageBucket: "crud-react-app-f5b3e.appspot.com",
  messagingSenderId: "937680038716",
  appId: "1:937680038716:web:9d9bf3892f02360af74c39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)