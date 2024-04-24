import { initializeApp } from "firebase/app";
import { getFirestore , collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCs4-rp67npoUJJ8GLrK40VIkXkPgjNMxc",
  authDomain: "notes--react-448e0.firebaseapp.com",
  projectId: "notes--react-448e0",
  storageBucket: "notes--react-448e0.appspot.com",
  messagingSenderId: "1042873585068",
  appId: "1:1042873585068:web:1dbf2e38c98ccf3953fe09",
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db , "notes")