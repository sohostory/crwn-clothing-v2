import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXMlEqPNfLyzVYi6x8Winl6uAbULAvl9o",
  authDomain: "crwn-clothing-v2-db-28148.firebaseapp.com",
  projectId: "crwn-clothing-v2-db-28148",
  storageBucket: "crwn-clothing-v2-db-28148.appspot.com",
  messagingSenderId: "506869848392",
  appId: "1:506869848392:web:4235f05c16cffb3007fb7d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
