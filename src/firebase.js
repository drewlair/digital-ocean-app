import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNHoNYxTA3yjg3VNfxvauZvc_ifpzRjB8",
  authDomain: "mwptutor-bfeba.firebaseapp.com",
  projectId: "mwptutor-bfeba",
  storageBucket: "mwptutor-bfeba.appspot.com",
  messagingSenderId: "1010783186113",
  appId: "1:1010783186113:web:60eda9394d9be57301b840",
  measurementId: "G-BXY1PKCZ1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();