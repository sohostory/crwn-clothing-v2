import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  doc, // retrieve document instance
  getDoc, //getting document data
  setDoc, // setting document data
} from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log(userDocRef);

  const userSnapshop = await getDoc(userDocRef);
  console.log(userSnapshop);
  console.log(userSnapshop.exists());

  if (!userSnapshop.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
