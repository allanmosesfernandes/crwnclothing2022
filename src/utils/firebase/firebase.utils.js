// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider, 
    createUserWithEmailAndPassword
 } from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxPdefcXVHhPt08WuNSFJ-R1dEXJGt7yU",
  authDomain: "crwn-clothing-db-be38c.firebaseapp.com",
  projectId: "crwn-clothing-db-be38c",
  storageBucket: "crwn-clothing-db-be38c.appspot.com",
  messagingSenderId: "453127338116",
  appId: "1:453127338116:web:3d035748611ffa7d082ad1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
export const db = getFirestore();


export const createUserDocumentFromAuth = async(userAuth) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    /* First we get a snapshot which is essentially the Document of data
    if it does not exists we create it 
    */

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
        });
    }
    catch(error) {
        console.log('error creating the user', error.message)
        }
    }
    console.log(userSnapshot.exists());
}
// const createUser 

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
}