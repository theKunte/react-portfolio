import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {  getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
 
const firebaseConfig = {
  apiKey: "AIzaSyD0Q02l84tqmlN3QMNijXRnWKXCELK6SPo",
  authDomain: "react-portfolio-dashboar-d3461.firebaseapp.com",
  projectId: "react-portfolio-dashboar-d3461",
  storageBucket: "react-portfolio-dashboar-d3461.appspot.com",
  messagingSenderId: "897585602926",
  appId: "1:897585602926:web:0ac67ce0e44d49790b617f",
  measurementId: "G-170841PL0Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);

export const singInWithGoogle = () => signInWithPopup(auth, provider);
// const analytics = getAnalytics(app);
