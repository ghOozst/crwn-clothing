// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCq7mMvlg0pUKaKpCOfG_O0BggkMjZgbq4',
  authDomain: 'crwn-clothing-db-a101f.firebaseapp.com',
  projectId: 'crwn-clothing-db-a101f',
  storageBucket: 'crwn-clothing-db-a101f.appspot.com',
  messagingSenderId: '668746306665',
  appId: '1:668746306665:web:bebf12f9ac4c4a9d5c3ef8',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);