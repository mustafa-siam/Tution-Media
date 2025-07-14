import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-pevRr6rBbioOx7-yijAtNZrY2s3c2r0",
  authDomain: "bd-tutor-417a4.firebaseapp.com",
  projectId: "bd-tutor-417a4",
  storageBucket: "bd-tutor-417a4.firebasestorage.app",
  messagingSenderId: "111360016255",
  appId: "1:111360016255:web:9c6aaabb71a77361f4244a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth