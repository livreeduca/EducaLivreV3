import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBTOD0YP9M_NXkVEPR5ukBOWvRj3SMAbFI",

  authDomain: "educalivre-e579a.firebaseapp.com",

  projectId: "educalivre-e579a",

  storageBucket: "educalivre-e579a.firebasestorage.app",

  messagingSenderId: "96682836000",

  appId: "1:96682836000:web:20ab32cf3266328bdd3c45"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);