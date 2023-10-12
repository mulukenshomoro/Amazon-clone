// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRgXJDvk-NLhDUw04N08Cijg98I",
  authDomain: "class-project-8759d.firebaseapp.com",
  projectId: "class-project-8759d",
  storageBucket: "class-project-8759d.appspot.com",
  messagingSenderId: "199227845397",
  appId: "1:199227845397:web:07bf35bbe14bba21b9171c",
  measurementId: "G-5H6927D62H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
