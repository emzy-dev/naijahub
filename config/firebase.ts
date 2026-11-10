// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCIoEJW_mXkpcLPGxC_bDIHijEtSZ4Nxm4",
  authDomain: "naijahub-10b24.firebaseapp.com",
  projectId: "naijahub-10b24",
  storageBucket: "naijahub-10b24.firebasestorage.app",
  messagingSenderId: "549724443052",
  appId: "1:549724443052:web:065f36666fe1ea5a3e2a09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

