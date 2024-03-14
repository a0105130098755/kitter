import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCL7WyAHvTqYldhg5CrmTwqhOlvdREivOo",
  authDomain: "kitter-reloaded.firebaseapp.com",
  projectId: "kitter-reloaded",
  storageBucket: "kitter-reloaded.appspot.com",
  messagingSenderId: "130332043282",
  appId: "1:130332043282:web:81dc01d758bbb403ea50cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);